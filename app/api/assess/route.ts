import { NextResponse } from "next/server";

export const runtime = "nodejs";

const API_KEY = process.env.ANTHROPIC_API_KEY || "";
const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-4-8";

type Verdict = { verdict: string; level: "resident" | "early" | "observer"; reason: string };

async function callAnthropic(text: string): Promise<Verdict> {
  const system =
    "Ты — ассистент отбора в закрытую ИИ-лабораторию «Резиденты» Глеба Кудрявцева. " +
    "Пользователь пишет, что он строит с ИИ. Классифицируй его в один из трёх уровней:\n" +
    '- "resident" (резидент): уже практик-билдер, доводит проекты с ИИ до результата, прошёл стадию новичка.\n' +
    '- "early" (пока рано): только начинает, учится, ещё не шипит с ИИ. Дай дружелюбный совет с чего начать.\n' +
    '- "observer" (наблюдатель): руководитель/инвестор/нетехнарь, хочет доступ к фронтиру, но не строит руками.\n' +
    "Отвечай СТРОГО валидным JSON без markdown, по схеме: " +
    '{"verdict": "<резидент|пока рано|наблюдатель>", "level": "<resident|early|observer>", "reason": "<1-2 предложения по-русски, тёплый прямой тон, по делу>"}';

  const r = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 400,
      system,
      messages: [{ role: "user", content: text }],
    }),
  });

  if (!r.ok) throw new Error("anthropic " + r.status + " " + (await r.text()).slice(0, 200));
  const data = await r.json();
  const raw = (data.content && data.content[0] && data.content[0].text) || "{}";
  const parsed = JSON.parse(raw.replace(/```json|```/g, "").trim());

  const levels: Record<string, Verdict["level"]> = { resident: "resident", early: "early", observer: "observer" };
  return {
    verdict: String(parsed.verdict || "пока рано"),
    level: levels[parsed.level] || "early",
    reason: String(parsed.reason || ""),
  };
}

export async function POST(req: Request) {
  let body: { text?: string } | null = null;
  try {
    body = await req.json();
  } catch {
    body = null;
  }
  const text = body && typeof body.text === "string" ? body.text.trim() : "";

  if (!text) return NextResponse.json({ error: "empty text" }, { status: 400 });

  // Без ключа — честно говорим клиенту использовать фолбэк.
  if (!API_KEY) {
    return NextResponse.json({ fallback: true, reason: "no ANTHROPIC_API_KEY in env" });
  }

  try {
    const verdict = await callAnthropic(text);
    return NextResponse.json(verdict);
  } catch (e) {
    console.error("[assess] LLM error:", (e as Error).message);
    // LLM упал — не падаем, просим клиента сделать фолбэк.
    return NextResponse.json({ fallback: true, reason: "llm_error" });
  }
}

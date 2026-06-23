import { NextResponse } from "next/server";

export const runtime = "nodejs";

// OpenRouter (OpenAI-совместимый API)
const API_KEY = process.env.OPENROUTER_API_KEY || "";
const MODEL = process.env.OPENROUTER_MODEL || "anthropic/claude-3.5-haiku";

type Verdict = { verdict: string; level: "resident" | "early" | "observer"; reason: string };

async function callOpenRouter(text: string): Promise<Verdict> {
  const system =
    "Ты — ассистент отбора в закрытую ИИ-лабораторию «Резиденты» Глеба Кудрявцева. " +
    "Пользователь пишет, что он строит с ИИ. Классифицируй его в один из трёх уровней:\n" +
    '- "resident" (резидент): уже практик-билдер, доводит проекты с ИИ до результата, прошёл стадию новичка.\n' +
    '- "early" (пока рано): только начинает, учится, ещё не шипит с ИИ. Дай дружелюбный совет с чего начать.\n' +
    '- "observer" (наблюдатель): руководитель/инвестор/нетехнарь, хочет доступ к фронтиру, но не строит руками.\n' +
    "Отвечай СТРОГО валидным JSON без markdown, по схеме: " +
    '{"verdict": "<резидент|пока рано|наблюдатель>", "level": "<resident|early|observer>", "reason": "<1-2 предложения по-русски, тёплый прямой тон, по делу>"}';

  const r = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: "Bearer " + API_KEY,
      // OpenRouter рекомендует указывать источник (необязательно)
      "HTTP-Referer": "https://github.com/uzarsalan/glebkudr-rezidenty",
      "X-Title": "Rezidenty — AI self-assessment",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 400,
      messages: [
        { role: "system", content: system },
        { role: "user", content: text },
      ],
    }),
  });

  if (!r.ok) throw new Error("openrouter " + r.status + " " + (await r.text()).slice(0, 200));
  const data = await r.json();
  const raw = data?.choices?.[0]?.message?.content || "{}";
  const parsed = JSON.parse(String(raw).replace(/```json|```/g, "").trim());

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

  if (!API_KEY) {
    console.error("[assess] OPENROUTER_API_KEY not set");
    return NextResponse.json({ error: "service_unavailable" }, { status: 503 });
  }

  try {
    const verdict = await callOpenRouter(text);
    return NextResponse.json(verdict);
  } catch (e) {
    console.error("[assess] LLM error:", (e as Error).message);
    return NextResponse.json({ error: "llm_error" }, { status: 502 });
  }
}

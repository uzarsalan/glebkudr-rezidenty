"use client";

import { useState } from "react";

type Level = "resident" | "early" | "observer";
type Verdict = { verdict: string; level: Level; reason: string; source: string };

/* Клиентская эвристика — прозрачный фолбэк без LLM (порт app.js heuristicAssess). */
function heuristicAssess(text: string): Verdict {
  const t = text.toLowerCase();
  const builderSignals = [
    "запустил", "запустила", "релиз", "продакшн", "production", "клиент", "выручк",
    "mrr", "арр", "arr", "saas", "продукт", "агент", "agent", "пайплайн", "pipeline",
    "rag", "fine-tun", "дообуч", "деплой", "deploy", "api", "автоматизир", "бот",
    "модель", "llm", "веду проект", "пет-проект", "стартап", "основал", "кодю", "кодинг",
    "вайбкод", "shipped", "шипаю", "монетиз", "воркфлоу", "workflow", "интегрир",
  ];
  const observerSignals = [
    "инвест", "руковожу", "руководитель", "директор", "cto", "ceo", "фаундер компании",
    "команда разработ", "не пишу код", "не программир", "наблюд", "слежу за", "руку на пульсе",
    "нетехн", "менеджер", "продакт-менеджер",
  ];
  const earlySignals = [
    "учусь", "начинаю", "новичок", "хочу научиться", "только начал", "изучаю", "с нуля",
    "пробую", "не знаю с чего", "курс прошёл", "планирую", "хочу попробовать", "мечтаю",
  ];

  const count = (arr: string[]) => arr.reduce((n, w) => n + (t.includes(w) ? 1 : 0), 0);
  const b = count(builderSignals), o = count(observerSignals), e = count(earlySignals);
  const len = text.length;

  if (o >= 1 && b === 0) {
    return { verdict: "наблюдатель", level: "observer",
      reason: "Похоже, ты ближе к фронтиру по интересу и роли, чем по практике руками. Тариф «Наблюдатель» даёт встречи и радар без обязательств — держать руку на пульсе.",
      source: "эвристика" };
  }
  if (e >= 1 && b <= 1) {
    return { verdict: "пока рано", level: "early",
      reason: "Звучит как старт пути — это нормально. Лаборатория для тех, кто уже шипит с ИИ. С чего начать: доведи один пет-проект с ИИ до рабочего результата и возвращайся. Ступенька — курс Глеба «Вайбкодинг на максималках».",
      source: "эвристика" };
  }
  if (b >= 2 || (b >= 1 && len >= 80)) {
    return { verdict: "резидент", level: "resident",
      reason: "По описанию ты уже строишь руками с ИИ и прошёл стадию новичка — это профиль резидента. Дальше решает интервью: уровень и ценности.",
      source: "эвристика" };
  }
  return { verdict: "пока рано", level: "early",
    reason: "По короткому описанию сложно увидеть, что ты доводишь до результата с ИИ. Опиши конкретный проект и свою роль в нём — или сразу подай заявку, на интервью разберёмся.",
    source: "эвристика" };
}

export default function Assess() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Verdict | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = value.trim();

    if (text.length < 8) {
      setResult({ verdict: "пока рано", level: "early",
        reason: "Напиши чуть подробнее — пары слов мало, чтобы оценить уровень.",
        source: "эвристика" });
      return;
    }

    setLoading(true);
    setResult(null);

    let res: Verdict | null = null;
    try {
      const r = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      if (r.ok) {
        const data = await r.json();
        if (data && data.verdict && !data.fallback) res = { ...data, source: "ИИ-ассистент (LLM)" };
      }
    } catch {
      /* эндпоинта нет — фолбэк */
    }

    if (!res) res = heuristicAssess(text);
    setLoading(false);
    setResult(res);
  }

  const levelClass = result
    ? { resident: "r-resident", early: "r-early", observer: "r-observer" }[result.level]
    : "";
  const note =
    result && result.source.indexOf("LLM") < 0
      ? "// вердикт: эвристика на стороне браузера (ключ LLM не задан)"
      : result
        ? "// вердикт: " + result.source
        : "";

  return (
    <section id="assess" className="section">
      <div className="wrap narrow">
        <span className="kicker">
          // ии-самооценка <span className="ai-badge mono">⚡ работает на ИИ</span>
        </span>
        <h2>Проверь, твой ли это уровень</h2>
        <p className="lead">
          Напиши, что ты строишь с ИИ. ИИ-ассистент лаборатории за пять секунд скажет, куда ты ближе: <b>резидент</b>, <b>наблюдатель</b> или <b>пока рано</b> (и с чего начать).
        </p>

        <div className="card-term assess-panel" data-assess-scope>
          <div className="term-bar">
            <span className="dot dot-b"></span>
            <span className="term-title mono">console · ии-самооценка</span>
            <span className="live-dot"></span>
          </div>
          <div className="term-body mono">
            <p className="console-q">
              <span className="c-com">// опиши проект и свою роль в нём</span>
            </p>
            <form className="assess-form" onSubmit={onSubmit}>
              <div className="console-line">
                <span className="prompt">&gt;</span>
                <textarea
                  className="assess-input"
                  rows={2}
                  maxLength={600}
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="запустил SaaS на ИИ-агентах, веду пет-проект с RAG, автоматизирую отдел через Claude…"
                />
              </div>
              <button type="submit" className="btn btn-a2 assess-btn" disabled={loading}>
                Проверить
              </button>
            </form>

            {loading ? (
              <div className="assess-result">
                <div className="verdict">
                  <span className="loading-dots">думаю</span>
                </div>
              </div>
            ) : result ? (
              <div className={"assess-result " + levelClass}>
                <div className="verdict">
                  <span className="verdict-dot"></span>
                  {result.verdict}
                </div>
                <p className="reason">{result.reason}</p>
                {result.level === "resident" ? (
                  <a className="btn btn-a2 btn-sm assess-cta" href="#apply">Пройти интервью</a>
                ) : result.level === "observer" ? (
                  <a className="btn btn-a2 btn-sm assess-cta" href="#apply">Узнать про наблюдателя</a>
                ) : null}
                <span className="src-note">{note}</span>
              </div>
            ) : (
              <div className="assess-result" hidden></div>
            )}
          </div>
        </div>
        <p className="hint mono">Это ещё не интервью, просто быстрая проверка планки.</p>
      </div>
    </section>
  );
}

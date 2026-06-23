"use client";

import { useState } from "react";

type Level = "resident" | "early" | "observer";
type Verdict = { verdict: string; level: Level; reason: string };

export default function Assess() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<Verdict | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = value.trim();
    setError("");
    setResult(null);

    if (text.length < 8) {
      setError("Пары слов мало, чтобы оценить уровень — стоит описать подробнее.");
      return;
    }

    setLoading(true);
    try {
      const r = await fetch("/api/assess", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });
      const data = await r.json().catch(() => null);
      if (r.ok && data && data.verdict) {
        setResult({ verdict: data.verdict, level: data.level, reason: data.reason });
      } else {
        setError("ИИ-ассистент сейчас недоступен. Можно попробовать ещё раз через минуту — или сразу подать заявку, на интервью разберёмся.");
      }
    } catch {
      setError("Не получилось связаться с ассистентом. Можно попробовать ещё раз — или подать заявку напрямую.");
    } finally {
      setLoading(false);
    }
  }

  const levelClass = result
    ? { resident: "r-resident", early: "r-early", observer: "r-observer" }[result.level]
    : "";

  return (
    <section id="assess" className="section">
      <div className="wrap narrow">
        <span className="kicker">
          // ии-самооценка <span className="ai-badge mono">⚡ работает на ИИ</span>
        </span>
        <h2>Проверка уровня</h2>
        <p className="lead">
          Короткое описание проекта на ИИ — и ассистент лаборатории за пять секунд подскажет, куда ближе: <b>резидент</b>, <b>наблюдатель</b> или <b>пока рано</b> (и с чего начать).
        </p>

        <div className="card-term assess-panel" data-assess-scope>
          <div className="term-bar">
            <span className="dot dot-b"></span>
            <span className="term-title mono">console · ии-самооценка</span>
            <span className="live-dot"></span>
          </div>
          <div className="term-body mono">
            <p className="console-q">
              <span className="c-com">// проект и роль в нём</span>
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
                <span className="src-note">// вердикт: ИИ-ассистент (LLM)</span>
              </div>
            ) : error ? (
              <div className="assess-result">
                <p className="reason">{error}</p>
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

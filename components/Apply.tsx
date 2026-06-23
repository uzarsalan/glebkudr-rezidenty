"use client";

import { useState } from "react";

type Status = { kind: "ok" | "err"; msg: string } | null;

export default function Apply() {
  const [status, setStatus] = useState<Status>(null);
  const [busy, setBusy] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value.trim(),
      contact: (form.elements.namedItem("contact") as HTMLInputElement).value.trim(),
      build: (form.elements.namedItem("build") as HTMLTextAreaElement).value.trim(),
      link: (form.elements.namedItem("link") as HTMLInputElement).value.trim(),
    };

    setBusy(true);
    setStatus(null);

    try {
      const res = await fetch("/api/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus({ kind: "ok", msg: "Заявка отправлена. Ответим за 2 дня." });
        form.reset();
        setBusy(false);
        return;
      }
    } catch {
      /* нет бэкенда — mailto-фолбэк */
    }

    const subject = encodeURIComponent("Заявка в «Резиденты» — " + payload.name);
    const body = encodeURIComponent(
      `Имя: ${payload.name}\nКонтакт: ${payload.contact}\nЧто строю с ИИ: ${payload.build}\nСсылка: ${payload.link || "—"}`
    );
    window.location.href = `mailto:hello@glebkudr.com?subject=${subject}&body=${body}`;
    setStatus({ kind: "ok", msg: "Открыли почтовый клиент с готовым письмом. Если не открылся — напиши на hello@glebkudr.com." });
    setBusy(false);
  }

  return (
    <section id="apply" className="section section-paper-2">
      <div className="wrap narrow">
        <span className="kicker">// заявка</span>
        <h2>Перерос потолок в одиночку?</h2>
        <p className="lead">Первая волна собирается прямо сейчас. Попасть можно через интервью.</p>

        <form id="apply-form" className="apply-form card-paper" onSubmit={onSubmit}>
          <div className="field">
            <label htmlFor="f-name">Имя</label>
            <input id="f-name" name="name" type="text" required placeholder="Как тебя зовут" />
          </div>
          <div className="field">
            <label htmlFor="f-contact">Контакт (tg / email)</label>
            <input id="f-contact" name="contact" type="text" required placeholder="@username или mail@example.com" />
          </div>
          <div className="field">
            <label htmlFor="f-build">Что строишь с ИИ (1–2 предложения)</label>
            <textarea id="f-build" name="build" rows={3} required placeholder="Коротко о проекте и о том, как используешь ИИ"></textarea>
          </div>
          <div className="field">
            <label htmlFor="f-link">Ссылка на проект <span className="opt mono">опц.</span></label>
            <input id="f-link" name="link" type="url" placeholder="https://" />
          </div>
          <button type="submit" className="btn btn-a1 btn-lg btn-block btn-arrow" id="apply-btn" disabled={busy}>
            Подать заявку на интервью
          </button>
          {status ? (
            <p id="apply-status" className={"apply-status " + status.kind}>{status.msg}</p>
          ) : (
            <p id="apply-status" className="apply-status" hidden></p>
          )}
        </form>
        <p className="hint">Ответим за два дня. Берём не всех, и это честно.</p>
      </div>
    </section>
  );
}

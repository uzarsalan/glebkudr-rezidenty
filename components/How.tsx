export default function How() {
  return (
    <section id="how" className="section section-paper-2">
      <div className="wrap">
        <span className="kicker">// как попасть</span>
        <h2>Как попасть</h2>
        <ol className="stepper stepper--3">
          <li className="step s-blue">
            <span className="step-num mono">01</span>
            <h3>Заявка</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 2h8l4 4v16H6z" />
              <path d="M14 2v4h4" />
              <line x1="8.5" y1="11" x2="15.5" y2="11" />
              <line x1="8.5" y1="14.5" x2="15.5" y2="14.5" />
              <line x1="8.5" y1="18" x2="13" y2="18" />
            </svg>
            <p>Коротко расскажи, что строишь с ИИ.</p>
          </li>
          <li className="step s-navy">
            <span className="step-num mono">02</span>
            <h3>Интервью</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="12" height="9" rx="2" />
              <path d="M7 14v3l3-3" />
              <rect x="12" y="9" width="9" height="8" rx="2" />
              <path d="M17 17v2l-2-2" />
            </svg>
            <p>30 минут про твой уровень и ценности лаборатории.</p>
          </li>
          <li className="step s-green">
            <span className="step-num mono">03</span>
            <h3>Первая волна</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="7" cy="8" r="2.3" />
              <circle cx="17" cy="8" r="2.3" />
              <circle cx="12" cy="6.5" r="2.8" />
              <path d="M3 19c0-2.4 1.9-3.8 4.4-3.8" />
              <path d="M21 19c0-2.4-1.9-3.8-4.4-3.8" />
              <path d="M7.4 20c0-3 2-4.8 4.6-4.8s4.6 1.8 4.6 4.8" />
            </svg>
            <p>При совпадении входишь в стартовую когорту.</p>
          </li>
        </ol>
        <p className="arrow-out">На отборе важно одно: что ты делаешь руками.</p>
      </div>
    </section>
  );
}

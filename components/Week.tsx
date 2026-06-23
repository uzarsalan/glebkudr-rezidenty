export default function Week() {
  return (
    <section id="week" className="section">
      <div className="wrap">
        <span className="kicker">// ритм недели</span>
        <h2>Как выглядит неделя</h2>
        <ol className="stepper">
          <li className="step s-blue">
            <span className="step-num mono">пн</span>
            <h3>Радар недели</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="12" cy="12" r="1.2" />
              <line x1="12" y1="12" x2="19" y2="6.5" />
            </svg>
            <p>Что в ИИ действительно важно. Десять минут вместо пятисот твитов.</p>
          </li>
          <li className="step s-navy">
            <span className="step-num mono">ср</span>
            <h3>Рабочая встреча</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3.5" y="5" width="17" height="15" rx="2" />
              <line x1="3.5" y1="9" x2="20.5" y2="9" />
              <line x1="8" y1="3" x2="8" y2="6" />
              <line x1="16" y1="3" x2="16" y2="6" />
              <path d="M9 14.5l2 2 4-4" />
            </svg>
            <p>Разбор темы, мастер-класс резидента или защита диплома.</p>
          </li>
          <li className="step s-green">
            <span className="step-num mono">пт</span>
            <h3>Приглашённая звезда</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 17l-5.2 2.6 1-5.8L2.5 9.7l5.9-.9z" />
            </svg>
            <p>Практик с фронтира, без записи.</p>
          </li>
          <li className="step s-mint">
            <span className="step-num mono">···</span>
            <h3>Всю неделю</h3>
            <svg className="step-ico" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4 4v-4H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z" />
              <line x1="7" y1="9.5" x2="17" y2="9.5" />
              <line x1="7" y1="12.5" x2="14" y2="12.5" />
            </svg>
            <p>Канал, куда приносят находки, ревьюят проекты и зовут на коллабы.</p>
          </li>
        </ol>
        <p className="hint">Минимум: одна встреча в неделю и движение по диплому. Выступление — раз в полгода.</p>
      </div>
    </section>
  );
}

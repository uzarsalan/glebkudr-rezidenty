export default function Diploma() {
  return (
    <section id="diploma" className="section section-paper-2">
      <div className="wrap narrow">
        <span className="kicker">// диплом</span>
        <h2>Каждый ведёт дипломный проект</h2>
        <div className="diploma-grid">
          <div className="diploma-text">
            <p className="lead">
              Резидент всё время что-то строит. Диплом становится главной работой: продукт, агент или система, которую доводят до ума и защищают перед своими.
            </p>
            <p className="muted-label mono">как может выглядеть диплом →</p>
            <div className="diploma-examples">
              <span className="pill">ИИ-агент для бухгалтерии малого бизнеса</span>
              <span className="pill">автопостинг со своей моделью тона</span>
              <span className="pill">копайлот для команды юристов</span>
            </div>
          </div>
          {/* Документ-лист с чертежом и скрепкой (скевоморфизм) */}
          <article className="card-paper bento-doc">
            <span className="paperclip" aria-hidden="true"></span>
            <span className="doc-kicker mono">документ · дипломный проект</span>
            <svg className="blueprint" viewBox="0 0 200 120" aria-hidden="true">
              <rect x="6" y="6" width="188" height="108" rx="4" />
              <line x1="6" y1="40" x2="194" y2="40" />
              <line x1="70" y1="6" x2="70" y2="114" />
              <line x1="130" y1="40" x2="130" y2="114" />
              <rect x="86" y="58" width="30" height="30" rx="2" />
              <circle cx="40" cy="78" r="14" />
              <line x1="150" y1="58" x2="180" y2="58" />
              <line x1="150" y1="72" x2="180" y2="72" />
              <line x1="150" y1="86" x2="172" y2="86" />
            </svg>
            <p className="doc-cap mono">// довёл → защитил → в портфолио</p>
          </article>
        </div>
        <p className="arrow-out">Защита проходит как живой разбор от практиков. Обратную связь такого уровня больше негде взять.</p>
      </div>
    </section>
  );
}

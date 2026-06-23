import RadarTerminal from "./RadarTerminal";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="wrap hero-grid">
        {/* Левая колонка: оффер */}
        <div className="hero-lead">
          <span className="kicker">// программа «Резиденты»</span>
          <h1 className="hero-h1">
            В&nbsp;одиночку с&nbsp;ИИ легко отстать от&nbsp;фронтира. В&nbsp;лаборатории&nbsp;&mdash; нет.
          </h1>
          <p className="hero-sub">
            Закрытая лаборатория практиков, которые строят с ИИ: дипломный проект среди равных, коллективный радар фронтира, вход по интервью. Ведёт Глеб Кудрявцев, экс-CPO Skyeng.
          </p>
          <div className="hero-cta">
            <a className="btn btn-a1 btn-lg btn-arrow" href="#apply">
              Пройти интервью
            </a>
            <a className="btn btn-a3 btn-lg" href="#what">
              Как это работает
            </a>
          </div>
          <p className="cta-note mono">отбор по интервью · мест в первой волне ограничено</p>
        </div>

        {/* Правая колонка: один крупный живой терминал — радар недели */}
        <article className="card-term hero-radar">
          <div className="term-bar">
            <span className="dot dot-g"></span>
            <span className="term-title mono">agent_trace · радар недели</span>
            <span className="live-dot" title="живой виджет"></span>
          </div>
          <RadarTerminal />
        </article>
      </div>
    </section>
  );
}

const TAKEN = [
  "indie-фаундер · SaaS на ИИ-агентах",
  "senior ML · RAG-пайплайны в проде",
  "AI-консультант · автоматизация отделов",
  "tech-лид · копайлоты для команды",
  "solo-билдер · ИИ-агенты для поддержки",
];

function Silhouette() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="slot-silhouette">
      <circle cx="12" cy="8.5" r="3.6" />
      <path d="M5 20c0-3.6 3.1-5.6 7-5.6s7 2 7 5.6" />
    </svg>
  );
}

export default function Wave() {
  return (
    <section id="wave" className="section">
      <div className="wrap narrow">
        <span className="kicker">// первая волна</span>
        <h2>Первая волна уже набирается</h2>
        <p className="lead">
          Лаборатория запускается сразу когортой, чтобы с первого дня вокруг были сильные участники. Состав курирую лично — несколько резидентов уже внутри.
        </p>

        <div className="wave-mock">
          <div className="wave-slots">
            {TAKEN.map((role, i) => (
              <div className="slot slot--taken" key={i}>
                <div className="slot-ava"><Silhouette /></div>
                <div className="slot-meta mono">
                  <b>резидент</b>
                  <span className="slot-role">{role}</span>
                </div>
              </div>
            ))}
            <div className="slot slot--open">
              <div className="slot-ava slot-ava--open">+</div>
              <div className="slot-meta mono">
                <b>осталось несколько мест</b>
              </div>
            </div>
          </div>
        </div>

        <p className="arrow-out">Кто заходит сейчас, оказывается в самом ядре, которое я собираю прямо теперь.</p>
      </div>
    </section>
  );
}

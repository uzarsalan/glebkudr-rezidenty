export default function Wave() {
  return (
    <section id="wave" className="section">
      <div className="wrap narrow">
        <span className="kicker">// первая волна</span>
        <h2>Первая волна формируется сейчас</h2>
        <p className="lead">
          Лаборатория запускается сразу когортой, чтобы с первого дня вокруг были сильные участники. Состав курирую лично.
        </p>

        <div className="wave-mock">
          <div className="wave-slots">
            <div className="slot"><div className="slot-ava">?</div><div className="slot-meta mono">резидент · слот открыт</div></div>
            <div className="slot"><div className="slot-ava">?</div><div className="slot-meta mono">резидент · слот открыт</div></div>
            <div className="slot"><div className="slot-ava">?</div><div className="slot-meta mono">резидент · слот открыт</div></div>
            <div className="slot"><div className="slot-ava">?</div><div className="slot-meta mono">резидент · слот открыт</div></div>
          </div>
          <p className="mock-note mono">// макет: слоты и истории резидентов первой волны заполним реальными перед запуском. Фейковых лиц не рисуем</p>
        </div>

        <p className="arrow-out">Зайдёшь сейчас и окажешься в самом ядре, которое мы собираем вместе.</p>
      </div>
    </section>
  );
}

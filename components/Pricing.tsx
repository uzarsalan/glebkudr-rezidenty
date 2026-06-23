export default function Pricing() {
  return (
    <section id="pricing" className="section section-paper-2">
      <div className="wrap">
        <span className="kicker">// тарифы</span>
        <h2>Два способа быть внутри</h2>
        <div className="pricing-grid">
          <div className="price-card price-card--featured">
            <span className="price-tag mono">резидент</span>
            <div className="price">10 000 ₽<span className="price-per">/мес + вклад</span></div>
            <ul className="price-list">
              <li>встречи, радар, защита диплома</li>
              <li>ведение дипломного проекта</li>
              <li>вклад делом: спикерство ≥1 раз в 6 мес, разборы или билдинг под брендом</li>
            </ul>
            <a className="btn btn-a1 btn-block" href="#apply">Подать на резидента</a>
          </div>
          <div className="price-card price-card--dark">
            <span className="price-tag mono">наблюдатель</span>
            <div className="price">25 000 ₽<span className="price-per">/мес</span></div>
            <ul className="price-list">
              <li>встречи и радар</li>
              <li>без обязательств</li>
            </ul>
            <a className="btn btn-a2 btn-block" href="#apply">Подать на наблюдателя</a>
          </div>
        </div>
        <p className="pricing-rule">
          <b>Правило:</b> Резидент двигает лабораторию вперёд и поэтому платит меньше. Наблюдатель только пользуется средой и доплачивает за это. Так отдающих в лабе всегда больше, чем берущих.
        </p>
        <p className="hint mono">мест в первой волне ограничено · без контракта, выход помесячно</p>
      </div>
    </section>
  );
}

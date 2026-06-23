export default function Gleb() {
  return (
    <section id="gleb" className="section">
      <div className="wrap">
        <span className="kicker">// кто ведёт</span>
        <div className="author-card">
          <div className="author-head">
            {/* обычный img: класс .author-ava стилизует элемент напрямую (пиксельная идентичность со статикой) */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="author-ava" src="/gleb-photo.jpg" alt="Глеб Кудрявцев" width={80} height={80} loading="lazy" />
            <div className="author-meta">
              <h2 className="author-name">Глеб Кудрявцев</h2>
              <p className="author-role">экс-CPO Skyeng · основатель «Карьерного Цеха» и Microboard · автор «Вайбкодинга на максималках»</p>
              <span className="author-badge mono">// 5 проектов соло на ИИ-агентах</span>
            </div>
          </div>
          <blockquote className="author-quote">
            За год я в одиночку запустил 5 проектов и упёрся в стену, о которой обычно молчат: в одиночку рост быстро упирается в потолок. Курсы кончаются — и снова один на один с собой. Поэтому я собираю закрытый круг, где практики ведут свои проекты и вместе держат фронтир.
          </blockquote>
          <p className="author-tail">Это мой внутренний круг. Я собираю сюда практиков и работаю с ними на равных. Занятий для новичков тут не будет.</p>
        </div>
      </div>
    </section>
  );
}

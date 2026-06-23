export default function Header() {
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <a className="logo" href="#hero">
          <span className="logo-mark">GK</span>
          <span className="logo-text">ИИ-лаборатория Глеба Кудрявцева</span>
        </a>
        <nav className="nav">
          <a href="#what">Что это</a>
          <a href="#week">Неделя</a>
          <a href="#radar">Радар</a>
          <a href="#pricing">Тарифы</a>
          <a className="btn btn-sm btn-a1" href="#apply">
            Пройти интервью
          </a>
        </nav>
      </div>
    </header>
  );
}

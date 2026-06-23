export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-cta-row">
        <span className="footer-cta-label">Нужен билдер под задачу?</span>
        <a className="btn btn-a2 btn-sm btn-arrow" href="#apply">Оставить запрос</a>
      </div>
      <div className="wrap footer-inner">
        <div>
          <span className="logo-mark">GK</span>
          <p className="footer-desc">«Резиденты», лаборатория для практиков, которые строят с ИИ.</p>
        </div>
        <div className="footer-meta mono">
          <span>© Глеб Кудрявцев · 2026</span>
          <span>раздел сайта glebkudr.com · демо-сборка</span>
        </div>
      </div>
    </footer>
  );
}

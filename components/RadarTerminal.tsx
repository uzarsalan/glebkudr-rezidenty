import { radarData } from "./radar-data";

/* Компактный «AGENT TRACE»: каждая новость = строка лога с псевдо-таймстампом.
   Тот же финальный DOM, что строил app.js renderRadarTerminal — но пререндер (SSG). */
export default function RadarTerminal() {
  const { items, generated_at } = radarData;
  return (
    <div className="term-body mono">
      <div className="trace-line">
        <span className="c-com">$ agent scan --sources 200+ --keep top5</span>
      </div>
      {items.map((item, i) => (
        <div className="trace-line" key={i}>
          <span className="trace-time">
            {String(9 + i).padStart(2, "0")}:0{i}
          </span>
          <span className="trace-tag">[{item.tag}]</span>
          <span className="trace-text">
            <a href={item.source_url} target="_blank" rel="noopener">
              {item.title}
            </a>
          </span>
        </div>
      ))}
      <div className="trace-line">
        <span className="c-str">✓ готово · 5 сигналов · {generated_at}</span>
      </div>
    </div>
  );
}

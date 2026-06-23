import { radarData } from "./radar-data";

/* Полный радар-виджет (карточки). Тот же DOM, что строил app.js renderRadarCards. */
export default function RadarCards() {
  return (
    <div className="radar-widget">
      {radarData.items.map((item, i) => (
        <article className="radar-item" key={i}>
          <div className="radar-num">{String(i + 1).padStart(2, "0")}</div>
          <div className="radar-body">
            <span className="radar-tag">{item.tag}</span>
            <div className="radar-title">{item.title}</div>
            <p className="radar-summary">{item.summary}</p>
            {item.why ? <p className="radar-why">{item.why}</p> : null}
            <div className="radar-src">
              источник:{" "}
              <a href={item.source_url} target="_blank" rel="noopener">
                {item.source_name}
              </a>{" "}
              · {item.date || ""}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

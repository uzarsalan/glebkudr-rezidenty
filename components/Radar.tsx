import RadarCards from "./RadarCards";
import { radarData } from "./radar-data";

export default function Radar() {
  const foot = `// ${radarData.generated_by} · ${radarData.generated_at} · метод: ${radarData.method}`;
  return (
    <section id="radar" className="section section-paper-2">
      <div className="wrap">
        <span className="kicker">
          // радар недели <span className="ai-badge mono">⚡ собрано ИИ-агентом</span>
        </span>
        <h2>Радар недели — прямо сейчас</h2>
        <p className="lead">
          В потоке ИИ легко пропустить тот самый сдвиг, после которого привычный подход устаревает. Этот список ИИ-агент собрал сегодня из 200+ источников и оставил пять вещей, которые действительно важны. В лаборатории такой радар приходит каждый понедельник — чтобы важное не проходило мимо.
        </p>

        <RadarCards />

        <p className="radar-foot mono" id="radar-foot">{foot}</p>
        <p className="hint">Внутри его дополняют находки резидентов: то, что ИИ ещё не успел проиндексировать.</p>
      </div>
    </section>
  );
}

import Link from "next/link";
import { knowledgeLayers } from "../content/site";

export function KnowledgeMap() {
  return (
    <div className="layer-map" aria-label="业务到应用的四层 AI 知识地图">
      {knowledgeLayers.map((layer, index) => (
        <div className="layer-map-cell" key={layer.key}>
          <Link className={`layer-card ${layer.accent}`} href={layer.href}>
            <div className="layer-card-top"><span>{layer.code}</span><b>{layer.english}</b></div>
            <h3>{layer.title}</h3>
            <strong>{layer.question}</strong>
            <p>{layer.description}</p>
            <div className="layer-keywords">{layer.keywords.map((word) => <span key={word}>{word}</span>)}</div>
            <i>进入 →</i>
          </Link>
          {index < knowledgeLayers.length - 1 && <div className="layer-connector" aria-hidden="true"><span>→</span></div>}
        </div>
      ))}
    </div>
  );
}

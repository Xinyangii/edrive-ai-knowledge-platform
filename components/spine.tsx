"use client";

import Link from "next/link";
import { useState } from "react";
import { spineProjects } from "../content/site";

export function Spine() {
  const [active, setActive] = useState("calibration");
  const project = spineProjects.find((item) => item.id === active) ?? spineProjects[0];

  return (
    <div className="spine">
      <div className="spine-tabs" role="tablist" aria-label="选择业务项目">
        {spineProjects.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={active === item.id}
            className={`spine-tab ${item.accent} ${active === item.id ? "active" : ""}`}
            onMouseEnter={() => setActive(item.id)}
            onFocus={() => setActive(item.id)}
            onClick={() => setActive(item.id)}
          >
            <b>{item.name}</b>
            <span>{item.english}</span>
          </button>
        ))}
      </div>

      <div className="spine-panel" key={project.id}>
        <div className="spine-panel-head">
          <p>{project.question}</p>
          <Link href={project.href} className="spine-more">进入 {project.name} 专题 →</Link>
        </div>
        <div className="spine-flow">
          {project.layers.map((layer, layerIndex) => (
            <div className="spine-stage" key={layer.key}>
              <div className={`spine-stage-head ${project.accent}`}>
                <span>{String(layerIndex + 1).padStart(2, "0")}</span>
                <b>{layer.title}</b>
              </div>
              <div className="spine-nodes">
                {layer.nodes.map((node) =>
                  node.href ? (
                    <Link className="spine-node" href={node.href} key={node.label}>
                      <b>{node.label}</b>
                      {node.note && <small>{node.note}</small>}
                    </Link>
                  ) : (
                    <div className="spine-node static" key={node.label}>
                      <b>{node.label}</b>
                      {node.note && <small>{node.note}</small>}
                    </div>
                  ),
                )}
              </div>
              {layerIndex < project.layers.length - 1 && <div className="spine-arrow" aria-hidden="true">→</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

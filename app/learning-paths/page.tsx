import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { learningPaths } from "../../content/learning-paths";

export default function LearningPathsPage() {
  return (
    <main>
      <PageHero eyebrow="LEARNING PATHS" title="学习路径" description="按岗位和目标从知识树中抽取一条路线，每个知识点节点都挂载可直接学习的资源" meta={["零基础 4 周", "车辆诊断", "AI 标定", "声学故障", "RAG / Agent"]} />
      <section className="section-pad">
        <SectionHeading index="01" kicker="PATHS" title={<>按目标走，每个节点都有资源</>} description="选择一条路线，按顺序点击节点学习，每个节点都会列出对应的外部课程、官方文档或内部案例" />
        <div className="path-page-list">
          {learningPaths.map((path, index) => (
            <div id={path.slug} className="path-page-card" key={path.slug}>
              <div className={`path-page-head ${path.accent}`}>
                <div className="path-page-index">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <span>{path.duration} · {path.target}</span>
                  <h2>{path.title}</h2>
                  <p>{path.description}</p>
                </div>
              </div>
              <div className="path-node-list">
                {path.nodes.map((node, nodeIndex) => (
                  <details className="path-node" key={node.title} open={nodeIndex === 0}>
                    <summary>
                      <b>{node.title}</b>
                      {node.description && <p>{node.description}</p>}
                      <i>→</i>
                    </summary>
                    <div className="path-node-resources">
                      {node.resources.map((res) => (
                        <a className="path-resource" href={res.link} target="_blank" rel="noreferrer" key={res.title}>
                          <span className="path-resource-level" data-level={res.level}>{res.level}</span>
                          <strong>{res.title}</strong>
                          <div><span>{res.platform}</span>{res.note && <small>{res.note}</small>}</div>
                        </a>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

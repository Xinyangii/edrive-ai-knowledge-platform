import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { projects } from "../../content/projects";

export default function ProjectsPage() {
  return (
    <main>
      <PageHero eyebrow="ENGINEERING PRACTICE" title="项目" description="每个实战项目都从业务问题出发，拆分成可点击学习的业务链，每一块都说明需要的数据、模型与应用" meta={["车辆诊断", "AI 自主标定", "控制件声学故障"]} />
      <section className="section-pad">
        <SectionHeading index="01" kicker="REAL PROJECTS" title={<>智能电驱项目</>} description="三个真实项目，每条业务链都连接数据、模型和应用节点，点击即可跳转到对应学习资源" />
        <div className="project-detail-list">
          {projects.map((project) => (
            <article className={`project-detail-card ${project.accent}`} key={project.code}>
              <div className="project-detail-head">
                <span>{project.code}</span>
                <h2>{project.title}</h2>
                <p>{project.problem}</p>
                <Link className="project-detail-overview" href={project.href}>查看业务专题 →</Link>
              </div>
              <div className="project-chain">
                {project.stages.map((stage) => (
                  <div className="project-chain-stage" key={stage.name}>
                    <div className="project-chain-connector"><b>{stage.step}</b><i></i></div>
                    <div className="project-chain-body">
                      <h3>{stage.name}</h3>
                      <p>{stage.objective}</p>
                      <div className="project-chain-blocks">
                        <div>
                          <span>数据</span>
                          <div>
                            {stage.data.map((item) => item.href ? <Link href={item.href} key={item.label}>{item.label}</Link> : <span key={item.label}>{item.label}</span>)}
                          </div>
                        </div>
                        {stage.models.length > 0 && <div>
                          <span>模型</span>
                          <div>
                            {stage.models.map((item) => item.href ? <Link href={item.href} key={item.label}>{item.label}</Link> : <span key={item.label}>{item.label}</span>)}
                          </div>
                        </div>}
                        <div>
                          <span>应用</span>
                          <div>
                            {stage.applications.map((item) => item.href ? <Link href={item.href} key={item.label}>{item.label}</Link> : <span key={item.label}>{item.label}</span>)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { agentBusinessLinks, applicationTree } from "../../content/applications";
import Link from "next/link";

export default function ApplicationsPage() {
  return (
    <main>
      <PageHero eyebrow="LAYER 04 · APPLICATIONS" title="应用层" description="有模型不等于有应用，应用层负责把模型、企业知识、工程工具、状态和安全流程连接起来，形成可调用、可追溯、可维护的系统" meta={["API", "RAG", "Agent", "LangGraph", "Engineering"]} accent="orange" />
      <section className="section-pad">
        <SectionHeading index="01" kicker="APPLICATION TREE" title={<>应用层</>} description="每个标签都跳转到可直接学习的资源" />
        <div className="application-grid">
          {applicationTree.map((item, index) => (
            <article id={item.id} className="application-card" key={item.id}>
              <div className="application-card-head"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <div className="tag-cloud">
                {item.items.map((tag) => (
                  <a href={tag.href} target="_blank" rel="noreferrer" key={tag.label}>{tag.label} ↗</a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section-pad dark-section">
        <SectionHeading index="02" kicker="BUSINESS CONNECTION" title={<>Agent 与业务专题</>} description="车辆诊断与 AI 标定都适合用 Agent 组织多步任务，但不能让 LLM 替代信号模型、优化器或安全校验" light />
        <div className="agent-link-grid">{agentBusinessLinks.map((item) => <Link href={item.href} key={item.title}><h3>{item.title}</h3><p>{item.copy}</p><span>查看业务专题 →</span></Link>)}</div>
      </section>
    </main>
  );
}

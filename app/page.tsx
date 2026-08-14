import Link from "next/link";
import { KnowledgeMap } from "../components/knowledge-map";
import { SectionHeading } from "../components/section-heading";
import { Spine } from "../components/spine";

const entryCards = [
  {
    href: "/business",
    kicker: "KNOWLEDGE SYSTEM",
    title: "知识体系",
    copy: "业务 → 数据 → 模型 → 应用四层架构，点击任何节点进入对应知识页",
  },
  {
    href: "/projects",
    kicker: "ENGINEERING PRACTICE",
    title: "项目",
    copy: "三个真实业务项目，每条都贯穿数据、模型和应用节点",
  },
  {
    href: "/learning-paths",
    kicker: "LEARNING PATHS",
    title: "学习路径",
    copy: "零基础 4 周、车辆诊断、AI 标定、声学故障、RAG / Agent 五条路线",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-inner">
          <div className="eyebrow"><span /> INTELLIGENT E-DRIVE · AI KNOWLEDGE PLATFORM</div>
          <h1>把 AI 学成<br /><em>电驱工程能力</em></h1>
          <div className="hero-stats">
            <div><em>数据</em><span>Data</span></div>
            <span className="hero-stats-sep" aria-hidden="true">·</span>
            <div><em>模型</em><span>Models</span></div>
            <span className="hero-stats-sep" aria-hidden="true">·</span>
            <div><em>应用</em><span>Applications</span></div>
          </div>
          <a className="hero-scroll" href="#spine" aria-label="向下查看主脉络">沿主脉络开始 <span>↓</span></a>
        </div>
      </section>

      <section className="spine-section section-pad" id="spine">
        <SectionHeading index="01" kicker="PROJECTS" title="项目" description="鼠标划过切换项目：每条链都从业务问题出发，经过数据与模型，落到工程系统" />
        <Spine />
      </section>

      <section className="knowledge-map-section section-pad" id="knowledge-map">
        <SectionHeading index="02" kicker="KNOWLEDGE FRAMEWORK" title="知识框架" description="业务 → 数据 → 模型 → 应用，每层定义清楚要解决什么、接什么、用什么" />
        <KnowledgeMap />
      </section>

      <section className="entry-section section-pad">
        <SectionHeading index="03" kicker="LEARNING PATHS" title="学习路径" description="从知识框架进入真实项目和定制学习路线" />
        <div className="entry-grid">
          {entryCards.map((card) => (
            <Link className="entry-card" href={card.href} key={card.href}>
              <span>{card.kicker}</span>
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
              <i>→</i>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

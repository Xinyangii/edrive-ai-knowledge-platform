import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { businessTracks } from "../../content/site";

export default function BusinessPage() {
  return (
    <main>
      <PageHero eyebrow="LAYER 01 · BUSINESS" title="业务层" description="先明确工程对象、问题、约束和评价方式，业务层不是算法展示，而是决定后续需要什么数据、模型和应用形态" meta={["车辆诊断", "AI 自主标定", "控制件声学故障"]} />
      <section className="section-pad">
        <SectionHeading index="01" kicker="BUSINESS PROJECTS" title={<>智能电驱项目</>} description="三个真实业务项目，每条都贯穿数据、模型和应用节点" />
        <div className="track-grid">
          {businessTracks.map((item) => (
            <Link className={`track-card ${item.accent}`} key={item.name} href={item.href}>
              <div className="track-top"><span>{item.code}</span><i>→</i></div>
              <h3>{item.name}</h3>
              <p>{item.tagline}</p>
              <div className="mini-chain">
                {item.chain.map((step, index) => <span key={step}>{step}{index < item.chain.length - 1 && <b>→</b>}</span>)}
              </div>
              <div className="track-outcome">{item.outcome}</div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

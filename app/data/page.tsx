import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { dataTypes } from "../../content/data-layer";

export default function DataPage() {
  return (
    <main>
      <PageHero eyebrow="LAYER 02 · DATA" title="数据层" description="模型不是从 CAN、声音和文档中自动得到可靠结论，先理解采集、时间对齐、特征、标签和数据集边界，才有资格讨论模型" meta={["工程语境优先", "时序是共同底座", "避免数据泄漏"]} accent="blue" />

      <section className="section-pad">
        <SectionHeading index="01" kicker="DATA TYPES" title={<>诊断 / 标定 / 声学数据</>} description="不同业务使用的数据形态不同，但最终都需要被组织成清晰、可复现、可追溯的数据资产" />
        <div className="data-type-grid">
          {dataTypes.map((item) => <article className="data-type-card" key={item.title}><span>{item.project}</span><h3>{item.title}</h3><p>{item.description}</p><div>{item.items.map((tag) => <b key={tag}>{tag}</b>)}</div></article>)}
        </div>
      </section>
    </main>
  );
}
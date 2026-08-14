import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { dataFoundations, dataTypes, datasetBuilding, preprocessing, timeSeriesBasics } from "../../content/data-layer";

function CardGrid({ items }: { items: { title: string; copy: string }[] }) {
  return <div className="concept-grid">{items.map((item) => <article className="concept-card" key={item.title}><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>;
}

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

      <section className="section-pad subtle-section">
        <SectionHeading index="02" kicker="DATA BASICS" title={<>样本、特征、标签</>} description="这些基础词放回车辆工程语境后并不抽象" />
        <div className="foundation-grid">{dataFoundations.map((item) => <article key={item.term}><span>{item.term}</span><h3>{item.title}</h3><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="section-pad">
        <SectionHeading index="03" kicker="TIME SERIES" title={<>时序数据基础</>} description="时间戳、采样率和对齐是诊断、标定与声音工况同步的共同基础" />
        <CardGrid items={timeSeriesBasics} />
      </section>

      <section className="section-pad dark-section">
        <SectionHeading index="04" kicker="PREPROCESSING" title={<>数据预处理</>} description="真实异常、传感器脏点和采集缺失要区分处理" light />
        <CardGrid items={preprocessing} />
      </section>

      <section className="section-pad">
        <SectionHeading index="05" kicker="DATASET BUILDING" title={<>数据集构建</>} description="尤其是连续车辆数据，随机切片很容易把同一次试验的近邻样本泄漏到训练集和测试集" />
        <CardGrid items={datasetBuilding} />
      </section>
    </main>
  );
}

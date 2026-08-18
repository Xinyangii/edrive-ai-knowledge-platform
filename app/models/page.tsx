import Link from "next/link";
import { ModelTree } from "../../components/model-tree";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { modelDirections } from "../../content/model-directions";

export default function ModelsPage() {
  return (
    <main>
      <PageHero eyebrow="LAYER 03 · MODELS" title="模型层" description="不要从算法名词倒推业务，先判断任务属于分类、预测、异常检测、信号分析还是参数寻优，再选择最简单且足够可靠的方法" meta={["机器学习 / 集成学习", "强化学习", "大模型 / 深度学习"]} accent="lime" />

      <section className="section-pad subtle-section">
        <SectionHeading index="01" kicker="KNOWLEDGE TREE" title={<>模型知识树</>} description="每个分支以“解决什么问题”为第一入口，点击节点进入对应知识页" />
        <ModelTree />
      </section>

      <section className="section-pad">
        <SectionHeading index="02" kicker="MODEL SELECTION" title={<>三个核心方向</>} description="机器学习 / 强化学习 / 大模型与深度学习，覆盖电驱工程中最常见的能力需求" />
        <div className="direction-grid">
          {modelDirections.map((item) => (
            <Link className="direction-card" href={`/models/${item.slug}`} key={item.slug}>
              <span>{item.english}</span>
              <h3>{item.title}</h3>
              <p>{item.summary}</p>
              <i>进入方向详情 →</i>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

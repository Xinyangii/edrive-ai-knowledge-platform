import Link from "next/link";
import { PageHero } from "../../components/page-hero";
import { SectionHeading } from "../../components/section-heading";
import { modelSelectionGuide } from "../../content/models";
import { modelDirections } from "../../content/model-directions";

export default function ModelsPage() {
  return (
    <main>
      <PageHero eyebrow="LAYER 03 · MODELS" title="模型层" description="不要从算法名词倒推业务，先判断任务属于分类、异常检测、优化还是信号分析，再选择最简单且足够可靠的方法" meta={["机器学习 / 集成学习", "强化学习", "大模型 / 深度学习"]} accent="lime" />

      <section className="section-pad">
        <SectionHeading index="01" kicker="TASK → MODEL" title={<>工程选型指南</>} description="按工程任务场景推荐模型，每行给出首选方案和替代方案" />
        <div className="selection-guide">
          {modelSelectionGuide.map((guide) => (
            <div className="selection-group" key={guide.id}>
              <div className="selection-header">
                <span className="selection-task">{guide.task}</span>
                <span className="selection-scenario">{guide.scenario}</span>
              </div>
              <div className="selection-models">
                {guide.models.map((m) => (
                  <Link href={m.href} key={m.label} className="selection-model">{m.label} →</Link>
                ))}
              </div>
              <p className="selection-note">{guide.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad subtle-section">
        <SectionHeading index="02" kicker="DIRECTIONS" title={<>三个方向</>} description="模型选型指南的深度解读，包含扩展阅读和项目应用" />
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
import { FlowSummary } from "../../../components/flow-summary";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { TopicTree } from "../../../components/topic-tree";
import { diagnosisFlow, diagnosisTopics } from "../../../content/business";

export default function DiagnosisPage() {
  return (
    <main>
      <PageHero eyebrow="BUSINESS · VEHICLE DIAGNOSIS" title="车辆诊断" description="按照故障前、故障中、故障后组织诊断知识，把车辆运行数据逐步转化为风险、故障位置、根因和处置证据" meta={["故障前：预测与预警", "故障中：检测与定位", "故障后：根因与知识复用"]} accent="cyan" />
      <section className="section-pad"><SectionHeading index="01" kicker="PROJECT OVERVIEW" title={<>从“有没有问题”到“为什么、怎么办”</>} description="诊断系统的目标不是只给一个分类结果，而是形成工程人员可以复核和采取动作的证据链" /><FlowSummary items={diagnosisFlow} /></section>
      <section className="section-pad subtle-section"><SectionHeading index="02" kicker="KNOWLEDGE CHAIN" title={<>故障全生命周期知识树</>} description="每个节点后续都可继续扩展为统一知识详情页：业务问题 → 所需数据 → 可选模型 → 评价指标 → 学习资料 → Demo" /><TopicTree topics={diagnosisTopics} /></section>
    </main>
  );
}

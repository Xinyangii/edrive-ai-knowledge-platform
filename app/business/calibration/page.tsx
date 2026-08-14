import { FlowSummary } from "../../../components/flow-summary";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { TopicTree } from "../../../components/topic-tree";
import { calibrationFlow, calibrationLimits, calibrationTopics } from "../../../content/business";

export default function CalibrationPage() {
  return (
    <main>
      <PageHero eyebrow="BUSINESS · AI CALIBRATION" title="AI 自主标定" description="当前内部方案的核心目标是减少重复机械的人工调参，通过实测数据、待标定参数和驾驶性评价，驱动评价—优化—校验—验证闭环" meta={["三类数据", "三个核心模型", "LangChain + LangGraph Demo"]} accent="lime" />
      <section className="section-pad"><SectionHeading index="01" kicker="PROJECT OVERVIEW" title={<>评价决定“好不好”，寻优决定“下一组试什么”</>} description="参数优化必须连接驾驶性评价、工程约束和真实试验，不能把离线数学寻优等同于完成自主标定" /><FlowSummary items={calibrationFlow} /></section>
      <section className="section-pad subtle-section"><SectionHeading index="02" kicker="KNOWLEDGE CHAIN" title={<>从数据、工况到实车闭环</>} description="专题内容优先复用当前内部 AI 标定方案：三类数据、三个核心模型、工况识别与 Agent Demo" /><TopicTree topics={calibrationTopics} /></section>
      <section className="section-pad limitations-section"><SectionHeading index="03" kicker="CURRENT BOUNDARY" title={<>当前 Demo 的边界必须明确</>} description="这些不是负面项，而是区分“工作流原型”和“真正工程闭环”的必要条件" /><div className="warning-grid">{calibrationLimits.map((item, index) => <div key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></section>
    </main>
  );
}

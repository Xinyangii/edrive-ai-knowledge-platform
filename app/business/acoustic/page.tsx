import { FlowSummary } from "../../../components/flow-summary";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { TopicTree } from "../../../components/topic-tree";
import { acousticFlow, acousticTopics } from "../../../content/business";

export default function AcousticPage() {
  return (
    <main>
      <PageHero eyebrow="BUSINESS · ACOUSTIC FAULT" title="控制件声学故障" description="把“声音 → 频率 → 故障”展开成可工程实现的完整链路：标准采集、时域/频域/时频分析、特征提取、工况归一化和故障识别" meta={["声音采集", "FFT / STFT", "音频特征", "故障分类"]} accent="orange" />
      <section className="section-pad"><SectionHeading index="01" kicker="PROJECT OVERVIEW" title={<>先保证声音可比较，再谈模型准确率</>} description="声学模型很容易学习到麦克风位置、环境噪声或工况差异，因此采集标准与工况同步必须先于复杂模型" /><FlowSummary items={acousticFlow} /></section>
      <section className="section-pad subtle-section"><SectionHeading index="02" kicker="KNOWLEDGE CHAIN" title={<>从波形到频谱，再到故障结论</>} description="基础信号处理与 AI 模型应当连在一起学习，而不是把 FFT 与机器学习割裂" /><TopicTree topics={acousticTopics} /></section>
    </main>
  );
}

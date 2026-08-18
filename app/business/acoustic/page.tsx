import Link from "next/link";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { projects } from "../../../content/projects";

const project = projects.find(p => p.code === "P03")!;

export default function AcousticPage() {
  return (
    <main>
      <PageHero
        eyebrow="BUSINESS · ACOUSTIC FAULT"
        title="控制件声学故障"
        description="从控制件异响中提取稳定的频率和时频特征，识别异常与故障类型。信号处理是前提，模型建立在特征之上"
        meta={["FFT / STFT", "MFCC 特征", "RF / CNN 分类"]}
        accent="orange"
      />

      <section className="section-pad">
        <SectionHeading index="01" kicker="OVERVIEW" title="项目概述" description={project.problem} />
        <div className="project-stages">
          {project.stages.map((stage) => (
            <div className="project-stage-card" key={stage.step}>
              <div className="stage-header">
                <span className="stage-step">{stage.step}</span>
                <div>
                  <h3 className="stage-name">{stage.name}</h3>
                  <p className="stage-obj">{stage.objective}</p>
                </div>
              </div>
              <div className="stage-detail">
                <div className="stage-col">
                  <span className="stage-col-label">数据</span>
                  <ul>
                    {stage.data.map((d) => (
                      <li key={d.label}>{d.href ? <Link href={d.href}>{d.label}</Link> : d.label}</li>
                    ))}
                  </ul>
                </div>
                <div className="stage-col">
                  <span className="stage-col-label">模型</span>
                  <ul>
                    {stage.models.length > 0 ? stage.models.map((m) => (
                      <li key={m.label}>{m.href ? <Link href={m.href}>{m.label}</Link> : m.label}</li>
                    )) : <li className="stage-empty">—</li>}
                  </ul>
                </div>
                <div className="stage-col">
                  <span className="stage-col-label">应用</span>
                  <ul>
                    {stage.applications.map((a) => (
                      <li key={a.label}>{a.href ? <Link href={a.href}>{a.label}</Link> : a.label}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-pad subtle-section">
        <SectionHeading index="02" kicker="LEARNING" title="学习资源" description="每个子课题对应的核心方法和参考资源" />
        <div className="resource-cards">
          <div className="resource-card">
            <h3>信号处理</h3>
            <Link href="/models/fft">FFT 工程参考 →</Link>
            <Link href="https://www.bilibili.com/video/BV1AS4y1Q7hT/">FFT 工程实践（B站）→</Link>
            <Link href="https://librosa.org/doc/latest/feature.html">Librosa 音频特征 →</Link>
          </div>
          <div className="resource-card">
            <h3>音频特征</h3>
            <Link href="/models/deep-learning">STFT / MFCC / Mel →</Link>
            <Link href="https://github.com/audioset/ontology">AudioSet 数据集 →</Link>
          </div>
          <div className="resource-card">
            <h3>故障分类</h3>
            <Link href="/models/random-forest">Random Forest 基线 →</Link>
            <Link href="/models/deep-learning">CNN / Autoencoder →</Link>
            <Link href="https://github.com/qiuqiangkong/audioset_tagging_cnn">CNN 音频分类模型 →</Link>
          </div>
          <div className="resource-card">
            <h3>端到端链路</h3>
            <Link href="https://www.youtube.com/watch?v=XGsKTHJI1sM">MATLAB 声音识别工作流 →</Link>
            <Link href="https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html">Scikit-learn RF 文档 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
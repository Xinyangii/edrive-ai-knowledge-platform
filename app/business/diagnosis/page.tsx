import Link from "next/link";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { projects } from "../../../content/projects";

const project = projects.find(p => p.code === "P01")!;

export default function DiagnosisPage() {
  return (
    <main>
      <PageHero
        eyebrow="BUSINESS · VEHICLE DIAGNOSIS"
        title="车辆诊断"
        description="覆盖故障前预警、故障中定位、故障后根因分析，用 CAN 时序、故障码和维修案例形成可验证的诊断证据链"
        meta={["异常检测", "故障分类", "RAG 知识复用"]}
        accent="cyan"
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
        <SectionHeading index="02" kicker="LEARNING" title="学习资源" description="每个子课题对应的核心模型和参考资源" />
        <div className="resource-cards">
          <div className="resource-card">
            <h3>异常检测</h3>
            <Link href="https://scikit-learn.org/stable/modules/outlier_detection.html">Scikit-learn：异常与离群检测 →</Link>
            <Link href="https://github.com/yzhao062/pyod">PyOD：Python 异常检测工具库 →</Link>
          </div>
          <div className="resource-card">
            <h3>故障分类</h3>
            <Link href="/models/random-forest">Random Forest 工程参考 →</Link>
            <Link href="https://xgboost.readthedocs.io/en/stable/">XGBoost 官方文档 →</Link>
            <Link href="https://shap.readthedocs.io/en/latest/">SHAP 模型解释 →</Link>
          </div>
          <div className="resource-card">
            <h3>时序预测</h3>
            <Link href="https://github.com/jdb78/pytorch-forecasting">PyTorch Forecasting →</Link>
            <Link href="/models/deep-learning">LSTM / Transformer →</Link>
          </div>
          <div className="resource-card">
            <h3>RAG 知识复用</h3>
            <Link href="/applications/rag">RAG 工程参考 →</Link>
            <Link href="https://github.com/microsoft/graphrag">GraphRAG →</Link>
            <Link href="https://docs.langchain.com/oss/python/langchain/overview">LangChain 文档 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
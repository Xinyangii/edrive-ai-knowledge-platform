import Link from "next/link";
import { PageHero } from "../../../components/page-hero";
import { SectionHeading } from "../../../components/section-heading";
import { projects } from "../../../content/projects";

const project = projects.find(p => p.code === "P02")!;

export default function CalibrationPage() {
  return (
    <main>
      <PageHero
        eyebrow="BUSINESS · AI CALIBRATION"
        title="AI 自主标定"
        description="用评价、寻优、校验与实车验证的闭环，替代重复机械的人工调参。当前 Demo 基于 LangChain + LangGraph 编排 4 个子 Agent"
        meta={["驾驶性评价", "Bayesian Optimization", "标定 Agent"]}
        accent="lime"
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
            <h3>驾驶性评价模型</h3>
            <Link href="/models/random-forest">Random Forest / XGBoost →</Link>
            <Link href="/models/deep-learning">LSTM 时序评价 →</Link>
          </div>
          <div className="resource-card">
            <h3>参数寻优</h3>
            <Link href="/models/bayesian-optimization">Bayesian Optimization 工程参考 →</Link>
            <Link href="https://botorch.org/docs/tutorials">BoTorch 多目标约束优化 →</Link>
            <Link href="https://github.com/bayesian-optimization/BayesianOptimization">BayesianOptimization 库 →</Link>
          </div>
          <div className="resource-card">
            <h3>仿真预标定</h3>
            <Link href="https://stable-baselines3.readthedocs.io/">Stable Baselines3 PPO / SAC →</Link>
            <Link href="https://arxiv.org/abs/1707.06347">PPO 论文 →</Link>
            <Link href="https://github.com/mathworks/EV-with-MATLAB-and-Simulink">MathWorks EV 仿真 →</Link>
          </div>
          <div className="resource-card">
            <h3>标定 Agent</h3>
            <Link href="/applications/agent">Agent 工程参考 →</Link>
            <Link href="https://docs.langchain.com/oss/python/langchain/overview">LangChain 文档 →</Link>
            <Link href="https://langchain-ai.github.io/langgraph/">LangGraph 工作流 →</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
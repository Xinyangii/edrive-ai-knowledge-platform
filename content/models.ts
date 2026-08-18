export type ModelNode = {
  label: string;
  href: string;
};

export type TaskGuide = {
  id: string;
  task: string;
  scenario: string;
  models: ModelNode[];
  note: string;
};

export const modelSelectionGuide: TaskGuide[] = [
  {
    id: "classification",
    task: "结构化故障分类",
    scenario: "特征表 + 标签，样本量几百到几万，需要看特征重要性",
    models: [
      { label: "Random Forest", href: "/models/random-forest" },
      { label: "XGBoost", href: "/models/machine-learning" },
      { label: "LightGBM", href: "/models/machine-learning" },
    ],
    note: "RF 默认基线，XGBoost/LightGBM 提升精度，SHAP 解释单样本",
  },
  {
    id: "anomaly",
    task: "时序异常检测",
    scenario: "无标签或少量标签，从 CAN 连续信号中识别异常片段",
    models: [
      { label: "Isolation Forest", href: "/models/machine-learning" },
      { label: "Autoencoder", href: "/models/deep-learning" },
      { label: "LSTM 重构", href: "/models/deep-learning" },
    ],
    note: "IF 无监督基线，AE/LSTM 适合复杂时序模式，PyOD 提供 30+ 算法",
  },
  {
    id: "optimization",
    task: "参数寻优",
    scenario: "试验昂贵，评价函数不可导，需要显式利用历史结果",
    models: [
      { label: "Bayesian Optimization", href: "/models/bayesian-optimization" },
      { label: "PPO", href: "/models/reinforcement-learning" },
      { label: "SAC", href: "/models/reinforcement-learning" },
    ],
    note: "BO 首选，PPO/SAC 适合仿真预标定，BO 配合多目标做 Pareto 决策",
  },
  {
    id: "frequency",
    task: "声音频域分析",
    scenario: "从控制件异响中提取频率和时频特征",
    models: [
      { label: "FFT", href: "/models/fft" },
      { label: "STFT", href: "/models/deep-learning" },
      { label: "MFCC", href: "/models/deep-learning" },
    ],
    note: "FFT 是基线，STFT 处理非平稳信号，MFCC 压缩为特征向量",
  },
  {
    id: "deep-time",
    task: "深度时序建模",
    scenario: "原始信号或复杂时序模式，需要自动特征提取",
    models: [
      { label: "CNN", href: "/models/deep-learning" },
      { label: "LSTM", href: "/models/deep-learning" },
      { label: "Transformer", href: "/models/deep-learning" },
    ],
    note: "CNN 适合局部模式，LSTM/Transformer 适合长序列依赖",
  },
  {
    id: "rag-agent",
    task: "知识检索与工程编排",
    scenario: "文档问答、案例检索、多步工程工作流编排",
    models: [
      { label: "RAG", href: "/applications/rag" },
      { label: "Agent", href: "/applications/agent" },
      { label: "LangGraph", href: "/models/deep-learning" },
    ],
    note: "RAG 检索文档知识，Agent 编排工具链，LangGraph 管理状态工作流",
  },
];
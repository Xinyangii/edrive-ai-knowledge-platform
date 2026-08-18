export type ModelNode = {
  label: string;
  href: string;
};

export type ModelBranch = {
  id: string;
  title: string;
  description: string;
  groups: { title: string; items: (string | ModelNode)[] }[];
};

export const modelTree: ModelBranch[] = [
  {
    id: "machine-learning",
    title: "机器学习",
    description: "工程 AI 的第一站，结构化数据上分类、回归、异常检测、集成学习",
    groups: [
      {
        title: "监督学习",
        items: [
          { label: "分类", href: "/models/machine-learning" },
          { label: "回归", href: "/models/machine-learning" },
        ],
      },
      {
        title: "无监督学习",
        items: [
          { label: "聚类", href: "/models/machine-learning" },
          { label: "异常检测", href: "/models/machine-learning" },
        ],
      },
      {
        title: "常用模型",
        items: [
          { label: "Linear Regression", href: "/models/machine-learning" },
          { label: "Logistic Regression", href: "/models/machine-learning" },
          { label: "SVM", href: "/models/machine-learning" },
          { label: "Decision Tree", href: "/models/machine-learning" },
          { label: "Random Forest", href: "/models/random-forest" },
          { label: "XGBoost", href: "/models/machine-learning" },
          { label: "Isolation Forest", href: "/models/machine-learning" },
        ],
      },
    ],
  },
  {
    id: "deep-learning",
    title: "深度学习",
    description: "原始信号或复杂时序用神经网络自动学特征，CNN 适合局部模式，LSTM/Transformer 适合序列",
    groups: [
      {
        title: "基础与结构",
        items: [
          { label: "神经网络", href: "/models/deep-learning" },
          { label: "CNN", href: "/models/deep-learning" },
          { label: "RNN", href: "/models/deep-learning" },
          { label: "LSTM / GRU", href: "/models/deep-learning" },
          { label: "Autoencoder", href: "/models/deep-learning" },
          { label: "Transformer", href: "/models/deep-learning" },
        ],
      },
    ],
  },
  {
    id: "time-series",
    title: "时间序列",
    description: "车辆信号的历史依赖、变化趋势和异常状态",
    groups: [
      {
        title: "任务",
        items: [
          { label: "预测", href: "/models/deep-learning" },
          { label: "分类", href: "/models/deep-learning" },
          { label: "异常检测", href: "/models/machine-learning" },
        ],
      },
    ],
  },
  {
    id: "signal-processing",
    title: "信号处理",
    description: "把声音和振动从时域转到频域和时频域，是声学故障项目的基线",
    groups: [
      {
        title: "核心方法",
        items: [
          { label: "FFT", href: "/models/fft" },
          { label: "STFT", href: "/models/deep-learning" },
          { label: "PSD", href: "/models/fft" },
          { label: "Spectrogram", href: "/models/deep-learning" },
          { label: "MFCC", href: "/models/deep-learning" },
        ],
      },
    ],
  },
  {
    id: "optimization",
    title: "优化算法",
    description: "AI 标定的核心技术线，试验昂贵时用代理模型找最优参数",
    groups: [
      {
        title: "搜索与优化",
        items: [
          { label: "Grid Search", href: "/models/machine-learning" },
          { label: "Genetic Algorithm", href: "/models/machine-learning" },
          { label: "PSO", href: "/models/machine-learning" },
          { label: "Bayesian Optimization", href: "/models/bayesian-optimization" },
          { label: "Multi-objective Optimization", href: "/models/machine-learning" },
        ],
      },
    ],
  },
  {
    id: "reinforcement-learning",
    title: "强化学习",
    description: "让智能体在环境中试错学习策略，仿真预标定和能量管理是电驱场景的主战场",
    groups: [
      {
        title: "核心概念",
        items: [
          { label: "State", href: "/models/reinforcement-learning" },
          { label: "Action", href: "/models/reinforcement-learning" },
          { label: "Reward", href: "/models/reinforcement-learning" },
          { label: "Policy", href: "/models/reinforcement-learning" },
          { label: "Environment", href: "/models/reinforcement-learning" },
        ],
      },
    ],
  },
  {
    id: "llm",
    title: "大模型",
    description: "在 Agent 规划和 RAG 问答中承担核心，但不能替代精确工程算法",
    groups: [
      {
        title: "核心概念",
        items: [
          { label: "Transformer", href: "/models/deep-learning" },
          { label: "Token", href: "/models/deep-learning" },
          { label: "Embedding", href: "/models/deep-learning" },
          { label: "Pretraining", href: "/models/deep-learning" },
          { label: "Fine-tuning", href: "/models/deep-learning" },
          { label: "Multimodal", href: "/models/deep-learning" },
        ],
      },
    ],
  },
];

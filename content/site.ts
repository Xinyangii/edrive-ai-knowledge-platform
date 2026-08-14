import type { Accent, LayerKey, Track } from "./types";

export const knowledgeLayers: {
  key: LayerKey;
  code: string;
  title: string;
  english: string;
  question: string;
  description: string;
  href: string;
  accent: Accent;
  keywords: string[];
}[] = [
  {
    key: "business",
    code: "01",
    title: "业务层",
    english: "BUSINESS",
    question: "我们到底要解决什么工程问题",
    description: "从故障、标定和异响等真实任务出发，先定义对象、目标、约束与评价方式",
    href: "/business",
    accent: "cyan",
    keywords: ["车辆诊断", "AI标定", "声学故障"],
  },
  {
    key: "data",
    code: "02",
    title: "数据层",
    english: "DATA",
    question: "解决问题需要什么数据",
    description: "理解 CAN、时序、标定、声音、文档与标签，让工程数据成为可学习的数据集",
    href: "/data",
    accent: "blue",
    keywords: ["时序", "MAP", "音频", "标签"],
  },
  {
    key: "models",
    code: "03",
    title: "模型层",
    english: "MODELS",
    question: "用什么算法建立能力",
    description: "根据任务选择机器学习、深度学习、时序、信号处理、优化算法与大模型",
    href: "/models",
    accent: "lime",
    keywords: ["ML", "DL", "优化", "LLM"],
  },
  {
    key: "applications",
    code: "04",
    title: "应用层",
    english: "APPLICATIONS",
    question: "怎样真正落地到工程系统",
    description: "把模型接入 API、RAG、Agent 与工程工作流，形成可验证、可追溯的应用",
    href: "/applications",
    accent: "orange",
    keywords: ["RAG", "Agent", "部署", "工程化"],
  },
];

export const businessTracks: {
  name: Exclude<Track, "通用基础">;
  code: string;
  tagline: string;
  flow: string[];
  accent: Accent;
  outcome: string;
  href: string;
  chain: string[];
}[] = [
  {
    name: "车辆诊断",
    code: "01",
    tagline: "覆盖故障前、故障中、故障后，把车辆数据逐步转化为预警、定位和处置证据",
    flow: ["故障前", "故障中", "故障后"],
    accent: "cyan",
    outcome: "异常检测 · 时序预测 · 根因分析 · 诊断 Agent",
    href: "/business/diagnosis",
    chain: ["状态数据", "异常/故障模型", "诊断证据", "维修与复盘"],
  },
  {
    name: "AI标定",
    code: "02",
    tagline: "减少重复机械的人工调参，以评价、寻优、校验和实车验证构成标定闭环",
    flow: ["评价建模", "参数寻优", "闭环校验"],
    accent: "lime",
    outcome: "工况识别 · 驾驶性评价 · 参数寻优 · 标定 Agent",
    href: "/business/calibration",
    chain: ["实测/参数/评价数据", "评价与优化", "安全校验", "实车闭环"],
  },
  {
    name: "声学故障",
    code: "03",
    tagline: "从声音采集开始，经时域、频域和时频分析识别控制件异常",
    flow: ["声音采集", "频谱特征", "故障识别"],
    accent: "orange",
    outcome: "FFT · STFT · 声谱图 · 音频分类",
    href: "/business/acoustic",
    chain: ["音频/工况", "信号处理", "特征/模型", "故障类别"],
  },
];

export const technologyPreview = [
  { title: "机器学习", note: "结构化数据的分类、回归与异常检测", href: "/models#machine-learning" },
  { title: "信号处理", note: "把声音和振动转换为频域特征", href: "/models/fft" },
  { title: "优化算法", note: "在参数空间中搜索更优标定组合", href: "/models#optimization" },
  { title: "大模型", note: "理解文本、代码和多模态工程信息", href: "/models#llm" },
  { title: "RAG", note: "让模型检索企业内部知识再回答", href: "/applications/rag" },
  { title: "Agent", note: "组织模型、工具、状态与工作流", href: "/applications/agent" },
];

export const navPanel: {
  key: LayerKey;
  title: string;
  english: string;
  href: string;
  accent: Accent;
  blurb: string;
  links: { label: string; href: string }[];
}[] = [
  {
    key: "business",
    title: "业务",
    english: "BUSINESS",
    href: "/business",
    accent: "cyan",
    blurb: "先定义工程问题",
    links: [
      { label: "车辆诊断", href: "/business/diagnosis" },
      { label: "AI 自主标定", href: "/business/calibration" },
      { label: "控制件声学故障", href: "/business/acoustic" },
    ],
  },
  {
    key: "data",
    title: "数据",
    english: "DATA",
    href: "/data",
    accent: "blue",
    blurb: "把工程数据变成可学习的数据集",
    links: [
      { label: "数据类型", href: "/data" },
      { label: "样本 / 特征 / 标签", href: "/data" },
      { label: "时序对齐与预处理", href: "/data" },
      { label: "数据集构建", href: "/data" },
    ],
  },
  {
    key: "models",
    title: "模型",
    english: "MODELS",
    href: "/models",
    accent: "lime",
    blurb: "按任务选择足够简单可靠的方法",
    links: [
      { label: "模型知识树", href: "/models" },
      { label: "机器学习 / 集成学习", href: "/models/machine-learning" },
      { label: "强化学习", href: "/models/reinforcement-learning" },
      { label: "大模型 / 深度学习", href: "/models/deep-learning" },
    ],
  },
  {
    key: "applications",
    title: "应用",
    english: "APPLICATIONS",
    href: "/applications",
    accent: "orange",
    blurb: "把模型接入真正的工程系统",
    links: [
      { label: "应用总览", href: "/applications" },
      { label: "RAG", href: "/applications/rag" },
      { label: "Agent", href: "/applications/agent" },
    ],
  },
];

export type SpineNode = { label: string; href?: string; note?: string };
export type SpineProject = {
  id: string;
  name: string;
  english: string;
  href: string;
  accent: Accent;
  question: string;
  layers: { key: LayerKey; title: string; nodes: SpineNode[] }[];
};

export const spineProjects: SpineProject[] = [
  {
    id: "diagnosis",
    name: "车辆诊断",
    english: "VEHICLE DIAGNOSIS",
    href: "/business/diagnosis",
    accent: "cyan",
    question: "从故障前预警、故障中定位到故障后根因，让数据成为可复核的诊断证据",
    layers: [
      {
        key: "business",
        title: "业务问题",
        nodes: [
          { label: "故障预警", href: "/business/diagnosis", note: "故障前" },
          { label: "故障定位", href: "/business/diagnosis", note: "故障中" },
          { label: "根因复盘", href: "/business/diagnosis", note: "故障后" },
        ],
      },
      {
        key: "data",
        title: "所需数据",
        nodes: [
          { label: "CAN 时序", href: "/data" },
          { label: "故障码" },
          { label: "历史维修案例", href: "/data" },
        ],
      },
      {
        key: "models",
        title: "核心模型",
        nodes: [
          { label: "异常检测", href: "/models#machine-learning" },
          { label: "Random Forest", href: "/models/random-forest" },
          { label: "时序模型", href: "/models#time-series" },
        ],
      },
      {
        key: "applications",
        title: "工程落地",
        nodes: [
          { label: "RAG 案例检索", href: "/applications/rag" },
          { label: "诊断 Agent", href: "/applications/agent" },
        ],
      },
    ],
  },
  {
    id: "calibration",
    name: "AI 自主标定",
    english: "AI CALIBRATION",
    href: "/business/calibration",
    accent: "lime",
    question: "用评价、寻优、校验与实车验证的闭环，替代重复机械的人工调参",
    layers: [
      {
        key: "business",
        title: "业务问题",
        nodes: [
          { label: "驾驶性缺陷", href: "/business/calibration", note: "顿挫 / 迟滞 / 抖动" },
          { label: "人工反复试车", href: "/business/calibration" },
        ],
      },
      {
        key: "data",
        title: "所需数据",
        nodes: [
          { label: "实测车辆数据", href: "/data" },
          { label: "待标定参数 / MAP", href: "/data" },
          { label: "驾驶性评价", href: "/data" },
        ],
      },
      {
        key: "models",
        title: "核心模型",
        nodes: [
          { label: "驾驶性评价模型", href: "/business/calibration" },
          { label: "Bayesian Optimization", href: "/models/bayesian-optimization" },
          { label: "参数校验模型", href: "/business/calibration" },
        ],
      },
      {
        key: "applications",
        title: "工程落地",
        nodes: [
          { label: "标定 Agent", href: "/applications/agent" },
          { label: "实车闭环", href: "/business/calibration", note: "待接入" },
        ],
      },
    ],
  },
  {
    id: "acoustic",
    name: "控制件声学故障",
    english: "ACOUSTIC FAULT",
    href: "/business/acoustic",
    accent: "orange",
    question: "把一段异响拆成频率与时频特征，识别控制件异常",
    layers: [
      {
        key: "business",
        title: "业务问题",
        nodes: [
          { label: "异响识别", href: "/business/acoustic" },
          { label: "部件异常定位", href: "/business/acoustic" },
        ],
      },
      {
        key: "data",
        title: "所需数据",
        nodes: [
          { label: "音频 / 振动", href: "/data" },
          { label: "转速 / 负载同步", href: "/data" },
          { label: "故障标签", href: "/data" },
        ],
      },
      {
        key: "models",
        title: "核心模型",
        nodes: [
          { label: "FFT", href: "/models/fft" },
          { label: "STFT / 声谱图", href: "/models#signal-processing" },
          { label: "Random Forest", href: "/models/random-forest" },
        ],
      },
      {
        key: "applications",
        title: "工程落地",
        nodes: [
          { label: "特征证据", href: "/business/acoustic" },
          { label: "故障分类报告", href: "/business/acoustic" },
        ],
      },
    ],
  },
];

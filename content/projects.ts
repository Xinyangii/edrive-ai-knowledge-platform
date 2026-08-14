export type ProjectStage = {
  step: string;
  name: string;
  objective: string;
  data: { label: string; href?: string }[];
  models: { label: string; href?: string }[];
  applications: { label: string; href?: string }[];
};

export type Project = {
  code: string;
  title: string;
  href: string;
  accent: "cyan" | "lime" | "orange";
  problem: string;
  stages: ProjectStage[];
};

export const projects: Project[] = [
  {
    code: "P01",
    title: "车辆诊断项目",
    href: "/business/diagnosis",
    accent: "cyan",
    problem: "覆盖故障前、故障中、故障后，让车辆运行数据形成可验证的诊断证据",
    stages: [
      {
        step: "01",
        name: "故障前预警",
        objective: "在车辆尚未报警时，从 CAN 时序里识别异常趋势并触发工程动作",
        data: [
          { label: "CAN 时序", href: "/data" },
          { label: "电流 / 电压 / 转速 / 扭矩" },
          { label: "温度 / 工况标签" },
        ],
        models: [
          { label: "Isolation Forest", href: "/models/machine-learning" },
          { label: "LSTM 时序预测", href: "/models/deep-learning" },
        ],
        applications: [
          { label: "健康度评分与预警推送" },
          { label: "趋势预测可视化" },
        ],
      },
      {
        step: "02",
        name: "故障中定位",
        objective: "异常出现时快速判断是什么、严不严重",
        data: [
          { label: "故障码", href: "/data" },
          { label: "多传感器同步数据" },
          { label: "历史故障标签" },
        ],
        models: [
          { label: "Random Forest", href: "/models/random-forest" },
          { label: "XGBoost", href: "/models/machine-learning" },
        ],
        applications: [
          { label: "故障分类与严重等级" },
          { label: "SHAP 单样本解释" },
        ],
      },
      {
        step: "03",
        name: "故障后根因",
        objective: "用历史案例和工程文档定位根因，输出可执行建议",
        data: [
          { label: "维修案例", href: "/data" },
          { label: "技术规范与手册" },
          { label: "相似故障记录" },
        ],
        models: [
          { label: "RAG", href: "/applications/rag" },
          { label: "知识图谱" },
        ],
        applications: [
          { label: "诊断 Agent", href: "/applications/agent" },
          { label: "根因分析与维修建议" },
        ],
      },
    ],
  },
  {
    code: "P02",
    title: "AI 自主标定项目",
    href: "/business/calibration",
    accent: "lime",
    problem: "减少重复机械的人工调参，让评价、寻优、安全校验、实车验证形成闭环",
    stages: [
      {
        step: "01",
        name: "工况识别",
        objective: "先识别当前驾驶工况，为后续评价和优化提供上下文",
        data: [
          { label: "车速 / 油门 / 制动", href: "/data" },
          { label: "加速度 / 坡度" },
          { label: "挡位 / 电池状态" },
        ],
        models: [
          { label: "规则 + 聚类", href: "/models/machine-learning" },
          { label: "时序模型", href: "/models/deep-learning" },
        ],
        applications: [
          { label: "工况标签服务" },
          { label: "数据分段" },
        ],
      },
      {
        step: "02",
        name: "驾驶性评价",
        objective: "把主观驾驶感受转成可计算的客观评分",
        data: [
          { label: "扭矩请求 / 实际扭矩", href: "/data" },
          { label: "Tip-in / Tip-out 响应" },
          { label: "工程师主观评分" },
        ],
        models: [
          { label: "Random Forest / XGBoost 回归", href: "/models/machine-learning" },
          { label: "LSTM 评价模型", href: "/models/deep-learning" },
        ],
        applications: [
          { label: "客观评分输出" },
          { label: "缺陷识别" },
        ],
      },
      {
        step: "03",
        name: "参数寻优",
        objective: "在有限试验预算内找到驾驶性更优的参数组合",
        data: [
          { label: "标定参数 / MAP", href: "/data" },
          { label: "参数安全边界" },
          { label: "历史试验结果" },
        ],
        models: [
          { label: "Bayesian Optimization", href: "/models/bayesian-optimization" },
          { label: "PPO / SAC 仿真预标定", href: "/models/reinforcement-learning" },
        ],
        applications: [
          { label: "候选参数推荐" },
          { label: "Pareto 多目标决策" },
        ],
      },
      {
        step: "04",
        name: "闭环验证",
        objective: "校验新参数安全性，下发实车验证并由 Agent 决定收敛",
        data: [
          { label: "新参数集" },
          { label: "新一轮实车数据" },
          { label: "驾驶性评分" },
        ],
        models: [
          { label: "参数校验模型", href: "/business/calibration" },
          { label: "评价模型" },
        ],
        applications: [
          { label: "标定 Agent", href: "/applications/agent" },
          { label: "Human-in-the-loop 审批" },
        ],
      },
    ],
  },
  {
    code: "P03",
    title: "控制件声学故障项目",
    href: "/business/acoustic",
    accent: "orange",
    problem: "从控制件异响中提取稳定的频率和时频特征，识别异常与故障类型",
    stages: [
      {
        step: "01",
        name: "标准采集",
        objective: "保证不同批次、不同车辆的声音数据可比较",
        data: [
          { label: "音频 / 振动", href: "/data" },
          { label: "采样率 / 麦克风位置" },
          { label: "转速 / 负载 / 工况同步" },
        ],
        models: [],
        applications: [
          { label: "采集规范" },
          { label: "数据质检" },
        ],
      },
      {
        step: "02",
        name: "信号处理",
        objective: "把声音从时域转换到频域和时频域，提取可解释特征",
        data: [
          { label: "时域波形", href: "/data" },
          { label: "音频段" },
        ],
        models: [
          { label: "FFT", href: "/models/fft" },
          { label: "STFT / 声谱图", href: "/models/deep-learning" },
        ],
        applications: [
          { label: "频谱可视化" },
          { label: "特征提取" },
        ],
      },
      {
        step: "03",
        name: "特征工程",
        objective: "从频谱和时频图中提取能区分故障的稳定特征",
        data: [
          { label: "频谱峰值 / 谐波" },
          { label: "MFCC / Mel", href: "/models/deep-learning" },
          { label: "工况归一化标签" },
        ],
        models: [
          { label: "特征选择" },
        ],
        applications: [
          { label: "特征表构建" },
        ],
      },
      {
        step: "04",
        name: "故障识别",
        objective: "根据特征判断异常类型并给出置信度和复核建议",
        data: [
          { label: "特征矩阵", href: "/data" },
          { label: "故障标签" },
        ],
        models: [
          { label: "Random Forest", href: "/models/random-forest" },
          { label: "CNN / Autoencoder", href: "/models/deep-learning" },
        ],
        applications: [
          { label: "故障分类报告" },
          { label: "异常分数告警" },
        ],
      },
    ],
  },
];

import type { BusinessTopic } from "./types";

export const diagnosisTopics: BusinessTopic[] = [
  {
    title: "故障前｜状态监测与异常预警",
    description: "故障还没发生时就要看到苗头，靠 CAN 时序里的早期偏移触发工程动作",
    items: [
      { label: "状态基线", note: "电流/电压/转速/扭矩/温度的正常范围和时序形态" },
      { label: "异常检测", note: "Isolation Forest 标异常片段，或 Autoencoder 重构误差" },
      { label: "趋势预测", note: "LSTM/Transformer 预测温度、振动、温升的下一段走势" },
      { label: "健康度", note: "把多通道异常分数聚合成 0-100 健康分" },
      { label: "故障预警", note: "输出可触发工程动作的风险结果，不只是模型分数" },
    ],
  },
  {
    title: "故障中｜检测、分类与定位",
    description: "故障正在发生时，工程师要的是：是什么 / 在哪里 / 严不严重",
    items: [
      { label: "故障检测", note: "判断当前是否已进入故障状态，输出时间戳" },
      { label: "故障分类", note: "在已知故障类型中识别，Random Forest/XGBoost/CNN" },
      { label: "故障定位", note: "结合信号通道、部件拓扑和 SHAP 定位可疑位置" },
      { label: "严重等级", note: "区分可继续运行 / 关注 / 立即处置" },
      { label: "多信号融合", note: "不要只依赖单一阈值或单一传感器" },
    ],
  },
  {
    title: "故障后｜根因与知识复用",
    description: "把一次故障变成下次诊断的资产，靠 RAG 和 Agent 把案例、文档、信号证据串成可复核路径",
    items: [
      { label: "根因分析", note: "从异常现象回溯候选原因，按证据排序" },
      { label: "相似案例检索", note: "历史车型/工况/故障现象相近的案例，RAG 检索" },
      { label: "故障知识图谱", note: "连接部件-症状-故障-原因-维修措施" },
      { label: "维修建议", note: "给出可执行的检查顺序和处置建议" },
      { label: "诊断 Agent", href: "/applications/agent", note: "编排数据工具、规则、知识库和模型" },
    ],
  },
];

export const diagnosisFlow = [
  { label: "业务问题", value: "故障会不会发生、正在发生什么、发生后如何定位和处置" },
  { label: "核心数据", value: "CAN 时序 / 故障码 / 维修案例 / 工况" },
  { label: "典型模型", value: "异常检测 / Random Forest / LSTM / RAG" },
  { label: "工程输出", value: "风险预警 / 故障类别 / 证据链 / 维修建议" },
];

export const calibrationTopics: BusinessTopic[] = [
  {
    title: "数据体系｜三类核心数据",
    description: "实测 + 参数 + 评价三类数据是标定 Agent 的输入，决定评价模型和优化模型能不能工作",
    items: [
      { label: "实测数据", note: "扭矩请求/电机转速/油门/实际扭矩/防抖扭矩/扭矩波动" },
      { label: "标定参数", note: "转速滤波系数/扭矩补偿系数/防抖扭矩限制/MAP 查表值" },
      { label: "驾驶性评价", note: "扭矩抖动/响应延迟/超调/Tip-in/out + 工程师评分" },
      { label: "工况标签", note: "蠕行/怠速/扭矩切换/防抖区/加速/减速" },
    ],
  },
  {
    title: "工况识别｜7 类基础工况",
    description: "内部工况识别方案目前是规则方法，聚类与时序模型是后续升级方向",
    items: [
      { label: "规则方法", note: "车速/加速度/油门/制动/坡度阈值识别 7 类基础工况" },
      { label: "聚类", note: "无标签数据中挖掘工况结构（待工程化）" },
      { label: "时序模型", note: "处理工况持续性和状态转移（待工程化）" },
    ],
  },
  {
    title: "驾驶性评价｜把主观评分转成可计算目标",
    description: "评价模型是 BO 寻优器最关键的输入，评得不准寻得再快也白搭",
    items: [
      { label: "顿挫", note: "扭矩突变/加速度跳变/冲击" },
      { label: "迟滞", note: "请求到响应的时差" },
      { label: "抖动", note: "扭矩或转速振荡幅值及衰减" },
      { label: "超调", note: "实际响应超出目标值的程度" },
      { label: "综合评分", note: "多指标按业务权重组合成单一评分，喂给 BO" },
    ],
  },
  {
    title: "参数寻优｜试验预算内的最优组合",
    description: "评价模型给好坏，优化器给下一组参数试什么，BO 是目前首选",
    items: [
      { label: "Grid Search", note: "小维度、参数少时可用，维度一大就废" },
      { label: "Genetic Algorithm", note: "复杂非凸、离散/连续混合" },
      { label: "PSO", note: "连续参数空间粒子群协同" },
      { label: "Bayesian Optimization", href: "/models/bayesian-optimization", note: "试验昂贵时的首选" },
      { label: "Multi-objective", note: "驾驶性 + 能耗 + 动力性的 Pareto 决策" },
    ],
  },
  {
    title: "工程闭环｜参数可下发、可验证、可回退",
    description: "参数必须经过安全校验，再走实车回采验证，最后由 Agent 决定收敛、继续或回退",
    items: [
      { label: "参数安全校验", note: "上下界/变化率/MAP 逻辑/业务边界" },
      { label: "实车闭环", note: "新参数下发复跑，采集新数据重评价（待接入）" },
      { label: "AI 标定 Agent", href: "/applications/agent", note: "LangChain + LangGraph 编排" },
    ],
  },
];

export const calibrationFlow = [
  { label: "业务问题", value: "如何用更少试验找到更优参数，并保证安全可下发" },
  { label: "三类数据", value: "实测数据 + 标定参数 + 驾驶性评价" },
  { label: "三个核心模型", value: "驾驶性评价模型 + 参数优化模型 + 参数校验模型" },
  { label: "当前 Demo", value: "LangChain + LangGraph 4 个子 Agent；实车测试环节尚未接入" },
];

export const calibrationLimits = [
  "实车测试尚未接入当前 Demo，验证不能被视为真实闭环",
  "工况识别仍依赖规则阈值，复杂工况需要时序或聚类模型补强",
  "缺陷诊断偏规则化，需要真实专家知识和故障样本持续喂养",
  "Human-in-the-loop 待 HMI 接入后才能真正上线",
];

export const acousticTopics: BusinessTopic[] = [
  {
    title: "声音采集｜先把数据做对",
    description: "声学诊断对采集条件极敏感，麦克风位置、采样率和工况同步没标准化就上模型是浪费",
    items: [
      { label: "麦克风", note: "固定位置/方向/安装方式，避免模型学采集差异" },
      { label: "采样率", note: "按目标频段选采样率并留够带宽" },
      { label: "采样定理", note: "采样率不够直接频率混叠" },
      { label: "工况同步", note: "转速/负载/温度必须同步，否则频率变化只是工况变化" },
    ],
  },
  {
    title: "时域分析｜看冲击和波形",
    description: "时域特征是异响识别的第一道筛选，冲击和 RMS 异常往往肉眼就能看出来",
    items: [
      { label: "波形", note: "幅值随时间的变化" },
      { label: "RMS", note: "信号整体能量" },
      { label: "峰值", note: "瞬态极值与冲击" },
      { label: "峭度", note: "对冲击性异常敏感" },
    ],
  },
  {
    title: "频域分析｜FFT",
    description: "把波形拆成频率成分，看主频、谐波、特征频带是诊断控制件异常的核心",
    items: [
      { label: "FFT", href: "/models/fft", note: "离散时域转频域" },
      { label: "主频", note: "幅值谱最大峰" },
      { label: "谐波", note: "基频整数倍频率" },
      { label: "PSD", note: "功率谱密度" },
    ],
  },
  {
    title: "时频分析｜STFT/声谱图",
    description: "转速变化或瞬态异响时，FFT 不够，需要看频率随时间怎么变",
    items: [
      { label: "STFT", note: "短时窗傅里叶，时间—频率表示" },
      { label: "Spectrogram", note: "时频能量可视化" },
      { label: "Mel", note: "感知尺度的频谱" },
      { label: "MFCC", note: "Mel 频谱压缩成特征向量" },
    ],
  },
  {
    title: "故障识别模型",
    description: "特征表出来后用 RF/XGBoost 做基线，复杂模式用 CNN 吃声谱图，故障标签少用 Autoencoder",
    items: [
      { label: "Random Forest", href: "/models/random-forest", note: "结构化频谱特征分类的默认起点" },
      { label: "CNN", note: "吃一维波形或二维声谱图" },
      { label: "Autoencoder", note: "只训练正常样本，重构误差即异常分数" },
      { label: "完整链路", note: "音频 + 工况 → FFT/STFT → 特征 → 分类 → 故障结果" },
    ],
  },
];

export const acousticFlow = [
  { label: "业务问题", value: "从控制件异响中识别异常频段并映射到故障类型" },
  { label: "核心数据", value: "音频 / 振动 / 转速 / 负载 / 温度 / 故障标签" },
  { label: "典型方法", value: "FFT / STFT / MFCC / Random Forest / CNN / Autoencoder" },
  { label: "工程输出", value: "异常频段 / 特征证据 / 故障类别 / 置信度 / 复核建议" },
];

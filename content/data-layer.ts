export const dataTypes = [
  {
    title: "时序数据",
    description: "车辆信号随时间连续变化，是诊断、标定和状态预测的共同底座",
    items: ["CAN", "电流", "电压", "转速", "扭矩", "温度", "踏板/制动"],
    project: "车辆诊断 / AI 标定",
  },
  {
    title: "标定数据",
    description: "描述 ECU 参数、MAP 与参数安全边界，决定优化器的可搜索空间",
    items: ["MAP", "标定参数", "参数边界", "参数版本", "工况对应关系"],
    project: "AI 标定",
  },
  {
    title: "声音 / 振动数据",
    description: "除了声音本身，还要同步记录转速、负载和采样条件",
    items: ["Audio", "Vibration", "Sampling Rate", "Microphone Position", "Working Condition"],
    project: "声学故障",
  },
  {
    title: "文档数据",
    description: "把历史经验和工程知识组织成可检索、可引用的信息来源",
    items: ["PDF", "Word", "故障案例", "技术规范", "维修手册", "标定经验"],
    project: "故障后诊断 / RAG",
  },
  {
    title: "标签数据",
    description: "明确“正确答案”来自哪里，包括故障类别、工况和驾驶性评分",
    items: ["故障标签", "工况标签", "健康等级", "客观指标", "主观评分"],
    project: "全部项目",
  },
];

export const dataFoundations = [
  { term: "Sample", title: "样本", copy: "模型看到的一条数据记录。时序任务中，一个样本往往是一段时间窗口，而不是单个时刻" },
  { term: "Feature", title: "特征", copy: "提供给模型用于判断的信息，例如转速均值、频带能量、温升速率或原始信号片段" },
  { term: "Label", title: "标签", copy: "监督学习中的正确答案，例如故障类型、工况类别或工程师评分" },
  { term: "Dataset", title: "数据集", copy: "按照统一字段、采样和标签标准组织起来的一组样本" },
  { term: "Target", title: "预测目标", copy: "模型最终要输出的量，例如是否故障、未来温度或驾驶性评分" },
];

export const timeSeriesBasics = [
  { title: "Timestamp", copy: "先保证不同信号在同一个时间轴上，否则相关性和先后关系会被破坏" },
  { title: "Sampling Rate", copy: "采样频率决定能够观察到多快的变化，也是声音频率分析的前提" },
  { title: "重采样", copy: "把不同来源、不同频率的数据转换到统一时间网格" },
  { title: "多信号对齐", copy: "对齐 CAN、内部观测量、音频或台架信号，建立同一事件的多源证据" },
  { title: "滑动窗口", copy: "把连续长序列切成模型可处理的小段，例如过去 10 秒预测下一时刻状态" },
  { title: "插值", copy: "在明确物理意义和缺失模式的前提下估计少量缺失点，不能无条件填满所有空缺" },
];

export const preprocessing = [
  { title: "缺失值", copy: "先判断是采集失败、信号未定义还是正常空缺，再决定删除、插值或保留" },
  { title: "异常值", copy: "区分传感器脏点与真实故障异常，避免把真正的异常当作“数据清洗掉”" },
  { title: "归一化", copy: "把数值缩放到相近范围，常用于神经网络和距离度量方法" },
  { title: "标准化", copy: "按均值与标准差处理特征，使不同量纲更便于模型学习" },
  { title: "滤波", copy: "根据工程频段和噪声来源去除不需要的频率成分" },
  { title: "去噪", copy: "目标不是让曲线“更好看”，而是保留与故障、控制或评价有关的信息" },
];

export const datasetBuilding = [
  { title: "Train", copy: "用于拟合模型参数" },
  { title: "Validation", copy: "用于选择模型、阈值和超参数，不能反复用测试集调参" },
  { title: "Test", copy: "用于最终评估泛化能力，尽量模拟真正上线时的新车辆、新工况或新时间段" },
  { title: "数据泄漏", copy: "未来信息、同一事件的近邻片段或目标变量间接进入训练数据，会造成虚假的高指标" },
  { title: "类别不平衡", copy: "真实故障往往远少于正常样本，需要结合召回率、PR 曲线、采样或代价敏感方法评估" },
];

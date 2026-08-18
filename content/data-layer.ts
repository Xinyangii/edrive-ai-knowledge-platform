export const dataTypes = [
  {
    title: "时序数据",
    description: "CAN 信号随工况连续变化，诊断和标定的共同底座",
    items: ["CAN", "电流", "电压", "转速", "扭矩", "温度", "踏板/制动"],
    project: "车辆诊断 / AI 标定",
  },
  {
    title: "标定数据",
    description: "ECU 参数、MAP 与安全边界，定义优化器搜索空间",
    items: ["MAP", "标定参数", "参数边界", "参数版本", "工况对应关系"],
    project: "AI 标定",
  },
  {
    title: "声音 / 振动数据",
    description: "音频 + 同步转速/负载，采样条件决定分析上限",
    items: ["Audio", "Vibration", "Sampling Rate", "Microphone Position", "Working Condition"],
    project: "声学故障",
  },
  {
    title: "文档数据",
    description: "故障案例、技术规范、维修手册，RAG 的知识来源",
    items: ["PDF", "Word", "故障案例", "技术规范", "维修手册", "标定经验"],
    project: "故障后诊断 / RAG",
  },
  {
    title: "标签数据",
    description: "监督学习的正确答案：故障类别、工况、驾驶性评分",
    items: ["故障标签", "工况标签", "健康等级", "客观指标", "主观评分"],
    project: "全部项目",
  },
];
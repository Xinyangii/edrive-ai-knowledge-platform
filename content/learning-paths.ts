export type LearningPath = {
  slug: string;
  title: string;
  duration: string;
  target: string;
  description: string;
  accent: "cyan" | "lime" | "orange" | "blue";
  nodes: {
    title: string;
    description?: string;
    tags?: string[];
    resources: { title: string; platform: string; level: "入门" | "进阶" | "实战"; link: string; note?: string }[];
  }[];
};

export const learningPaths: LearningPath[] = [
  {
    slug: "engineer-onboarding",
    title: "项目速通指南",
    duration: "按需查阅",
    target: "需要快速进入项目研究的一线工程研发人员",
    description: "按三大业务项目组织，每个任务节点直接关联核心模型和工程资源",
    accent: "cyan",
    nodes: [
      {
        title: "车辆诊断",
        description: "故障前预警 → 故障中定位 → 故障后根因",
        tags: ["RAG", "RF", "XGBoost", "LSTM", "SHAP"],
        resources: [
          { title: "Scikit-learn：异常与离群检测", platform: "文档", level: "进阶", link: "https://scikit-learn.org/stable/modules/outlier_detection.html", note: "Isolation Forest / One-Class SVM" },
          { title: "PyOD：Python 异常检测工具库", platform: "GitHub", level: "实战", link: "https://github.com/yzhao062/pyod", note: "30+ 算法汇总" },
          { title: "SHAP：模型解释诊断依据", platform: "文档", level: "实战", link: "https://shap.readthedocs.io/en/latest/", note: "单样本与全局解释" },
          { title: "XGBoost 论文（陈天奇）", platform: "论文", level: "进阶", link: "https://arxiv.org/abs/1603.02754", note: "理论基础" },
          { title: "PyTorch Forecasting：时序预测", platform: "GitHub", level: "实战", link: "https://github.com/jdb78/pytorch-forecasting", note: "LSTM/Transformer 时序" },
          { title: "基于多模态大模型+BGE 向量检索的故障诊断", platform: "B站", level: "实战", link: "https://www.bilibili.com/video/BV1oH4Uz2EGb/", note: "RAG 故障诊断实战" },
          { title: "GraphRAG 开源项目", platform: "GitHub", level: "进阶", link: "https://github.com/microsoft/graphrag", note: "微软知识图谱增强 RAG" },
        ],
      },
      {
        title: "AI 自主标定",
        description: "工况识别 → 驾驶性评价 → 参数寻优 → 闭环验证",
        tags: ["BO", "PPO", "SAC", "Agent", "LangGraph"],
        resources: [
          { title: "BoTorch：约束与多目标贝叶斯优化", platform: "文档", level: "实战", link: "https://botorch.org/docs/tutorials", note: "高斯过程 + 采集函数" },
          { title: "bayesian-optimization 开源库", platform: "GitHub", level: "实战", link: "https://github.com/bayesian-optimization/BayesianOptimization", note: "Python 贝叶斯优化入门" },
          { title: "Stable Baselines3 文档", platform: "文档", level: "进阶", link: "https://stable-baselines3.readthedocs.io/", note: "PPO / SAC 算法库" },
          { title: "PPO 论文", platform: "论文", level: "进阶", link: "https://arxiv.org/abs/1707.06347", note: "Proximal Policy Optimization" },
          { title: "LangChain 官方文档", platform: "文档", level: "实战", link: "https://docs.langchain.com/oss/python/langchain/overview", note: "Agent 与工具链" },
          { title: "LangGraph 官方文档", platform: "文档", level: "实战", link: "https://langchain-ai.github.io/langgraph/", note: "有状态工作流" },
          { title: "MathWorks：EV 与 MATLAB 代理模型", platform: "GitHub", level: "进阶", link: "https://github.com/mathworks/EV-with-MATLAB-and-Simulink", note: "电动汽车仿真" },
        ],
      },
      {
        title: "控制件声学故障",
        description: "标准采集 → 信号处理 → 特征工程 → 故障识别",
        tags: ["FFT", "STFT", "MFCC", "CNN", "RF"],
        resources: [
          { title: "FFT 工程实践快速入门", platform: "B站", level: "进阶", link: "https://www.bilibili.com/video/BV1AS4y1Q7hT/", note: "采样、FFT、频谱分析" },
          { title: "Librosa 官方文档：音频特征", platform: "文档", level: "实战", link: "https://librosa.org/doc/latest/feature.html", note: "Mel / MFCC / STFT" },
          { title: "AudioSet：大规模音频事件数据集", platform: "GitHub", level: "进阶", link: "https://github.com/audioset/ontology", note: "Google 音频分类" },
          { title: "panns_inference：预训练音频分类模型", platform: "GitHub", level: "实战", link: "https://github.com/qiuqiangkong/audioset_tagging_cnn", note: "CNN 音频分类即用" },
          { title: "MATLAB：音频特征与机器学习分类", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/watch?v=XGsKTHJI1sM", note: "声音识别工作流" },
          { title: "Scikit-learn RandomForest", platform: "文档", level: "进阶", link: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html", note: "结构化特征分类" },
        ],
      },
    ],
  },
];
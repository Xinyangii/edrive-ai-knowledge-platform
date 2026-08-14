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
    slug: "ai-foundation",
    title: "AI 零基础入门",
    duration: "4 周",
    target: "第一次系统接触 AI 的电驱工程人员",
    description: "从工程问题出发，理解 AI 能做什么、需要哪些数据、如何评价模型、怎样进入工程系统",
    accent: "cyan",
    nodes: [
      {
        title: "W1｜业务与数据",
        description: "判断一个问题是否适合用 AI，并完成 CSV 清洗与可视化",
        resources: [
          { title: "吴恩达：AI For Everyone（中字）", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1gE411M7Eg/", note: "建立 AI 项目共同语言" },
          { title: "Python 数据分析：NumPy / Pandas / Matplotlib", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1hx411d7jb/", note: "CSV 清洗与可视化" },
        ],
      },
      {
        title: "W2｜模型基础",
        description: "理解分类、回归、异常检测与常见评价指标",
        resources: [
          { title: "StatQuest：机器学习与统计", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/@statquest", note: "回归、分类、模型评估" },
          { title: "3Blue1Brown：神经网络的直觉", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", note: "神经网络直觉" },
        ],
      },
      {
        title: "W3｜最小实战",
        description: "选择一个真实场景完成可运行分析或模型",
        resources: [
          { title: "Scikit-learn：异常与离群检测", platform: "文档", level: "进阶", link: "https://scikit-learn.org/stable/modules/outlier_detection.html", note: "异常检测方法选学" },
          { title: "SHAP：让模型解释诊断依据", platform: "文档", level: "实战", link: "https://shap.readthedocs.io/en/latest/", note: "可解释诊断" },
        ],
      },
      {
        title: "W4｜工程复盘",
        description: "说明证据、边界、风险和下一轮验证计划",
        resources: [
          { title: "AI 标定 Agent 项目文档", platform: "内部", level: "实战", link: "#", note: "工程闭环边界示例" },
        ],
      },
    ],
  },
  {
    slug: "diagnosis",
    title: "车辆诊断学习路径",
    duration: "专题路径",
    target: "故障预测、诊断、健康管理相关人员",
    description: "从车辆时序数据出发，覆盖异常检测、故障分类、可解释性和诊断 Agent",
    accent: "cyan",
    nodes: [
      {
        title: "车辆时序数据",
        description: "CAN、电流、电压、转速、扭矩、温度、踏板/制动",
        resources: [
          { title: "Python 数据分析：NumPy / Pandas / Matplotlib", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1hx411d7jb/", note: "数据清洗与可视化" },
        ],
      },
      {
        title: "异常检测",
        description: "Isolation Forest、One-Class SVM、Autoencoder",
        resources: [
          { title: "Scikit-learn：异常与离群检测", platform: "文档", level: "进阶", link: "https://scikit-learn.org/stable/modules/outlier_detection.html", note: "异常检测方法选学" },
          { title: "时序异常检测与预测性维护", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/watch?v=uiAOqrnwQMI", note: "MathWorks 工程案例" },
        ],
      },
      {
        title: "故障分类",
        description: "Random Forest、XGBoost、混淆矩阵、召回率",
        resources: [
          { title: "StatQuest：机器学习与统计", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/@statquest", note: "分类与评估" },
          { title: "SHAP：让模型解释诊断依据", platform: "文档", level: "实战", link: "https://shap.readthedocs.io/en/latest/", note: "可解释分类" },
        ],
      },
      {
        title: "时序模型",
        description: "LSTM、Transformer、趋势预测、健康评估",
        resources: [
          { title: "3Blue1Brown：神经网络的直觉", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", note: "神经网络直觉" },
        ],
      },
      {
        title: "可解释诊断",
        description: "特征重要性、SHAP、混淆矩阵、PR 曲线",
        resources: [
          { title: "SHAP：让模型解释诊断依据", platform: "文档", level: "实战", link: "https://shap.readthedocs.io/en/latest/", note: "单样本与全局解释" },
        ],
      },
      {
        title: "RAG / Agent",
        description: "历史案例检索、诊断 Agent",
        resources: [
          { title: "LangChain 官方文档", platform: "文档", level: "实战", link: "https://python.langchain.com/", note: "Agent 与工具链" },
          { title: "LangGraph 官方文档", platform: "文档", level: "实战", link: "https://langchain-ai.github.io/langgraph/", note: "有状态工作流" },
        ],
      },
    ],
  },
  {
    slug: "calibration",
    title: "AI 标定学习路径",
    duration: "专题路径",
    target: "驾驶性标定、参数优化和自动化研发人员",
    description: "从工况与驾驶性评价数据进入代理模型、参数寻优、安全约束和 Agent 闭环",
    accent: "lime",
    nodes: [
      {
        title: "标定数据",
        description: "实测车辆数据、待标定参数、MAP、驾驶性评价",
        resources: [
          { title: "Python 数据分析：NumPy / Pandas / Matplotlib", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1hx411d7jb/", note: "数据清洗" },
        ],
      },
      {
        title: "工况识别",
        description: "规则阈值、聚类、时序模型",
        resources: [
          { title: "汽车故障诊断与维修技术", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV15FemztERi/", note: "工程诊断基础" },
        ],
      },
      {
        title: "驾驶性评价",
        description: "扭矩抖动、响应延迟、超调、Tip-in/out",
        resources: [
          { title: "AI 标定项目背景文档", platform: "内部", level: "实战", link: "#", note: "三类数据与评价指标" },
        ],
      },
      {
        title: "代理模型",
        description: "驾驶性客观评价模型",
        resources: [
          { title: "StatQuest：机器学习与统计", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/@statquest", note: "回归与评价" },
        ],
      },
      {
        title: "贝叶斯/多目标优化",
        description: "Bayesian Optimization、多目标决策",
        resources: [
          { title: "15 分钟理解贝叶斯优化", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1h8411T7eQ/", note: "贝叶斯优化直觉" },
          { title: "Bayesian Optimization 原理与工程实战", platform: "B站", level: "进阶", link: "https://www.bilibili.com/video/BV1aa41167oS?p=1", note: "高斯过程与采集函数" },
          { title: "BoTorch：约束与多目标贝叶斯优化", platform: "文档", level: "实战", link: "https://botorch.org/tutorials/", note: "工程化优化" },
        ],
      },
      {
        title: "闭环 Agent",
        description: "LangChain + LangGraph 标定工作流",
        resources: [
          { title: "LangChain 官方文档", platform: "文档", level: "实战", link: "https://python.langchain.com/", note: "Agent 与工具链" },
          { title: "LangGraph 官方文档", platform: "文档", level: "实战", link: "https://langchain-ai.github.io/langgraph/", note: "有状态工作流" },
          { title: "AI 标定 Agent Demo 文档", platform: "内部", level: "实战", link: "#", note: "内部项目方案" },
        ],
      },
    ],
  },
  {
    slug: "acoustic",
    title: "声学故障学习路径",
    duration: "专题路径",
    target: "NVH、控制件异响和信号分析相关人员",
    description: "先理解采样与频率，再学习 FFT、STFT、声谱图和故障识别模型",
    accent: "orange",
    nodes: [
      {
        title: "声音采集",
        description: "麦克风、采样率、采样定理、工况同步",
        resources: [
          { title: "信号与系统：从频谱到傅里叶变换", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1NF411h7om/", note: "频谱与傅里叶基础" },
        ],
      },
      {
        title: "采样与时域",
        description: "波形、RMS、峰值、峭度",
        resources: [
          { title: "信号与系统：从频谱到傅里叶变换", platform: "B站", level: "入门", link: "https://www.bilibili.com/video/BV1NF411h7om/", note: "时域与频域关系" },
        ],
      },
      {
        title: "FFT",
        description: "快速傅里叶变换、频谱、谐波、PSD",
        resources: [
          { title: "FFT 工程实践快速入门", platform: "B站", level: "进阶", link: "https://www.bilibili.com/video/BV1AS4y1Q7hT/", note: "采样、FFT、频谱分析" },
          { title: "Librosa 官方文档：音频特征", platform: "文档", level: "实战", link: "https://librosa.org/doc/latest/feature.html", note: "音频特征工程" },
        ],
      },
      {
        title: "STFT",
        description: "短时傅里叶变换、声谱图",
        resources: [
          { title: "Librosa 官方文档：音频特征", platform: "文档", level: "实战", link: "https://librosa.org/doc/latest/feature.html", note: "时频特征" },
        ],
      },
      {
        title: "音频特征",
        description: "Mel、MFCC、频谱特征",
        resources: [
          { title: "Librosa 官方文档：音频特征", platform: "文档", level: "实战", link: "https://librosa.org/doc/latest/feature.html", note: "Mel / MFCC 等" },
        ],
      },
      {
        title: "分类/异常检测",
        description: "Random Forest、CNN、Autoencoder",
        resources: [
          { title: "StatQuest：机器学习与统计", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/@statquest", note: "分类与集成学习" },
          { title: "MATLAB：音频特征与机器学习分类", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/watch?v=XGsKTHJI1sM", note: "声音识别工作流" },
        ],
      },
    ],
  },
  {
    slug: "agent",
    title: "RAG / Agent 开发路径",
    duration: "专题路径",
    target: "希望把模型接入工程流程的开发人员",
    description: "从 LLM 基础到企业知识检索，再到工具调用、状态管理和 LangGraph 工作流",
    accent: "blue",
    nodes: [
      {
        title: "LLM",
        description: "Transformer、Token、Embedding",
        resources: [
          { title: "3Blue1Brown：神经网络的直觉", platform: "YouTube", level: "进阶", link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi", note: "神经网络与梯度下降" },
        ],
      },
      {
        title: "Prompt",
        description: "Prompt 工程、Structured Output、Function Calling",
        resources: [
          { title: "OpenAI Prompt Engineering 指南", platform: "文档", level: "入门", link: "https://platform.openai.com/docs/guides/prompt-engineering", note: "Prompt 最佳实践" },
          { title: "LangChain Prompts 文档", platform: "文档", level: "进阶", link: "https://python.langchain.com/docs/concepts/prompts/", note: "结构化 Prompt 与模板" },
        ],
      },
      {
        title: "Embedding",
        description: "文本嵌入、向量表示",
        resources: [
          { title: "OpenAI Embeddings 指南", platform: "文档", level: "进阶", link: "https://platform.openai.com/docs/guides/embeddings", note: "Embedding 基础" },
        ],
      },
      {
        title: "RAG",
        description: "文档解析、Chunking、Embedding、Vector Database、Retrieval、Generation",
        resources: [
          { title: "LangChain RAG 官方教程", platform: "文档", level: "实战", link: "https://python.langchain.com/docs/tutorials/rag/", note: "从零构建 RAG" },
          { title: "RAG 项目：历史故障案例检索", platform: "内部", level: "实战", link: "#", note: "工程应用示例" },
        ],
      },
      {
        title: "Tool Calling",
        description: "工具定义、调用、结果回传",
        resources: [
          { title: "LangChain Tools 文档", platform: "文档", level: "进阶", link: "https://python.langchain.com/docs/concepts/tools/", note: "工具与调用" },
          { title: "OpenAI Function Calling 指南", platform: "文档", level: "进阶", link: "https://platform.openai.com/docs/guides/function-calling", note: "Function Calling 基础" },
        ],
      },
      {
        title: "State / Workflow",
        description: "状态管理、Human-in-the-loop",
        resources: [
          { title: "LangGraph 官方文档", platform: "文档", level: "实战", link: "https://langchain-ai.github.io/langgraph/", note: "图状态机与工作流" },
          { title: "LangGraph RAG / Agent 示例", platform: "文档", level: "实战", link: "https://langchain-ai.github.io/langgraph/tutorials/", note: "官方示例" },
        ],
      },
      {
        title: "LangGraph",
        description: "用 LangGraph 编排多 Agent 工作流",
        resources: [
          { title: "LangGraph 官方教程", platform: "文档", level: "实战", link: "https://langchain-ai.github.io/langgraph/tutorials/", note: "官方 Tutorials" },
          { title: "AI 标定 Agent Demo 文档", platform: "内部", level: "实战", link: "#", note: "内部工程实践" },
        ],
      },
    ],
  },
];

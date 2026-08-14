export type DirectionDetail = {
  slug: string;
  title: string;
  english: string;
  summary: string;
  overview: string[];
  classics: {
    title: string;
    description: string;
    principle: string[];
    links: { title: string; href: string; note?: string }[];
  }[];
  applications: {
    project: string;
    href: string;
    scenarios: string[];
  }[];
};

export const modelDirections: DirectionDetail[] = [
  {
    slug: "machine-learning",
    title: "机器学习 / 集成学习",
    english: "Machine Learning & Ensemble",
    summary: "诊断和声学项目里最常用的一类方法。从结构化特征表出发，用监督学习做分类和回归，集成学习处理非线性关系",
    overview: [
      "工程上 80% 的故障分类、异常检测、驾驶性评价问题在结构化数据上就能解决。机器学习的价值在于用一张特征表快速判断数据是否真的有用。",
      "集成学习把多棵差异化的弱学习器组合起来，降低单模型方差，是工程基线首选。",
    ],
    classics: [
      {
        title: "Random Forest",
        description: "多棵决策树投票，给出特征重要性，诊断和声学项目的默认起点",
        principle: [
          "Bootstrap 抽样：每棵树看到不同样本子集",
          "特征随机性：分裂时只看随机一部分特征，降低树间相关性",
          "特征重要性来自特征被替换后模型性能下降程度",
        ],
        links: [
          { title: "Random Forest 知识页", href: "/models/random-forest", note: "本站" },
          { title: "Scikit-learn RandomForestClassifier", href: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html", note: "官方文档" },
          { title: "StatQuest：Random Forest", href: "https://www.youtube.com/watch?v=J4Wdy0Wc_xQ", note: "YouTube" },
        ],
      },
      {
        title: "XGBoost",
        description: "梯度提升决策树的高效实现，结构化数据竞赛标杆",
        principle: [
          "加法模型：最终预测是所有树的预测之和",
          "每棵新树学习前序模型残差（负梯度）",
          "正则化：在目标函数中加叶子数和权重的惩罚",
        ],
        links: [
          { title: "XGBoost 官方文档", href: "https://xgboost.readthedocs.io/en/stable/", note: "官方" },
          { title: "XGBoost 论文（陈天奇）", href: "https://arxiv.org/abs/1603.02754", note: "论文" },
        ],
      },
      {
        title: "SVM",
        description: "通过最大间隔超平面分类，小样本高维特征上仍有价值",
        principle: [
          "最大化最近样本到超平面的距离",
          "支持向量决定最终边界",
          "核函数把样本映射到高维，处理非线性可分",
        ],
        links: [
          { title: "Scikit-learn SVM", href: "https://scikit-learn.org/stable/modules/svm.html", note: "官方" },
        ],
      },
      {
        title: "Isolation Forest",
        description: "异常检测专用，靠随机切分把异常点快速孤立出来",
        principle: [
          "异常样本特征值与多数偏离，少量随机切分就能被孤立",
          "路径长度越短，越可能是异常",
        ],
        links: [
          { title: "Scikit-learn IsolationForest", href: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.IsolationForest.html", note: "官方" },
        ],
      },
    ],
    applications: [
      {
        project: "车辆诊断",
        href: "/business/diagnosis",
        scenarios: [
          "Random Forest 故障分类：温度/电流/转速统计量喂入，输出故障类别和概率，作为后续 SHAP 解释的输入",
          "Isolation Forest 异常检测：不做故障分类时先标出异常片段，让工程师先看哪些是值得看",
          "XGBoost 严重等级：多分类预测严重等级，按召回率和 PR 曲线评估",
        ],
      },
      {
        project: "AI 自主标定",
        href: "/business/calibration",
        scenarios: [
          "Random Forest / XGBoost 评价模型：参数 + 工况 + 实测数据 → 驾驶性评分，作为 Bayesian Optimization 的目标函数",
          "Isolation Forest 异常试验识别：训练 BO 之前先剔除明显异常的台架数据",
          "特征重要性筛选：从上百个标定参数中筛出对驾驶性影响最大的 10-20 个",
        ],
      },
      {
        project: "控制件声学故障",
        href: "/business/acoustic",
        scenarios: [
          "Random Forest / SVM 故障分类：FFT 频带能量 + Mel 频谱 + 工况 → 故障类型",
          "Isolation Forest 异常帧检测：先于故障分类标出异常帧",
          "特征重要性判断哪些频段对故障区分贡献最大，反过来指导传感器布点和特征工程",
        ],
      },
    ],
  },
  {
    slug: "reinforcement-learning",
    title: "强化学习",
    english: "Reinforcement Learning",
    summary: "让智能体在环境中试错，学习从状态到动作的策略。电驱场景目前主要落在仿真预标定、能量管理、控制参数寻优",
    overview: [
      "RL 不是拟合输入输出，而是学一个让长期回报最大的策略。状态-动作-奖励-策略-环境五要素构成闭环。",
      "电驱工程里 RL 的强项是连续决策：扭矩分配、能量管理、模式切换、参数寻优。这些任务的评价函数无法解析求导，只能通过试错。",
    ],
    classics: [
      {
        title: "Q-Learning",
        description: "无模型、离策略的经典算法，维护状态-动作值函数",
        principle: [
          "Q(s,a) 表示在状态 s 执行动作 a 后的期望累积回报",
          "Bellman 方程：用当前奖励和下一状态最大 Q 值更新当前 Q 值",
          "ε-greedy 平衡探索与利用",
        ],
        links: [
          { title: "Stable Baselines3 文档", href: "https://stable-baselines3.readthedocs.io/", note: "算法库" },
          { title: "Sutton & Barto RL 教材", href: "http://incompleteideas.net/book/the-book-2nd.html", note: "经典教材" },
        ],
      },
      {
        title: "Policy Gradient",
        description: "直接参数化策略并优化，适合连续动作空间",
        principle: [
          "用神经网络直接输出动作分布",
          "目标函数是期望累积奖励",
          "策略梯度按轨迹回报调整动作概率",
        ],
        links: [
          { title: "OpenAI Spinning Up：VPG", href: "https://spinningup.openai.com/en/latest/algorithms/vpg.html", note: "OpenAI 教程" },
        ],
      },
      {
        title: "PPO",
        description: "限制单次更新幅度，工程最常用的策略优化算法",
        principle: [
          "重要性采样：用旧策略采集的数据估计新策略",
          "裁剪目标函数：限制新旧策略概率比",
          "多次小批量更新提高样本效率",
        ],
        links: [
          { title: "Stable Baselines3 PPO", href: "https://stable-baselines3.readthedocs.io/en/master/modules/ppo.html", note: "算法库" },
          { title: "PPO 论文", href: "https://arxiv.org/abs/1707.06347", note: "论文" },
        ],
      },
      {
        title: "SAC",
        description: "Soft Actor-Critic，最大熵框架，适合机器人/控制类连续任务",
        principle: [
          "在最大化回报的同时最大化策略熵，鼓励探索",
          "双 Q 网络 + 经验回放，训练稳定",
          "在能量管理、机器人控制里比 PPO 样本效率更高",
        ],
        links: [
          { title: "Stable Baselines3 SAC", href: "https://stable-baselines3.readthedocs.io/en/master/modules/sac.html", note: "算法库" },
        ],
      },
    ],
    applications: [
      {
        project: "AI 自主标定",
        href: "/business/calibration",
        scenarios: [
          "仿真预标定：在车辆动力学仿真器里用 PPO 学扭矩控制 / 防抖策略，再下发到实车验证",
          "BO + RL 组合：BO 找参数组，PPO 评价工况策略",
          "边界安全网：RL 输出的参数必须经过参数校验工具拦截，不直接下发",
        ],
      },
      {
        project: "混动 / 纯电能量管理",
        href: "/business/calibration",
        scenarios: [
          "用 SAC 或 PPO 学混动模式切换和能量分配策略，目标函数是百公里油耗 + 驾驶性",
          "状态用 SOC、需求扭矩、驾驶风格；动作是发动机启停和扭矩分配",
          "训练必须在仿真器完成，实车前先做大量回灌仿真测试",
        ],
      },
      {
        project: "声学故障隔离策略",
        href: "/business/acoustic",
        scenarios: [
          "用 RL 决定采集策略：工况多时让智能体决定下一个测点位置或频段，提高定位效率",
          "状态：当前已采集数据；动作：下一步测点 / 测段；奖励：故障定位置信度提升",
        ],
      },
    ],
  },
  {
    slug: "deep-learning",
    title: "大模型 / 深度学习",
    english: "Deep Learning & Large Models",
    summary: "CNN 处理一维信号和二维声谱图，LSTM/Transformer 处理长时序，RAG 和 Agent 让大模型在企业知识库和工程工作流中真正可用",
    overview: [
      "DL 适合原始信号复杂、人工特征设计困难的任务。CNN 擅长局部模式，LSTM 擅长序列，Transformer 擅长长距离依赖。",
      "大模型在工程中不承担精确计算，承担文本理解、报告生成、Agent 规划和 RAG 问答。要的是把已有能力接起来。",
    ],
    classics: [
      {
        title: "神经网络与反向传播",
        description: "多层非线性变换自动学习特征表达",
        principle: [
          "神经元：加权求和 + 激活函数",
          "前向传播得到预测",
          "反向传播按损失梯度更新权重",
        ],
        links: [
          { title: "PyTorch 入门", href: "https://pytorch.org/tutorials/beginner/basics/intro.html", note: "官方教程" },
          { title: "3Blue1Brown 神经网络", href: "https://www.yt-dl.com/watch?v?v=aircAruvnKk", note: "可视化讲解" },
        ],
      },
      {
        title: "CNN",
        description: "卷积神经网络，局部模式提取的标配",
        principle: [
          "卷积核滑动提取局部特征，参数共享",
          "池化降采样，平移不变",
          "堆叠提取从边缘到语义的层次特征",
        ],
        links: [
          { title: "PyTorch CNN 教程", href: "https://pytorch.org/tutorials/beginner/blitz/cifar10_tutorial.html", note: "官方" },
          { title: "CS231n 课程", href: "http://cs231n.stanford.edu/", note: "斯坦福课程" },
        ],
      },
      {
        title: "LSTM",
        description: "长短期记忆网络，门控解决长程依赖",
        principle: [
          "遗忘门 / 输入门 / 输出门",
          "细胞状态像传送带贯穿时间步",
          "比 RNN 更适合长序列",
        ],
        links: [
          { title: "Colah：Understanding LSTM", href: "https://colah.github.io/posts/2015-08-Understanding-LSTMs/", note: "经典博客" },
        ],
      },
      {
        title: "Transformer",
        description: "自注意力机制，是大模型的基础架构",
        principle: [
          "自注意力：每位置对所有位置计算注意力",
          "多头注意力并行学习不同子空间",
          "位置编码补上顺序信息",
          "预训练 + 微调是工程范式",
        ],
        links: [
          { title: "Jay Alammar：Transformer", href: "https://jalammar.github.io/illustrated-transformer/", note: "可视化" },
          { title: "Hugging Face Transformers", href: "https://huggingface.co/docs/transformers/", note: "官方文档" },
        ],
      },
      {
        title: "RAG",
        description: "检索增强生成，让大模型基于企业知识回答",
        principle: [
          "文档解析与切分",
          "Embedding 编码 + 向量索引",
          "先检索相关 Chunk 再交给 LLM 生成，保留来源",
        ],
        links: [
          { title: "RAG 知识页", href: "/applications/rag", note: "本站" },
          { title: "LangChain RAG Tutorial", href: "https://python.langchain.com/docs/tutorials/rag/", note: "官方教程" },
        ],
      },
      {
        title: "Agent",
        description: "用 LLM 组织工具和流程，完成多步工程任务",
        principle: [
          "LLM 负责理解和选工具，精确计算交给专用工具",
          "State 跨步骤共享信息",
          "Workflow 定义路由、循环、终止和人工审批",
        ],
        links: [
          { title: "Agent 知识页", href: "/applications/agent", note: "本站" },
          { title: "LangGraph 文档", href: "https://langchain-ai.github.io/langgraph/", note: "官方" },
        ],
      },
    ],
    applications: [
      {
        project: "车辆诊断",
        href: "/business/diagnosis",
        scenarios: [
          "LSTM/Transformer 时序预测：把 CAN 多源时序做趋势预测和健康评估",
          "CNN 一维信号：直接吃原始振动或声音波形做异常检测",
          "RAG + Agent 知识问答：历史案例、维修手册、技术规范检索后让 LLM 出排查建议",
        ],
      },
      {
        project: "AI 自主标定",
        href: "/business/calibration",
        scenarios: [
          "LSTM 驾驶性评价：时序驾驶数据 → 综合评分",
          "Transformer 工况识别：替代规则阈值，处理复杂持续工况",
          "Agent 编排：LLM 做 Planner，把 Condition / Diagnosis / Calibration / Verification 串成工作流",
          "注意：LLM 不直接出可下发参数，必须接优化器和安全校验",
        ],
      },
      {
        project: "控制件声学故障",
        href: "/business/acoustic",
        scenarios: [
          "CNN 声谱图分类：把 STFT 声谱图送入 2D CNN，识别异响模式",
          "Autoencoder 异常检测：只训练正常样本的频谱重构，重构误差大即异常",
          "Transformer 长音频建模：跨秒级甚至跨工况捕捉异常时序依赖",
        ],
      },
    ],
  },
];

export const directionSlugs = modelDirections.map((d) => d.slug);

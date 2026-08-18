export type AppItem = {
  label: string;
  href: string;
};

export type ApplicationGroup = {
  id: string;
  title: string;
  description: string;
  items: AppItem[];
};

export const applicationTree: ApplicationGroup[] = [
  {
    id: "deployment",
    title: "模型推理与部署",
    description: "把 Notebook 里的模型变成工程系统可以调用的服务",
    items: [
      { label: "模型文件", href: "https://scikit-learn.org/stable/model_persistence.html" },
      { label: "Inference", href: "https://pytorch.org/tutorials/beginner/saving_loading_models.html" },
      { label: "API", href: "https://fastapi.tiangolo.com/tutorial/" },
      { label: "FastAPI", href: "https://fastapi.tiangolo.com/" },
    ],
  },
  {
    id: "llm-app",
    title: "大模型应用",
    description: "让 LLM 输出结构化结果、调用工具，处理文本或多模态工程输入",
    items: [
      { label: "Prompt", href: "https://platform.openai.com/docs/guides/prompt-engineering" },
      { label: "Structured Output", href: "https://platform.openai.com/docs/guides/structured-outputs" },
      { label: "Function Calling", href: "https://platform.openai.com/docs/guides/function-calling" },
      { label: "Multimodal", href: "https://platform.openai.com/docs/guides/vision" },
    ],
  },
  {
    id: "rag",
    title: "RAG",
    description: "把企业内部故障案例和技术规范检索出来，让大模型基于证据回答",
    items: [
      { label: "文档解析", href: "https://docs.langchain.com/oss/python/langchain/docs/how_to/document_loader_pdf/" },
      { label: "Chunking", href: "https://docs.langchain.com/oss/python/langchain/docs/concepts/text_splitters/" },
      { label: "Embedding", href: "https://platform.openai.com/docs/guides/embeddings" },
      { label: "Vector Database", href: "https://www.pinecone.io/learn/vector-database/" },
      { label: "Retrieval", href: "https://docs.langchain.com/oss/python/langchain/docs/concepts/retrieval/" },
      { label: "Generation", href: "https://docs.langchain.com/oss/python/langchain/docs/concepts/rag/" },
    ],
  },
  {
    id: "agent",
    title: "Agent",
    description: "用 LLM 把工具、状态、流程串成多步工程任务，承担诊断和标定里的编排角色",
    items: [
      { label: "LLM", href: "https://platform.openai.com/docs/" },
      { label: "Tool", href: "https://docs.langchain.com/oss/python/langchain/docs/concepts/tools/" },
      { label: "State", href: "https://langchain-ai.github.io/langgraph/concepts/state/" },
      { label: "Memory", href: "https://docs.langchain.com/oss/python/langchain/docs/concepts/memory/" },
      { label: "Workflow", href: "https://langchain-ai.github.io/langgraph/concepts/" },
      { label: "Human-in-the-loop", href: "https://langchain-ai.github.io/langgraph/concepts/human_in_the_loop/" },
    ],
  },
  {
    id: "frameworks",
    title: "框架",
    description: "构建模型调用、检索、有状态工作流的工程框架",
    items: [
      { label: "LangChain", href: "https://docs.langchain.com/oss/python/langchain/" },
      { label: "LangGraph", href: "https://langchain-ai.github.io/langgraph/" },
    ],
  },
  {
    id: "engineering",
    title: "AI 工程化",
    description: "让应用具备版本、日志、监控、安全和持续维护能力",
    items: [
      { label: "服务部署", href: "https://fastapi.tiangolo.com/deployment/" },
      { label: "数据版本", href: "https://dvc.org/" },
      { label: "模型版本", href: "https://mlflow.org/" },
      { label: "日志", href: "https://docs.python.org/3/library/logging.html" },
      { label: "Monitoring", href: "https://prometheus.io/docs/introduction/overview/" },
      { label: "Safety", href: "https://huggingface.co/docs/transformers/main/en/safety_and_security" },
    ],
  },
];

export const agentBusinessLinks = [
  { title: "AI 标定 Agent", href: "/business/calibration", copy: "工况识别 → 缺陷诊断 → 参数迭代 → 实车验证" },
  { title: "故障诊断 Agent", href: "/business/diagnosis", copy: "信号分析 → 故障规则 → 历史案例 → 根因建议" },
  { title: "工程知识 RAG", href: "/applications/rag", copy: "技术规范、维修手册、标定经验检索后由 LLM 出回答" },
];

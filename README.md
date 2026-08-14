# 电驱智学｜智能电驱 AI 知识与工程实践平台

面向智能电驱工程人员的 AI 学习与工程实践网站。平台不再以“课程资源导航”为主骨架，而是固定采用：

**业务层 → 数据层 → 模型层 → 应用层**

三条真实项目主线贯穿四层知识体系：

- 车辆诊断：故障前 / 故障中 / 故障后
- AI 自主标定：评价 / 寻优 / 校验 / 实车闭环 / Agent
- 控制件声学故障：采集 / 时域 / 频域 / 时频 / 特征 / 故障识别

## 技术栈

- Next.js 16 / React 19
- vinext + Vite
- TypeScript
- Tailwind CSS 4（当前主要视觉样式仍由 `app/globals.css` 维护）
- Cloudflare Sites / Workers 兼容构建

## 本轮重构重点（v4 资源与路径重构）

- **资源从整页堆叠改为按学习路径节点挂载**：原 `/resources` 页面与资源库组件已删除，资源分散到 5 条学习路径的具体知识点节点中
- **学习路径节点可展开**：`/learning-paths` 每条路径由若干可展开的知识点节点组成，每个节点挂载 1-3 个外部课程/官方文档/内部案例
- **应用层标签全部可点**：`/applications` 中 6 张应用卡片下的所有标签（Prompt、Function Calling、Chunking、Vector Database、LangChain、LangGraph、Monitoring、Safety 等）均链接到对应学习资源
- **Agent / LangChain / LangGraph 资源补齐**：新增 OpenAI Prompt/Function Calling/Embeddings、LangChain 官方文档、LangGraph 官方教程、RAG Tutorial 等
- **标题整齐化**：删除页面标题中大量 `<br />` 换行，标题尽量保持单行，避免布局不整齐
- **删除重复页面**：移除 `/resources` 页面及 `ResourceLibrary`、`resources.ts` 等旧资源模块
- 保留 v3 视觉风格：Apple 风 Hero、圆角卡片、柔和阴影、浅灰底白卡、导航 mega 菜单、主脉络 Spine

## 目录

```text
app/
├── page.tsx              # Hero + Spine 主脉络 + 四层地图 + 入口卡
├── business/             # 业务层总览 + 3 个专题页
├── data/page.tsx
├── models/               # 总览 + [slug] 知识详情
├── applications/         # 总览 + [slug] 知识详情
├── projects/page.tsx
└── learning-paths/page.tsx

components/
├── site-navigation.tsx   # 导航 + 知识体系 mega 菜单
├── spine.tsx             # 首页主脉络
├── topic-tree.tsx        # 业务专题知识链（悬停展开）
├── knowledge-map.tsx     # 四层知识地图
├── knowledge-detail.tsx  # 知识详情统一模板
└── ...

content/
├── site.ts               # 四层 + 导航面板 + 主脉络数据
├── learning-paths.ts     # 5 条学习路径，每个节点挂载资源
├── applications.ts       # 应用层卡片 + 每个标签的资源链接
├── business.ts / data-layer.ts / models.ts
├── knowledge.ts          # 5 个代表性知识详情
└── types.ts
```

## 启动

要求 Node.js `>=22.13.0`。

```bash
npm install
npm run dev
```

生产构建：

```bash
npm run build
npm run start
```

质量检查：

```bash
npm run lint
npm test
```

`npm test` 会先执行生产构建，然后验证首页、四层知识页和代表性知识详情页的服务端渲染结果。

## 内容维护方式

当前版本没有额外引入 MDX，避免在架构重构阶段增加复杂度。知识内容采用 TypeScript 结构化数据组织：

- 业务内容：`content/business.ts`
- 数据层：`content/data-layer.ts`
- 模型树：`content/models.ts`
- 应用层：`content/applications.ts`
- 学习路径与节点资源：`content/learning-paths.ts`
- 代表知识详情：`content/knowledge.ts`

后续如果知识量明显扩大，可以把详情内容迁移到 MDX；现有 UI 组件和路由结构无需推倒重来。

## AI 标定内容来源

AI 标定专题优先依据现有内部方案整理，包括：三类数据、三个核心模型、工况识别方案、LangChain + LangGraph Agent Demo，以及当前“实车测试尚未接入”等工程边界。没有把工作流原型描述成已完成的真实实车闭环。

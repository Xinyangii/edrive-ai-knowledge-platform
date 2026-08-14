export type Accent = "cyan" | "lime" | "orange" | "blue";

export type LayerKey = "business" | "data" | "models" | "applications";

export type Track = "通用基础" | "车辆诊断" | "AI标定" | "声学故障";
export type Level = "入门" | "进阶" | "实战";
export type Platform = "B站" | "YouTube" | "文档";

export type Resource = {
  id: string;
  track: Track;
  level: Level;
  platform: Platform;
  title: string;
  description: string;
  duration: string;
  link: string;
  learn: string;
  tags?: string[];
};

export type KnowledgeLink = {
  label: string;
  href?: string;
  note?: string;
};

export type BusinessTopic = {
  title: string;
  description: string;
  items: KnowledgeLink[];
};

export type KnowledgeDetail = {
  slug: string;
  title: string;
  english: string;
  category: string;
  layer: "模型层" | "应用层";
  difficulty: number;
  summary: string;
  why: string;
  engineeringProblem: string;
  inputs: string[];
  outputs: string[];
  principle: string[];
  diagram: string[];
  exampleTitle: string;
  example: string[];
  engineeringCase: string;
  suitable: string[];
  unsuitable: string[];
  pitfalls: string[];
  next: KnowledgeLink[];
  resources: KnowledgeLink[];
  projects: KnowledgeLink[];
};

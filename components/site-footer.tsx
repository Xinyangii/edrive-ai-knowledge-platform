import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <Link className="brand footer-brand" href="/"><span className="brand-mark">E</span><span>电驱智学</span></Link>
      <p>智能电驱 AI 知识与工程实践平台 · 业务 → 数据 → 模型 → 应用</p>
      <Link href="/learning-paths">开始一条学习路径 →</Link>
    </footer>
  );
}

import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { marked } from "marked";

const allDocs = [
  { slug: "how-to-use-tools", title: "如何使用工具", chapter: "第一章" },
  { slug: "edrive-system", title: "如何认识电驱系统", chapter: "第二章" },
  { slug: "project-onboarding", title: "如何接手一个项目", chapter: "第三章" },
  { slug: "start-work", title: "如何开始具体工作", chapter: "第四章" },
  { slug: "professional-advancement", title: "如何变得更加专业", chapter: "第五章" },
];

export async function generateStaticParams() {
  return allDocs.map(d => ({ slug: d.slug }));
}

export default async function DocPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const docPath = join(process.cwd(), "content/mcu-docs", `${slug}.md`);
  const markdownContent = readFileSync(docPath, "utf-8");
  const htmlContent = await marked.parse(markdownContent);

  const currentIdx = allDocs.findIndex(d => d.slug === slug);
  const currentDoc = allDocs[currentIdx] || allDocs[0];
  const prevDoc = currentIdx > 0 ? allDocs[currentIdx - 1] : null;
  const nextDoc = currentIdx < allDocs.length - 1 ? allDocs[currentIdx + 1] : null;

  // Extract headings for TOC
  const headingRegex = /^#{1,3}\s+(.+)$/gm;
  const tocItems: { text: string; id: string }[] = [];
  let match;
  while ((match = headingRegex.exec(markdownContent)) !== null) {
    const text = match[1].replace(/<[^>]+>/g, "").trim();
    const id = text.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]+/g, "-").replace(/^-|-$/g, "");
    if (tocItems.length === 0 && text === currentDoc.title) continue;
    tocItems.push({ text, id });
  }

  return (
    <main>
      <nav className="breadcrumb">
        <Link href="/">首页</Link> / <Link href="/mcu-learning">MCU 学习平台</Link> / <b>{currentDoc.title}</b>
      </nav>

      <header className="knowledge-detail-hero">
        <div>
          <span className="knowledge-english">{currentDoc.chapter}</span>
          <h1>{currentDoc.title}</h1>
          <p className="knowledge-summary">岚图电驱 MCU 学习手册 V0.0 · {currentDoc.chapter}</p>
        </div>
        <aside>
          <span>CHAPTER</span>
          <strong>{currentDoc.chapter}</strong>
        </aside>
      </header>

      <div className="knowledge-layout">
        <div className="knowledge-toc">
          <span className="article-index" style={{ display: "block", padding: "11px 0", borderBottom: "1px solid #d6dcd8", fontWeight: 700 }}>目录</span>
          {tocItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              <span>→</span> {item.text}
            </a>
          ))}

          <span className="article-index" style={{ display: "block", marginTop: "24px", padding: "11px 0", borderBottom: "1px solid #d6dcd8", fontWeight: 700 }}>手册章节</span>
          {allDocs.map((doc) => (
            <Link
              key={doc.slug}
              href={`/mcu-learning/docs/${doc.slug}`}
              style={{
                display: "block",
                padding: "8px 0",
                color: doc.slug === slug ? "var(--ink)" : "var(--link)",
                fontSize: "12.5px",
                fontWeight: doc.slug === slug ? 700 : 400,
              }}
            >
              {doc.chapter} {doc.title} {doc.slug === slug ? "←" : "→"}
            </Link>
          ))}
        </div>

        <article className="knowledge-article">
          <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

          {/* Previous / Next navigation */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "60px", paddingTop: "30px", borderTop: "1px solid var(--line)" }}>
            {prevDoc ? (
              <Link href={`/mcu-learning/docs/${prevDoc.slug}`} style={{ color: "var(--link)", fontSize: "14px" }}>
                ← {prevDoc.chapter} {prevDoc.title}
              </Link>
            ) : <span />}
            {nextDoc ? (
              <Link href={`/mcu-learning/docs/${nextDoc.slug}`} style={{ color: "var(--link)", fontSize: "14px" }}>
                {nextDoc.chapter} {nextDoc.title} →
              </Link>
            ) : <span />}
          </div>
        </article>
      </div>
    </main>
  );
}
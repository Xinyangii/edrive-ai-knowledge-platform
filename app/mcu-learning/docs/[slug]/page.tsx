import { readFileSync } from "fs";
import { join } from "path";
import Link from "next/link";
import { marked } from "marked";

// ====== 飞书文档引用映射 ======
// 将 doc-id 和 file-type 映射为可点击的飞书链接
const feishuLinkMap: Record<string, { type: string; title: string }> = {
  "YG6Nws2oziiIInkBNaNciG5Pnyc": { type: "wiki", title: "VDC7版本说明与操作手顺_20260712" },
  "OqCEwHCkxiawTFkI4KucDsNAnRf": { type: "wiki", title: "常用系统介绍级入口" },
  "WELSbloF8aSFmZs7JuPcZeRsn9c": { type: "base", title: "MCU平台管理表" },
  "Jm9pbA5eMogaq9xCi3Lc0s6jnhe": { type: "file", title: "车用电机及控制相关介绍V1.0.pptx" },
  "OL0Ms18ONlYtnIdArKwcqgbLnKe": { type: "slide", title: "电机控制器硬件培训材料V1.0" },
  "FzPgwcD8ziqfASkHypDcZp8enGe": { type: "wiki", title: "MCU故障诊断管理平台" },
  "MIjbs4Mayl8eh1dQnyicwKlynpd": { type: "slide", title: "驾驶性要点培训" },
  "TmxUsoHSBhtSo6tQQIpcZSctnmg": { type: "sheets", title: "需求收集" },
  "BlyeddULaoWHEpx1HFIcbLmPnvd": { type: "docx", title: "软件发布整车测试流程" },
  "QQJFdC6cCoJpkKxCCO8cnVLHn9f": { type: "docx", title: "Vhome软件交付审批流程 - 使用说明" },
};

function buildFeishuUrl(docId: string, type: string): string {
  const base = "https://hav4xarv6k.feishu.cn";
  switch (type) {
    case "wiki": return `${base}/wiki/${docId}`;
    case "base": return `${base}/base/${docId}`;
    case "sheets": return `${base}/sheets/${docId}`;
    case "docx": return `${base}/docx/${docId}`;
    case "slide": return `${base}/slide/${docId}`;
    case "file": return `${base}/file/${docId}`;
    default: return `${base}/wiki/${docId}`;
  }
}

function getFileTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    wiki: "飞书文档",
    base: "多维表格",
    sheets: "电子表格",
    docx: "Word 文档",
    slide: "幻灯片",
    file: "文件",
  };
  return labels[type] || "飞书资料";
}

// ====== 后处理 HTML：修复飞书标签 ======
function postProcessHtml(html: string): string {
  // 1. 修复 <cite> 标签 → 可点击链接
  html = html.replace(
    /<cite[^>]*doc-id="([^"]*)"[^>]*file-type="([^"]*)"[^>]*title="([^"]*)"[^>]*><\/cite>/g,
    (_, docId, fileType, title) => {
      const url = buildFeishuUrl(docId, fileType);
      const label = getFileTypeLabel(fileType);
      return `<a href="${url}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;background:#f0f5ff;border:1px solid #d0d9e8;border-radius:8px;color:#1a5cff;font-size:13px;font-weight:600;text-decoration:none;margin:2px 4px;transition:background .15s" onmouseover="this.style.background='#e0ecff'" onmouseout="this.style.background='#f0f5ff'">📄 ${title} <span style="font-size:10px;color:#6b8bba;font-weight:400">[${label}]</span></a>`;
    }
  );

  // 2. 修复 <callout> 标签 → 带 emoji 的提示框
  html = html.replace(
    /<callout[^>]*emoji="([^"]*)"[^>]*>([\s\S]*?)<\/callout>/g,
    (_, emoji, content) => {
      const inner = content.replace(/<br\s*\/?>/g, "").trim();
      return `<div style="background:#f8f9fa;border:1px solid #e8ecee;border-radius:14px;padding:18px 22px;margin:20px 0;border-left:4px solid #3b82f6;font-size:14px;line-height:1.8"><div style="display:flex;gap:10px;align-items:flex-start"><span style="font-size:20px;flex-shrink:0">${emoji}</span><div style="color:#4a5b6a">${inner}</div></div></div>`;
    }
  );

  // 3. 修复 <figure> 附件标签 → 本地下载链接
  const localFileMap: Record<string, string> = {
    "Fbq2b9TOwob3fuxhLP0cfTiXnUe": "/mcu-docs/files/CANoe10.pdf",
    "HEJFbC9FXoolesxwiUwcs94xnVy": "/mcu-docs/files/PCAN-Explorer5.pdf",
    "PkyxbGIBIor074xLbb0ckG70nNf": "/mcu-docs/files/PeakOemDrv.exe",
  };
  html = html.replace(
    /<figure[^>]*>[\s\S]*?<source[^>]*name="([^"]*)"[^>]*mime="([^"]*)"[^>]*token="([^"]*)"[^>]*\/>[\s\S]*?<\/figure>/g,
    (_, name, mime, token) => {
      const icon = mime.includes("pdf") ? "📕" : mime.includes("download") ? "📦" : "📎";
      const localPath = localFileMap[token] || `https://hav4xarv6k.feishu.cn/file/${token}`;
      return `<div style="background:#f8f9fa;border:1px solid #e8ecee;border-radius:12px;padding:14px 18px;margin:14px 0;display:flex;align-items:center;gap:12px"><span style="font-size:20px">${icon}</span><div><div style="font-weight:600;font-size:14px;color:var(--ink)">${name}</div><a href="${localPath}" target="_blank" rel="noopener noreferrer" style="color:var(--link);font-size:12px;text-decoration:underline">点击下载 / 查看</a></div></div>`;
    }
  );

  // 4. 修复飞书记录链接 → 可点击链接
  html = html.replace(
    /https:\/\/hav4xarv6k\.feishu\.cn\/record\/(\w+)/g,
    (_, recordId) => {
      return `<a href="https://hav4xarv6k.feishu.cn/record/${recordId}" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:6px;padding:4px 12px;background:#fef3e7;border:1px solid #f5dcc8;border-radius:8px;color:#c0761a;font-size:13px;font-weight:600;text-decoration:none;margin:2px 4px">🔊 查看状态机演示记录</a>`;
    }
  );

  return html;
}

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
  const htmlContent = postProcessHtml(await marked.parse(markdownContent));

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
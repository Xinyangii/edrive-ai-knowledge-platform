/**
 * Minimal Markdown-to-HTML converter for MCU learning docs.
 * Avoids external dependencies to prevent bundler issues.
 */
export function markdownToHtml(md: string): string {
  let html = md;

  // Fenced code blocks (must be before other rules)
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const escaped = code.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    return `<pre><code class="language-${lang || "text"}">${escaped}</code></pre>`;
  });

  // Inline code
  html = html.replace(/`([^`]+)`/g, "<code>$1</code>");

  // Headings
  html = html.replace(/^#### (.+)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.+)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.+)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.+)$/gm, "<h1>$1</h1>");

  // Horizontal rules
  html = html.replace(/^---+$/gm, "<hr>");

  // Bold
  html = html.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");

  // Images
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1">');

  // Links
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Tables
  html = html.replace(/^\|(.+)\|$/gm, (line: string) => {
    if (/^\|[-:|\s]+\|$/.test(line)) return ""; // skip separator rows
    const cells = line.split("|").filter(c => c.trim()).map(c => c.trim());
    const tag = /^\|[-:|\s]+\|$/gm.test(line) ? "" : cells.length > 0 ? "td" : "";
    if (tag === "td") {
      return "<tr>" + cells.map(c => `<td>${c}</td>`).join("") + "</tr>";
    }
    return line;
  });

  // Wrap consecutive <tr> tags in <table>
  html = html.replace(/(<tr>[\s\S]*?<\/tr>)\s*(?=<tr>)/g, "$1");
  html = html.replace(/((?:<tr>[\s\S]*?<\/tr>\s*)+)/g, "<table>$1</table>");

  // Unordered lists
  html = html.replace(/((?:^- .+\n?)+)/gm, (match: string) => {
    const items = match.split("\n").filter(line => line.trim().startsWith("- "));
    return "<ul>" + items.map(item => `<li>${item.replace(/^- /, "").trim()}</li>`).join("") + "</ul>";
  });

  // Ordered lists
  html = html.replace(/((?:^\d+\. .+\n?)+)/gm, (match: string) => {
    const items = match.split("\n").filter(line => /^\d+\./.test(line.trim()));
    return "<ol>" + items.map(item => `<li>${item.replace(/^\d+\.\s*/, "").trim()}</li>`).join("") + "</ol>";
  });

  // Paragraphs: wrap remaining text blocks in <p>
  const lines = html.split("\n");
  const result: string[] = [];
  let paragraph: string[] = [];
  const blockTags = /^<(h[1-6]|table|ul|ol|pre|hr|div|img|tr|td|th|blockquote)/;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed || blockTags.test(trimmed) || trimmed.startsWith("</")) {
      if (paragraph.length > 0) {
        result.push(`<p>${paragraph.join(" ")}</p>`);
        paragraph = [];
      }
      result.push(line);
    } else {
      paragraph.push(trimmed);
    }
  }
  if (paragraph.length > 0) {
    result.push(`<p>${paragraph.join(" ")}</p>`);
  }

  return result.join("\n");
}
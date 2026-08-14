import Link from "next/link";
import type { KnowledgeDetail } from "../content/types";
import { Difficulty } from "./difficulty";

function LinkList({ items }: { items: KnowledgeDetail["next"] }) {
  return (
    <div className="knowledge-link-list">
      {items.map((item) => item.href ? (
        <Link href={item.href} key={item.label}><strong>{item.label}</strong><span>{item.note}</span><i>→</i></Link>
      ) : (
        <div key={item.label}><strong>{item.label}</strong><span>{item.note}</span></div>
      ))}
    </div>
  );
}

export function KnowledgeDetailView({ detail }: { detail: KnowledgeDetail }) {
  const baseHref = detail.layer === "模型层" ? "/models" : "/applications";
  return (
    <main>
      <div className="breadcrumb"><Link href="/">首页</Link><span>/</span><Link href={baseHref}>{detail.layer}</Link><span>/</span><b>{detail.title}</b></div>
      <header className="knowledge-detail-hero">
        <div>
          <p className="kicker">{detail.category}</p>
          <h1>{detail.title}</h1>
          <div className="knowledge-english">{detail.english}</div>
          <p className="knowledge-summary">{detail.summary}</p>
        </div>
        <aside>
          <span>DIFFICULTY</span>
          <Difficulty value={detail.difficulty} />
          <span>LAYER</span>
          <strong>{detail.layer}</strong>
          <span>CATEGORY</span>
          <strong>{detail.category}</strong>
        </aside>
      </header>

      <div className="knowledge-layout">
        <nav className="knowledge-toc" aria-label="知识页目录">
          {[
            ["01", "为什么学", "why"], ["02", "工程问题", "problem"], ["03", "输入 / 输出", "io"],
            ["04", "核心原理", "principle"], ["05", "图解", "diagram"], ["06", "最小示例", "example"],
            ["07", "工程案例", "case"], ["08", "适用边界", "fit"], ["09", "常见误区", "pitfalls"], ["10", "延伸学习", "next"],
          ].map(([no, label, id]) => <a href={`#${id}`} key={id}><span>{no}</span>{label}</a>)}
        </nav>

        <article className="knowledge-article">
          <section id="why"><p className="article-index">01 / 为什么要学</p><h2>为什么它值得进入你的工具箱</h2><p className="lead-paragraph">{detail.summary}</p><p>{detail.why}</p></section>
          <section id="problem"><p className="article-index">03 / 在智能电驱中解决什么问题</p><h2>对应的工程任务</h2><div className="engineering-callout">{detail.engineeringProblem}</div></section>
          <section id="io"><p className="article-index">04–05 / 输入与输出</p><h2>模型或方法到底“吃什么、吐什么”</h2><div className="io-grid"><div><h3>INPUT</h3><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>OUTPUT</h3><ul>{detail.outputs.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
          <section id="principle"><p className="article-index">06 / 核心原理</p><h2>理解最少但必要的原理</h2><ol className="principle-list">{detail.principle.map((item) => <li key={item}>{item}</li>)}</ol></section>
          <section id="diagram"><p className="article-index">07 / 图解</p><h2>把方法放回工程链路</h2><div className="diagram-flow">{detail.diagram.map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong>{index < detail.diagram.length - 1 && <i>→</i>}</div>)}</div></section>
          <section id="example"><p className="article-index">08 / 最小示例</p><h2>{detail.exampleTitle}</h2><ol className="example-steps">{detail.example.map((item) => <li key={item}>{item}</li>)}</ol></section>
          <section id="case"><p className="article-index">09 / 工程案例</p><h2>回到智能电驱项目</h2><div className="engineering-case">{detail.engineeringCase}</div><h3 className="subheading">关联项目</h3><LinkList items={detail.projects} /></section>
          <section id="fit"><p className="article-index">10–11 / 适用与不适用</p><h2>什么时候用，什么时候别用</h2><div className="fit-grid"><div><h3>适用</h3><ul>{detail.suitable.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>不适用 / 需谨慎</h3><ul>{detail.unsuitable.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
          <section id="pitfalls"><p className="article-index">12 / 常见误区</p><h2>工程上更容易踩的坑</h2><ul className="pitfall-list">{detail.pitfalls.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="next"><p className="article-index">13 / 延伸学习</p><h2>下一步往哪里走</h2><LinkList items={detail.next} /></section>
        </article>
      </div>
    </main>
  );
}

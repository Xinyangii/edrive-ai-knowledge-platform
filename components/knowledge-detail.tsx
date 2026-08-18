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
            ["01", "工程定位", "summary"], ["02", "工程问题", "problem"], ["03", "输入 / 输出", "io"],
            ["04", "核心原理", "principle"], ["05", "工程案例", "case"], ["06", "适用边界", "fit"],
            ["07", "常见陷阱", "pitfalls"], ["08", "延伸学习", "next"],
          ].map(([no, label, id]) => <a href={`#${id}`} key={id}><span>{no}</span>{label}</a>)}
        </nav>

        <article className="knowledge-article">
          <section id="summary"><p className="article-index">01 / 工程定位</p><h2>在电驱 AI 中的角色</h2><p className="lead-paragraph">{detail.summary}</p></section>
          <section id="problem"><p className="article-index">02 / 对应工程问题</p><h2>解决什么工程任务</h2><div className="engineering-callout">{detail.engineeringProblem}</div></section>
          <section id="io"><p className="article-index">03 / 数据前提</p><h2>输入与输出</h2><div className="io-grid"><div><h3>INPUT</h3><ul>{detail.inputs.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>OUTPUT</h3><ul>{detail.outputs.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
          <section id="principle"><p className="article-index">04 / 核心原理</p><h2>最少必要原理</h2><ol className="principle-list">{detail.principle.map((item) => <li key={item}>{item}</li>)}</ol></section>
          <section id="case"><p className="article-index">05 / 工程案例</p><h2>在项目中的位置</h2><div className="engineering-case">{detail.engineeringCase}</div><h3 className="subheading">关联项目</h3><LinkList items={detail.projects} /></section>
          <section id="fit"><p className="article-index">06 / 适用边界</p><h2>什么时候用，什么时候别用</h2><div className="fit-grid"><div><h3>适用</h3><ul>{detail.suitable.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>不适用 / 需谨慎</h3><ul>{detail.unsuitable.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
          <section id="pitfalls"><p className="article-index">07 / 常见陷阱</p><h2>工程上容易踩的坑</h2><ul className="pitfall-list">{detail.pitfalls.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="next"><p className="article-index">08 / 延伸学习</p><h2>下一步方向</h2><LinkList items={detail.next} /></section>
        </article>
      </div>
    </main>
  );
}
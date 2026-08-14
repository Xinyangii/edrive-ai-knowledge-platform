import Link from "next/link";
import type { DirectionDetail as DirectionDetailType } from "../content/model-directions";

export function DirectionDetailView({ detail }: { detail: DirectionDetailType }) {
  return (
    <main>
      <div className="breadcrumb"><Link href="/">首页</Link><span>/</span><Link href="/models">模型层</Link><span>/</span><b>{detail.title}</b></div>
      <header className="knowledge-detail-hero">
        <div>
          <p className="kicker">{detail.english}</p>
          <h1>{detail.title}</h1>
          <p className="knowledge-summary">{detail.summary}</p>
        </div>
      </header>

      <div className="knowledge-layout">
        <nav className="knowledge-toc" aria-label="模型方向目录">
          {[
            ["01", "技术概述", "overview"],
            ["02", "经典模型原理", "classics"],
            ["03", "项目应用建议", "applications"],
          ].map(([no, label, id]) => (
            <a href={`#${id}`} key={id}><span>{no}</span>{label}</a>
          ))}
        </nav>

        <article className="knowledge-article">
          <section id="overview">
            <p className="article-index">01 / 技术概述</p>
            <h2>它是什么，能解决什么问题</h2>
            {detail.overview.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </section>

          <section id="classics">
            <p className="article-index">02 / 经典模型原理</p>
            <h2>需要理解的核心方法</h2>
            <div className="direction-classics">
              {detail.classics.map((classic) => (
                <div className="direction-classic-card" key={classic.title}>
                  <h3>{classic.title}</h3>
                  <p>{classic.description}</p>
                  <ol className="principle-list">
                    {classic.principle.map((item) => <li key={item}>{item}</li>)}
                  </ol>
                  <div className="direction-links">
                    <span>学习资源</span>
                    <div>
                      {classic.links.map((link) => (
                        <a href={link.href} target="_blank" rel="noreferrer" key={link.title}>{link.title}<small>{link.note}</small></a>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="applications">
            <p className="article-index">03 / 项目应用建议</p>
            <h2>回到智能电驱项目</h2>
            <div className="direction-applications">
              {detail.applications.map((app) => (
                <div className="direction-application-card" key={app.project}>
                  <Link href={app.href}>{app.project} →</Link>
                  <ul>
                    {app.scenarios.map((scenario) => <li key={scenario}>{scenario}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}

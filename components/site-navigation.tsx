"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navPanel } from "../content/site";

const simpleItems = [
  { label: "项目", href: "/projects" },
  { label: "学习路径", href: "/learning-paths" },
] as const;

const knowledgeHrefs = ["/business", "/data", "/models", "/applications"];

export function SiteNavigation() {
  const pathname = usePathname() ?? "/";
  const knowledgeActive = knowledgeHrefs.some((href) => pathname === href || pathname.startsWith(`${href}/`));

  return (
    <nav className="nav-shell">
      <Link className="brand" href="/" aria-label="返回首页">
        <span className="brand-mark">E</span>
        <span>电驱智学</span>
      </Link>
      <div className="nav-links" aria-label="主导航">
        <div className={`nav-item has-panel ${knowledgeActive ? "active" : ""}`}>
          <Link href="/business" className="nav-item-trigger" aria-haspopup="true">
            知识体系 <span className="caret">▾</span>
          </Link>
          <div className="nav-panel" role="menu">
            <div className="nav-panel-inner">
              <p className="nav-panel-lead">业务 → 数据 → 模型 → 应用，一条主脉络贯通全站知识</p>
              <div className="nav-panel-grid">
                {navPanel.map((col) => (
                  <div className="nav-panel-col" key={col.key}>
                    <Link href={col.href} className={`nav-panel-head ${col.accent}`}>
                      <b>{col.title}</b>
                      <span>{col.english}</span>
                      <p>{col.blurb}</p>
                    </Link>
                    {col.links.map((link) => (
                      <Link href={link.href} key={link.label} className="nav-panel-link">{link.label}</Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {simpleItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "active" : ""}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <details className="mobile-nav">
        <summary aria-label="打开导航">菜单</summary>
        <div className="mobile-nav-panel">
          <div className="mobile-nav-group">
            <span>知识体系</span>
            {navPanel.map((col) => (
              <Link href={col.href} key={col.key}>{col.title}<i>{col.english}</i></Link>
            ))}
          </div>
          <div className="mobile-nav-group">
            <span>更多</span>
            {simpleItems.map((item) => (
              <Link href={item.href} key={item.href}>{item.label}</Link>
            ))}
          </div>
        </div>
      </details>
    </nav>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import type { BusinessTopic } from "../content/types";

export function TopicTree({ topics }: { topics: BusinessTopic[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="topic-tree">
      {topics.map((topic, index) => {
        const isOpen = open === index;
        return (
          <div
            className={`topic-group ${isOpen ? "open" : ""}`}
            key={topic.title}
            onMouseEnter={() => setOpen(index)}
          >
            <button
              className="topic-summary"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : index)}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><h3>{topic.title}</h3><p>{topic.description}</p></div>
              <i>＋</i>
            </button>
            <div className="topic-body">
              <div className="topic-items">
                {topic.items.map((item) => (
                  item.href ? (
                    <Link className="topic-item" href={item.href} key={item.label}>
                      <strong>{item.label}</strong><p>{item.note}</p><span>进入知识页 →</span>
                    </Link>
                  ) : (
                    <div className="topic-item" key={item.label}>
                      <strong>{item.label}</strong><p>{item.note}</p><span>知识节点</span>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

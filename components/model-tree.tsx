import Link from "next/link";
import { modelTree } from "../content/models";

export function ModelTree() {
  return (
    <div className="model-tree">
      {modelTree.map((branch, index) => (
        <section className="model-branch" id={branch.id} key={branch.id}>
          <div className="model-branch-head"><span>{String(index + 1).padStart(2, "0")}</span><div><h2>{branch.title}</h2><p>{branch.description}</p></div></div>
          <div className="model-groups">
            {branch.groups.map((group) => (
              <div className="model-group" key={group.title}>
                <h3>{group.title}</h3>
                <div className="tag-cloud">
                  {group.items.map((item) => {
                    const node = typeof item === "string" ? { label: item, href: "/models/machine-learning" } : item;
                    return <Link href={node.href} key={node.label}>{node.label} →</Link>;
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

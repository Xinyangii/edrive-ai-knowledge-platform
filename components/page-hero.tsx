type Props = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string[];
  accent?: "cyan" | "lime" | "orange" | "blue";
};

export function PageHero({ eyebrow, title, description, meta = [], accent = "cyan" }: Props) {
  return (
    <header className={`page-hero ${accent}`}>
      <div className="page-hero-grid" />
      <div className="page-hero-inner">
        <p className="eyebrow"><span /> {eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
        {meta.length > 0 && <div className="page-hero-meta">{meta.map((item) => <span key={item}>{item}</span>)}</div>}
      </div>
    </header>
  );
}

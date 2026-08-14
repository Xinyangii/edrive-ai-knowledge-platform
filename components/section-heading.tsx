type Props = {
  index: string;
  kicker: string;
  title: React.ReactNode;
  description: string;
  light?: boolean;
  compact?: boolean;
};

export function SectionHeading({ index, kicker, title, description, light, compact }: Props) {
  return (
    <div className={`section-heading ${light ? "light" : ""} ${compact ? "compact" : ""}`}>
      <div><span className="section-index">{index}</span><p className="kicker">{kicker}</p></div>
      <h2 className="section-title">{title}</h2>
      <p>{description}</p>
    </div>
  );
}

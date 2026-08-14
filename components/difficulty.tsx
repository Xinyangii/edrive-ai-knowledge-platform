export function Difficulty({ value }: { value: number }) {
  return <span className="difficulty" aria-label={`难度 ${value} 星`}>{Array.from({ length: 5 }, (_, index) => <i className={index < value ? "active" : ""} key={index}>★</i>)}</span>;
}

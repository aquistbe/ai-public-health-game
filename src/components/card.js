
export function Card({ children }) {
  return <div className="rounded-xl border bg-white shadow">{children}</div>;
}
export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}

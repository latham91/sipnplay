export default function Header({ title, subtitle }) {
  return (
    <div>
      <h2 className="font-semibold">{title}</h2>
      <p className="text-muted-foreground">{subtitle}</p>
    </div>
  );
}

import { Icon } from "./Icons";

export function ServiceCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <article className="premium-card service-card">
      <div className={`icon-box ${icon === "refresh" ? "icon-box-red" : ""}`}>
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
}

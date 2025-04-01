import "./FeatureCard.css";

export default function FeatureCard({ title, description, icon }) {
  return (
    <div className="feature-card">
      <span className="feature-icon">{icon}</span>
      <div className="feature-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

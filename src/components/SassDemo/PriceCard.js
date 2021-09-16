import "./PriceCard.scss";

export default function PriceCard({ centerCard, title, price, features = [] }) {
  const centerCardClass = (name) =>
    `${name}${centerCard ? " center-card" : ""}`;
  return (
    <div className={centerCardClass("price-card")}>
      <h2 className="plan-title">{title}</h2>
      <p className="price">{price}</p>
      <div className={centerCardClass("divider")} />
      <ul className="feat-list">
        {features.map((feature, i) => (
          <li key={i}>
            <div>
              <p className="feat-text">{feature}</p>
              <div className={centerCardClass("divider")} />
            </div>
          </li>
        ))}
      </ul>
      <button className={centerCardClass("more-button")}>LEARN MORE</button>
    </div>
  );
}

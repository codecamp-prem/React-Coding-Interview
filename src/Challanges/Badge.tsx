import "./badge.css";
function BadgeContent() {
  const name = "John Doe";
  const handle = "johndoe";
  const img =
    "https://www.pngarts.com/files/5/User-Avatar-PNG-Transparent-Image.png";

  return (
    <div className="badge">
      <img alt={name} src={img} />
      <div>
        <h4>{name}</h4>
        <p>{`@${handle}`}</p>
      </div>
    </div>
  );
}
const Badge = () => {
  return <BadgeContent />;
};

export default Badge;

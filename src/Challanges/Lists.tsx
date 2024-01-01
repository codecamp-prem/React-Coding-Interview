function Data() {
  const enemies = [
    { id: 6, name: "boastfulness" },
    { id: 66, name: "slothfulness" },
    { id: 666, name: "delusion" },
  ];
  return (
    <ul>
      <li style={{ listStyle: "none", textDecoration: "underline" }}>
        Enemies of my life
      </li>
      {enemies.map((enemy) => (
        <li key={enemy.id}>{enemy.name}</li>
      ))}
    </ul>
  );
}
const Lists = () => {
  return <Data />;
};

export default Lists;

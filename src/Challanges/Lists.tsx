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
  return (
    <>
      <Data />
      <DataWithoutUniqueId />
    </>
  );
};

// The Array.map method in JS has a callback that recieves 3 arguments: current element, index, a reference to the original array.
// no unique key available in your data, using the index as the key works
// - assuming you're not mutating the array
function DataWithoutUniqueId() {
  const friends = ["Tom", "Dick", "Harry"];
  return (
    <ul>
      <li style={{ listStyle: "none", textDecoration: "underline" }}>
        3 Friends
      </li>
      {friends.map((friend, index) => (
        <li key={index}>{friend}</li>
      ))}
    </ul>
  );
}
export default Lists;

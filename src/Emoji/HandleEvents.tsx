const emojis = [
  { id: "frown", emoji: "🙁" },
  { id: "angry", emoji: "🤬" },
  { id: "cool", emoji: "😎" },
];

const selectRandomElement = (arr: { id: string; emoji: string }[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};
const HandleEvents = () => {
  const selected = selectRandomElement(emojis);

  const handleCopy = (e: any) => {
    console.log(e);
    if (e.target.innerText !== selected.emoji) {
      alert("wrong emoji");
    } else if (e.timeStamp > 10000) {
      alert("Too Slow. Reset and try again");
    } else {
      alert("🍗 Winner! Winner Chicken Dinner 🍗");
    }
  };

  const resetHandle = () => {
    window.location.reload();
  };
  return (
    <div>
      <h1>{selected.emoji}</h1>
      <p>copy this emoji</p>
      <p>
        When user select and click copy within given time it should match the
        selected emoji {selected.emoji}{" "}
      </p>
      <ul>
        {emojis.map(({ id, emoji }) => {
          return (
            <li key={id} onCopy={handleCopy}>
              {emoji}
            </li>
          );
        })}
      </ul>
      <button onClick={resetHandle}>Reset</button>
    </div>
  );
};

export default HandleEvents;

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
    } else if (e.timeStamp > 5000) {
      alert("Too Slow. Reset and try again");
    } else {
      alert("🍗 Winner! Winner Chicken Dinner 🍗");
    }
  };
  return (
    <div>
      <h1>{selected.emoji}</h1>
      <p>copy this emoji</p>
      <ul>
        {emojis.map(({ id, emoji }) => {
          return (
            <li key={id} onCopy={handleCopy}>
              {emoji}
            </li>
          );
        })}
      </ul>
      <button>Reset</button>
    </div>
  );
};

export default HandleEvents;

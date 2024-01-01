const CharacterLimit = () => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 10) {
      alert("Character limit exceeded");
    }
  };
  return (
    <section>
      <h1>Character Limit</h1>
      <input placeholder="Enter some text" onChange={handleChange} />
    </section>
  );
};

export default CharacterLimit;

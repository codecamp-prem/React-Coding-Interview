// Remember, event handlers should live inside the component that way they get access
// to the component's props and state via closure scope.
function Input({ characterLimit }: { characterLimit: number }) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > characterLimit) {
      alert("Character limit exceeded");
    }
  };
  return <input placeholder="Enter some text here" onChange={handleChange} />;
}

const CharacterLimit = () => {
  return (
    <section>
      <h1>Character Limit</h1>
      <Input characterLimit={13} />
    </section>
  );
};

export default CharacterLimit;

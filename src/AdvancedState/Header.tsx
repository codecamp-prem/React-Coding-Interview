import Button from "../DynamicInput/Button";

const Header = () => {
  return (
    <header className="flex justify-between items-center max-w-2xl mt-0 mx-auto p-2">
      <h1 className="font-bold underline">ReactTimer</h1>
      <Button>Stop Timer</Button>
    </header>
  );
};

export default Header;

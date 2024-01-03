import { useState } from "react";

const items = [
  "Apple",
  "Banana",
  "Cat",
  "Dog",
  "Eel",
  "Fish",
  "Giraffe",
  "Hen",
  "IceCream",
  "JackFruit",
  "King Cobra",
  "Lamb",
  "Mango",
  "Nestle",
  "Orange",
];
const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchFilter;

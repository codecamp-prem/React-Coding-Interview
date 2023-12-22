import { useState } from "react";

type Props = {
  handleAddNewTodo: ({}: {
    id: string;
    label: string;
    completed: boolean;
  }) => void;
};
const AddTodo = ({ handleAddNewTodo }: Props) => {
  const [todoText, setTodoText] = useState<string>("");

  const handleInputTodo = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTodoText(e.target.value);

  const handleAddTodoButtonClick = () => {
    const todo = createNewTodo(todoText);
    handleAddNewTodo(todo);
    setTodoText("");
  };
  return (
    <li>
      <input
        placeholder="Add a new todo"
        type="text"
        value={todoText}
        onChange={handleInputTodo}
        id="todoInput"
      />
      <button
        disabled={todoText.length == 0}
        onClick={handleAddTodoButtonClick}
      >
        Add New Todo
      </button>
    </li>
  );
};

function createNewTodo(label: string) {
  return { id: crypto.randomUUID(), label, completed: false };
}

export default AddTodo;

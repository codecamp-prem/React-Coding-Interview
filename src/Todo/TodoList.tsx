import { useState } from "react";

interface Props {
  todo: { id: string; label: string; completed: boolean };
  handleUpdateTodo: ({}: {
    id: string;
    label: string;
    completed: boolean;
  }) => void;
  handleDeleteTodo: (id: string) => void;
}
const TodoList = ({ todo, handleUpdateTodo, handleDeleteTodo }: Props) => {
  const [editing, setEditing] = useState(false);
  const handleCheck = () =>
    handleUpdateTodo({
      ...todo,
      completed: !todo.completed,
    });

  const handleEditText = (e: React.ChangeEvent<HTMLInputElement>) =>
    handleUpdateTodo({
      ...todo,
      label: e.target.value,
    });

  const handleEditing = () => setEditing(!editing);

  const handleDelete = () => handleDeleteTodo(todo.id);
  return (
    <li>
      <input
        type="checkbox"
        id={todo.id}
        checked={todo.completed}
        onChange={handleCheck}
      />
      {editing === false ? (
        <span>{todo.label}</span>
      ) : (
        <input type="text" value={todo.label} onChange={handleEditText} />
      )}
      <span>
        <button onClick={handleEditing}>{editing ? "Save" : "Edit"}</button>
        <button onClick={handleDelete}>Delete</button>
      </span>
    </li>
  );
};

export default TodoList;

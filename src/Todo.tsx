import { useState } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";

const Todo = () => {
  const [todos, setTodos] = useState<
    { id: string; label: string; completed: boolean }[]
  >([]);
  const handleUpdateTodo = (updatedTodo: {
    id: string;
    label: string;
    completed: boolean;
  }) => {
    // like completed status, label since id cannot be changed
    const newTodo = todos.map((todo) =>
      todo.id === updatedTodo.id ? updatedTodo : todo
    );
    setTodos(newTodo);
  };

  const handleDeleteTodo = (id: string) => {
    const currentTodos = todos.filter((todo) => todo.id !== id);
    setTodos(currentTodos);
  };

  const handleAddNewTodo = (newTodo: {
    id: string;
    label: string;
    completed: boolean;
  }) => {
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <ul>
      <AddTodo handleAddNewTodo={handleAddNewTodo} />
      {todos.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </ul>
  );
};

export default Todo;

import { FormEvent, useReducer } from "react";
import "./common.css";

type TaskStateProps = {
  id: string;
  description: string;
  status: string;
};

function reducer(tasks: TaskStateProps[], action: { [key: string]: any }) {
  if (action.type === "add") {
    return [...tasks, action.task];
  } else if (action.type === "update") {
    return tasks.map((task) =>
      task.id === action.id
        ? {
            ...task,
            status: task.status === "pending" ? "completed" : "pending",
          }
        : task
    );
  } else if (action.type === "delete") {
    return tasks.filter((task) => task.id !== action.id);
  } else {
    throw new Error("This action type isn't supported");
  }
}

export default function TaskManager() {
  const [tasks, dispatch] = useReducer(reducer, []);

  const handleUpdateTaskStatus = (id: string) => {
    dispatch({ type: "update", id });
  };

  const handleDeleteTask = (id: string) => {
    dispatch({ type: "delete", id });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const event = e.target as HTMLFormElement;
    const formData = new FormData(event);

    const newTask = createTask(formData.get("task")?.toString().trim());

    dispatch({
      type: "add",
      task: newTask,
    });

    event.reset();
  };

  return (
    <div className="container">
      <div>
        <h1>Task Manager</h1>
        <form onSubmit={handleSubmit} className="taskManagerForm">
          <input name="task" placeholder="Task title" required />
          <button className="primary" type="submit">
            Add Task
          </button>
        </form>
      </div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>Task</th>
            <th>status</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks &&
            tasks.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.description}</td>
                <td onClick={() => handleUpdateTaskStatus(task.id)}>
                  {task.status}
                </td>
                <td>
                  <button
                    className="link"
                    onClick={() => handleDeleteTask(task.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function createTask(task: string | undefined) {
  return {
    id: crypto.randomUUID(),
    description: task,
    status: "pending",
  };
}

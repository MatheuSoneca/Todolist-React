import React, { useState } from "react";
import "./styles.css";

//components
import { Taskbar } from "../../components/Taskbar/index.jsx";

// hooks
import { useTasks } from "../../hooks/useTasks";

export function Home() {
  const { tasks, createTask, removeTask, loading } = useTasks();
  const [taskName, setTaskName] = useState("");

  const addTask = () => {
    if (taskName.trim() === "") return;

    createTask(taskName);
    setTaskName("");
  };

  const createTaskRemover = (taskId) => () => removeTask(taskId);

  return (
    <div className="container">
      <header>
        <h1>Todolist</h1>
      </header>
      <main>
        <div className="inputTask">
          <input
            type="text"
            placeholder="Insira uma tarefa..."
            onChange={(e) => setTaskName(e.target.value)}
            autoFocus
            value={taskName}
          />
          <button type="button" onClick={addTask}>
            <h4>Adicionar</h4>
          </button>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="tasks">
            {tasks.map((task) => (
              <Taskbar
                key={task.id}
                name={task.text}
                onClick={createTaskRemover(task.id)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

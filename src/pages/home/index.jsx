import React, { useEffect, useState } from "react"
import "./styles.css"

//components
import { Taskbar } from "../../components/Taskbar/index.jsx"

// hooks
import { useUniqueID } from "../../hooks/useUniqueID"

export function Home() {
  const [tasks, setTasks] = useState([])
  const [taskName, setTaskName] = useState("")
  const generateUniqueID = useUniqueID()

  const addTask = () => {
    if (taskName.trim() === "") return

    const newTask = {
      name: taskName,
      id: generateUniqueID(),
    }

    setTasks((prevState) => [...prevState, newTask])
    setTaskName("")
  }

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
        <div className="tasks">
          {tasks.map((task) => (
            <Taskbar key={task.id} name={task.name} />
          ))}
        </div>
      </main>
    </div>
  )
}

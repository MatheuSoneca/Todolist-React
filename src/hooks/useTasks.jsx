import { useCallback, useEffect, useState } from "react";

const USER = "Matheus";
const BASE_PATH = "http://localhost:3000";

export const useTasks = () => {
  const [tasks, setTasks] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchAllTasks = useCallback(async () => {
    const response = await fetch(`${BASE_PATH}/text`);
    return response.json();
  }, []);

  useEffect(() => {
    (async () => {
      const content = await fetchAllTasks();
      setTasks(content);
      setLoading(false);
    })();
  }, [fetchAllTasks, setTasks, setLoading]);

  const createTask = async (text) => {
    const response = await fetch(`${BASE_PATH}/text`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: USER,
        text,
      }),
    });

    const content = await response.json();
    setTasks((prevState) => [...prevState, content]);
  };

  const removeTask = async (id) => {
    const response = await fetch(`${BASE_PATH}/text/${id}`, {
      method: "DELETE",
    });

    if (response.status === 404) {
      const content = await fetchAllTasks();
      setTasks(content);
      return;
    }
    setTasks((prevState) => prevState.filter((task) => task.id !== id));
  };

  return {
    tasks,
    loading,
    createTask,
    removeTask,
  };
};

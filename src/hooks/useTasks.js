import { useEffect, useState } from "react";

const LOCAL_STORAGE_KEY = "TaskManager.tasks";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = () => {
      const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (savedTasks) {
        setTasks(JSON.parse(savedTasks));
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures this runs only on mount

  useEffect(() => {
    const storeTasks = () => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    };

    storeTasks();
  }, [tasks]); // Store tasks whenever the `tasks` state changes
  
  // Add a new task
  const addTask = ({ description, priority, completed }) => {
    const task = { description, priority, completed };
    setTasks((prevTasks) => {
      const newTasks = [...prevTasks, task];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
      return newTasks;
    });
  };

  // Delete a task by index
  const deleteTask = (index) => {
    setTasks((prevTasks) => {
      const newTasks = prevTasks.filter((_, i) => i !== index);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
      return newTasks;
    });
  };

  return { tasks, addTask, deleteTask, setTasks };
}

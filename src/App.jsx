import { Container } from "react-bootstrap";
import TaskFormInput from "./component/TaskFormInput";
import TaskListGroup from "./component/TaskListGroup";
import { createContext } from "react";
import useTasks from "./hooks/useTasks"; // Assume useTasks is in the hooks folder

export const TaskContext = createContext();

export default function App() {
  const { tasks, addTask, deleteTask, setTasks } = useTasks();

  return (
    <Container>
      <TaskContext.Provider value={{ tasks, addTask, deleteTask, setTasks }}>
        <TaskFormInput />
        <TaskListGroup />
      </TaskContext.Provider>
    </Container>
  );
}

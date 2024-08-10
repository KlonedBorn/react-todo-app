import TaskListItem from "./TaskListItem"; // Import the TaskListItem component
import useTasks from "../hooks/useTasks";
import { ListGroup, Stack } from "react-bootstrap";
import { useContext } from "react";
import { TaskContext } from "../App";

const TaskListGroup = () => {
  const { tasks, setTasks } = useContext(TaskContext);
  const handleTaskStateChange = (index, completed) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };
  return (
    <ListGroup className="mt-4 gap-3">
      {tasks.map((task, index) => (
        <TaskListItem
          key={index}
          description={task.description}
          priority={task.priority}
          complete={task.completed}
          onToggleComplete={(completed) =>
            handleTaskStateChange(index, completed)
          }
        />
      ))}
    </ListGroup>
  );
};

export default TaskListGroup;

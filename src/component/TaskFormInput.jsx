import { useContext, useState } from "react";
import { Form, Stack, Button } from "react-bootstrap";
import { PriorityEnum } from "../enum/priority"; // Ensure you import the PriorityEnum
import { TaskContext } from "../App";

export const priorities = [
  { value: PriorityEnum.NONE, label: "None" },
  { value: PriorityEnum.LOW, label: "Low" },
  { value: PriorityEnum.MEDIUM, label: "Medium" },
  { value: PriorityEnum.HIGH, label: "High" },
];

export default function TaskFormInput() {
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const { addTask } = useContext(TaskContext);
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    const task = {
      description,
      priority: priority || "none",
      completed: false,
    };
    addTask(task);
    setDescription("");
    setPriority("");
  };

  const handleTaskDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  return (
    <Form onSubmit={handleTaskSubmit}>
      <Form.Group>
        <Form.Control
          type="text"
          value={description}
          required
          placeholder="Enter task description here..."
          className="p-3 my-2"
          onChange={handleTaskDescriptionChange}
        />
      </Form.Group>
      <Stack direction="horizontal" className="gap-2">
        <Form.Select
          className="p-3"
          value={priority}
          onChange={handlePriorityChange}
        >
          {priorities.map((priorityOption) => (
            <option key={priorityOption.value} value={priorityOption.value}>
              {priorityOption.label}
            </option>
          ))}
        </Form.Select>
        <Button type="submit" className="p-3 w-25">
          Add
        </Button>
      </Stack>
    </Form>
  );
}

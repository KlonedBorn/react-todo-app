import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";

const TaskItem = ({ description, priority, complete, onToggleComplete }) => {
  const [label, setLabel] = useState(description);
  const [completed, setCompleted] = useState(complete);

  const handleToggleComplete = () => {
    setCompleted(!completed); // Toggle the completed state
    if (onToggleComplete) {
      onToggleComplete(!completed); // Pass the new completed state to the parent
    }
  };

  return (
    <InputGroup className="d-flex align-items-center p-3 input-group-text">
      <Form.Check
        type="checkbox"
        checked={completed}
        onChange={handleToggleComplete}
        className="me-2"
      />
      <Form.Label
        className="mb-0"
        style={{
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        {label} - {priority}
      </Form.Label>
    </InputGroup>
  );
};

export default TaskItem;

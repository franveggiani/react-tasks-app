import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { TaskContext } from '../context/TaskContext'

export default function TaskForm() {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ taskTitle, taskDescription });
    setTaskDescription('');
    setTaskTitle('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Escribe tu tarea"
          value={taskTitle}
          autoFocus
        />
        <textarea
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          placeholder="Descripción de la tarea"
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func,
};

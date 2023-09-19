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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-8">Crea tu tarea</h1>
        <input
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Escribe tu tarea"
          value={taskTitle}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          onChange={(e) => setTaskDescription(e.target.value)}
          value={taskDescription}
          placeholder="Descripción de la tarea"
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-200">Submit</button>
      </form>
    </div>
  );
}

TaskForm.propTypes = {
  createTask: PropTypes.func,
};

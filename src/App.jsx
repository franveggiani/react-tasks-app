import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskContextProvider } from './context/TaskContext'

function App() {

  return (
    <>
      <TaskContextProvider>
        <TaskForm />
        <TaskList />
      </TaskContextProvider>
    </>
  );
}

export default App;

import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskContextProvider } from './context/TaskContext'

function App() {

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto">
        <TaskContextProvider>
          <TaskForm />
          <TaskList />
        </TaskContextProvider>
      </div>
    </ main>
  );
}

export default App;

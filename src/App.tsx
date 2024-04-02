import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center">TODO</h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;

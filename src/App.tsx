import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

import "./App.css";

function App() {
  return (
    <div className="h-full py-4 w-full">
      <h1 className="text-3xl font-semibold text-center text-white underline">
        DO IT NOW
      </h1>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;

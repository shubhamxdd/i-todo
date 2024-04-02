import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import TodoItem from "./TodoItem";

const TaskList: React.FC = () => {
  // Use the useSelector hook to access the tasks from the Redux store
  const tasks = useSelector((state: RootState) => state.tasks);

  return (
    <ul className="mt-10 max-w-md mx-auto sm:max-w-xl lg:max-w-2xl">
      {/* if tasks are available then map over them */}
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <TodoItem
            key={task.id}
            id={task.id}
            text={task.text}
            completed={task.completed}
          />
        ))
      ) : (
        //  else show message in <h1> tag
        <h1 className="text-center text-2xl font-semibold">
          No tasks found! Add some
        </h1>
      )}
    </ul>
  );
};

export default TaskList;

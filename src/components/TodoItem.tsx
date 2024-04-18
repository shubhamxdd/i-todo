import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleTask } from "../redux/taskSlice";

interface TodoItemProps {
  id: number;
  text: string;
  completed: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, completed }) => {
  // Hook to dispatch action
  const dispatch = useDispatch();

  const [showFull, setShowFull] = useState(false);

  return (
    <li className="flex items-center bg-gray-800  mb-5 p-3 rounded-md shadow-md hover:shadow-lg px-5">
      <input
        type="checkbox"
        checked={completed}
        // Dispatch the toggleTask action when the checkbox is changed
        onChange={() => dispatch(toggleTask(id))}
        className="mr-4 h-5 w-5 text-blue-600 rounded"
      />
      <p
        className={`flex-grow ${!showFull && "line-clamp-1"}  ${
          completed ? "line-through text-gray-500" : "text-gray-200"
        }`}
      >
        {showFull
          ? text
          : text.length > 30
          ? `${text.substring(0, 30)}...`
          : text}
      </p>
      {text.length > 30 && (
        <span
          className="underline cursor-pointer text-white mr-4"
          onClick={() => setShowFull(!showFull)}
        >
          {showFull ? "Show Less" : "Show More"}
        </span>
      )}
      <button
        // Dispatch the deleteTask action when the delete button is clicked
        onClick={() => dispatch(deleteTask(id))}
        className="text-base transition-all duration-300 bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-lg"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;

import React from "react";
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

  return (
    <li className="flex items-center bg-gray-100 mb-5 p-3 rounded-md shadow-md hover:shadow-lg px-5">
      <input
        type="checkbox"
        checked={completed}
        // Dispatch the toggleTask action when the checkbox is changed
        onChange={() => dispatch(toggleTask(id))}
        className="mr-4 h-5 w-5 text-blue-600 rounded"
      />
      <p
        className={`flex-grow  ${
          completed ? "line-through text-gray-500" : "text-gray-800"
        }`}
      >
        {text}
      </p>
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

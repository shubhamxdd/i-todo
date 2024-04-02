import React, { useState, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/taskSlice";

const TaskInput: React.FC = () => {
  // store todo value
  const [input, setInput] = useState("");
  // store error message
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Check if the input is empty
    if (!input.trim()) {
      // if empty set error message
      setError("Please enter a task.");
    } else {
      // if not empty add task i.e dispatch the addTask action and reset error and input
      dispatch(addTask(input.trim()));
      setInput("");
      setError("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-center mt-10 px-5 py-3"
    >
      <div className="shadow-md p-5 bg-gray-100">
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setError("");
          }}
          className="border-2 focus-within:border-gray-700 focus:border-gray-700 transition-all duration-300 border-gray-300 h-10 px-5 pr-16 rounded-l-lg text-sm focus:outline-none"
        />
        <button
          type="submit"
          disabled={!!error}
          className="px-4 py-2 bg-gray-700 hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 text-white rounded-r-lg cursor-pointer"
        >
          Add Task
        </button>
        {/* display error message if exists */}
        {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      </div>
    </form>
  );
};

export default TaskInput;

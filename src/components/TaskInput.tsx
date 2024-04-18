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
    <>
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center pt-5 px-5 py-3 sm:flex-row gap-4"
      >
        <div className="shadow-md p-5 flex justify-center items-center flex-wrap rounded-md bg-zinc-800">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError("");
            }}
            className="flex-grow border-2 text-white bg-zinc-700 max-[420px]:rounded-lg  transition-all duration-300 outline-none ring-0 border-gray-500 focus:border-gray-600  h-10 px-4 w-[350px]  rounded-l-lg text-sm"
          />
          <button
            type="submit"
            disabled={!!error}
            className="px-4 py-2 mt-0 max-[420px]:mt-2 max-[420px]:rounded-lg bg-gray-700 hover:bg-gray-800 transition-all duration-300 disabled:bg-gray-400 text-white rounded-r-lg cursor-pointer"
          >
            Add Task
          </button>
          {/* display error message if exists */}
        </div>
      </form>
      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
      <hr className="w-[60%] my-3 text-gray-400 container mx-auto" />
    </>
  );
};

export default TaskInput;

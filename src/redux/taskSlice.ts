import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

// define initial state of tasks
const initialState: Task[] = [];

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<string>) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    deleteTask: (state, action: PayloadAction<number>) => {
      return state.filter((task) => task.id !== action.payload);
    },
    toggleTask: (state, action: PayloadAction<number>) => {
      // Find the task with the id in the action's payload
      const task = state.find((task) => task.id === action.payload);
      if (task) {
        // If the task exists, toggle its completed status
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, deleteTask, toggleTask } = taskSlice.actions;
export default taskSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskSlice";

// Try to load the tasks from localStorage
const savedTasks = localStorage.getItem("tasks");
// If there are saved tasks, use them as the initial state
const preloadedState = savedTasks ? { tasks: JSON.parse(savedTasks) } : {};

// Configure the Redux store
const store = configureStore({
  reducer: {
    // Use the taskReducer for the tasks slice of the state
    tasks: taskReducer,
  },
  // Pass the preloadedState to the store
  preloadedState,
});

// Subscribe to the store
store.subscribe(() => {
  // Save the tasks to localStorage whenever the state changes
  localStorage.setItem("tasks", JSON.stringify(store.getState().tasks));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;

import { createSlice } from "@reduxjs/toolkit";
//Random ID
import { v4 as uuid } from "uuid";

export const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: uuid(), title: "Make a to do list", completed: false },
    { id: uuid(), title: "Check off the first item", completed: false },
    {
      id: uuid(),
      title: "Realize you already did two things on the list",
      completed: false,
    },
    {
      id: uuid(),
      title: "Reward yourself with a nice cup of coffee",
      completed: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuid(),
        title: action.payload.title,
        completed: false,
      };
      state.push(todo);
    },
    markComplete: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteItem: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, markComplete, deleteItem } = todoSlice.actions;

export default todoSlice.reducer;

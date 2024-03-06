import { PayloadAction, createSlice } from "@reduxjs/toolkit"

export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const initialState: Todo[] = []

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    switchIsDone: (state, action: PayloadAction<string>) => {
      return state.map((todo) => todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const { addTodo, switchIsDone, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer
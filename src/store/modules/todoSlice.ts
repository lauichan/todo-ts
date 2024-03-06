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
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      return action.payload;
    },
    addTodo: (state, action: PayloadAction<Todo>) => {
      state.push(action.payload)
    },
    switchIsDone: (state, action: PayloadAction<Todo>) => {
      return state.map((todo) => todo.id === action.payload.id ? action.payload : todo)
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      return state.filter((todo) => todo.id !== action.payload)
    }
  }
})

export const { setTodos, addTodo, switchIsDone, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer
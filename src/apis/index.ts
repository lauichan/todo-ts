import axios from "axios";
import { Todo } from "../store/modules/todoSlice";

const todoAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export const getTodos = async (): Promise<Todo[]> => {
  const response = await todoAPI.get("/todos");
  return response.data;
}

export type newTodo = Omit<Todo, "id">

export const newTodos = async (newTodos: newTodo): Promise<Todo> => {
  const response = await todoAPI.post("/todos", newTodos);
  return response.data;
}

export const updateTodos = async (updateTodos: Todo): Promise<Todo> => {
  const response = await todoAPI.patch(`/todos/${updateTodos.id}`, updateTodos);
  return response.data;
}

export const deleteTodos = async (id: string):  Promise<Todo> => {
  const response = await todoAPI.delete(`/todos/${id}`);
  return response.data;
}
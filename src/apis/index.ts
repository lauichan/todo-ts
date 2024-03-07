import axios from "axios";
import { Todo, newTodo } from "../types/todo";

export const todoAPI = axios.create({
  baseURL: "http://localhost:4000",
});

export const getTodos = async (): Promise<Todo[]> => {
  const response = await todoAPI.get("/todos");
  return response.data;
}

export const addTodosApi = async (newTodos: newTodo): Promise<Todo> => {
  const response = await todoAPI.post("/todos", newTodos);
  return response.data;
}

export const updateTodosApi = async (updateTodos: Todo): Promise<Todo> => {
  const response = await todoAPI.patch(`/todos/${updateTodos.id}`, updateTodos);
  return response.data;
}

export const deleteTodosApi = async (id: string):  Promise<Todo> => {
  const response = await todoAPI.delete(`/todos/${id}`);
  return response.data;
}
import { useMutation } from "@tanstack/react-query";
import { NewTodo, Todo } from "../types/todo";
import { addTodosApi, deleteTodosApi, updateTodosApi } from "../apis/todos.api";
import { queryClient } from "../main";
import { TODO_QUERY_KEY } from "./query.keys";

export const useMutationTodo = ()  => {
  const { mutate : addTodo } = useMutation({
    mutationFn: async (data: NewTodo) => {
      return await addTodosApi(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TODO_QUERY_KEY] })
    }
  })

  const { mutate : switchIsDone } = useMutation({
    mutationFn: async (data: Todo) => {
      return await updateTodosApi(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TODO_QUERY_KEY] })
    }
  })

  const { mutate: deleteTodo } = useMutation({
    mutationFn: async (data: string) => {
      return await deleteTodosApi(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TODO_QUERY_KEY] })
    }
  })

  return { addTodo, switchIsDone, deleteTodo }
}
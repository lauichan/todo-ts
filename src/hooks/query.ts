import { useMutation, useQuery } from "@tanstack/react-query"
import { getTodos } from "../apis"
import { queryClient } from "../main";
import { Todo, newTodo } from "../types/todo";

const TODO_QUERY_KEY = 'todos';

export const useQueryTodo = () => {
  return useQuery({
    queryKey: [TODO_QUERY_KEY],
    queryFn: async () => {
      return await getTodos()
    },
    initialData : []
  });
}

export const useMutationTodo = (axiosApi: any) => {
  return useMutation({
    mutationFn: async (data: newTodo | Todo | string) => {
      return await axiosApi(data);
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: [TODO_QUERY_KEY] })
    }
  })
}
import { useQuery } from "@tanstack/react-query";
import { TODO_QUERY_KEY } from "./query.keys";
import { getTodos } from "../apis/todos.api";

export const useQueryTodo = () => {
  return useQuery({
    queryKey: [TODO_QUERY_KEY],
    queryFn: async () => {
      return await getTodos()
    },
    initialData : []
  });
}

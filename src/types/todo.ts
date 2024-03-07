export type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

export type NewTodo = Omit<Todo, "id">
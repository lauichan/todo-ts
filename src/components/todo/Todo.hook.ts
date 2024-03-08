import { useMutationTodo } from "../../hooks/useMutationTodo";
import { useQueryTodo } from "../../hooks/useQueryTodo";
import { NewTodo, Todo } from "../../types/todo";

export const useTodo = () => {
  const { data, isLoading } = useQueryTodo();

  const workingList: Todo[] = data.filter((todo) => todo.isDone === false);
  const doneList: Todo[] = data.filter((todo) => todo.isDone === true);

  const { addTodo, switchIsDone, deleteTodo } = useMutationTodo();

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newTodo: NewTodo = {
      title: target.heading.value,
      content: target.content.value,
      isDone: false,
    };

    addTodo(newTodo);
    target.reset();
  };

  const handleIsDone = async (todo: Todo) => {
    const updated = { ...todo, isDone: !todo.isDone };
    switchIsDone(updated);
  };

  const handleDeleteBtn = async (id: Todo["id"]) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    deleteTodo(id);
  };

  return {
    isLoading,
    workingList,
    doneList,
    handleAddTodo,
    handleIsDone,
    handleDeleteBtn,
  };
};

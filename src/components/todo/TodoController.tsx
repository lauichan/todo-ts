import { addTodosApi, deleteTodosApi, updateTodosApi } from "../../apis";
import { useMutationTodo, useQueryTodo } from "../../hooks/query";
import { Todo, newTodo } from "../../types/todo";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoController() {
  const { data, isLoading } = useQueryTodo();

  const workingList: Todo[] = data.filter((todo) => todo.isDone === false);
  const doneList: Todo[] = data.filter((todo) => todo.isDone === true);

  const { mutate: mutateAddTodo } = useMutationTodo(addTodosApi);
  const { mutate: mutateSwitchIsDone } = useMutationTodo(updateTodosApi);
  const { mutate: mutateDeleteTodo } = useMutationTodo(deleteTodosApi);

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newTodo: newTodo = {
      title: target.heading.value,
      content: target.content.value,
      isDone: false,
    };

    mutateAddTodo(newTodo);
    target.reset();
  };

  const handleIsDone = async (todo: Todo) => {
    const updated = { ...todo, isDone: !todo.isDone };
    mutateSwitchIsDone(updated);
  };

  const handleDeleteBtn = async (id: string) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    mutateDeleteTodo(id);
  };

  if (isLoading) return <div>Loading...</div>;

  return (
    <>
      <TodoForm handleAddTodo={handleAddTodo} />
      <TodoList
        title="진행 중..."
        list={workingList}
        handleIsDone={handleIsDone}
        handleDeleteBtn={handleDeleteBtn}
      />
      <TodoList
        title="완료"
        list={doneList}
        handleIsDone={handleIsDone}
        handleDeleteBtn={handleDeleteBtn}
      />
    </>
  );
}

export default TodoController;

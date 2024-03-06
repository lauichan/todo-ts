import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  Todo,
  addTodo,
  deleteTodo,
  switchIsDone,
} from "../../store/modules/todoSlice";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoController() {
  const dispatch = useAppDispatch();

  const todos: Todo[] = useAppSelector((state) => state.todos);
  const workingList: Todo[] = todos.filter((todo) => todo.isDone === false);
  const doneList: Todo[] = todos.filter((todo) => todo.isDone === true);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newTodo: Todo = {
      id: crypto.randomUUID(),
      title: target.heading.value,
      content: target.content.value,
      isDone: false,
    };

    dispatch(addTodo(newTodo));
    target.reset();
  };

  const handleIsDone = (id: string) => {
    dispatch(switchIsDone(id));
  };

  const handleDeleteBtn = (id: string) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    dispatch(deleteTodo(id));
  };

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

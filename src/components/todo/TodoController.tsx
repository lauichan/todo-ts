import { useEffect } from "react";
import {
  deleteTodos,
  getTodos,
  newTodo,
  newTodos,
  updateTodos,
} from "../../apis";
import { useAppDispatch, useAppSelector } from "../../utils/store.hooks";
import {
  Todo,
  addTodo,
  deleteTodo,
  setTodos,
  switchIsDone,
} from "../../store/modules/todoSlice";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoController() {
  const dispatch = useAppDispatch();

  const todos: Todo[] = useAppSelector((state) => state.todos);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTodos();
        dispatch(setTodos(data));
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const workingList: Todo[] = todos.filter((todo) => todo.isDone === false);
  const doneList: Todo[] = todos.filter((todo) => todo.isDone === true);

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;

    const newTodo: newTodo = {
      title: target.heading.value,
      content: target.content.value,
      isDone: false,
    };

    const { id } = await newTodos(newTodo);
    dispatch(addTodo({ id, ...newTodo }));
    target.reset();
  };

  const handleIsDone = async (todo: Todo) => {
    const updated = { ...todo, isDone: !todo.isDone };
    await updateTodos(updated);
    dispatch(switchIsDone(updated));
  };

  const handleDeleteBtn = async (id: string) => {
    if (!window.confirm("삭제하시겠습니까?")) return;
    await deleteTodos(id);
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

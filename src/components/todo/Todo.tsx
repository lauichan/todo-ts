import { useTodo } from "./Todo.hook";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

function TodoController() {
  const {
    isLoading,
    workingList,
    doneList,
    handleAddTodo,
    handleIsDone,
    handleDeleteBtn,
  } = useTodo();

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

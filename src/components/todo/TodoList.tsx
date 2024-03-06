import { Todo } from "../../store/modules/todoSlice";
import styles from "./TodoList.module.css";

type TodoListProps = {
  title: string;
  list: Todo[];
  handleIsDone: (id: string) => void;
  handleDeleteBtn: (id: string) => void;
};

function TodoList({
  title,
  list,
  handleIsDone,
  handleDeleteBtn,
}: TodoListProps) {
  return (
    <section>
      <h2>{title}</h2>
      <ul className={styles.list}>
        {list.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.title} - {todo.content}
              <button onClick={() => handleIsDone(todo.id)}>
                {todo.isDone ? "취소" : "완료"}
              </button>
              <button onClick={() => handleDeleteBtn(todo.id)}>삭제</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

export default TodoList;

import styles from "./TodoForm.module.css";

type TodoFormProps = {
  handleAddTodo: (e: React.FormEvent<HTMLFormElement>) => void;
};

function TodoForm({ handleAddTodo }: TodoFormProps) {
  return (
    <form className={styles.form} onSubmit={handleAddTodo}>
      <input name="heading" placeholder="할 일" required></input>
      <textarea name="content" placeholder="내용" required></textarea>
      <button>추가</button>
    </form>
  );
}

export default TodoForm;

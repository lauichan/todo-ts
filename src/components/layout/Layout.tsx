import { PropsWithChildren } from "react";
import styles from "./Layout.module.css";

function Layout({ children }: PropsWithChildren) {
  return (
    <div className={styles.container}>
      <header>
        <h1>TodoList</h1>
      </header>
      <main className={styles.main}>{children}</main>
      <footer></footer>
    </div>
  );
}

export default Layout;

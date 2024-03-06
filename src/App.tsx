import "./reset.css";
import "./App.css";
import Layout from "./components/layout/Layout";
import TodoController from "./components/todo/TodoController";

function App() {
  return (
    <Layout>
      <TodoController />
    </Layout>
  );
}

export default App;

import { TodoList } from "components/TodoList";
import { useTodos } from "hooks/useTodos";
import { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const { handleAddTodo, addTodoMode, todos, newTodoValue, setNewTodoValue } =
    useTodos();

  return (
    <div className={styles.container}>
      <Head>
        <title>Todos</title>
        <meta name="description" content="List of nodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Todos</h1>
        <TodoList todos={todos} />
        {addTodoMode && (
          <div>
            <input
              placeholder="Add your description here"
              value={newTodoValue}
              onChange={(e) => setNewTodoValue(e.target.value)}
            />
          </div>
        )}

        <button aria-label="Add Todo" onClick={handleAddTodo}>
          +
        </button>
      </main>
    </div>
  );
};

export default Home;

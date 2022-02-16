import type { NextPage } from "next";
import Head from "next/head";
import { useState, MouseEvent } from "react";
import styles from "../styles/Home.module.css";
import { Todo } from "./api/todos";
const Home: NextPage = () => {
  const [addTodoMode, setAddTodoMode] = useState(false);
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const toggleAddTodoMode = () => setAddTodoMode((prev) => !prev);

  const handleClick = () => {
    if (!newTodo) return toggleAddTodoMode();

    const newTodoToAdd: Todo = {
      _id: todos.length.toString(),
      status: "INCOMPLETE",
      description: newTodo,
    };

    setTodos((prev) => [...prev, newTodoToAdd]);
    setNewTodo("");
    toggleAddTodoMode();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Todos</title>
        <meta name="description" content="List of nodes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Todos</h1>
        <ul>
          {todos.map(({ _id, description }) => {
            return <li key={_id}>{description}</li>;
          })}
        </ul>
        {addTodoMode && (
          <div>
            <input
              placeholder="Add your description here"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </div>
        )}

        <button aria-label="Add Todo" onClick={handleClick}>
          +
        </button>
      </main>
    </div>
  );
};

export default Home;

import { Todo } from "pages/api/todos";
import React from "react";
import type { NextPage } from "next";
type Params = {
  todos: Todo[];
};

export const TodoList: NextPage<Params> = ({ todos }) => {
  return (
    <ul>
      {todos.map(({ _id, description }) => {
        return <li key={_id}>{description}</li>;
      })}
    </ul>
  );
};

import { Todo } from "pages/api/todos";
import { useState } from "react";

export const useTodos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodoValue, setNewTodoValue] = useState("");
  const [addTodoMode, setAddTodoMode] = useState(false);

  const toggleAddTodoMode = () => setAddTodoMode((prev) => !prev);

  const handleAddTodo = () => {
    if (!newTodoValue) return toggleAddTodoMode();

    const newTodoToAdd: Todo = {
      _id: todos.length.toString(),
      status: "INCOMPLETE",
      description: newTodoValue,
    };

    setTodos((prev) => [...prev, newTodoToAdd]);
    setNewTodoValue("");
    toggleAddTodoMode();
  };

  return {
    todos,
    handleAddTodo,
    addTodoMode,
    newTodoValue,
    setNewTodoValue,
  };
};

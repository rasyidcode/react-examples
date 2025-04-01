import React, { useCallback, useState } from "react";

const TodoItem = React.memo(
  ({
    todo,
    onComplete,
  }: {
    todo: {
      id: number;
      text: string;
      completed: boolean;
    };
    onComplete: (id: number) => void;
  }) => {
    console.log(`Rendering: ${todo.text}`); // Debugging render logs

    return (
      <li>
        {todo.text}{" "}
        <button onClick={() => onComplete(todo.id)}>
          {todo.completed ? "Incomplete" : "Complete"}
        </button>
        <input type="checkbox" checked={todo.completed} readOnly />
      </li>
    );
  }
);

export default function Example3() {
  console.log("re-render Example3");

  const [todos, setTodos] = useState([
    { id: 1, text: "Learn react", completed: false },
    { id: 2, text: "Build a project", completed: false },
  ]);
  const [count, setCount] = useState(0); // Unrelated state

  // Function recreated on every render!
  //   function handleComplete(id: number) {
  //     setTodos((prevTodos) =>
  //       prevTodos.map((todo) =>
  //         todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //       )
  //     );
  //   }
  const handleComplete = useCallback(
    (id: number) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    },
    [todos]
  );

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Re-render</button>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onComplete={handleComplete} />
      ))}
    </div>
  );
}

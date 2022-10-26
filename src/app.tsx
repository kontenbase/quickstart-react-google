import { useEffect, useState } from "react";
import { kontenbase } from "./libs";

export const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const { data, error } = await kontenbase.service("todos").find();
      if (data) {
        setTodos(data as any);
      } else if (error) {
        console.error(error);
      }
    };

    fetchTodos();
  });

  https: return (
    <div>
      <h1>Kontenbase + React + Google</h1>
      {todos && <pre>{JSON.stringify(todos, null, 2)}</pre>}
    </div>
  );
};

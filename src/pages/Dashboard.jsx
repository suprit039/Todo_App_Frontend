import { useState, useEffect } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import TodoItem from "../components/TodoItem";
import Navbar from "../components/Navbar";
export default function Dashboard() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos")) || [];
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return alert("Empty task");
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
    setText("");
  };

  const toggle = (id) => {
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const remove = (id) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const filtered = todos.filter(t => {
    if (filter === "completed") return t.completed;
    if (filter === "pending") return !t.completed;
    return true;
  });

  return (
    <div>
      <Navbar />
      <div className="p-4 max-w-xl mx-auto space-y-4">
        <div className="flex gap-2">
          <Input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add task" />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="flex gap-2">
          {[
            { key: "all", label: "All", count: todos.length },
            { key: "pending", label: "Pending", count: todos.filter(t => !t.completed).length },
            { key: "completed", label: "Completed", count: todos.filter(t => t.completed).length },
          ].map(({ key, label, count }) => (
            <Button
              key={key}
              variant={filter === key ? "default" : "outline"}
              onClick={() => setFilter(key)}
            >
              {label} ({count})
            </Button>
          ))}
        </div>

        <div className="space-y-2">
          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground text-sm py-6">
              {filter === "completed" ? "No completed tasks yet." : filter === "pending" ? "No pending tasks. All done!" : "No tasks yet. Add one above."}
            </p>
          ) : (
            filtered.map(todo => (
              <TodoItem key={todo.id} todo={todo} toggle={toggle} remove={remove} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
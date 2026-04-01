import { Check } from "lucide-react";
import { Button } from "./ui/button";

export default function TodoItem({ todo, toggle, remove }) {
  return (
    <div className="flex items-center justify-between p-3 border border-border rounded-lg">
      <div className="flex items-center gap-3 flex-1">
        <span>
          {todo.text}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={() => toggle(todo.id)} title={todo.completed ? "Mark pending" : "Mark complete"}>
          <Check className={`w-4 h-4 ${todo.completed ? "text-primary" : "text-muted-foreground"}`} strokeWidth={3} />
        </Button>
        <Button variant="destructive" size="sm" onClick={() => remove(todo.id)}>Delete</Button>
      </div>
    </div>
  );
}

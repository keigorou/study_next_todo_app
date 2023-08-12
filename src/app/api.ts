import { Task } from "./types";

export const getAllTodos = async (): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3001/tasks`, { cache: "no-cache" });
    const todos = res.json();
    return todos;
}

export const addTodo = async (todo: Task): Promise<Task> => {
    const res = await fetch(`http://localhost:3001/tasks`, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify(todo),
    }

    );
    const newTodo = res.json();
    return newTodo;
}
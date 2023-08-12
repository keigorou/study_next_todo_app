"use client"
import React, { ChangeEvent, FormEvent, useState } from "react";
import { addTodo } from "../api";
import { v4 as uuidv4 } from "uuid";



const AddTask = () => {
    const [task, setTask] = useState("");

    const handleClick = async (e: FormEvent) => {
        e.preventDefault();
        await addTodo({ "id": uuidv4(), "text": task });
        setTask("");
    }
    return <form className="mb-4 space-y-3" onSubmit={handleClick}>
        <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTask(e.target.value)}
            value={task}
            type="text"
            className="w-full border px-4 py-2 rounded-lg focus:outline-none focus:border-blue-400" />
        <button

            className="w-full px-4 py-2 text-white bg-blue-500 rounded transform hover:scale-95 duration-200">AddTask</button>
    </form>
};

export default AddTask;
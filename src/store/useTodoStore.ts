import type { ToDoProps } from "@/interface/todo";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseTodoProps {
    todos: ToDoProps[];
}

export const useTodoStore = create<UseTodoProps>()(
    persist(
        (set) => ({
            todos: [],
        }),
        { name: 'todo-storage' }
    )
)
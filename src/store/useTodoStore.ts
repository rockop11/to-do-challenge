import type { ToDoProps } from "@/interface/todo";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseTodoProps {
    todos: ToDoProps[];
    addTodo: (title: string, description: string) => void;
    toggleCompleteTodo: (id: number) => void;
}

export const useTodoStore = create<UseTodoProps>()(
    persist(
        (set) => ({
            todos: [],

            addTodo: (title, description) =>
                set((state) => {

                    const newId = state.todos.length > 0
                        ? Math.max(...state.todos.map((t) => t.id)) + 1
                        : 1

                    return {
                        todos: [
                            ...state.todos,
                            {
                                id: newId,
                                title,
                                description,
                                isComplete: false
                            }
                        ]
                    }
                }),

            toggleCompleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, isComplete: !todo.isComplete }
                            : todo
                    )
                }
                )),
        }),
        { name: 'todo-storage' }
    )
)
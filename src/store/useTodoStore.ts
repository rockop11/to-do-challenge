import type { ToDoProps } from "@/interface/todo";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UseTodoProps {

    todos: ToDoProps[];
    inProgressTodos: ToDoProps[];
    completedTodos: ToDoProps[];
    filter: 'all' | 'inProgress' | 'completed',

    addTodo: (title: string, description: string) => void;
    toggleCompleteTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    setFilter: (filter: 'all' | 'inProgress' | 'completed') => void,
}

export const useTodoStore = create<UseTodoProps>()(
    persist(
        (set) => ({
            todos: [],
            inProgressTodos: [],
            completedTodos: [],
            filter: 'all',

            setFilter: (filter) => set(() => ({ filter })),

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
                        ],
                        inProgressTodos: [
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
                set((state) => {
                    const updatedTodos = state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, isComplete: !todo.isComplete }
                            : todo
                    )

                    const changedTodo = updatedTodos.find(todo => todo.id === id)

                    if (!changedTodo) return {}

                    const isNowComplete = changedTodo.isComplete

                    return {
                        todos: updatedTodos,
                        inProgressTodos: isNowComplete
                            ? state.inProgressTodos.filter(todo => todo.id !== id)
                            : [...state.inProgressTodos, changedTodo],

                        completedTodos: isNowComplete
                            ? [...state.completedTodos, changedTodo]
                            : state.completedTodos.filter(todo => todo.id !== id),
                    }
                }),

            deleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter(todo => (
                        todo.id !== id
                    )),

                    completedTodos: state.completedTodos.filter(todo => (
                        todo.id !== id
                    ))
                }))
        }),
        { name: 'todo-storage' }
    )
)
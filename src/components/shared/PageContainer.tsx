'use client'

import { useTodoStore } from "@/store/useTodoStore"
import { ToDoCard } from "../todos/TodoCard"
import { AddTodoDialog } from "../todos/AddTodoDialog"
import { Button } from "../ui/button"

export const PageContainer = () => {

    const { todos, inProgressTodos, completedTodos, filter, setFilter } = useTodoStore()

    const filteredTodos =
        filter === 'inProgress'
            ? inProgressTodos
            : filter === 'completed'
                ? completedTodos
                : todos;


    return (
        <div className="
            w-full min-h-screen 
            px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 
            py-6
        ">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl sm:text-4xl">To Do Challenge</h1>
                <AddTodoDialog />
            </div>

            <div className="flex gap-4 my-4">
                <Button
                    variant={filter === 'all' ? 'default' : 'secondary'}
                    onClick={() => setFilter('all')}
                >
                    Todas
                </Button>
                <Button
                    variant={filter === 'inProgress' ? 'default' : 'secondary'}
                    onClick={() => setFilter('inProgress')}
                >
                    En curso
                </Button>
                <Button
                    variant={filter === 'completed' ? 'default' : 'secondary'}
                    onClick={() => setFilter('completed')}
                >
                    Completadas
                </Button>
            </div>

            <div className="
                grid gap-4 mt-8
                grid-cols-1
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
            ">
                {!filteredTodos.length
                    ? (<p className="text-gray-500 text-lg italic">
                        No hay tareas en esta sección.
                    </p>)
                    : (filteredTodos.map((todo, i) => (
                        <ToDoCard key={i} {...todo} />
                    )))
                }

            </div>
        </div>

    )
}
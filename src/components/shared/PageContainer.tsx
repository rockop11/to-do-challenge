'use client'
import { todos } from "@/data/mockTodo"
import { ToDoCard } from "../todos/TodoCard"
import { AddTodoDialog } from "../todos/AddTodoDialog"

export const PageContainer = () => {

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


            <div className="
                grid gap-4 mt-8
                grid-cols-1
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4
            ">
                {!todos.length
                    ? (<p className="text-gray-500 text-lg italic">
                        Aún no hay notas.
                    </p>)
                    : (todos.map((todo, i) => (
                        <ToDoCard key={i} {...todo} />
                    )))
                }
            </div>
        </div>

    )
}
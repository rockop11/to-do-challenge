'use client'
import { ChangeEvent, FormEvent, useState } from "react";
import { useTodoStore } from "@/store/useTodoStore";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Plus } from 'lucide-react';

interface AddDialogProps {
    title: string;
    description: string;
}

export const AddTodoDialog = () => {

    const { addTodo } = useTodoStore()

    const [toggleDialog, setToggleDialog] = useState<boolean>(false)
    const [errors, setErrors] = useState<boolean>(false)
    const [inputValues, setInputValues] = useState<AddDialogProps>({
        title: '',
        description: ''
    })

    const toggleDialogHandler = () => {
        if (errors) setErrors(false)

        setToggleDialog(!toggleDialog)
    }

    const inputValuesHandler = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target

        if (errors) {
            setErrors(false)
        }

        setInputValues((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const createTodoHandler = (e: FormEvent) => {
        e.preventDefault()
        const { title, description } = inputValues

        if (!title || !description) {
            setErrors(true)
            return
        }

        addTodo(title, description)

        setInputValues({
            title: '',
            description: ''
        })

        setToggleDialog(false)
    }

    return (
        <Dialog open={toggleDialog} onOpenChange={toggleDialogHandler}>

            <DialogTrigger asChild>
                <Button onClick={toggleDialogHandler}>
                    {<Plus />}
                </Button>
            </DialogTrigger>

            <DialogContent className="p-4 w-full max-w-[300px]">
                <form className="space-y-4" onSubmit={createTodoHandler}>
                    <DialogTitle>Agergar Tarea</DialogTitle>

                    <DialogDescription>Escriba un título y una descripción para crear una tarea.</DialogDescription>

                    <div className='flex flex-col gap-4'>
                        <div>
                            <Input
                                type='text'
                                placeholder="Título"
                                name='title'
                                value={inputValues.title}
                                className={`${errors && !inputValues.title ? 'border-red-500 focus-visible:ring-red-500' : ''}`}
                                onChange={inputValuesHandler}
                            />

                            {errors && !inputValues.title && (
                                <p className="text-xs text-red-500 ml-1">Ingrese un título</p>
                            )}
                        </div>

                        <div>
                            <Textarea
                                placeholder="Descripción..."
                                name='description'
                                value={inputValues.description}
                                className={`
                                    resize-none
                                    w-full
                                    max-w-[270px]
                                    min-h-[100px]
                                    max-h-[200px]
                                    overflow-y-auto

                                    sm:w-full
                                    sm:max-w-[480px]
                                    ${errors && !inputValues.description
                                        ? 'border-red-500 focus-visible:ring-red-500'
                                        : ''}
                                    `}
                                onChange={inputValuesHandler}
                            />
                            {errors && !inputValues.description && (
                                <p className="text-xs text-red-500 ml-1">Ingrese una descripción.</p>
                            )}
                        </div>
                    </div>


                    <DialogFooter className="sm:justify-start">
                        <Button
                            type="submit"
                            variant='default'
                        >
                            Crear
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>

        </Dialog>
    )
}

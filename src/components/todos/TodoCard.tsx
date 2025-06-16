import type { ToDoProps } from '@/interface/todo';
import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Badge } from '@/components/ui/badge';
import { Button } from "@/components/ui/button";
import { BadgeCheckIcon } from "lucide-react"

export const ToDoCard = ({ id, title, description, isComplete }: ToDoProps) => {

    return (
        <Card className="
            w-full
            shadow-md 
            border border-gray-200 
            rounded-2xl 
            p-4 
            flex flex-col justify-between
            sm:max-h-[300px]
        ">
            <CardContent className="p-0 flex-1 overflow-hidden">
                <CardTitle className="text-xl font-semibold text-primary mb-2">
                    {title}
                </CardTitle>

                <div className="mb-2">
                    {isComplete ? (
                        <Badge variant='secondary' className="bg-blue-500 text-white dark:bg-blue-600">
                            <BadgeCheckIcon className="mr-1" />
                            Completada
                        </Badge>
                    ) : (
                        <Badge variant='outline'>En curso</Badge>
                    )}
                </div>

                <div className="
                    overflow-y-auto
                    max-h-[140px]
                    pr-1
                    ">
                    <CardDescription className="text-muted-foreground text-sm break-words">
                        {description}
                    </CardDescription>
                </div>
            </CardContent>

            <CardFooter className={`p-0 flex ${isComplete ? 'justify-between' : 'justify-end'} mt-1`}>
                {isComplete && (
                    <Button
                        size='sm'
                        variant='destructive'
                        onClick={() => console.log(`eliminar ${id}`)}
                    >
                        Borrar
                    </Button>
                )}

                <Button
                    size="sm"
                    variant={isComplete ? 'outline' : 'default'}
                    onClick={() => console.log(`toggle complete ${id}`)}
                >
                    {isComplete ? "En curso" : "Completar"}
                </Button>
            </CardFooter>
        </Card>

    )
}
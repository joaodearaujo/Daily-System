import { Link } from "react-router-dom"
import { cn } from "@/utils/cn";
import type { Task } from "@/features/routine/types/routine.domain.type";
export interface Props {
    title: string;
    tasks: Task[];
    isActive: boolean;
}

export function SetRoutineButton({title, tasks, isActive}: Props) {
  
  const tasksQuantity = tasks?.length;
  const tasksDone = tasks?.filter(task => task.isComplete).length;

  return (
    <Link 
        to={`/${title}`}
        className={cn('flex w-full h-fit min-w-0 rounded-xl pb-1 bg-surface2 items-center cursor-pointer')}
      >
        <div 
          className={cn(
            'flex flex-col w-full border rounded-xl py-2 px-2.75 items-center cursor-pointer text-sm capitalize font-secondary transition-colors duration-300 ease-in-out ',
            isActive ? 'border-line2/50 bg-surface text-ink font-bold' : 'border-line2/20 bg-surface/50 text-muted/50 font-medium',
          )}
        >
          <span>
            {title}
          </span>
          <span className="text-xs">
            {tasksDone ?? 0} / {tasksQuantity ?? 0}
          </span>
        </div>
    </Link>
  )
};

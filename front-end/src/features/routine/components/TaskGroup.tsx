import { Task } from "./Task";
import type { TaskGroup } from "../types/routine.domain.type";
import { AddButton } from "./AddButton";
import { useEditMode } from "../../../context/EditModeContext";

interface Props {
    group: TaskGroup;
}

export function TaskGroup({ group }: Props) {

        const { isEditMode } = useEditMode();

    return (
        <div className="text-left text-muted text-xs flex flex-col gap-2 text-3 border p-2.5 rounded-xl border-line">
            <div>
                <h2 className="uppercase pb-1 font-secondary font-semibold tracking-wider text-ink">{group?.title}</h2>
                <p className="leading-5">{group?.description}</p>
            </div>
            {group.tasks.map(task => (
                <Task key={task.id} task={task} />
            ))}
            {isEditMode && <AddButton title="Add Task"/>}
           
        </div>
    )
}
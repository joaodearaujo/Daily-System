import { Task } from "./Task";
import type { TaskGroup } from "../types/routine.domain.type";
import { AddButton } from "./AddButton";
import { useEditMode } from "../../../context/EditModeContext";
import { ExpandButton } from "./ExpandButton";
import { useExpand } from "../hooks/useExpand";
import { X } from "lucide-react";
import { CheckButton } from "./CheckButton";
import { useCheckToDelete } from "../hooks/useCheckToDelete";

interface Props {
    group: TaskGroup;
}

export function TaskGroup({ group }: Props) {
    
        const { isExpanded, controlExpand } = useExpand(true);
        const { handleCheckToDelete, isCheckedToDelete } = useCheckToDelete();
        const { isEditMode } = useEditMode();

    return (
        <div className="relative text-left text-muted text-xs flex flex-col gap-2 text-3 border-2 p-3 rounded-xl border-line">
            <div className="flex gap-2 items-center justify-between">
                <div className="w-full flex flex-col gap-1">
                    <div className="flex gap-2 items-center justify-between w-ful">
                        <h2 className="uppercase flex-1 font-secondary font-semibold tracking-wider text-muted">{group?.title}</h2>
                        {isEditMode && 
                            !(group.tasks.length === 0) 
                                && <CheckButton 
                                        Icon={X} 
                                        onClick={handleCheckToDelete} 
                                        isChecked={isCheckedToDelete} 
                                        className={isCheckedToDelete ? 'bg-red border-red': ''} 
                                    />}
                        {!(group.tasks.length === 0) && 
                            !isEditMode &&
                                <ExpandButton 
                                    onClick={controlExpand} 
                                    isExpanded={isExpanded} 
                                    className="size-5" 
                                />}
                    </div>
                    <p className="leading-5">{group?.description}</p>
                </div>

            </div>

            {isExpanded &&             
                <div className="flex flex-col gap-2">
                    {group.tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))}
                </div>}

            {isEditMode && <AddButton title="Add Task"/>}

            {group.tasks.length === 0 &&  
                !isEditMode && 
                    <AddButton 
                        title="Add Task" 
                        classNameButton="border-line" 
                        classNameText="text-muted"/>}
           
        </div>
    )
}
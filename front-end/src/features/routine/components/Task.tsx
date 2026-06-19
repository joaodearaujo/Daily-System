import { useState } from "react";
import { cn } from "../../../utils/cn";
import { ExpandButton } from "./ExpandButton";
import { CheckButton } from "./CheckButton";
import type { Task as TaskType} from "../types/routine.domain.type";
import { CATEGORY_COLORS, type CategoryKey } from "../../../constants/categoryColors";
import { useEditMode } from "../../../context/EditModeContext";
import { DeleteButton } from "../../../components/DeleteButton";
import { EditItemButton } from "../../../components/EditItemButton";
import { Star } from "../../../components/Star";
import { Dot } from "../../../components/Dot";

interface Props {
    task: TaskType;
}

export function Task({ task }: Props) {

    const categoryColor = CATEGORY_COLORS[task?.category as CategoryKey] || CATEGORY_COLORS.STUDY;
    const [ isChecked, setIsChecked ] = useState(false)
    const [ isExpanded, setIsExpanded ] = useState(false)
    const { isEditMode } = useEditMode();

    const controlCheck = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsChecked(prev => !prev);
    };

    const controlExpand = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsExpanded(prev => !prev);
    };

    const handlelExpand = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <div className="w-full h-fit flex flex-col items-start bg-surface rounded-xl border border-line overflow-hidden">
            <div
                onClick={handlelExpand}
                className="w-full h-12 flex items-center jutify-between p-4 gap-2"
             >
                <Dot color={categoryColor}/>
                <div className="flex-1 text-left flex items-center gap-2">
                    <span className={cn(
                        "transition-colors text-[15px] font-medium font-primary duration-200 ease-in-out",
                         isChecked ? 'line-through text-muted' : 'text-ink')}
                    >
                        {task?.title ?? 'Title not found'}
                    </span>
                    
                    {task?.isMandatory && <Star/>}
                </div>
                
                {
                    isEditMode 
                    
                    ? <>
                        <EditItemButton />
                        <DeleteButton />
                      </> 
                        
                    : <>
                        <ExpandButton className="mr-2" onClick={controlExpand} isExpanded={isExpanded}/>
                        <CheckButton onClick={controlCheck} isChecked={isChecked}/> 
                      </> 
                }
            </div>
            {
                isExpanded && !isEditMode &&
                    <div className="text-[13px] w-full text-left text-ink leading-5 pr-3.5 pb-3.5 pl-8.5">
                        <p>{task?.description ?? 'Description not found'}</p>
                    </div>
            }
        </div>
    )
}
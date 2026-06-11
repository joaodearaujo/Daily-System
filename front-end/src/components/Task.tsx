import { useState } from "react";
import { CheckButton } from "./ui/CheckButton";
import { cn } from "../utils/cn";
import { ChevronDown } from "lucide-react";

export function Task() {

    const [ isChecked, SetIsChecked ] = useState(false)

    const controlCheck = () => {
        if (!isChecked) {
            SetIsChecked(true)
        } else {
            SetIsChecked(false)
        }
    }

    return (
        <div className="w-full h-12 flex items-center jutify-between gap-2 bg-surface p-4 rounded-xl border border-line">
            <div className="size-2 bg-green-400 rounded-full"/>
            <span className={cn("flex-1 transition-colors font-semibold duration-200 ease-in-out", isChecked ? 'line-through text-muted' : 'text-ink')}>Train or Activity Recovery</span>
            <button className="cursor-pointer size-6 flex items-center justify-centers">
                <ChevronDown className={cn("size-3.5 text-muted")}/>
            </button>
            <CheckButton onClick={controlCheck} isChecked={isChecked}/>
        </div>
    )
}
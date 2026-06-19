import type { CSSProperties } from "react";
import { cn } from "../utils/cn";

interface Props {
    color: string; 
    className?: string;
    style?: CSSProperties
}

export function Dot({ color, style, className }: Props) {
    return <div 
                style={{backgroundColor: color, boxShadow: `0 0 10px ${color}, ${style}`}} 
                className={cn(
                    "size-1.5 bg-green-400 rounded-full  shadow-green-500",
                    className
                )}
            />
}
import type { TaskBlockProps } from "../types/taskBlock.type";
import { Task } from "./Task";

export function TaskBlock({ title, description }: TaskBlockProps) {
    return (
        <div>
            <h2>{title}</h2>
            <p>{description}</p>
            <Task />
        </div>
    )
}
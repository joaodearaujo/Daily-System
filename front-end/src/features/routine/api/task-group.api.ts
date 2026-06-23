import type { TaskGroup } from "../types/routine.domain.type"

const BASE_URL = import.meta.env.VITE_API_URL;

export const createGroup = async (taskGroup: Omit<TaskGroup, 'id'>) => {
    const res = await fetch(`${BASE_URL}/v1/taskGroup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskGroup)
    })

    if (!res.ok) throw new Error(`Failed to create group: ${res.status}`)

    return res.json()
}


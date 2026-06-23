import type { TaskGroup } from "../types/routine.domain.type"

const BASE_URL = import.meta.env.VITE_API_URL;

export const createGroup = async (taskGroup: Omit<TaskGroup, 'id'>) => {
    const res = await fetch(`${BASE_URL}/v1/task-group`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(taskGroup)
    })

    if (!res.ok) throw new Error(`Failed to create group: ${res.status}`)

    return res.json()
}

export const deleteTaskGroup = async (groupId: string) => {
    const res = await fetch(`${BASE_URL}/v1/task-group/${groupId}`, {
        method: 'DELETE',
    });

    if (!res.ok) throw new Error(`Failed to delete group: ${res.status}`)
}


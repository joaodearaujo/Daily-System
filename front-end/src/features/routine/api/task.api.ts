import type { Task } from "../types/routine.domain.type";

const BASE_URL = import.meta.env.VITE_API_URL

export const getAllTasks = async () => {
  const res = await fetch(`${BASE_URL}/v1/task`);

  if (!res.ok) throw new Error(`Failed to get routines: ${res.status}`);

  return res.json();
}

export const createTask = async (task: Omit<Task, 'id' | 'isComplete'>) => {
    const res = await fetch(`${BASE_URL}/v1/task`, {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(task),
    });

    if (!res.ok) throw new Error(`Failed to create: ${res.status}`)

    return res.json();
}

export const toggleCompleteTask = async (taskId: string, isComplete: boolean) => {
  const res = await fetch(`${BASE_URL}/v1/task/${taskId}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ isComplete }),
  });

  if (!res.ok) throw new Error(`Failed to toggle task: ${res.status}`);
};

export const deleteTask = async (taskId: string) => {
  const res = await fetch(`${BASE_URL}/v1/task/${taskId}`, {
    method: 'DELETE'
  });
  
  if (!res.ok) throw new Error(`Failed to delete task: ${res.status}`)
}
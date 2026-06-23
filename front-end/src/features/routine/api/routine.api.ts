import type { Routine } from "../types/routine.domain.type";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getRoutines = async () => {
  const res = await fetch(`${BASE_URL}/v1/routine`);

  if (!res.ok) throw new Error('Failed to fetch routines');

  return res.json();
};

export const createRoutine = async (routine: Omit<Routine, 'id'>) => {
  const res = await fetch(`${BASE_URL}/v1/routine`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(routine)
  })

  if (!res.ok) throw new Error(`Failed to create: ${res.status}`)  

  return res.json();
}
  
  export const deleteRoutine = async (id: string) => {
    const res = await fetch(`${BASE_URL}/v1/routine/${id}`,{
      method: 'DELETE'
    });

    if (!res.ok) throw new Error(`Failed to create: ${res.status}`)  
}

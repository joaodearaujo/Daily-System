import type { Routine } from "../types/routine.domain.type";

const BASE_URL = import.meta.env.VITE_API_URL;

export const getRoutines = async () => {
  const res = await fetch(`${BASE_URL}/v1/routine`);
  if (!res.ok) throw new Error('Failed to fetch routines');
  return res.json();};

export const createRoutine = async (routine: Omit<Routine, 'id'>) => {
  const res = await fetch(`${BASE_URL}/v1/routine`, {
    method: 'POST',
    headers: {'Content-type': 'application/json'},
    body: JSON.stringify(routine)
  })

  if (!res.ok) throw new Error(`Failed to create: ${res.status}`)  
    
    return res.json();
  }
  
  export const deleteItem = async (id: string) => {
    const res = await fetch(`${BASE_URL}/v1/task/${id}`,{
      method: 'DELETE'
    });
    if (!res.ok) throw new Error(`Failed to create: ${res.status}`)  
}

// 200 ok
// 201 created
// 400 badResquest (input invalido)
// 401 nao autorizado
// 403 autorizado mas falta algo
// 404 escreveu alguma coisa errada
// 409 conflito (ja existe)
// 500 o server ta ruim

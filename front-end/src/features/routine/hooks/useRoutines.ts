import { useQuery } from "@tanstack/react-query";
import { getRoutines } from "../api/routine.api";
import { mapRoutineToDomain } from "../mappers/routine.mapper";

export function useRoutines() {
  const query = useQuery({
    queryKey: ['routines'],
    queryFn: getRoutines,
  });

  return {
    routines: query.data ? mapRoutineToDomain(query.data) : [],
    routine: query.data ? mapRoutineToDomain(query.data)[0] : undefined,
    isLoading: query.isLoading,
    isError: query.isError,
  };
}

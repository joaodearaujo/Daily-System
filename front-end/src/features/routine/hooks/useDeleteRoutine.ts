import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteRoutine } from "../api/routine.api";

export function useDeleteRoutine() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteRoutine,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['routines']}),
        onError: (error: Error) => console.log(error.message) 
    });
}
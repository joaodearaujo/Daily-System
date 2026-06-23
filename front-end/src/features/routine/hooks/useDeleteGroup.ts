import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteTaskGroup } from "@/features/routine/api/task-group.api";

export function useDeleteGroup() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteTaskGroup,
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['routines']}),
        onError: (error: Error) => console.log(error.message) 
    });
}
import { useQuery } from "@tanstack/react-query";
import { getAllTasks } from "../api/task.api";
import { mapTaskToDomain } from "../mappers/task.mapper";

export function useTasks() {
    const query = useQuery({
        queryKey: ['tasks'],
        queryFn: getAllTasks,

    });

    const mapped = query.data ? mapTaskToDomain(query.data) : [];

    return {
        tasks:  mapped,
        isLoading: query.isLoading,
        isError: query.isError,
    };

}
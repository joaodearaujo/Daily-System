import type {  Task } from '@/features/routine/types/routine.domain.type';
import type {  TaskApiResponse } from '@/features/routine/types/routine.dto';

export const mapTaskToDomain = (tasks: TaskApiResponse[]): Omit<Task, 'groupId'>[] => {

if (!Array.isArray(tasks)) return [];

return tasks.map(task => ({
        id: task.id,
        category: task.category as Task['category'],
        title: task.title,
        description: task.description,
        isComplete: task.isComplete,    
        isMandatory: task.isMandatory,
    }));
};

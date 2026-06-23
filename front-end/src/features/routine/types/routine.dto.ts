export type RoutineApiResponse = Array<{
  id: string;
  title: string;
  description?: string;         
  groups: GroupApiResponse[];
}>;

export type GroupApiResponse = {
    id: string;
    title: string;
    description?: string;
    tasks: TaskApiResponse[];
}

export type TaskApiResponse = {
      id: string;
      category: string;
      title: string;
      description?: string;
      isComplete: boolean;
      isMandatory: boolean;
}


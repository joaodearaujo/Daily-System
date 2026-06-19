export type RoutineApiResponse = Array<{
  id: string;
  title: string;
  description: string;         
  groups: Array<{
    id: string;
    title: string;
    description?: string;
    tasks: Array<{
      id: string;
      category: string;
      title: string;
      description?: string;
      is_complete: boolean;
      is_mandatory: boolean;
    }>;
  }>;
}>;

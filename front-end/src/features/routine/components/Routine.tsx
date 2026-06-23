import { TaskGroup } from "@/features/routine/components/TaskGroup";
import type { Routine } from "@/features/routine/types/routine.domain.type";
import { AddButton } from "@/components/ui/AddButton";
import { useEditMode } from "@/context/EditModeContext";
import { Form } from "@/components/Form";
import { GROUP_FIELDS } from "@/constants/FormFields";
import { useForm } from "@/features/routine/hooks/useForm";
import { useCreateGroup } from "../hooks/useCreateGroup";
interface Props {
  routine: Routine;
}

export function Routine({ routine }: Props) {
  
  const { isEditMode } = useEditMode();
  const { isFormOpen, setIsFormOpen, handleForm } = useForm();  
  const { mutate: createGroup } = useCreateGroup();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const data = new FormData(e.currentTarget);

    createGroup({
      routineId: routine.id as string,
      title: data.get('title') as string,
      description: data.get('description') as string,
      tasks: [],
    });
    setIsFormOpen(false);
  }
  
  if (!routine) return <div className="text-muted">Something went wrong :(</div>;
      
  return (
        <>
          {(routine.groups.length === 0 || isEditMode) && (
            <AddButton title="Group" onClick={handleForm}/>
          )}
          
          {routine?.groups.map(group => ( 
            <TaskGroup 
              key={`${group.id}-${routine.id}`}
              group={group} 
            />
          ))}

          {isFormOpen && (
              <Form
                  title="Create Group"
                  fields={GROUP_FIELDS}
                  method="POST"
                  onSubmit={handleSubmit}
                  onClose={() => setIsFormOpen(false)}
              />
          )}
        </>
    )
}
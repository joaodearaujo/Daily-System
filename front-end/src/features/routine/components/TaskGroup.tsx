import { Task } from "@/features/routine/components/Task";
import type { TaskGroup } from "@/features/routine/types/routine.domain.type";
import { useEditMode } from "@/context/EditModeContext";
import { ExpandButton } from "@/features/routine/components/ExpandButton";
import { AddButton } from "@/components/ui/AddButton";
import { useExpand } from "@/features/routine/hooks/useExpand";
import { Form } from "@/components/Form";
import { useForm } from "../hooks/useForm";
import { useCreateTask } from "../hooks/useCreateTask";
import { TASK_FIELDS } from "@/constants/FormFields";
import type { CategoryKey } from "@/constants/categoryColors";
import { CloseButton } from "@/components/ui/CloseButton";
import { useDeleteGroup } from "../hooks/useDeleteGroup";

interface Props {
    group: TaskGroup;
}

export function TaskGroup({ group }: Props) {
    const { isExpanded, controlExpand } = useExpand(true);
    const { isEditMode } = useEditMode();
    const { isFormOpen, setIsFormOpen, handleForm } = useForm();
    const { mutate: createTask } = useCreateTask();
    const { mutate: deleteGroup } = useDeleteGroup();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        createTask({
            groupId: group.id as string,
            category: data.get('category') as CategoryKey,
            title: data.get('title') as string,                                
            description: data.get('description') as string,
            isMandatory: data.get('isCore') === 'true',
        })
        setIsFormOpen(false);
    }

    return (
        <div className="bg-surface2 pb-1 rounded-xl">
            <div className="text-left text-muted text-xs flex flex-col gap-2 text-3 border p-4 bg-surface/80 rounded-xl border-line2/60">
                <div className="flex gap-2 items-center justify-between w-full">
                    <h2 className="uppercase flex-1 font-secondary font-semibold tracking-wider text-muted">
                        {group.title}
                    </h2>
                    
                    {isEditMode && (
                       <CloseButton
                            onClick={() => deleteGroup(group.id)}
                            className={"opacity-60 hover:text-red hover:opacity-100"}
                        />
                    )}
                    
                    {(group.tasks?.length > 0 && !isEditMode) && (
                        <ExpandButton
                            onClick={controlExpand}
                            isExpanded={isExpanded}
                        />
                    )}
                </div>
                    
                {group.description && (
                    <p className="leading-5 w-full">{group.description}</p>
                )}
                
                {isExpanded && (
                    group.tasks?.map((task) => (
                        <Task
                            key={task.id}
                            task={task}
                        />
                    ))
                )}
                
                {(group.tasks?.length === 0 || isEditMode) && (
                    <AddButton title="Task" onClick={handleForm}/>
                )}
            </div>
            {isFormOpen && (
                    <Form
                        title="Create Group"
                        fields={TASK_FIELDS}
                        method="POST"
                        onSubmit={handleSubmit}
                        onClose={() => setIsFormOpen(false)}
                    />
                )}
        </div>
    );
}
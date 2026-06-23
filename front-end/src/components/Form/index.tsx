import { FormField } from "./FormField";
import { CloseButton } from "@/components/ui/CloseButton";
import { Modal } from "../ui/Modal";

interface Props extends React.ComponentPropsWithRef<'form'>{
    title: string;
    fields: FormField[]; 
    onClose: () => void;
};

export function Form({ title, fields, onClose, ...props }: Props) {
    return (
        <Modal>
            <form 
                {...props}
                className="bg-surface2 w-[25%] h-fit rounded-xl pb-1 overflow-hidden">
                <div className="w-full h-full flex flex-col bg-surface rounded-xl p-5 border font-secondary border-line overflow-hidden gap-4">
                    <div className="w-full flex items-center justify-between">
                        <span className="text-ink uppercase font-semibold">
                            {title}
                        </span>

                        <CloseButton onClick={onClose} />
                    </div>

                    {fields?.map(field => (
                        <FormField 
                            {...field}
                            key={field.id}
                         />
                    ))}

                    <button
                        type="submit"
                        className="bg-surface2 text-ink font-semibold cursor-pointer text-md rounded-[13px] overflow-hidden p-3"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </Modal>
    )
}

export { FormField };

import { cn } from "@/utils/cn";

export interface FormField {
    label: string;
    id: string;
    name: string;  
    placeholder: string;
    required: boolean;
    type: string;
    options?: {optionName: string; optionValue: string}[]
}

export function FormField({...field}: FormField) {
    return (
        <div className={cn("flex items-start gap-1 font-secondary", field.type === 'select' ? 'flex': 'flex-col')}>
            <label
                className="text-md text-ink font-medium capitalize"
                htmlFor={field.id}
            >
                {field.label}
            </label>
            {field.type === 'select' ? (
                <select 
                    name={field.name}
                    id={field.id}
                >
                    {field.options?.map( option => (
                        <option 
                            className="w-full bg-surface2 rounded-xl px-3 py-2 border border-line placeholder:text-sm focus:outline-none text-semibold text-muted"
                            value={option.optionValue}
                            key={option.optionName}
                        >
                            {option.optionName}
                        </option>
                    ))}
                </select>
            ) : (
                <input
                    placeholder={field.placeholder}
                    id={field.id}
                    name={field.name}
                    required
                    className="w-full bg-surface2 rounded-xl px-3 py-2 border border-line placeholder:text-sm focus:outline-none text-semibold text-muted"
                    type={field.type}
                />
            )}
        </div>
    )
}
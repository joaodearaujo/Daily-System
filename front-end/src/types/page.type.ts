export interface PageButtonProps extends React.ComponentPropsWithoutRef<'button'>{
    name: string;
    itemsDone?: number;
    totalItems?: number;
    label?: string;
    isSelected?: boolean;
}
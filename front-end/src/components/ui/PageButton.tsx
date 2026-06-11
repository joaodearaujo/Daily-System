import { cn } from "../../utils/cn"
import type { PageButtonProps } from "../../types/page.type";


export function PageButton({name, totalItems, itemsDone, isSelected, ...props}: PageButtonProps) {
  return (
    <button 
    {...props}
    className={cn('flex flex-col flex-1 surface border border-px rounded-lg py-2 px-2.75 items-center justify-center cursor-pointer', 
                  isSelected ? 'border-line2 bg-surface2' : 'border-line bg-surface'
    )}
    >
      <span className={cn('text-sm capitalize', isSelected ? 'text-ink font-bold' : 'text-muted font-semibold' )}>{name}</span>
      <span className={cn('text-xs ', isSelected ? 'text-ink font-bold' : 'text-muted font-semibold' )}> {itemsDone ?? 0 } / {totalItems ?? 0}</span>
    </button>
  )
};

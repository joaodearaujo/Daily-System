import { cn } from "@/utils/cn";

interface Props {
    classNameInner?: string; 
    classNameOuter?: string; 
    children: React.ReactNode
}

export function StandardCard({
    classNameInner, 
    classNameOuter, 
    children}: Props) {
    return (
        <div className={cn(
                'w-full bg-surface2 pb-1 text-[12px] border overflow-hidden border-surface rounded-xl transition-all duration-300',
                classNameOuter
            )}
        >
            <div className={cn(
                    'text-surface font-secondary p-2 bg-surface rounded-xl transition-all duration-300',
                    classNameInner
                )}
            >
                {children}
            </div>
        </div>
    )
}
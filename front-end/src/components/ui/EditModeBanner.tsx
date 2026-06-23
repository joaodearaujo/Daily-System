import { useEditMode } from "@/context/EditModeContext"
import { StandardCard } from "@/components/ui/StandardCard";


export function EditModeBanner() {
    const { isEditMode } = useEditMode();
    return (
        <>
            {isEditMode && (
                <StandardCard
                classNameInner="text-edit"
                classNameOuter="bg-edit border-edit"
            >
                Edit mode enabled! — Add or remove pages, groups, and tasks!
            </StandardCard>
            )}
        </>
    )
}

import { Moon, SquarePen, Sun } from "lucide-react";
import { useEditMode } from "@/context/EditModeContext";
import { useTheme } from "@/context/ThemeContext";
import { StandardButton } from "@/components/ui/StandardButton";

export function Settings() {
  const { isEditMode, toggleEditMode } = useEditMode();
  const { isDark, toggleTheme } = useTheme();  

  return (
    <div className='w-fit flex flex-col gap-2 items-center justify-center '>
          {/* Toggle Theme */}
          <StandardButton   
            onClick={toggleTheme} 
            Icon={isDark ? Moon : Sun} 
            label='Toggle theme'
            classNameIcon={isDark ? ('text-purple group-hover:shadow-blue/50') : 'text-amber group-hover:shadow-amber/50'}
            />

          {/* Edit Mode Button*/}
          <StandardButton   
            onClick={toggleEditMode} 
            Icon={SquarePen} 
            label='Toggle edit mode'
            classNameWrapper={`${isEditMode && ('bg-edit pb-1')}`}
            classNameButton={`${isEditMode && ('border-edit')}`}
            classNameIcon={`group-hover:text-edit hover:shadow-edit/50 ${isEditMode && ('text-edit')}`}
          />
    </div>
  )
}
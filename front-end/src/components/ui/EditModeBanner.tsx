import { useEditMode } from "../../context/EditModeContext"


export function EditModeBanner() {

    const { isEditMode } = useEditMode();

    return (
        <>
            {isEditMode &&            
              <div className='w-full text-edit font-secondary text-[12px] font-bold shadow-aura shadow-edit/20 bg-edit/10 border-2 border-edit/20 rounded-lg transition-all duration-300'>
                <div className='text-edit font-secondary text-[12px] font-bold p-2 bg-edit/10  rounded-lg transition-all duration-300'>
                 Edit mode enabled! — Add or remove pages, groups, and tasks!
                </div>
              </div>
            }  
        </>
    )
}
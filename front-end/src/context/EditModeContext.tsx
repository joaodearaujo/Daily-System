import { createContext, useContext, useState } from "react";

interface EditModeContextType {
    isEditMode: boolean;
    toggleEditMode: () => void;
}

const EditModeContext = createContext<EditModeContextType>({
    isEditMode: false,
    toggleEditMode: () => {},
});  

export function EditModeProvider({ children } : {children: React.ReactNode}) {
    const [isEditMode, setIsEditMode] = useState(false);
    const toggleEditMode = () => setIsEditMode(prev => !prev );

    return (
        <EditModeContext.Provider value={{ isEditMode, toggleEditMode}}>
            {children}
        </EditModeContext.Provider> 
    )
}

export function useEditMode() {
    return useContext(EditModeContext);
}
import { Routine } from "@/features/routine/components/Routine";
import { useRoutines } from "@/features/routine/hooks/useRoutines";
import { Route, Routes } from "react-router-dom";

export function RoutineRouter() {
    
    const { routines } = useRoutines();
    
    return (
            <Routes>
                {routines.map(routine => (
                    <Route 
                        path={`/${routine?.title}`} 
                        key={routine.id}
                        element={<Routine routine={routine}/>} 
                    />
                ))}
            </Routes>
    )
}
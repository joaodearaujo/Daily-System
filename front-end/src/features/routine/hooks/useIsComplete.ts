import { useState } from "react";

export function useIsComplete() {
     const [ isCompleted, setIsCompleted ] = useState(false);
        setIsCompleted(prev => !prev);
        return isCompleted;
    };

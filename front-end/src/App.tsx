import '@/index.css'
import { Routine } from '@/features/routine/components/Routine';
import { useRoutines } from '@/features/routine/hooks/useRoutines';
import { SetRoutineButton } from '@/components/ui/SetRoutineButton';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEditMode } from '@/context/EditModeContext';
import { cn } from '@/utils/cn';
import { AddButton } from '@/features/routine/components/AddButton';
import { Header } from '@/components/Header';
import { CategoriesLegend } from '@/components/ui/CategoriesLegend';
import { EditModeBanner } from '@/components/ui/EditModeBanner';

function App() {
  const { routines } = useRoutines();
  const { isEditMode } = useEditMode();
  const location = useLocation();


  return (
          <div className={cn('w-full h-full relative flex flex-col gap-4')}>
            {/* Header */}
            <Header/>
  
            {/* Edit Mode Banner */}
            <EditModeBanner />
              
            {/* Routine Navigation */}
            <nav className='w-full h-full flex flex-col items-start justify-center shrink-0  gap-2 '>
              <div className='flex items-center w-full gap-2'>
                {/* Edit mode buttons for adding items */}
                {isEditMode && <><AddButton title="Page" /> <AddButton title="Group"/></>}
              </div>
              <div className='w-full flex items-center gap-2'>
                <div className='w-full flex items-center gap-2'>
                  {routines.map(routine => <SetRoutineButton
                                              key={routine.id}
                                              title={routine.title}
                                              tasks={routine.groups.flatMap(group => group.tasks)}
                                              isActive={location.pathname === `/${routine?.title}`} />)}
                </div>
              </div>
            </nav>

            {/* Routine Content */}
            <div className='w-full  flex flex-col gap-4'>
                <Routes>
                  {routines.map(routine => <Route 
                                              path={`/${routine?.title}`} 
                                              key={routine.id}
                                              element={<Routine routine={routine}/>} 
                                            /> )}
                </Routes>
            </div>

            {/*Task Categories  */}
            <CategoriesLegend />

            {/* Reminder */}
            <div className="rounded-xl pb-1 bg-surface2 ">
              <footer  className='w-full h-fit flex bg-surface border border-line rounded-xl px-4 py-4 items-center'>
                <p className='text-xs text-muted text-justify'>
                  <span className='text-ink font-semibold'>
                    Remember
                  </span>
                  : This is a menu, not an exam. Close the core items and let the rest build over time. One priority per cycle beats chasing everything at once.
                </p>
              </footer>
            </div>
          </div>
      )
}

export default App;

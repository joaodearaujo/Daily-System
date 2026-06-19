import './index.css'
import { Routine } from './features/routine/components/Routine';
import { languages } from './constants/languages';
import { ProgressRing } from './components/ProgressRing';
import { LanguageButton } from './components/LanguageButton';
import { useRoutines } from './features/routine/hooks/useRoutines';
import { SetRoutineButton } from './components/SetRoutineButton';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useEditMode } from './context/EditModeContext';
import { EditModeButton } from './components/EditModeButton';
import { cn } from './utils/cn';
import { AddButton } from './features/routine/components/AddButton';
import { CATEGORY_COLORS } from './constants/categoryColors';
import { Dot } from './components/Dot';
import { Star } from './components/Star';

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';

function App() {

  const { routines, isLoading } = useRoutines();
  const location = useLocation();
  const { isEditMode, toggleEditMode } = useEditMode();

  if (isLoading) return <p className="text-sm text-muted">Loading...</p>;

  return (
          <div className='relative flex flex-col gap-3'>
            <header className='w-full h-fit flex bg-surface border border-px border-line rounded-xl px-4 py-4 items-center'>
              <div className='flex-1 h-full flex flex-col gap-0.5 mr-4 text-left'>

                {/* Greeting and Date */}
                <h1 className='text-ink font-semibold text-xl font-secondary'>Good {partOfTheDay ?? '!'}, {userName ?? 'User'}</h1>
                <p className='text-muted text-sm '>{date?? '-' }</p>


              </div>

              {/* Core tasks counter */}
              <ProgressRing />
            </header>
            
            {/* Language Selector */}
            <div className='w-full flex gap-2 items-center justify-end'>
              {languages.map(language => <LanguageButton 
                                            key={language.title} 
                                            title={language.title}/> )}

              <EditModeButton isEditMode={isEditMode} toggleEditMode={toggleEditMode} />
            </div>



            {/* Edit Warner */}
             {isEditMode &&            
              <div className={cn(
                      'text-amber font-secondary text-[12px] font-bold p-2 bg-amber/10 border border-amber/20 rounded-lg transition-all duration-500',
                      isEditMode ? "opacity-100 translate-y-0 ": "opacity-0 -translate-y-2"
              )}
            >
               Edit mode — add or remove pages, groups, and tasks
            </div>}   
            

              
            {/* Pages selection */}
            <nav className='w-full h-full flex flex-col items-center gap-2 shrink-0'>
              <div className='w-full flex items-center gap-2'>
                {isEditMode && <AddButton title="Add Page" className='h-full' disabled={routines[0].groups.length === 2}/>}
                <div className='w-full flex items-center gap-2'>
                  {routines.map(routine => <SetRoutineButton
                                              key={routine.id}
                                              title={routine.title}
                                              tasks={routine.groups[0]?.tasks}
                                              isActive={location.pathname === `/${routine?.title}`}/>)}
                </div>
              </div>
            </nav>

            {/* Page Content */}
            <div className='w-full h-full flex flex-col gap-3'>
              {/* Routes for each Page*/}
                <Routes>
                  {routines.map(routine => <Route 
                                              path={`/${routine?.title}`} 
                                              key={routine.id}
                                              element={<Routine routine={routine}/>} 
                                            />
                                          )}

                </Routes>
            </div>

            {/*Task Categories  */}
            <div className="text-muted text-xs flex gap-4 justify-start">
              <div className='flex gap-2'><Star/><span className='uppercase'>core</span></div>
                {Object.entries(CATEGORY_COLORS)
                  .map(([key, color]) => 
                  <div className='flex gap-2 items-center' key={key}>
                    <Dot color={color}/>
                    <span className='capitalize'>{key}</span>
                  </div>)}
            </div>

            {/* Warning */}
            <footer  className='w-full h-fit flex bg-surface border border-px border-line rounded-xl px-4 py-4 items-center'>
              <p className='text-sm text-muted text-justify'>
                <span className='text-ink font-semibold'>
                  Remember
                </span>
                : This is a menu, not an exam. Close the core items and let the rest build over time. One priority per cycle beats chasing everything at once.
              </p>
            </footer>
          </div>
      )
}

export default App;

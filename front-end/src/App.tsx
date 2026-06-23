import '@/index.css'
import { RoutineRouter } from './features/routine/components/RoutineRouter';
import { CategoriesLegend } from '@/components/ui/CategoriesLegend';
import { EditModeBanner } from '@/components/ui/EditModeBanner';
import { RoutineNav } from '@/features/routine/components/RoutineNav';
import { Reminder } from '@/components/Reminder';
import { Greeting } from '@/components/Header/Greeting';
import { Settings } from '@/components/Header/Settings';

function App() {
  return (
          <div className='relative w-full min-h-0 flex flex-col gap-4 items-center justify-center'>
            <header className='w-full flex gap-4'>
                <Greeting />
                <Settings />
            </header>

            <CategoriesLegend />

            <EditModeBanner />

            <nav className='w-full h-full flex flex-col items-center justify-center gap-2'> 
              <RoutineNav />
            </nav>

            <main className='w-full min-h-135 sm:max-h-135 flex flex-col gap-4 scrollbar-thumb-surface2 scrollbar-none overflow-y-auto'>
              <RoutineRouter />
            </main>
            
            <Reminder />
          </div>
      )
}

export default App;

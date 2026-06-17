import './index.css'
import { Daily } from './features/routine/pages/Daily';
import { languages } from './constants/languages';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProgressRing } from './components/ProgressRing';
import { LanguageButton } from './components/LanguageButton';
import { pages } from './constants/pages';
import { SetPageButton } from './components/SetPageButton';

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';
const streakDays = 0;

function App() {
  return (
          <div className='flex flex-col gap-3'>
            <header className='w-full h-fit flex bg-surface border border-px border-line rounded-xl px-4 py-4 items-center'>
              <div className='flex-1 h-full flex flex-col gap-0.5 mr-4 text-left'>

                {/* Greeting and Date */}
                <h1 className='text-ink font-semibold text-xl font-secondary'>Good {partOfTheDay ?? '!'}, {userName ?? 'User'}</h1>
                <p className='text-muted text-sm '>{date?? '-' }</p>

                {/*Streak Counter*/}
                <div className='w-fit flex gap-1.5 mt-1.5 bg-amber/10 border border-px border-amber/22 rounded-full px-2 py-1 text-amber text-sm'>
                  <span>Streak:</span>
                    <b className='font-semibold'>{streakDays ?? '-'} </b>
                  <span>Days</span>
                </div>
              </div>

              {/* Core tasks counter */}
              <ProgressRing />
            </header>
            
            {/* Language Selector */}
            <div className='w-full flex gap-2 items-center justify-end'>
              {languages.map(language => <LanguageButton 
                                            key={language.title} 
                                            title={language.title}/>
                                          )}
            </div>

            {/* Motivational Phrase */}
            <div className='w-full items-center px-4 text-[13px] font-medium text-muted font-secondary'>
              Discipline is freedom — choose the discomfort that builds, not the one that destroys.
            </div>

              <BrowserRouter>
                {/* Pages selection */}
                <nav className='w-full flex items-center gap-2'>
                  {pages.map((page) => <SetPageButton
                                          key={page.title}
                                          {...page} />
                                        )}
                </nav>
                  {/* Page Content */}
                  <div className='w-full h-full flex flex-col gap-2'>
                    {/* Routes for each Page*/}
                      <Routes>
                        <Route path="/" element={<Daily />}/>
                        <Route path="/daily" element={<Daily />}/>
                      </Routes>
                  </div>
              </BrowserRouter>

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

import './index.css'

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';
const streakDays = 0;

function App() {

  return (
    <>
      <header className='w-full h-fit flex bg-surface border border-px border-line rounded-xl px-4 py-4 items-center'>
        <div className='flex-1 h-full flex flex-col gap-2 mr-4'>
          <h1 className='text-ink font-semibold mb- text-2xl w-fit'>Good {partOfTheDay ?? '!'}, {userName ?? 'User'}</h1>
          <p className='text-muted text-sm w-fit'>{date?? '-' }</p>
          <div className='w-fit flex gap-2 bg-amber/10 border border-px border-amber/22 rounded-full px-2 py-1'>
            <span className='text-amber text-sm'>Streak:</span>
            <p className='text-amber text-sm'>{streakDays ?? '-'}</p>
            <span className='text-amber text-sm'>Days</span>
          </div>
        </div>

        {/* Core Habits Counting */}
        <div className='size-22 rounded-full'></div>
      </header>

      {/* Pages selection */}
      <nav></nav>


    </>
  )
}

export default App

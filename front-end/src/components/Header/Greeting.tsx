import { ProgressRing } from "@/components/Header/ProgressRing"

const partOfTheDay = 'Afternoon';
const userName = 'Joao';
const date = 'Wednesday, June 10';

export function Greeting() {
    return (
        <div className='w-full rounded-xl pb-1 bg-surface2'>
            <div className='w-full h-fit flex bg-surface rounded-xl p-4 items-center border border-line'>
                <div className='flex-1 h-full flex flex-col gap-0.5 mr-4 text-left'>
                    <h1 className='text-ink font-semibold text-xl font-secondary'>
                        Good {partOfTheDay ?? '!'}, {userName ?? 'User'}!
                    </h1>

                    <p className='text-muted text-sm '>
                        {date ?? '-' }
                    </p>
                </div>

                <ProgressRing />
            </div>
        </div>
    )
}
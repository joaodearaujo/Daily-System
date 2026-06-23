export function Reminder() {
    return ( 
            <div className="rounded-xl pb-1 bg-surface2 ">
              <div  className='w-full h-fit flex bg-surface border border-line rounded-xl px-4 py-4 items-center'>
                <p className='text-xs text-muted text-justify'>
                  <span className='text-ink font-semibold'>
                    Remember
                  </span>
                  : This is a menu, not an exam. Close the core items and let the rest build over time. One priority per cycle beats chasing everything at once.
                </p>
              </div>
            </div>
    )
}
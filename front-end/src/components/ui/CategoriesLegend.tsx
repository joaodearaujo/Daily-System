import { CATEGORY_COLORS } from "../../constants/categoryColors"
import { Dot } from "./Dot"
import { Star } from "./Star"

export function CategoriesLegend() {
    return (
            <div className='rounded-xl bg-surface2 pb-1'>   
              <div className="text-muted text-xs flex gap-4 justify-evenly bg-surface rounded-xl p-2 border border-line">
                <div className='flex gap-1 items-center'>
                  <Star/>
                  <span className='uppercase'>core</span>
                </div>
                
                {Object.entries(CATEGORY_COLORS)
                    .map(([key, color]) => {
                      return <div className='flex gap-2 items-center' key={key}>
                                <Dot color={color}/>
                                <span className='capitalize'>{key}</span>
                              </div>})}
                              
              </div>
            </div>
    )
}
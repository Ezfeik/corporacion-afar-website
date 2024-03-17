import React, { ReactElement } from 'react'

function Container({ bgColorClass, bgImgClass, children }: { bgColorClass?: string, bgImgClass?: string, children: ReactElement }) {
  return (
    <div className={bgColorClass ?? "relative"}>
      { bgImgClass && <div className={bgImgClass + " absolute -z-50 top-0 left-0 w-full h-full"}></div> }
      <div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
        {children}
      </div>
    </div>
  )
}

export default Container
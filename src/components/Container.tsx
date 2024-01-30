import React, { ReactElement } from 'react'

function Container({ bgColorClass, children }: { bgColorClass: string, children: ReactElement }) {
  return (
    <div className={bgColorClass}>
      <div className='max-w-[1440px] mx-auto px-8'>
        {children}
      </div>
    </div>
  )
}

export default Container
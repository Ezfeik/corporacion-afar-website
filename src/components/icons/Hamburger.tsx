import React from 'react'
import { iconType } from '@/types/iconTypes'

function Hamburger({ width, height, colorClass }: iconType) {
  return (
    <svg className={`${width} ${height}`} viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="10" width="27" height="3" rx="1.5" className={colorClass}/>
    <rect width="27" height="3" rx="1.5" className={colorClass}/>
    <rect y="20" width="27" height="3" rx="1.5" className={colorClass}/>
    </svg>
  )
}

export default Hamburger
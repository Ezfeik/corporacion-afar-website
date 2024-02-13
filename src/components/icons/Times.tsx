import React from 'react'
import { iconType } from '@/types/iconTypes'

function Times({ width, height, colorClass }: iconType) {
  return (
    <svg className={`${width} ${height}`} viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="22.6274" width="32" height="3" rx="1.5" transform="rotate(-45 0 22.6274)" className={colorClass} />
    <rect x="2.12134" width="32" height="3" rx="1.5" transform="rotate(45 2.12134 0)" className={colorClass} />
    </svg>
  )
}

export default Times
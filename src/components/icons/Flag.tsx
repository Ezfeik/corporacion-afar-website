import React from 'react'

function FlagIcon({ width, height, colorClass }: { width: number, height: number, colorClass: string }) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 9V4H20L15 9L20 14H4V21" className={colorClass} stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  )
}

export default FlagIcon
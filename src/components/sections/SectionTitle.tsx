import React from 'react'

function SectionTitle({ colorClass = "text-secondary-500", children }: { colorClass?: string, children: string }) {
  const textStyle = "py-8 text-4xl font-bold antialiased"
  const style = colorClass ? textStyle + " " + colorClass : textStyle

  return (
    <h1 className={style}>{ children }</h1>
  )
}

export default SectionTitle
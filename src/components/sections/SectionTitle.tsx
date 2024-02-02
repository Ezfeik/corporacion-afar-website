import React from 'react'

function SectionTitle({ colorClass = "text-secondary-500", children }: { colorClass?: string, children: string }) {
  const textStyleClass = "py-6 lg:py-10 text-4xl text-center font-bold antialiased"
  const styleClass = colorClass ? textStyleClass + " " + colorClass : textStyleClass

  return (
    <h1 className={styleClass}>{ children }</h1>
  )
}

export default SectionTitle
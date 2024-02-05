import React from 'react'

function SectionTitle({ bgImgClass, colorClass = "text-secondary-500", children }: { bgImgClass?: string, colorClass?: string, children: string }) {
  const textStyleClass = "py-6 lg:py-10 text-4xl text-center font-bold antialiased"
  let styleClass = textStyleClass + " " + colorClass;
  styleClass = bgImgClass ? styleClass + " " + bgImgClass : styleClass

  return (
    <h1 className={styleClass}>{ children }</h1>
  )
}

export default SectionTitle
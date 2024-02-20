import React from 'react'

function SectionTitle({ bgImgClass, textColorClass = "text-secondary-500", decoratorColorClass, children }: { bgImgClass?: string, textColorClass?: string, decoratorColorClass?: string, children: string }) {
  const textStyleClass = "flex relative text-3xl lg:text-4xl text-center font-bold antialiased w-fit mx-auto"
  let styleClass = textStyleClass + " " + textColorClass;
  styleClass = bgImgClass ? styleClass + " " + bgImgClass : styleClass

  const leftDecoratorStyleClass = decoratorColorClass ? decoratorColorClass + " w-12 h-1 my-auto me-6" : "";
  const rightDecoratorStyleClass = decoratorColorClass ? decoratorColorClass + " w-12 h-1 my-auto ms-6" : "";

  return (
    <h1 className={styleClass}><span className={leftDecoratorStyleClass}></span>{ children }<span className={rightDecoratorStyleClass}></span></h1>
  )
}

export default SectionTitle
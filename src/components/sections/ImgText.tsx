import { imageType } from '@/types/imgTypes'
import React from 'react'

function ImgText({ img, title, text, reverse }: { img: imageType, title: string, text: string, reverse?: boolean }) {
  return (
    <div className='grid grid-cols-2'>
      <img className={`mx-auto brightness-75 w-full ${reverse ? 'order-2' : 'order-1'}`} src={img.src} alt={img.alt} />
      <div className={`p-24 ${reverse ? 'order-1' : 'order-2'}`}>
        <h3 className='text-4xl font-bold text-center mb-12'>{title}</h3>
        <p className='text-xl leading-relaxed'>{text}</p>
      </div>
    </div>
  )
}

export default ImgText
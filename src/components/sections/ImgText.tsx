import { imageType } from '@/types/imgTypes'
import React from 'react'
import AnimationWrapper from '../animations/AnimationWrapper'

type ImgTextType = {
  img: imageType;
  title: string;
  titleColorClass?: string;
  text: string;
  textColorClass?: string;
  reverse?: boolean;
}

function ImgText({ img, title, titleColorClass = 'text-gray-800', text, textColorClass = 'text-gray-600', reverse }: ImgTextType) {
  return (
    <div className='grid grid-cols-2'>
      <img className={`mx-auto brightness-75 w-4/5 ${reverse ? 'order-2' : 'order-1'}`} src={img.src} alt={img.alt} />
        <div className={`w-2/3 mx-auto pt-12 ${reverse ? 'order-1' : 'order-2'}`}>
          <AnimationWrapper initialClass='opacity-0' animationClass={reverse ? 'animate-[800ms_fade-in-left_ease-in-out_forwards]' : 'animate-[800ms_fade-in-right_ease-in-out_forwards]'} threshold={0.4}>
            <>
              <h3 className={`${titleColorClass} text-4xl font-bold text-center text-gray-800 mb-12`}>{title}</h3>
              <p className={`${textColorClass} text-2xl leading-relaxed`}>{text}</p>
            </>
          </AnimationWrapper>
        </div>
    </div>
  )
}

export default ImgText
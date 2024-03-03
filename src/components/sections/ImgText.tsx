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

function ImgText({ img, title, titleColorClass = 'text-gray-800', text, textColorClass = 'text-gray-700', reverse }: ImgTextType) {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2'>
      <div className={`mx-auto brightness-75 lg:w-3/4 ${reverse ? 'order-1 lg:order-2' : 'order-1'}`}>
        <AnimationWrapper initialClass='lg:opacity-0' animationClass="lg:animate-[800ms_opacity-in-75_ease-in-out_forwards]" threshold={0.5}>
          <img src={img.src} alt={img.alt} />
        </AnimationWrapper>
      </div>
        <div className={`w-full lg:w-2/3 mx-auto ${reverse ? 'order-2 lg:order-1' : 'order-2'}`}>
          <AnimationWrapper initialClass='lg:opacity-0' animationClass={reverse ? 'lg:animate-[800ms_fade-in-left_ease-in-out_forwards]' : 'lg:animate-[800ms_fade-in-right_ease-in-out_forwards]'} threshold={0.5}>
            <>
              <h3 className={`${titleColorClass} text-3xl lg:text-4xl font-bold text-center py-4 lg:py-8`}>{title}</h3>
              <p className={`${textColorClass} text-xl lg:text-2xl leading-relaxed`}>{text}</p>
            </>
          </AnimationWrapper>
        </div>
    </div>
  )
}

export default ImgText
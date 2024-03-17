'use client'
import React from 'react'
import SectionTitle from '@/components/sections/SectionTitle';
import Container from '@/components/Container';
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import EndPhrase from '@/components/sections/EndPhrase';
import BookList from '@/components/sections/biblioteca/BookList';

function Page() {
  return (

    <section>
      <Container bgImgClass="bg-img-books grayscale brightness-[40%]">
        <>
          <div className='py-12'>
            <SectionTitle textColorClass="text-tertiary-600" decoratorColorClass="bg-tertiary-600">Biblioteca Afar</SectionTitle>
          </div>
          <AnimationWrapper initialClass='lg:opacity-0' animationClass="lg:animate-[700ms_ease-in-out_forwards_fade-in]">
            <p className="mx-auto lg:w-4/5 relative text-center text-xl lg:text-2xl text-white mb-12">
              Les dejamos a su disposición en formato PDF, una recopilación de estudios y guias de apoyo a victimas
              de malos tratos, especializada en temas de género.
            </p>
          </AnimationWrapper>
          <AnimationWrapper initialClass="lg:opacity-0 lg:pointer-events-none" animationClass="lg:animate-[700ms_ease-in-out_750ms_forwards_fade-in]">
            <div className="lg:pb-4">
              <BookList />
              <small className='text-gray-400 block mt-4 text-sm italic'>*Queda prohibido toda reproducción del material sin el debido consentimiento de sus autores.</small>
            </div>
          </AnimationWrapper>
          <AnimationWrapper initialClass="lg:opacity-0" animationClass="lg:animate-[800ms_ease-in-out_forwards_fade-in]" threshold={1}>
            <EndPhrase textColorClass='relative text-tertiary-600'>La lectura hace a la perfección</EndPhrase>
          </AnimationWrapper>
        </>
      </Container>
    </section>
  )
}

export default Page
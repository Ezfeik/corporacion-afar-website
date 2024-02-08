'use client'
import React from 'react'
import SectionTitle from '@/components/sections/SectionTitle';
import Container from '@/components/Container';
import BookList from '@/components/BookList';
import { bookType } from '@/types/bookTypes';
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import EndPhrase from '../../../components/EndPhrase';

function Page() {
  const mockData: bookType[] = [
    {
      coverSrc: "/img/book-covers/book-cover.jpg",
      title: "Libro 1",
      href: "#",
    },
    {
      coverSrc: "",
      title: "Libro 2",
      href: "#",
    },
    {
      coverSrc: "",
      title: "Libro 3",
      href: "#",
    },
    {
      coverSrc: "",
      title: "Libro 4",
      href: "#",
    },
    {
      coverSrc: "",
      title: "Libro 5",
      href: "#",
    },
    {
      coverSrc: "",
      title: "Libro 6",
      href: "#",
    },
  ]

  return (

    <section>
      <Container bgImgClass="bg-img-books grayscale brightness-[40%]">
        <>
          <SectionTitle textColorClass="text-tertiary-500" decoratorColorClass="bg-tertiary-500">Biblioteca Afar</SectionTitle>
          <AnimationWrapper initialClass='opacity-0' animationClass="animate-[700ms_ease-in-out_forwards_fade-in]">
            <p className="relative text-center text-xl lg:text-2xl text-tertiary-50 mb-12">
              Les dejamos a su disposición en formato PDF, una recopilación de guías en apoyo a victimas
              de malos tratos, especializada en temas de género.
            </p>
          </AnimationWrapper>
          <AnimationWrapper initialClass="opacity-0 pointer-events-none" animationClass="animate-[700ms_ease-in-out_750ms_forwards_fade-in]">
            <div className="lg:pb-12">
              <BookList bookList={mockData} />
            </div>
          </AnimationWrapper>
          <AnimationWrapper initialClass="opacity-0" animationClass="animate-[800ms_ease-in-out_forwards_fade-in]" threshold={1}>
            <EndPhrase textColorClass='relative text-tertiary-500'>La lectura hace a la perfección</EndPhrase>
          </AnimationWrapper>
        </>
      </Container>
    </section>
  )
}

export default Page
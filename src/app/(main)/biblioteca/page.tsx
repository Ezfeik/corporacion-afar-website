'use client'
import React from 'react'
import SectionTitle from '@/components/sections/SectionTitle';
import Container from '@/components/Container';
import BookList from '@/components/BookList';
import { bookType } from '@/types/bookTypes';

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
          <SectionTitle colorClass="relative text-tertiary-500">Biblioteca Afar</SectionTitle>
          <p className="relative text-center text-xl text-tertiary-50 mb-12">
            Les dejamos a su disposición en formato PDF, una recopilación de guías en apoyo a victimas
            de malos tratos, especializada en temas de género.
          </p>
          <div className="pb-12">
            <BookList bookList={mockData} />
          </div>
        </>
      </Container>
    </section>
  )
}

export default Page
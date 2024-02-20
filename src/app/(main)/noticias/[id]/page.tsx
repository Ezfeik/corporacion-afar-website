import React from 'react';
import newsData from '@/data/news.json';
import Container from '@/components/Container';

export function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }))
}

function Page({ params }: { params: { id: string } }) {
  return (
    <Container>
      <h1>Hola desde la noticia {params.id}</h1>
    </Container>
  )
}


export default Page
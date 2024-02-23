import newsData from '@/data/news.json';
import Container from '@/components/Container';
import NewsContent from '@/components/sections/noticias/NewsContent';

export function generateStaticParams() {
  return newsData.map((news) => ({
    id: news.id.toString(),
  }))
}

function Page({ params }: { params: { id: string } }) {
  return (
    <Container>
      <NewsContent newsId={parseInt(params.id)} />
    </Container>
  )
}


export default Page
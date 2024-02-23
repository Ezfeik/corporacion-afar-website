import newsData from '@/data/news.json'

export function getNewsData(id: number) {
  return newsData.filter((news) => news.id === id)[0]
}
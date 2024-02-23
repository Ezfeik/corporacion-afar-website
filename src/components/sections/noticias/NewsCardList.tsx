import newsData from '@/data/news.json';
import { NewsCard } from './NewsCard';

export const NewsCardList = function() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      { 
        newsData.map((news) => (
          <NewsCard 
            key={news.id}
            id={news.id}
            date={news.date} 
            title={news.title} 
            cover={news.cover} 
            text={news.text} 
          />
        ))
      }
    </div>
  )
}

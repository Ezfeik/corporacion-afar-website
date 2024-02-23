'use client'
import newsData from '@/data/news.json';
import { NewsCard } from './noticias/NewsCard';
import { useEffect, useState } from 'react';
import { NewsCardPlaceholder } from './noticias/NewsCardPlaceholder';

export const IndexNewsCardList = function() {
  const [data, setData] = useState(newsData);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    setLoading(true);
    setData(newsData
      .filter((news) => news.type === "news")
      .sort((a, b) => {
        const dateA: any = new Date(a.date);
        const dateB: any = new Date(b.date);
        return dateB - dateA;
      })
      .slice(0, 4));
    setLoading(false);
  }, [])
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
      { 
        loading ? (<><NewsCardPlaceholder /><NewsCardPlaceholder /><NewsCardPlaceholder /><NewsCardPlaceholder /></>)
        : data.map((news) => (
            <NewsCard 
              key={news.id}
              id={news.id}
              date={new Date(news.date)} 
              title={news.title} 
              cover={news.cover} 
              text={news.text} 
            />
          ))
      }
    </div>
  )
}

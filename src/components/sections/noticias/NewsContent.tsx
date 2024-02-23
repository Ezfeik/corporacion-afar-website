'use client'
import React, { useEffect, useState } from 'react';
import newsData from '@/data/news.json';


function NewsContent({ newsId }: { newsId: number }) {
  const [data, setData] = useState(null)

  useEffect(() => {
    setData(newsData.filter(news => news.id === newsId)[0])
  }, [])

  return (
    !data ? (<div>Cargando...</div>)
    : data.type === 'news' ?
    (
      <div className='w-full lg:w-3/5 mx-auto py-8'>
        <img className='mx-auto max-h-96 w-full object-cover mb-8' src={data.cover.src} alt={data.cover.alt} />
        <h2 className='text-3xl text-primary-800 font-bold mb-1'>{data.title}</h2>
        <span className='block text-md text-gray-500 mb-6'>{new Date(data.date).toLocaleDateString()}</span>
        <p>{data.text}</p>
      </div>
    )
    : 
    (
      <div className='w-full lg:w-3/5 mx-auto py-8'>
        <h2 className='text-3xl text-primary-800 font-bold mb-1'>{data.title}</h2>
        <span className='block text-md text-gray-500 mb-6'>{new Date(data.date).toLocaleDateString()}</span>
        <img className='mx-auto w-full object-cover mb-8' src={data.cover.src} alt={data.cover.alt} />
      </div>
    ) 
  )
}

export default NewsContent
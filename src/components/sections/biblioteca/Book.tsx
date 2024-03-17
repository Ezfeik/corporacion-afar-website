import React from 'react';
import { bookType } from '@/types/bookTypes';

function Book({ data }: { data: bookType }) {
  return (
    <div className='min-h-80 border-4 border-gray-700 lg:overflow-hidden'>
      <a className='relative' target="_blank" href={data.href} >
        <img className='absolute object-cover w-full h-full top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] brightness-90' src={data.coverHref} alt={`Tapa del libro/articulo ${data.title}`} />
        <span className='absolute top-0 w-2 h-2 border-gray-600 lg:border-[.5rem] border-r-transparent border-b-transparent'></span> 
        <span className='absolute top-0 right-0 w-2 h-2 border-gray-600 lg:border-[.5rem] border-l-transparent border-b-transparent'></span> 
        <span className='absolute bottom-0 w-2 h-2 border-gray-600 lg:border-[.5rem] border-r-transparent border-t-transparent'></span> 
        <span className='absolute bottom-0 right-0 w-2 h-2 border-gray-600 lg:border-[.5rem] border-l-transparent border-t-transparent'></span> 
        <div className='relative w-full h-full bg-white opacity-0 hover:opacity-95 transition-opacity'>
          <div className='p-6'>
            <h2 className='leading-tight text-xl font-bold mb-4'>{data.title}</h2>
            <small className='leading-tight italic'>{data.author}</small>
          </div>
        </div>
      </a>
    </div>
  )
}

export default Book
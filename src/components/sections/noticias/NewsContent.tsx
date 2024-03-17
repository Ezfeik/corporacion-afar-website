import { getNewsData } from '@/utils/news';
import moment from 'moment';
import Link from 'next/link';

function NewsContent({ newsId }: { newsId: number }) {
  const data = getNewsData(newsId);

  return (
    !data ? (<div>Cargando...</div>)
    : data.type === 'news' ?
    (
      <div className='w-full lg:w-3/5 mx-auto py-8 mb-14'>
        <Link className='block bg-primary-800 hover:bg-primary-900 text-primary-50 px-4 py-1 mb-4 w-fit' href="/noticias/">
          <button>&lt; Volver</button>
        </Link>
        <img className='mx-auto max-h-96 w-full object-cover mb-8' src={data!.fullCover!.src} alt={data!.fullCover!.alt} />
        <h2 className='text-3xl text-primary-800 font-bold mb-1'>{data.title}</h2>
        {/* SOLUCION RARA */}
        <span className='block text-md text-gray-500 mb-6'>{moment(data.date).format("DD/MM/YYYY")}</span>
        {/* SOLUCION RARA */} 
        <p>{data.text}</p>
      </div>
    )
    : 
    (
      <div className='w-full lg:w-3/5 mx-auto py-8'>
        <Link className='block bg-primary-800 hover:bg-primary-900 text-primary-50 px-4 py-1 mb-4 w-fit' href="/noticias/">
          <button>&lt; Volver</button>
        </Link>
        <h2 className='text-3xl text-primary-800 font-bold mb-1'>{data.title}</h2>
        {/* SOLUCION RARA */}
        <span className='block text-md text-gray-500 mb-6'>{moment(data.date).format("DD/MM/YYYY")}</span>
        {/* SOLUCION RARA */}
        <img className='mx-auto w-full object-cover mb-8' src={data!.fullCover!.src} alt={data!.fullCover!.alt} />
      </div>
    ) 
  )
}

export default NewsContent
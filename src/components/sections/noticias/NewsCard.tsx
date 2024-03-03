import { NewsType } from "@/types/newsTypes"
import Link from "next/link"

export const NewsCard = function( { id, date, title, cover, text }: NewsType) {
  return (
    <div className="border-2 border-gray-100 shadow-lg rounded-sm">
      <img className="min-h-56 max-h-56 w-full object-cover mb-4" src={cover!.src} alt={cover!.alt}></img>
      <div className="px-6 pb-6">
        <h2><Link className="text-xl font-bold underline text-primary-700 hover:text-primary-500" href={`/noticias/${id}`}>{title}</Link></h2>
        {/* SOLUCION RANDOM */}
        <p className="text-gray-500 text-sm mb-4">{new Date(date || '').toLocaleDateString()}</p>
        {/* SOLUCION RANDOM */}
        <p className="max-h-40 line-clamp-5">{text}</p>
      </div>
    </div>
  )
}
 
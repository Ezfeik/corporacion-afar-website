import Link from 'next/link'
import React from 'react'
import InstagramIcon from './icons/Instagram'
import FacebookIcon from './icons/Facebook'

function SocialNetworks({ fillColorClass, width='w-7', height='h-7' } : { fillColorClass: string, width?: string, height?: string }) {
  return (
    <div className='flex flex-row gap-2'>
      <Link href='https://www.instagram.com/corporacion_afar/' target='_blank'>
        <InstagramIcon colorClass={fillColorClass} width={width} height={height} />
      </Link>
      <Link href='https://www.facebook.com/corporacionafar/' target='_blank'>
        <FacebookIcon colorClass={fillColorClass} width={width} height={height} />
      </Link>
    </div>
  )
}

export default SocialNetworks
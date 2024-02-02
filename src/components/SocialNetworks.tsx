import Link from 'next/link'
import React from 'react'
import InstagramIcon from './icons/Instagram'
import FacebookIcon from './icons/Facebook'

function SocialNetworks({ fillColorClass, size = 26 } : { fillColorClass: string, size?: number }) {
  return (
    <div className='flex flex-row gap-2'>
      <Link href='https://www.instagram.com/corporacion_afar/' target='_blank'>
        <InstagramIcon colorClass={fillColorClass} width={size} height={size} />
      </Link>
      <Link href='https://www.facebook.com/corporacionafar/' target='_blank'>
        <FacebookIcon colorClass={fillColorClass} width={size} height={size} />
      </Link>
    </div>
  )
}

export default SocialNetworks
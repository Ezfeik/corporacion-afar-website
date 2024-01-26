import React from 'react'
import Link from 'next/link'
import { logoAfar } from '@/constants/images'
import { navLinks } from '@/constants/links'
import InstagramIcon from './icons/Instagram'
import FacebookIcon from './icons/Facebook'

// TODO: Add responsiveness

function Footer() {
  return (
    <footer>
      <div className='bg-primary-50'>
        <div className='grid grid-cols-3 max-w-[1440px] text-primary-950 mx-auto py-9 border-b-[thin] border-b-gray-200'>
          <div>
            <img className='h-32' src={logoAfar.src} alt={logoAfar.alt} />
            <p className='text-sm pe-32'>
              Somos una corporación privada, sin fines de lucro que defiende
              los derechos de las víctimas de violencia intrafamiliar.
            </p>
          </div>
          <div>
            <ul className='h-full flex flex-col gap-4 justify-center'>
              { navLinks.map((link, index) => {
                return (
                  <li key={index}>
                    <Link href={link.href}>
                      {link.name}
                    </Link>
                  </li>
                )
              }) }
            </ul>
          </div>
          <div className='flex flex-col justify-center gap-4'>
            <h2 className='font-bold'>Contacto</h2>
            <ul>
              <li>contacto@corporacionafar.cl</li>
              <li>+56-91234578</li>
              <li>+56-91234578</li>
            </ul>
            <div className='flex flex-row gap-2'>
            <Link href='https://www.instagram.com/corporacion_afar/' target='_blank'>
              <InstagramIcon color={'fill-primary-950'} width={26} height={26} />
            </Link>
            <Link href='https://www.facebook.com/corporacionafar/' target='_blank'>
              <FacebookIcon color={'fill-primary-950'} width={26} height={26} />
            </Link>
            </div>
          </div>
        </div>
        <div className="max-w-[1440px] text-gray-500 mx-auto text-sm py-4">
          © 2024 Corporación Afar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
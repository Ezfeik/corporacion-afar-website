import React from 'react'
import Link from 'next/link'
import { logoAfar } from '@/constants/images'
import { navLinks } from '@/constants/links'
import InstagramIcon from './icons/Instagram'
import FacebookIcon from './icons/Facebook'
import Container from './Container'
import PhoneIcon from './icons/Phone'
import MailIcon from './icons/Mail'

// TODO: Add responsiveness

function Footer() {
  return (
    <footer>
      <Container bgColorClass='bg-primary-100'>
        <>
          <div className='grid grid-cols-1 lg:grid-cols-3 max-w-[1440px] text-primary-950 py-9 border-b-[thin] border-b-primary-950'>
            <div className='mb-4 lg:mb-0'>
              <img className='h-28 lg:h-32' src={logoAfar.src} alt={logoAfar.alt} />
              <p className='text-sm pe-32'>
                Somos una corporación privada, sin fines de lucro, que defiende
                los derechos de las víctimas de violencia intrafamiliar.
              </p>
            </div>
            <div className='mb-4 lg:mb-0'>
              <h2 className='text-lg font-bold mb-2'>Links</h2>
              <ul className='flex flex-col gap-2'>
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
            <div>
              <h2 className='text-lg font-bold mb-2'>Contacto</h2>
              <ul className='flex flex-col gap-2 mb-4'>
                <li className='flex flex-row gap-2'>
                  <MailIcon color={'stroke-primary-950'} width={24} height={24} />contacto@corporacionafar.cl
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon color={'stroke-primary-950'} width={24} height={24} />+56-91234578
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon color={'stroke-primary-950'} width={24} height={24} />+56-91234578
                </li>
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
        </>
      </Container>
    </footer>
  )
}

export default Footer
import React from 'react';
import Link from 'next/link';
import { logoAfar } from '@/constants/images';
import { navLinks } from '@/constants/links';
import Container from './Container';
import PhoneIcon from './icons/Phone';
import MailIcon from './icons/Mail';
import SocialNetworks from './SocialNetworks';

export function Footer() {
  return (
    <footer>
      <Container bgColorClass='bg-primary-100'>
        <>
          <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-0 lg:justify-items-center py-6 text-primary-950 border-b-[thin] border-b-primary-900'>
            <div className='pe-12'>
              <img src={logoAfar.src} alt={logoAfar.alt} />
              <p className='text-md lg:text-sm'>
                Somos una corporación privada, sin fines de lucro, que defiende
                los derechos de las víctimas de violencia intrafamiliar.
              </p>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-2'>Links</h2>
              <ul className='flex flex-col gap-2'>
                {navLinks.map((link, index) => {
                  return (
                    <li key={index}>
                      <Link href={link.href}>
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-2'>Documentos</h2>
              <ul className='flex flex-col gap-2'>
                <li><Link target='_blank' href="#">Organigrama</Link></li>
                <li><Link target='_blank' href="#">Modelo prevención del delito</Link></li>
              </ul>
            </div>
            <div>
              <h2 className='text-lg font-bold mb-2'>Contacto</h2>
              <ul className='flex flex-col gap-2 mb-4'>
                <li className='flex flex-row gap-2'>
                  <MailIcon colorClass={'stroke-primary-950'} width='w-6' height='h-6' />contacto@corporacionafar.cl
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon colorClass={'stroke-primary-950'} width='w-6' height='h-6' />+56-991217995
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon colorClass={'stroke-primary-950'} width='w-6' height='h-6' />+56-957809517
                </li>
              </ul>
              <SocialNetworks fillColorClass="fill-primary-950" />
              <img className='w-2/3 pt-4' src="/img/logo-gore.png" alt="Logo Gobierno Regional de Los Lagos" />
            </div>
          </div>
          <div className="text-gray-400 mx-auto text-sm py-4">
            © 2024 Corporación Afar. Todos los derechos reservados.
          </div>
        </>
      </Container>
    </footer>
  );
}

export default Footer;
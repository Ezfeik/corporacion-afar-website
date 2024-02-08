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
          <div className='grid grid-cols-1 lg:grid-cols-3 items-center max-w-[1440px] text-primary-950 py-6 border-b-[thin] border-b-primary-300'>
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
              <h2 className='text-lg font-bold mb-2'>Contacto</h2>
              <ul className='flex flex-col gap-2 mb-4'>
                <li className='flex flex-row gap-2'>
                  <MailIcon colorClass={'stroke-primary-950'} width={22} height={24} />contacto@corporacionafar.cl
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon colorClass={'stroke-primary-950'} width={22} height={22} />+56-91234578
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon colorClass={'stroke-primary-950'} width={22} height={22} />+56-91234578
                </li>
              </ul>
              <SocialNetworks fillColorClass="fill-primary-950" />
            </div>
          </div>
          <div className="max-w-[1440px] text-gray-500 mx-auto text-sm py-4">
            © 2024 Corporación Afar. Todos los derechos reservados.
          </div>
        </>
      </Container>
    </footer>
  );
}

export default Footer;
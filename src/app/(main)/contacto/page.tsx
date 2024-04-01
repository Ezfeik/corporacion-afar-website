import React from 'react'
import SectionTitle from '@/components/sections/SectionTitle';
import Container from '@/components/Container';
import SocialNetworks from '@/components/SocialNetworks';
import MailIcon from '@/components/icons/Mail';
import PhoneIcon from '@/components/icons/Phone';
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporación Afar - Contacto'
}

function Page() {
  return (
    <Container>
      <section className="mb-4">
        <div className='my-10 lg:my-12'>
          <SectionTitle textColorClass='text-primary-800' decoratorColorClass='bg-primary-800'>Contacto</SectionTitle>
        </div>
        <AnimationWrapper initialClass="lg:opacity-0 lg:pointer-events-none" animationClass="lg:animate-[700ms_ease-in-out_forwards_fade-in]">
          <div className="grid lg:grid-cols-2 text-primary-950">
            <div className="py-4 border-b-2 border-b-primary-100 lg:border-b-0 lg:border-e-2 lg:border-e-primary-100 lg:px-24 pb-6">
              <h2 className="font-bold text-2xl lg:text-3xl mb-4">Estamos Contigo</h2>
              <p className="text-xl leading-relaxed">Estamos aquí para ofrecerte apoyo, comprensión y escucha en cualquier momento. Tu bienestar es nuestra prioridad.</p>
            </div>
            <div className="py-4 lg:px-24">
              <h2 className="text-2xl font-bold mb-4">Contáctanos</h2>
              <ul className='flex flex-col gap-3 mb-8 text-lg'>
                <li className='flex flex-row gap-2'>
                  <MailIcon colorClass={'stroke-primary-950'} width='w-7' height='h-7' />contacto@corporacionafar.cl
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon colorClass={'stroke-primary-950'} width='w-7' height='h-7' />+56-991217995
                </li>
                <li className='flex flex-row gap-2'>
                  <PhoneIcon colorClass={'stroke-primary-950'} width='w-7' height='h-7' />+56-957809517
                </li>
              </ul>
              <h2 className="text-2xl font-bold mb-4">Nuestras Redes</h2>
              <SocialNetworks fillColorClass="fill-primary-950" width='w-8' height='h-8' />
            </div>
          </div>
        </AnimationWrapper>
      </section>
    </Container>
  )
}

export default Page
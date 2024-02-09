'use client'
import Container from '@/components/Container'
import EyeIcon from '@/components/icons/Eye'
import FlagIcon from '@/components/icons/Flag'
import HeartIcon from '@/components/icons/Heart'
import SectionTitle from '@/components/sections/SectionTitle'
import React, { ReactElement } from 'react'
import { handsImg, talkImg } from '@/constants/images'
import AnimationWrapper from '@/components/animations/AnimationWrapper';
import ImgText from '@/components/sections/ImgText'

const AboutUsContainer = function() {
  return (
    <div className='grid grid-cols-3 py-12 mx-auto'>
      <AboutUsContent title="Misión" icon={<FlagIcon width={36} height={36} colorClass='stroke-secondary-700' />}>
        Queremos construir una sociedad igualitaria y libre de violencia, a través de la empatía 
        y una atención global para las víctimas.
      </AboutUsContent>
      <AboutUsContent title="Visión" icon={<EyeIcon width={36} height={36} colorClass='stroke-secondary-700' />}>
        Liberar el potencial de las victimas supervivientes como agentes de cambio social.
      </AboutUsContent>
      <AboutUsContent title="Nuestros Valores" icon={<HeartIcon width={36} height={36} colorClass='stroke-secondary-700' />}>
        <>
          Como Corporación Afar, la <b>empatía</b>, el <b>respeto</b> y la <b>autonomia</b> son lo que nos caracteriza y nos lleva a dar
          lo mejor de nosotros.
        </>
      </AboutUsContent>
    </div>
  )
}

const AboutUsContent = function({ title, icon, children }: { title: string, icon: ReactElement, children: string | ReactElement }) {
  return (
    <div className='px-12'>
      <h2 className='flex justify-center gap-3 text-secondary-700 font-bold text-3xl mb-6'><span className='inline w-auto'>{ icon }</span>{ title }</h2>
      <p className='text-secondary-700 text-xl text-center leading-relaxed'>{ children }</p>
    </div>
  )
}

function Page() {
  return (
    <section>
      <Container bgImgClass='bg-img-logo bg-center bg-cover opacity-[3%]'>
        <>
          <SectionTitle textColorClass="text-secondary-500" decoratorColorClass="bg-secondary-500">Sobre Nosotros</SectionTitle>
          <p className='w-1/2 mx-auto text-xl text-center pb-12 text-gray-800'>
            Somos una corporación privada, sin fines de lucro que protege y defiende los derechos de las víctimas de violencia intrafamiliar hacia
            mujeres, niños, adolescentes, hombres, padres.
          </p>
        </>
      </Container>
      <Container bgColorClass='bg-secondary-50'>
        <AboutUsContainer />
      </Container>
      <Container>
        <>
          <ImgText 
            img={handsImg} 
            title='Lorem ipsum dolor sit' 
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore, reprehenderit dolorem itaque voluptate qui earum praesentium officiis excepturi enim, aliquid incidunt laborum doloribus nulla consectetur exercitationem dolorum consequatur adipisci!'} 
          />
          <ImgText 
            img={talkImg} 
            title='Lorem ipsum dolor sit' 
            text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit labore, reprehenderit dolorem itaque voluptate qui earum praesentium officiis excepturi enim, aliquid incidunt laborum doloribus nulla consectetur exercitationem dolorum consequatur adipisci!'} 
            reverse
          />
        </>
      </Container>
    </section>
  )
}

export default Page
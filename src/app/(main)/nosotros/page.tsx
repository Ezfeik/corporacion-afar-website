'use client'
import Container from '@/components/Container'
import EyeIcon from '@/components/icons/Eye'
import FlagIcon from '@/components/icons/Flag'
import HeartIcon from '@/components/icons/Heart'
import SectionTitle from '@/components/sections/SectionTitle'
import React, { ReactElement } from 'react'
import { handsLoopImg, talkImg } from '@/constants/images'
import ImgText from '@/components/sections/ImgText'


type MemberType = {
  name: string;
  role: string;
  email: string;
}

const members: MemberType[] = [
  {name: 'Carla Gallardo Jara', role: 'Presidenta', email: 'c.gallardo@corporacionafar.cl'},
  {name: 'Ximena Mancilla Oyarzo', role: 'Vicepresidenta', email: 'x.mancilla@corporacionafar.cl'},
  {name: 'Moira Cuevas Villouta', role: 'Directora', email: 'm.cuevas@corporacionafar.cl'},
]

const TeamCardList = function({ members }: { members: MemberType[] }) {
  return (
    <ul className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0'>
      { members.map((member) => <TeamCard key={member.name} member={member} />) }
    </ul>
  )
}

const TeamCard = function({ member }: { member: MemberType }) {
  return (
    <li className='mx-auto py-12 px-8 bg-primary-50 shadow-md'>
      <img className='mx-auto border-2 border-primary-900 rounded-full w-40 h-40 mb-8' src="/img/favicon.png" alt="perfil sin imagen" />
      <div className='mx-auto text-center'>
        <h3 className='text-xl'>{member.name}</h3>
        <p className='italic border-b-2 pb-2 mb-2'>{member.role}</p>
        <a className='font-bold text-primary-700' href={`mailto:${member.email}`}>{member.email}</a>
      </div>
    </li>
  )
}

const AboutUsContainer = function() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-0 py-10 lg:py-12 mx-auto'>
      <AboutUsContent title="Misión" icon={<FlagIcon width='w-8 lg:w-9' height='w-8 lg:h-9' colorClass='stroke-secondary-700' />}>
        Queremos construir una sociedad igualitaria y libre de violencia, a través de la empatía 
        y una atención global para las víctimas.
      </AboutUsContent>
      <AboutUsContent title="Visión" icon={<EyeIcon width='w-8 lg:w-9' height='w-8 lg:h-9' colorClass='stroke-secondary-700' />}>
        Liberar el potencial de las victimas supervivientes como agentes de cambio social.
      </AboutUsContent>
      <AboutUsContent title="Nuestros Valores" icon={<HeartIcon width='w-8 lg:w-9' height='w-8 lg:h-9' colorClass='stroke-secondary-700' />}>
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
    <div className='px-4 lg:px-12'>
      <h2 className='flex justify-center gap-3 text-secondary-700 font-bold text-2xl lg:text-3xl mb-3 lg:mb-6'><span className='inline w-auto'>{ icon }</span>{ title }</h2>
      <p className='text-secondary-700 text-lg lg:text-xl text-center leading-relaxed'>{ children }</p>
    </div>
  )
}

function Page() {
  return (
    <section>
      <Container bgImgClass='bg-img-logo bg-center bg-cover opacity-[3%]'>
        <>
          <div className='pt-12 lg:pt-24 pb-6 lg:pb-12'>
            <SectionTitle textColorClass="text-secondary-500" decoratorColorClass="bg-secondary-500">Sobre Nosotros</SectionTitle>
          </div>
          <p className='w-[90%] lg:w-3/5 mx-auto pb-12 lg:pb-24 text-xl lg:text-2xl leading-relaxed text-center text-gray-800'>
            Somos una corporación privada, sin fines de lucro que protege y defiende los derechos de las víctimas de violencia intrafamiliar hacia
            mujeres, niños, adolescentes, hombres, padres.
          </p>
        </>
      </Container>
      <Container bgColorClass='bg-secondary-50'>
        <AboutUsContainer />
      </Container>
      <Container bgColorClass='lg:bg-two-color-secondary-right'>
        <div className='mt-12 lg:mt-24 mb-12 lg:mb-16'>
          <ImgText 
            img={talkImg} 
            title='Apoyamos'
            text={'Entregamos atención a víctimas de violencia de cualquier fuente mediante un modelo de intervención integral, con énfasis en la prevención y acompañado de una reparación y restauración del grupo familiar.'}  
          />
        </div>
      </Container>
      <Container bgColorClass='lg:bg-two-color-secondary-left'>
        <div className='mb-12 lg:mb-24'>
          <ImgText 
            img={handsLoopImg} 
            title='Concientizamos' 
            text={'Promovemos proyectos a importantes entidades, realizamos capacitaciones del ambito psicosocial/jurídico y talleres preventivos de violencia dirigidas a todo público.'} 
            reverse
          />
        </div>
      </Container>
      <Container>
        <div className='pb-12 lg:pb-24'>
          <SectionTitle textColorClass="text-secondary-500" decoratorColorClass="bg-secondary-500">Nuestro Equipo</SectionTitle>
          <div className='pt-7 lg:pt-14'>
            <TeamCardList members={members} />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Page
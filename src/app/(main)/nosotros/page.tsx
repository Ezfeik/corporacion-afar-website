import Container from '@/components/Container'
import EyeIcon from '@/components/icons/Eye'
import FlagIcon from '@/components/icons/Flag'
import HeartIcon from '@/components/icons/Heart'
import SectionTitle from '@/components/sections/SectionTitle'
import React, { ReactElement } from 'react'
import ImgText from '@/components/sections/ImgText'
import { imageType } from '@/types/imgTypes'
import AnimationWrapper from '@/components/animations/AnimationWrapper'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Corporación Afar - Sobre Nosotros'
}

const handsLoopImg: imageType  = {
  src: '/img/backgrounds/hands-loop.webp',
  alt: 'Manos unidas en un circulo'
}

const talkImg: imageType  = {
  src: '/img/backgrounds/talk.webp',
  alt: 'Una pareja sentada en la cama, una tomando las manos del otro'
}

type MemberType = {
  profileImg?: string;
  name: string;
  role: string;
  email?: string;
}

const members: MemberType[] = [
  {profileImg: '/img/profiles/carla-gallardo.webp', name: 'Carla Gallardo Jara', role: 'Presidenta', email: 'c.gallardo@corporacionafar.cl'},
  {profileImg: '/img/profiles/ximena-mancilla.webp', name: 'Ximena Mancilla Oyarzo', role: 'Vicepresidenta', email: 'x.mancilla@corporacionafar.cl'},
  {profileImg: '/img/profiles/moira-cuevas.webp', name: 'Moira Cuevas Villouta', role: 'Directora', email: 'm.cuevas@corporacionafar.cl'},
  {profileImg: '/img/profiles/adolfo-mancilla.webp', name: 'Adolfo Mancilla Uribe', role: 'Secretario'},
  {profileImg: '/img/profiles/diana-zapata.webp', name: 'Diana Zapata Rebolledo', role: 'Tesorera'},
]

const TeamCardList = function({ members }: { members: MemberType[] }) {
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-y-12'>
      { members.map((member) => <TeamCard key={member.name} member={member} />) }
    </ul>
  )
}

const TeamCard = function({ member }: { member: MemberType }) {
  return (
    <li>
      <img className='shadow-md mx-auto border-2 rounded-full mb-8 w-1/3 lg:w-1/2 aspect-square' src={member.profileImg} alt={member.name} />
      <div className='text-center'>
        <h3 className='text-gray-600 text-xl font-bold'>{member.name}</h3>
        <p className='text-gray-400 italic mb-6'>{member.role}</p>
        {
          member.email ?
            <a className='text-md font-bold text-primary-800' href={`mailto:${member.email}`}>{member.email}</a>
            : <p className='text-small text-gray-400'>Corporación Afar</p>
        }
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

const OurHistoryContent = function () {
  return (
    <div className='px-0 lg:px-20 pt-7 lg:pt-14 text-xl leading-relaxed'>
      <p className='mb-7'>
        La Corporación AFAR nace el año <b>2021</b>, a partir de la necesidad existente en nuestra ciudad Puerto Montt 
        de contar con una <b>institución</b> privada y <b>sin fines de lucro</b>, 
        que <b>apoye</b> en forma completa y global <b>a las personas</b> que sufren violencia intrafamiliar.
      </p>
      <p className='mb-7'>
        Con ayuda global, se entiende que la atención de nuestros usuarios(as) es completamente gratis 
        y comprende servicios de un equipo completo y multidisciplinario de profesionales que le ayuden a 
        superar y salir adelante en su proceso. En AFAR, no se busca excluir a ninguna persona ya sea por su sexo, genero, orientación sexual, raza o edad.
      </p>
      <p className='mb-7'>
        La violencia Intrafamiliar lamentablemente se vive dentro de los hogares, en las familias. 
        Es una realidad donde mayoritariamente la viven las <b>mujeres</b>, pero no está ajena la 
        violencia hacia los <b>niños, adolescentes, hombres, personas mayores</b> o personas de la <b>comunidad LGBTQ+</b>. 
        Esta es la principal motivación de AFAR y nos preguntarnos: 
        ¿Dónde busca ayuda un adulto mayor, un hombre, un adolescente una persona de la comunidad LGBTQ+? 
        Es ahí que surge el dilema. Muchos hombres y adultos mayores sufren en silencio la 
        violencia que viven a diario en sus hogares y <b>no tienen a donde recurrir para pedir ayuda y ser escuchados</b>.
      </p>
      <p>
        Fue a partir de ello, y de nuestra responsabilidad social, que decidimos con un grupo de profesionales 
        crear una corporación que por una parte se dedicase a la prevención educativa y por la otra atendiera 
        y acompañará a las personas que viven violencia, pero con el gran desafío de involucrar a toda la comunidad.
      </p>
    </div>
  )
}

const OurHistoryContainer = function () {
  return (
    <Container bgColorClass='bg-primary-50'>
      <div className='py-12 my-12'>
        <AnimationWrapper initialClass="lg:opacity-0" animationClass="lg:animate-[800ms_ease-in-out_forwards_fade-in]" threshold={1}>
          <SectionTitle textColorClass="text-primary-800" decoratorColorClass="bg-primary-800">Nuestra Historia</SectionTitle>
        </AnimationWrapper>
        <AnimationWrapper initialClass="lg:opacity-0" animationClass="lg:animate-[800ms_ease-in-out_forwards_fade-in]" threshold={0.3}>
          <OurHistoryContent />
        </AnimationWrapper>
      </div>
    </Container>
  )
}

const OurMembersContainer = function () {
  return (
    <Container>
      <div className='mb-12'>
        <AnimationWrapper initialClass="lg:opacity-0" animationClass="lg:animate-[800ms_ease-in-out_forwards_fade-in]" threshold={1}>
          <SectionTitle textColorClass="text-secondary-500" decoratorColorClass="bg-secondary-500">Nuestro Equipo</SectionTitle>
        </AnimationWrapper>
        <div className='pt-7 lg:pt-14'>
          <TeamCardList members={members} />
        </div>
      </div>
    </Container>
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
          <p className='w-[90%] lg:w-3/5 mx-auto pb-12 lg:pb-24 text-xl lg:text-2xl lg:leading-relaxed text-center text-gray-800'>
            Somos una corporación privada, sin fines de lucro que protege y defiende los derechos de las víctimas de violencia intrafamiliar hacia
            mujeres, niños, adolescentes, hombres y las personas mayores.
          </p>
        </>
      </Container>
      <Container bgColorClass='bg-secondary-50'>
        <AboutUsContainer />
      </Container>
      <Container bgColorClass=''>
        <div className='my-12 lg:my-24'>
          <ImgText 
            img={talkImg} 
            title='Apoyamos'
            text={'Entregamos atención a víctimas de violencia de cualquier fuente mediante un modelo de intervención integral, con énfasis en la prevención y acompañado de una reparación y restauración del grupo familiar.'}  
          />
        </div>
      </Container>
      <Container bgColorClass=''>
        <div className='mb-12 lg:mb-24'>
          <ImgText 
            img={handsLoopImg} 
            title='Concientizamos' 
            text={'Promovemos proyectos a importantes entidades, realizamos capacitaciones del ambito psicosocial/jurídico y talleres preventivos de violencia dirigidas a todo público.'} 
            reverse
          />
        </div>
      </Container>
      <OurMembersContainer />
      <OurHistoryContainer />
    </section>
  )
}

export default Page
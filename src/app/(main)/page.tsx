'use client'
import AnimationWrapper from "@/components/animations/AnimationWrapper";
import Container from "@/components/Container";
import EndPhrase from '@/components/sections/EndPhrase';
import { posters } from '@/constants/images';
import { imageType } from "@/types/imgTypes";
import { handsImg } from "@/constants/images";

const NewsCardList = function() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-24">
      <NewsCard date={new Date('2021-12-21')} title={'Titulo titulero'} cover={handsImg} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat. Sed inventore reiciendis eum quia, harum nemo? Quaerat, illo neque!'} />
      <NewsCard date={new Date('2021-12-21')} title={'Titulo titulero'} cover={handsImg} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat. Sed inventore reiciendis eum quia, harum nemo? Quaerat, illo neque!'} />
      <NewsCard date={new Date('2021-12-21')} title={'Titulo titulero'} cover={handsImg} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, placeat. Sed inventore reiciendis eum quia, harum nemo? Quaerat, illo neque!'} />
    </div>
  )
}

type NewsCardType = {
  date: Date;
  title: string;
  cover: imageType;
  text: string;
}

const NewsCard = function( { date, title, cover, text }: NewsCardType) {
  return (
    <div className="bg-primary-50">
      <img className="max-h-72 w-full object-cover" src={cover.src} alt={cover.alt}></img>
      <div className="px-8 pt-4 pb-8">
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-gray-500 text-sm mb-4">{date.toLocaleString('es-cl', { day: 'numeric', month: 'numeric', year: 'numeric' })}</p>
        <p>{text}</p>
      </div>
    </div>
  )
}

const PosterGallery = function({ posters }: { posters: { [key: string]: imageType } }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-8">
      <img className="row-span-4 lg:row-span-5" src={posters.vejez.src} alt="" />
      <img className="row-span-2" src={posters.angela.src} alt="" />
      <img className="row-span-1" src={posters.charlotte.src} alt="" />
      <img className="row-span-4 lg:row-span-5" src={posters.indicadores.src} alt="" />
      <img className="row-span-1" src={posters.hombre1.src} alt="" />
      <img className="row-span-1" src={posters.hombre2.src} alt="" />
      <img className="row-span-2" src={posters.jiddu.src} alt="" />
      <img className="row-span-1" src={posters.mujer1.src} alt="" />
      <img className="row-span-2" src={posters.poderViolencia.src} alt="" />
      <img className="row-span-1" src={posters.virginia.src} alt="" />
    </div>
  )
}

const Entities = function() {
  return (
    <div>Con quienes hemos trabajado</div>
  )
}

export default function Page() {
  return (
    <>
      <Container bgImgClass="bg-img-hands bg-center bg-cover grayscale brightness-[40%]">
        <section className="py-28 relative">
          <div className="w-[70%]">
            <h1 className="text-5xl font-bold text-secondary-500 mb-14">En contra de la violencia</h1>
            <p className="text-4xl text-white leading-relaxed">Creemos en el poder transformador de la comunicación, el don de saber escuchar, la toma de conciencia, la empatía y apoyo entre seres humanos.</p>
          </div>
        </section>
      </Container>
      <Container bgColorClass="bg-white">
        <section className="py-12">
          <h2 className="text-3xl text-primary-800">Noticias</h2>
          <NewsCardList />
        </section>
      </Container>
      <Container bgColorClass="bg-primary-50">
        <section className="py-12">
          <PosterGallery posters={posters} />
        </section>
      </Container>
      <Container bgColorClass="bg-white">
        <section className="py-12">
          <Entities />
        </section>
      </Container>
      <Container bgColorClass="bg-white">
        <AnimationWrapper initialClass="opacity-0" animationClass="lg:animate-[800ms_ease-in-out_forwards_fade-in]" threshold={1}>
          <EndPhrase textColorClass="text-secondary-500">Nada es tan fuerte como la ayuda a través de la comprensión</EndPhrase>
        </AnimationWrapper>
      </Container>
    </>
  );
}
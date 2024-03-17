import AnimationWrapper from "@/components/animations/AnimationWrapper";
import Container from "@/components/Container";
import EndPhrase from '@/components/sections/EndPhrase';
import { posters } from '@/constants/images';
import { imageType } from "@/types/imgTypes";
import { IndexNewsCardList } from "@/components/sections/IndexNewsCardList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Corporación Afar',
  description: 'Corporación AFAR (Ayuda en la Familia en Riesgo). Somos una corporación sin fines de lucro, ubicados en Puerto Montt, dedicados en entregar apoyo a quienes sufren de violencia intrafamiliar',
}


const PosterGallery = function({ posters }: { posters: { [key: string]: imageType } }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-8">
      <img className="row-span-2" src={posters.angela.src} alt="" />
      <img className="row-span-1" src={posters.charlotte.src} alt="" />
      <img className="row-span-1" src={posters.hombre1.src} alt="" />
      <img className="row-span-1" src={posters.hombre2.src} alt="" />
      <img className="row-span-2" src={posters.jiddu.src} alt="" />
      <img className="row-span-1" src={posters.mujer1.src} alt="" />
      <img className="row-span-1" src={posters.virginia.src} alt="" />
      <video controls height="240" className="col-span-3 w-3/4 mx-auto">
        <source src="/video/violencia_en_familias.webm" type="video/webm"/>
        <p>Su navegador no es compatible con videos HTML5.</p>
      </video>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <Container bgImgClass="bg-img-hands bg-center bg-cover grayscale brightness-[40%]">
        <section className="py-14 lg:py-28 relative lg:w-[70%]">
          <h1 className="text-4xl lg:text-6xl font-bold text-secondary-500 mb-8">Protegemos a la victima de violencia</h1>
          <p className="text-2xl lg:text-4xl text-white lg:leading-relaxed">
            Creemos en el poder transformador de la comunicación, el don de saber escuchar, la toma de conciencia, la empatía y apoyo entre personas.
          </p>
        </section>
      </Container>
      <Container bgColorClass="bg-white">
        <section className="py-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary-800 mb-12">Últimas actividades</h2>
          <IndexNewsCardList />
        </section>
      </Container>
      <Container bgColorClass="bg-primary-50">
        <section className="py-12">
          <PosterGallery posters={posters} />
        </section>
      </Container>
      <Container bgColorClass="bg-white">
        <AnimationWrapper initialClass="lg:opacity-0" animationClass="lg:animate-[800ms_ease-in-out_forwards_fade-in]" threshold={1}>
          <EndPhrase textColorClass="text-secondary-500">Nada es tan fuerte como la ayuda a través de la comprensión</EndPhrase>
        </AnimationWrapper>
      </Container>
    </>
  );
}
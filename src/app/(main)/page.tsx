import Container from "@/components/Container";
import EndPhrase from '@/components/sections/EndPhrase';

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
        <section className="py-8">
          <h2 className="text-3xl text-primary-800">Noticias</h2>
          <div className="grid grid-cols-3">
            <article>Noticia 1</article>
            <article>Noticia 2</article>
            <article>Noticia 3</article>
          </div>
        </section>
      </Container>
      <EndPhrase textColorClass="text-secondary-500">Nada es tan fuerte como la ayuda a través de la comprensión</EndPhrase>
    </>
  );
}
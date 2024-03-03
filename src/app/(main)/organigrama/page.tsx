import Container from "@/components/Container";
import SectionTitle from '@/components/sections/SectionTitle';

export default function Page() {
  return (
    <>
      <Container>
        <div className="py-12">
          <SectionTitle>Organigrama</SectionTitle>
          <img className="lg:mt-12 mx-auto" src="/img/docs/organigrama.webp" alt="Organigrama Corporación AFAR" />
        </div>
      </Container>
    </>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { linkType } from "@/types/navbarTypes";

const logoSrc = '/logo-sin-bg-difu-480px.webp'

const links: linkType[] = [
  {
    href: '/',
    name: 'Inicio'
  },
  {
    href: '/nosotros',
    name: 'Sobre Nosotros'
  },
  {
    href: '/biblioteca',
    name: 'Biblioteca Afar'
  },
  {
    href: '/contacto',
    name: 'Contacto'
  },
]

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col">
        <Navbar links={links} logoSrc={logoSrc} />
        <main className="max-w-[1440px] mx-auto bg-slate-100 px-8 relative -z-10 mb-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
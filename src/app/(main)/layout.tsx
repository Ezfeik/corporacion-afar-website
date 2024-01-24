import Navbar from "@/components/Navbar";
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
      <header className="bg-slate-100">
        <Navbar links={links} logoSrc={logoSrc} />
      </header>
      <main className="max-w-[1440px] mx-auto bg-slate-200 px-8">
        {children}
      </main>
    </>
  )
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { logoAfar } from "@/constants/images";
import { navLinks } from "@/constants/links"


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="min-h-[100vh] flex flex-col">
        <Navbar links={navLinks} logo={logoAfar} />
        <main className="w-full relative -z-10 mb-auto">
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}
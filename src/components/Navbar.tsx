'use client'
import Link from "next/link"
import { linkType } from '@/types/navbarTypes';
import { ReactElement, useState } from "react";
import { usePathname } from "next/navigation";

const navbarListClass = "flex flex-col lg:flex-row items-start fixed lg:relative top-0 -right-[100%] lg:-right-0 w-[75%] lg:w-fit h-[100vh] lg:h-auto gap-6 lg:gap-8 px-10 py-5 lg:p-0 bg-slate-300 lg:bg-transparent";
const navbarListMobileActiveClass = "flex flex-col lg:flex-row items-start fixed lg:relative top-0 -right-0 w-[75%] lg:w-fit h-[100vh] lg:h-auto gap-6 lg:gap-8 ps-10 pe-8 py-5 lg:p-0 bg-slate-300 lg:bg-transparent";
const linkClass = "text-lg antialiased after:block after:w-0 after:border-b-2 after:border-b-blue-950 after:transition-[width] after:duration-200 hover:after:w-full";
const linkClassActive = "text-lg antialiased after:block after:w-full after:border-b-2 after:border-b-blue-950";
const toggleButtonClass = "block lg:hidden"

function NavbarList({ pathname, links, styles, handleToggle }: { pathname: string, links: linkType[], styles: string, handleToggle: Function }): ReactElement {
  return (
    <div>
      <ul className={styles}>
        <li className="block lg:hidden place-self-end -mb-6">
          <ToggleButton show={false} handleToggle={handleToggle} />
        </li>
        {
          links.map(( link: linkType, index: number ) => (
            <li key={ index }>
              <Link className={ pathname === link.href ? linkClassActive : linkClass } href={ link.href }>
                { link.name }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

function ToggleButton({ show, handleToggle }: { show: boolean, handleToggle: Function}): ReactElement {
  return (
    <button onClick={() => handleToggle()} className={toggleButtonClass}>
      { 
        show ? (<svg width="40" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 7L6 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M18 12L6 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        <path d="M18 17L6 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
        </svg>) : (
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.06 12L17.48 7.57996C17.5537 7.5113 17.6128 7.4285 17.6538 7.3365C17.6948 7.2445 17.7168 7.14518 17.7186 7.04448C17.7204 6.94378 17.7018 6.84375 17.6641 6.75036C17.6264 6.65697 17.5703 6.57214 17.499 6.50092C17.4278 6.4297 17.343 6.37356 17.2496 6.33584C17.1562 6.29811 17.0562 6.27959 16.9555 6.28137C16.8548 6.28314 16.7555 6.30519 16.6635 6.34618C16.5715 6.38717 16.4887 6.44627 16.42 6.51996L12 10.94L7.58 6.51996C7.43782 6.38748 7.24978 6.31535 7.05548 6.31878C6.86118 6.32221 6.67579 6.40092 6.53838 6.53834C6.40096 6.67575 6.32225 6.86113 6.31882 7.05544C6.3154 7.24974 6.38752 7.43778 6.52 7.57996L10.94 12L6.52 16.42C6.37955 16.5606 6.30066 16.7512 6.30066 16.95C6.30066 17.1487 6.37955 17.3393 6.52 17.48C6.66062 17.6204 6.85125 17.6993 7.05 17.6993C7.24875 17.6993 7.43937 17.6204 7.58 17.48L12 13.06L16.42 17.48C16.5606 17.6204 16.7512 17.6993 16.95 17.6993C17.1488 17.6993 17.3394 17.6204 17.48 17.48C17.6204 17.3393 17.6993 17.1487 17.6993 16.95C17.6993 16.7512 17.6204 16.5606 17.48 16.42L13.06 12Z" fill="#000000"/>
          </svg>
        ) 
      }
      
      
    </button>
  )
}

export default function Navbar({ links, logoSrc }: { links: linkType[], logoSrc: string }): ReactElement {
  const pathname = usePathname();
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  const handleToggle = () => setIsNavbarHidden(!isNavbarHidden)

  return (
    <nav className="flex flex-row justify-between items-center max-w-[1440px] mx-auto px-8 relative">
      <img className="w-40 md:w-44 h-auto" src={logoSrc} alt="logo corporación afar" />
      <NavbarList 
        pathname={pathname} 
        links={links} 
        styles={isNavbarHidden ? navbarListClass : navbarListMobileActiveClass} 
        handleToggle={handleToggle}
      />
      <ToggleButton show={true} handleToggle={handleToggle} />
    </nav>
  )
}

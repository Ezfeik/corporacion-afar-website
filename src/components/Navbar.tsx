'use client'
import Link from "next/link"
import { linkType } from '@/types/navbarTypes';
import { ReactElement, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { HookCallbacks } from "async_hooks";

const desktopNavClass = "hidden md:flex gap-8 bg-green-300";
const linkClass = "text-lg antialiased after:block after:w-0 after:border-b-2 after:border-b-blue-950 after:transition-[width] after:duration-200 hover:after:w-full";
const linkClassActive = "text-lg antialiased after:block after:w-full after:border-b-2 after:border-b-blue-950";
const toggleButtonClass = "max-w-fit md:hidden rounded-md bg-slate-200 border border-slate-300"

function NavContainer({ pathname, links, styles }: { pathname: string, links: linkType[], styles: string }): ReactElement {
  return (
    <nav>
      <ul className={styles}>
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
    </nav>
  );
}

function ToggleButton({isNavbarHidden, setIsNavbarHidden}: {isNavbarHidden: boolean, setIsNavbarHidden: Function}): ReactElement {
  return (
    <button onClick={() => setIsNavbarHidden(!isNavbarHidden)} className={toggleButtonClass}>
      <svg width="40" height="38" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 7L6 7" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18 12L6 12" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M18 17L6 17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"/>
      </svg>
    </button>
  )
}

export default function Navbar({ links, logoSrc }: { links: linkType[], logoSrc: string }): ReactElement {
  const pathname = usePathname();
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  return (
    <nav className="flex flex-row justify-between items-center max-w-[1440px] mx-auto px-8 relative">
      <img className="w-40 md:w-44 h-auto" src={logoSrc} alt="logo corporación afar" />
      <NavContainer pathname={pathname} links={links} styles={desktopNavClass} />
      <ToggleButton isNavbarHidden={isNavbarHidden} setIsNavbarHidden={setIsNavbarHidden} />
    </nav>
  )
}

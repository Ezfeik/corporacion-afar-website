'use client'
import Link from "next/link"
import { navLinkType } from '@/types/navbarTypes';
import { ReactElement, useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./Container";
import Hamburger from "./icons/Hamburger";
import Times from "./icons/Times";

const navListContainerClass = "bg-secondary-600 lg:bg-transparent fixed lg:static top-0 -right-full h-[100vh] lg:h-fit w-[70%] lg:w-fit px-8 py-4 lg:p-0 transition-[right] duration-500";
const navListClass = "flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8";
const linkClass = "text-lg text-secondary-50 lg:text-primary-900 opacity-70 hover:opacity-100 antialiased after:block after:w-0 after:opacity-0 after:border-b-2 after:border-b-secondary-50 lg:after:border-b-primary-900 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full hover:after:opacity-100";
const linkActiveClass = "text-lg text-secondary-50 lg:text-primary-900 antialiased after:block after:w-full after:border-b-2 after:border-b-secondary-50 lg:after:border-b-primary-900";
const toggleButtonClass = "block lg:hidden"

function NavbarList({ pathname, links, handleToggle, isNavbarHidden }: { pathname: string, links: navLinkType[], handleToggle: Function, isNavbarHidden: boolean }): ReactElement {
  const hideOverlay = isNavbarHidden ? " hidden" : ""

  return (
    <>
      <div className={"bg-transparent lg:hidden w-[100vh] h-[100vh] fixed top-0 right-0" + hideOverlay} id="overlay" onClick={() => handleToggle(true)}></div>
      <div id="navbar-list" className={navListContainerClass}>
        <ul className={navListClass}>
          <li className="block lg:hidden place-self-end mt-2 -me-3">
            <ToggleButton show={false} handleToggle={handleToggle} isNavbarHidden={isNavbarHidden} />
          </li>
          {
            links.map(( link: navLinkType, index: number ) => (
              <li key={ index }>
                <Link onClick={() => handleToggle(true)} className={ pathname === link.href ? linkActiveClass : linkClass } href={ link.href }>
                  { link.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </>
  );
}

function ToggleButton({ show, handleToggle, isNavbarHidden }: { show: boolean, handleToggle: Function, isNavbarHidden: boolean }): ReactElement {
  return (
    <button onClick={() => handleToggle(!isNavbarHidden)} className={toggleButtonClass}>
      { 
        show ? (
          <Hamburger width='w-5' height='h-5' colorClass="fill-primary-900" />
        ) : (
          <Times width='w-5' height='h-5' colorClass="fill-secondary-50" />
        ) 
      }
      
      
    </button>
  )
}

export default function Navbar({ links, logo }: { links: navLinkType[], logo: { src: string, alt: string } }): ReactElement {
  const pathname = usePathname();
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  const handleToggle = useCallback((hide: boolean) => {
    setIsNavbarHidden(hide);
    const navbarList = document.getElementById("navbar-list");
    if (hide) {
      navbarList!.classList.remove("!right-0");
    } else {
      navbarList!.classList.add("!right-0");
    }
  }, []);

  return (
    <nav className="bg-opacity-95 shadow-md sticky top-0 h-16 lg:h-20 duration-500 ease-in-out transition-[top] z-50">
      <Container bgColorClass="bg-primary-50">
        <div className="flex flex-row justify-between items-center relative">
          <img className="h-16 lg:h-20" src={logo.src} alt={logo.alt} />
          <NavbarList 
            pathname={pathname} 
            links={links} 
            handleToggle={handleToggle}
            isNavbarHidden={isNavbarHidden}
          />
          <ToggleButton show={true} handleToggle={handleToggle} isNavbarHidden={isNavbarHidden} />
        </div>
      </Container>
    </nav>
  )
}

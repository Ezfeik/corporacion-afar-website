'use client'
import Link from "next/link"
import { navLinkType } from '@/types/navbarTypes';
import { ReactElement, useCallback, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navListContainerClass = "bg-primary-100 lg:bg-transparent fixed lg:static top-0 -right-full h-[100vh] lg:h-fit w-[70%] lg:w-fit px-8 py-4 lg:p-0 transition-[right] duration-500";
const navListClass = "flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8";
const linkClass = "text-lg text-gray-600 hover:text-gray-800 antialiased after:block after:w-0 after:opacity-0 after:border-b-2 after:border-b-gray-600 after:transition-all after:ease-in-out after:duration-300 hover:after:w-full hover:after:opacity-100";
const linkClassActive = "text-lg text-gray-800 antialiased after:block after:w-full after:border-b-2 after:border-b-gray-800";
const toggleButtonClass = "block lg:hidden"

function NavbarList({ pathname, links, handleToggle }: { pathname: string, links: navLinkType[], handleToggle: Function }): ReactElement {
  return (
    <div id="navbar-list" className={navListContainerClass}>
      <ul className={navListClass}>
        <li className="block lg:hidden place-self-end mt-3">
          <ToggleButton show={false} handleToggle={handleToggle} />
        </li>
        {
          links.map(( link: navLinkType, index: number ) => (
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
        show ? (
          <svg width="27" height="23" viewBox="0 0 27 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="10" width="27" height="3" rx="1.5" className="fill-gray-600"/>
          <rect width="27" height="3" rx="1.5" className="fill-gray-600"/>
          <rect y="20" width="27" height="3" rx="1.5" className="fill-gray-600"/>
          </svg>
        ) : (
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="22.6274" width="32" height="3" rx="1.5" transform="rotate(-45 0 22.6274)" className="fill-gray-600"/>
          <rect x="2.12134" width="32" height="3" rx="1.5" transform="rotate(45 2.12134 0)" className="fill-gray-600"/>
          </svg>
        ) 
      }
      
      
    </button>
  )
}

export default function Navbar({ links, logo }: { links: navLinkType[], logo: { src: string, alt: string } }): ReactElement {
  const pathname = usePathname();
  const [isNavbarHidden, setIsNavbarHidden] = useState(true);

  const handleToggle = useCallback(() => {
    setIsNavbarHidden(!isNavbarHidden)
    const navbarList = document.getElementById("navbar-list")
    navbarList!.classList.toggle("!right-0")
  }, [isNavbarHidden]);


  useEffect(() => {
    // window.onscroll = () => {
    //   const currentScrollPos = window.pageYOffset;
    //   if (prevScrollpos > currentScrollPos) {
    //     document.getElementById("navbar").style.top = "0";
    //   } else {
    //     document.getElementById("navbar").style.top = "-50px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }
  }, []);

  return (
    <nav className="bg-gray-100 bg-opacity-95 shadow-sm sticky top-0 h-20 duration-500 ease-in-out transition-[top] z-50">
      <div className="flex flex-row justify-between items-center max-w-[1440px] h-auto mx-auto px-8 relative">
        <img className="h-20" src={logo.src} alt={logo.alt} />
        <NavbarList 
          pathname={pathname} 
          links={links} 
          handleToggle={handleToggle}
        />
        <ToggleButton show={true} handleToggle={handleToggle} />
        </div>
    </nav>
  )
}

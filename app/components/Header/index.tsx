"use client";
// import { signOut, useSession } from "next-auth/react";
// import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { siteConfig } from "../../config/site";
import "../../styles/index.css";
// import menuData from "./menuData";
const menuData = [
  {
    id: 1,
    title: "Accueil",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Services",
    // path: "/services",
    newTab: false,
    subMenu: [
      {
        id: 1,
        title: "Audit de conformité",
        path: "/services/audit-conformite",
      },
      {
        id: 2,
        title: "Bilan de sécurité",
        path: "/services/bilan-securite",
      },
      {
        id: 3,
        title: "Accompagnement de projet",
        path: "/services/accompagnement",
      },
      {
        id: 4,
        title: "Sensibilisation en sécurité TI",
        path: "/services/sensibilisation",
      },
      {
        id: 5,
        title: "Formation en sécurité TI",
        path: "/services/formation",
      },
    ],
  },
  {
    id: 3,
    title: "À propos",
    path: "/about",
    newTab: false,
  },
  {
    id: 4,
    title: "Contact",
    path: "/contact",
    newTab: false,
  },
];

const Header = () => {
  // user data
  // const { data: session, status } = useSession();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  // const menu = useMemo(() => {
  //   return menuData.filter((menuItem) => menuItem);
  // }, []);

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  const usePathName = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 w-full ${sticky
        ? "fixed z-[9999] bg-white/80 shadow-lg backdrop-blur-sm transition"
        : "absolute bg-transparent"
        }`}
    >
      <div className="container">
        <div className="relative flex h-20 items-center justify-between lg:h-24">
          <div className="w-60 max-w-full">
            <Link href="/" className="block w-full">
              <Image
                src="/images/logo/logo-2.svg"
                alt="Ibelio-cyber"
                title={siteConfig.name}
                width={160}
                height={40}
                className="w-full"
              />
            </Link>
          </div>
          <div className="flex items-center justify-end">
            <nav
              className={`absolute right-0 top-full w-full max-w-[250px] rounded-lg bg-white p-4 transform transition-all duration-300 ease-in-out lg:static lg:w-full lg:max-w-full lg:bg-transparent lg:p-0 lg:transform-none ${navbarOpen
                ? "translate-y-0 opacity-100 visible"
                : "translate-y-[-20px] opacity-0 invisible lg:visible lg:opacity-100 lg:translate-y-0"
                }`}
            >
              <ul className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8">
                {menuData.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    <Link
                      href={menuItem.path || "#"}
                      className={`flex items-center text-base font-medium ${usePathName === menuItem.path
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                        }`}
                    >
                      {menuItem.title}
                      {menuItem.subMenu && (
                        <span className="text-primary ml-2">
                          <IoChevronDownCircleOutline className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                        </span>
                      )}
                    </Link>
                    {menuItem.subMenu && (
                      <div className="absolute left-0 top-full z-40 hidden w-[220px] group-hover:block">
                        <div className="pt-4">
                          <div className="rounded-lg bg-white p-2 shadow-lg">
                            {menuItem.subMenu.map((submenu, index) => (
                              <Link
                                key={index}
                                href={`/services/${submenu.id}`}
                                className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary"
                              >
                                {submenu.title}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <button
              type="button"
              onClick={navbarToggleHandler}
              aria-label="Menu principal"
              className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary lg:hidden"
            >
              {navbarOpen ? (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

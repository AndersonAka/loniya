"use client";
// import { signOut, useSession } from "next-auth/react";
// import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import "../../styles/index.css";
import { useEffect, useMemo, useState } from "react";
import menuData from "./menuData";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
  const { theme } = useTheme();

  // user data
  // const { data: session, status } = useSession();

  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };
  const menu = useMemo(() => {
    return menuData.filter((menuItem) => menuItem);
  }, []);

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

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <header
      className={`header top-0 left-0 z-40 w-full ${sticky
        ? "fixed z-[9999] bg-white/80 shadow-lg backdrop-blur-sm transition dark:bg-gray-900/90"
        : "absolute bg-transparent"
        }`}
    >
      <div className="container">
        <div className="relative flex h-20 items-center justify-between lg:h-24">
          <div className="w-60 max-w-full">
            <Link href="/" className="block w-full">
              <Image
                src="/images/logo/logo-2.svg"
                alt="Idelio-cyber"
                width={160}
                height={40}
                className="w-full dark:invert"
              />
            </Link>
          </div>

          <div className="flex items-center justify-end">
            <nav
              className={`absolute right-0 top-full w-full max-w-[250px] rounded-lg bg-white p-4 duration-300 dark:bg-gray-800 lg:static lg:w-full lg:max-w-full lg:bg-transparent lg:p-0 ${navbarOpen
                ? "visible opacity-100"
                : "invisible opacity-0 lg:visible lg:opacity-100"
                }`}
            >
              <ul className="flex flex-col space-y-3 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8">
                {menu.map((menuItem, index) => (
                  <li key={index} className="group relative">
                    <Link
                      href={menuItem.path || "#"}
                      className={`flex items-center text-base font-medium ${usePathName === menuItem.path
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary dark:text-gray-200 dark:hover:text-primary"
                        }`}
                    >
                      {menuItem.title}
                      {menuItem.subMenu && (
                        <svg
                          className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Link>

                    {menuItem.subMenu && (
                      <div className="absolute left-0 top-full z-40 mt-2 hidden w-[220px] rounded-lg bg-white p-2 shadow-lg dark:bg-gray-800 group-hover:block">
                        {menuItem.subMenu.map((submenu, index) => (
                          <Link
                            key={index}
                            href={submenu.path}
                            className="block rounded-lg px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary dark:text-gray-300 dark:hover:bg-gray-700/50"
                          >
                            {submenu.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-4">
              <ThemeToggler />
            </div>

            <button
              onClick={navbarToggleHandler}
              aria-label="Menu principal"
              className="ml-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary lg:hidden"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {navbarOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

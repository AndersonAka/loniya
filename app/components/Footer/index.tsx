"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "../../config/site";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="wow fadeInUp relative z-10 pt-16 md:pt-20 lg:pt-24 overflow-hidden">
      {/* Image de fond avec overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="https://images.unsplash.com/photo-1633259584604-afdc243122ea?auto=format&fit=crop&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 "></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/footer/grid.svg')] opacity-20"></div>

      {/* Contenu du footer */}
      <div className="container relative">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo-2.svg"
                  alt={siteConfig.name}
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
              </Link>
              <h2 className="text-3xl font-bold leading-tight text-white mb-4 sm:text-4xl sm:leading-tight lg:text-5xl lg:leading-tight">
                Votre partenaire en <span className="text-primary">cybersécurité</span>
              </h2>
              <p className="mb-9 text-base font-medium leading-relaxed text-body-color">
                {siteConfig.description}
              </p>
              <div className="flex items-center space-x-4">
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-all duration-300 hover:scale-110"
                  aria-label="Suivez-nous sur LinkedIn"
                >
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-2xl font-bold text-white">
                Découvrir
              </h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/services"
                    className="text-lg text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium">
                    Nos services
                  </Link>
                </li>
                <li>
                  <Link href="/about"
                    className="text-lg text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium">
                    Notre expertise
                  </Link>
                </li>
                <li>
                  <Link href="/contact"
                    className="text-lg text-white/90 hover:text-primary transition-all duration-300 hover:translate-x-2 inline-block font-medium">
                    Nous contacter
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-2xl font-bold text-white">
                Contactez-nous
              </h2>
              <ul className="space-y-6">
                <li className="flex items-center text-white/90 group">
                  <svg className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg group-hover:text-primary transition-colors duration-300 font-medium">contact@ibeliocyber.fr</span>
                </li>
                <li className="flex items-center text-white/90 group">
                  <svg className="w-5 h-5 mr-3 text-primary group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-lg group-hover:text-primary transition-colors duration-300 font-medium">Paris, France</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>

        <div className="py-8">
          <p className="text-center text-white/80 font-medium text-lg">
            © {new Date().getFullYear()} {siteConfig.name} | Protection et sécurité numérique
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

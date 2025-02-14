"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const SectionTwo = () => {
  const { theme } = useTheme();
  return (
    <section className="pb-16 md:pb-20 lg:pb-28 bg-white dark:bg-gray-dark">
      <div className="container">
        <div className="flex flex-wrap items-center -mx-4">
          <div className="w-full px-4 lg:w-1/2">
            <div className="flex mb-12 lg:mb-0 lg:justify-end">
              <div
                className="wow fadeInUp lg:text-right max-w-[570px]"
                data-wow-delay=".2s"
              >
                <SectionTitle
                  title="Notre expertise à votre service"
                  paragraph="Conçu spécifiquement pour les entreprises modernes, notre package complet comprend tous les services essentiels et les intégrations transparentes dont vous avez besoin."
                  width="570px"
                />
                <Link
                  href="/about"
                  className="inline-flex items-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 ease-in-out rounded-lg bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 focus:ring-2 focus:ring-primary/50 active:scale-95"
                >
                  En savoir plus
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp transform-hardware relative mx-auto max-w-[465px] overflow-hidden rounded-2xl bg-white p-7 text-center shadow-lg dark:bg-gray-800 dark:shadow-gray-900/30"
              data-wow-delay=".15s"
            >
              <div className="relative aspect-[25/24] transform-gpu">
                <Image
                  src="/images/about-2/image-2-dark.svg"
                  alt="Notre expertise"
                  fill
                  className="hidden object-cover transition-opacity duration-300 dark:block no-select"
                  sizes="(max-width: 465px) 100vw, 465px"
                  loading="lazy"
                />
                <Image
                  src="/images/about-2/image-2-light.svg"
                  alt="Notre expertise"
                  fill
                  className="object-cover transition-opacity duration-300 dark:hidden no-select"
                  sizes="(max-width: 465px) 100vw, 465px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;

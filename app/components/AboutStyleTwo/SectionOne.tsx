"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const SectionOne = () => {
  const { theme } = useTheme();
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-gray-50 dark:bg-gray-900">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 sm:w-2/5">
            <div className="wow fadeInUp" data-wow-delay=".15s">
              <div className="mb-8">
                <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full">
                  NOS SERVICES
                </span>
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-black dark:text-white">
                  Des solutions innovantes pour votre entreprise
                </h2>
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <Image
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  src="/images/services/srvimg3.jpg"
                  alt="Nos services"
                  width={1920}
                  height={2193}
                />
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/5">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <SectionTitle
                title="Perfectionnez vos approches pour augmenter vos capacités"
                paragraph="Nous avons pour but de solutionner l&apos;intégralité des problématiques informatiques (IT) des entreprises, en leur offrant l&apos;ensemble des services nécessaires pour améliorer leurs performances et optimiser la structuration de leurs activités."
                width="570px"
                mb="44px"
              />

              <Link
                href="/about"
                className="inline-block px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out rounded-lg bg-primary hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1"
              >
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionOne;

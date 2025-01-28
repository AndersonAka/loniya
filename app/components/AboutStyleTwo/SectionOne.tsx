"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

const SectionOne = () => {
  const { theme } = useTheme();
  return (
    <section className="py-16 md:py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="flex flex-wrap  -mx-4 ">

          <div className="w-full px-4 sm:w-2/5 ">
            <div className="wow fadeInUp flex md:flex-col justify-center md:justify-start mb-12 w-full max-w-[465px] sm:max-w-screen-xs md:max-h-screen overflow-hidden text-center lg:mx-auto"
              data-wow-delay=".15s">
              <div className="flex flex-col p-2 text-start">
                <p className="font-semibold text-xl text-primary">NOS SERVICES</p>
                <span className="font-light text-4xl text-bg-color-dark">Nos services couvrent une large diversité de besoins</span>
              </div>
              <article className="card">
                <Image
                  className="card__background"
                  src="/images/services/srvimg3.jpg"
                  alt="comment"
                  width={1920}
                  height={2193}
                />
              </article>
            </div>
          </div>
          <div className="w-full px-4 lg:w-3/5">
            <div className="wow fadeInUp" data-wow-delay=".2s">
              <SectionTitle
                title="Perfectionnez vos approches pour augmenter vos capacités."
                paragraph="Nous avons pour but de solutionner l'intégralité des problématiques informatiques (IT) des entreprises, en leur offrant l'ensemble des services nécessaires pour améliorer leurs performances et optimiser la structuration de leurs activités."
                width="570px"
                mb="44px"
              />

              <Link
                href="/about"
                className="inline-block px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out rounded-sm bg-primary hover:bg-primary/90 dark:bg-white/10 dark:text-white dark:hover:bg-white/5"
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

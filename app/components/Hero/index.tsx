import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="wow relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px] h-screen bg-cover bg-center bg-[url('/images/hero/hero3.jpg')] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-b before:from-black/70 before:to-black/50"
      >
        <div className="container relative z-20">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="mb-8 text-4xl font-bold leading-tight text-white sm:text-6xl sm:leading-tight lg:text-7xl lg:leading-tight animate__animated animate__fadeInDown">
              Des professionnels de la <span className="text-primary">cybersécurité</span>
            </h1>
            <p className="mb-12 text-lg text-gray-200 sm:text-xl lg:text-2xl animate__animated animate__fadeIn animate__delay-1s">
              À l&apos;ère du numérique, protégez votre entreprise avec notre expertise en cybersécurité
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate__animated animate__fadeInUp animate__delay-1s">
              <Link
                href="/contact"
                className="px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Contactez-nous
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 text-base font-semibold text-white bg-white/10 rounded-lg hover:bg-white/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                Nos services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

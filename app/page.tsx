import { Metadata } from "next";
import ScrollUp from './components/Common/ScrollUp';
import Hero from './components/Hero';
import FeaturesStyleTwo from './components/FeaturesStyleTwo';
import Services from './components/Services';
import AboutStyleTwo from './components/AboutStyleTwo/SectionOne';
import Testimonials from './components/Testimonials';

// Import dynamique des composants existants
// const ScrollUp = dynamic(() => import('@/components/Common/ScrollUp'), { ssr: false });
// const Hero = dynamic(() => import('@/components/Hero'), { ssr: false });
// const FeaturesStyleTwo = dynamic(() => import('@/components/FeaturesStyleTwo'), { ssr: false });
// const Services = dynamic(() => import('@/components/Services'), { ssr: false });
// const AboutStyleTwo = dynamic(() => import('@/components/AboutStyleTwo/SectionOne'), { ssr: false });
// const Testimonials = dynamic(() => import('@/components/Testimonials'), { ssr: false });

export const metadata: Metadata = {
  title: "Ibelio-Cyber - Experts en Cybersécurité",
  description: "Solutions de cybersécurité sur mesure pour protéger votre entreprise",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <FeaturesStyleTwo />
      <AboutStyleTwo />
      <Services />
      <Testimonials />
    </>
  );
}

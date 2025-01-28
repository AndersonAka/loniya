import dynamic from 'next/dynamic';
import { Metadata } from "next";

const ScrollUp = dynamic(() => import('./components/Common/ScrollUp'), { ssr: false });
const Hero = dynamic(() => import('./components/Hero'), { ssr: false });
const FeaturesStyleTwo = dynamic(() => import('./components/FeaturesStyleTwo'), { ssr: false });
const Services = dynamic(() => import('./components/Services'), { ssr: false });
const Contact = dynamic(() => import('./components/Contact'), { ssr: false });
const AboutStyleTwo = dynamic(() => import('./components/AboutStyleTwo'), { ssr: false });

export const metadata: Metadata = {
  title: "Idelio Cybersécurité - Accueil",
  description: "Accueil Idelio Cybersécurité",
  // other metadata
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutStyleTwo />
      <FeaturesStyleTwo />
      <Services />
      <Contact />
    </>
  );
}

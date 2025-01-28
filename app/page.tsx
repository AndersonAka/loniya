import Image from 'next/image'
import { Metadata } from "next";
import ScrollUp from './components/Common/ScrollUp';
import Hero from './components/Hero';
import FeaturesStyleTwo from './components/FeaturesStyleTwo';
import Services from './components/Services';
import Contact from './components/Contact';
import AboutStyleTwo from './components/AboutStyleTwo';

export const metadata: Metadata = {
  title: "Loniya - Accueil",
  description: "Accueil Loniya",
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
      {/* product={undefined} */}
    </>
  )
}

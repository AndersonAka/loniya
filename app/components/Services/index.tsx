"use client";
// import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ServicesBox from "./ServicesBox";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
    title: 'Audit de conformité',
    comment: 'Ces audits permettent d\'évaluer si l\'organisation respecte les normes réglementaires, les meilleures pratiques du secteur et les politiques internes permettant de garantir la sécurité de votre système d\'information.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80',
    title: 'Bilan de sécurité',
    comment: 'Il s\'agit d\'une évaluation complète de votre réseau, de vos applications et de vos appareils afin d\'identifier les faiblesses ou les failles qui pourraient être exploitées par des acteurs malveillants.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    title: 'Accompagnement de projet',
    comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité. Grâce à notre expertise avéré, nous mettons à votre disposition les meilleures pratiques de sécurité.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
    title: 'Sensibilisation en sécurité TI',
    comment: 'Il faut être conscient des techniques de piratage, comme les courriels de phishing ou les faux sites web, qui peuvent nous inciter à communiquer des informations personnelles. Nos conseils vous aideront à rester vigilant.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    title: 'Formation en sécurité TI',
    comment: 'Nos formations vous permettent d\'acquérir les compétences et la sensibilisation nécessaires pour identifier les menaces et les vulnérabilités potentielles dans le cyberespace.'
  }
];

const Services = () => {
  // const [isMonthly, setIsMonthly] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/getproducts");
    //   setProducts(data);
  };

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden">
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
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-gray-900/80 to-gray-900/90"></div>
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>

      <div className="container relative">
        <SectionTitle
          title="Des solutions clé en main"
          paragraph="Pour vos besoins urgents en matière de cybersécurité"
          center
          width="650px"
          white
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.id} className="wow fadeInUp" data-wow-delay={`0.${service.id}s`}>
              <ServicesBox service={service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

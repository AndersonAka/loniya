"use client";
// import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ServicesBox from "./ServicesBox";
import Image from "next/image";
import Link from "next/link";

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

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-white mb-6 md:text-5xl lg:text-6xl">
            Des solutions de cybersécurité sur mesure
          </h1>
          <p className="text-lg text-gray-300 md:text-xl">
            Protégez votre entreprise avec nos services d&apos;audit, de formation et d&apos;accompagnement
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service) => (
            <div key={service.id} className="wow fadeInUp" data-wow-delay={`0.${service.id}s`}>
              <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

                  {/* Titre visible par défaut */}
                  <div className="absolute bottom-0 left-0 p-6 transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Contenu qui apparaît au survol */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-white/90">
                      {service.comment}
                    </p>
                    <Link
                      href={`/services/${service.id}`}
                      className="mt-6 inline-flex items-center text-white font-semibold hover:underline"
                    >
                      En savoir plus
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

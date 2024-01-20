"use client";
// import axios from "axios";
import { useEffect, useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import ServicesBox from "./ServicesBox";
import Image from "next/image";

const Services = () => {
  // const [isMonthly, setIsMonthly] = useState(true);

  const [products, setProducts] = useState([]);

  const servicesTab = [
    {
      id: 1,
      image: '/images/services/img2.jpg',
      title: 'Audit de conformité',
      comment: 'Ces audits permettent d’évaluer si l’organisation respecte les normes réglementaires, les meilleures pratiques du secteur et les politiques internes permettant de garantir la sécurité de votre système d’information.'
    },
    {
      id: 2,
      image: '/images/services/img3.jpg',
      title: 'Bilan de sécurité',
      comment: 'Il s’agit d’une évaluation complète de votre réseau, de vos applications et de vos appareils afin d’identifier les faiblesses ou les failles qui pourraient être exploitées par des acteurs malveillants.'
    },
    {
      id: 3,
      image: '/images/services/img4.jpg',
      title: 'Accompagnement de projet',
      comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité. Grâce à notre expertise avéré, nous mettons à votre disposition les meilleures pratiques de sécurité.'
    },
    {
      id: 4,
      image: '/images/services/img5.jpg',
      title: 'Sensibilisation en sécurité TI',
      comment: 'Il faut être conscient des techniques de piratage, comme les courriels de phishing ou les faux sites web, qui peuvent nous inciter à communiquer des informations personnelles. Nos conseils vous aideront à rester vigilant.'
    },
    {
      id: 5,
      image: '/images/services/img6.jpg',
      title: 'Formation en sécurité TI',
      comment: 'Nos formations vous permettent d’acquérir les compétences et la sensibilisation nécessaires pour identifier les menaces et les vulnérabilités potentielles dans le cyberespace. Rejoignez la lutte contre la cybercriminalité !'
    }
  ]
  useEffect(() => {
    fetchProducts();
    // const wow = new WOW.WOW();
    // wow.init();
  }, []);

  const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/getproducts");
    //   setProducts(data);
  };

  return (
    <>
      <section id="services"
        className="wow fadeInUp relative z-10 py-16 md:py-20 lg:py-28 bg-green-dark"
        style={{
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          className="background-image "
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundImage: `url('/images/about/img11.jpg')`,
            filter: 'blur(1.2px)',
            zIndex: -1,
          }}
        />
        <div className="wow fadeInUp">
          <SectionTitle
            title="Nos services"
            paragraph="Des solutions clé en main pour vos besoins urgents en matière de cybersécurité"
            center
            width="850px"
            white
          />
          <div id="moi" className="flex flex-wrap p-4 m-8 gap-x-14 gap-y-10 justify-center md:pl-24 rounded-xl md:justify-start ">

            {servicesTab && servicesTab.map((serv) => (
              <ServicesBox key={serv.id} service={serv} />
            ))
            }
          </div>
        </div>

        <div className="absolute left-0 bottom-0 z-[-1]">
          <svg
            width="239"
            height="601"
            viewBox="0 0 239 601"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              opacity="0.3"
              x="-184.451"
              y="600.973"
              width="196"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -184.451 600.973)"
              fill="url(#paint0_linear_93:235)"
            />
            <rect
              opacity="0.3"
              x="-188.201"
              y="385.272"
              width="59.7544"
              height="541.607"
              rx="2"
              transform="rotate(-128.7 -188.201 385.272)"
              fill="url(#paint1_linear_93:235)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_93:235"
                x1="-90.1184"
                y1="420.414"
                x2="-90.1184"
                y2="1131.65"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_93:235"
                x1="-159.441"
                y1="204.714"
                x2="-159.441"
                y2="915.952"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </section >
    </>
  );
};

export default Services;

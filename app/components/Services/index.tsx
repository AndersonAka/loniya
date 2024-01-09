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
      image: '/images/hero/hero1.jpg',
      title: 'Audit de conformité',
      comment: 'Ces audits permettent d’évaluer si l’organisation respecte les normes réglementaires, les meilleures pratiques du secteur et les politiques internes permettant de garantir la sécurité de votre système d’information.'
    },
    {
      id: 2,
      image: '/images/hero/hero1.jpg',
      title: 'Bilan de sécurité',
      comment: 'Il s’agit d’une évaluation complète de votre réseau, de vos applications et de vos appareils afin d’identifier les faiblesses ou les failles qui pourraient être exploitées par des acteurs malveillants.'
    },
    {
      id: 3,
      image: '/images/hero/hero1.jpg',
      title: 'Accompagnement de projet',
      comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité. Grâce à notre expertise avéré, nous mettons à votre disposition les meilleures pratiques de sécurité.'
    },
    {
      id: 4,
      image: '/images/hero/hero1.jpg',
      title: 'Accompagnement de projet',
      comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité. Grâce à notre expertise avéré, nous mettons à votre disposition les meilleures pratiques de sécurité.'
    },
    {
      id: 5,
      image: '/images/hero/hero1.jpg',
      title: 'Accompagnement de projet',
      comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité. Grâce à notre expertise avéré, nous mettons à votre disposition les meilleures pratiques de sécurité.'
    }
  ]
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    //   const { data } = await axios.get("/api/getproducts");
    //   setProducts(data);
  };

  return (
    <section id="services"
      className="relative z-10 py-16 md:py-20 lg:py-28 "
      style={{
        backgroundImage: `url('/images/about/aboutbg.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container">
        <SectionTitle
          title="Nos services"
          paragraph="Des solutions clé en main pour vos besoins urgents en matière de cybersécurité"
          center
          width="850px"
          white
        />
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 rounded-3xl md:grid-cols-2 lg:grid-cols-3">
          {/* <div className="wow fadeInUp relative z-10 rounded-2xl bg-white shadow-three dark:bg-gray-dark dark:shadow-two hover:shadow-2xl hover:shadow-primary dark:hover:shadow-gray-dark" data-wow-delay=".1s "
          >
            <Image className="w-full rounded-t-2xl" src="/images/hero/hero1.jpg" alt="Sunset in the mountains" width={500}
              height={500} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2 text-black">Test</div>
              <p className="text-gray-700 text-base text-bg-color-dark">
                Test
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <button
                // onClick={handleSubscription}
                className="flex  rounded-xl bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
              >
                En savoir plus
              </button>
            </div>
          </div > */}
          {servicesTab && servicesTab.map((serv) => (
            <ServicesBox key={serv.id} service={serv} />
          ))
          }
        </div>
      </div>

      {/* <div className="absolute left-0 bottom-0 z-[-1]">
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
      </div> */}
    </section >
  );
};

export default Services;

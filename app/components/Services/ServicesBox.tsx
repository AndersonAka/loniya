// import axios from "axios";
import { useEffect, useRef, useState } from "react";
import OfferList from "./OfferList";
import Image from "next/image";

const ServicesBox = ({ service }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [secoHeight, setSecoHeight] = useState(0);
  const secoRef = useRef(null);
  const data = [
    {
      serviceId: 1
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ];

  useEffect(() => {
    // Mesurer la hauteur de la div "seco" après le rendu initial
    if (secoRef.current) {
      setSecoHeight(secoRef.current.clientHeight);
    }
  }, []);

  // POST request
  const handleSubscription = async (e) => {
    e.preventDefault();
    // Correction ici : utiliser un point-virgule au lieu de deux-points
    // et définir serviceId comme propriété de l'objet que vous envoyez
    data[0].serviceId = service.id;

    // const { data } = await axios.post(
    //   "/api/payment",
    //   {
    //     serviceId: service.id,  // Correction ici
    //   },
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // );

    window.location.assign(data);
  };
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Mettre à jour la taille de troi lors du survol
    setSecoHeight(secoRef.current.clientHeight);
    console.log(secoRef.current.clientHeight)
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div
      id="prin"
      className="wow fadeInUp relative z-10 rounded-2xl bg-primary bg-opacity-20 w-96 shadow-three dark:bg-gray-dark dark:shadow-two hover:shadow-2xl hover:shadow-white dark:hover:shadow-gray-dark"
      data-wow-delay=".1s "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        className="w-full rounded-t-2xl"
        src="/images/hero/hero1.jpg"
        alt="Sunset in the mountains"
        width={500}
        height={500}
      />
      <div id="seco" ref={secoRef} style={{
        height: "300px"
      }}>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-white">{service.title}</div>
          <p className="text-gray-700 text-base text-white font-light">
            {service.comment}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <button
            onClick={handleSubscription}
            className="flex rounded-xl bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp hover:motion-safe:animate-wiggle"
          >
            En savoir plus
          </button>
        </div>
      </div>
      {/* La div "troi" qui apparaît au survol avec la même hauteur que la div "seco" */}
      {isHovered && (
        <div
          id="troi"
          className="absolute top-0 start-0 w-full bg-primary opacity-50 rounded-2xl"
          style={{ height: "100%", zIndex: -1 }}

        ></div>
      )}
    </div>
  );
};

export default ServicesBox;

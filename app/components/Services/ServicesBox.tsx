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

    // window.location.assign(data);
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
    <div>
      <article className="card">
        <Image
          className="card__background"
          src={service.image}
          alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
          width={1920}
          height={2193}
        />
        <div className="card__content | flow">
          <div className="card__content--container | flow">
            <h2 className="card__title ">{service.title}</h2>
            <p className="card__description">
              {service.comment}
            </p>
          </div>
          <button className="card__button">En savoir plus</button>
        </div>
      </article>
    </div>
  );
};

export default ServicesBox;

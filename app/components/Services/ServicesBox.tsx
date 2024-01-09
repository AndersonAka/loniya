// import axios from "axios";
import OfferList from "./OfferList";
import Image from "next/image";


const ServicesBox = ({ service }) => { //product
  // const { price, duration, packageName, subtitle, children } = props;
  const data = [
    {
      serviceId: 1
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  ]

  // POST request
  const handleSubscription = async (e) => {
    e.preventDefault();
    serviceId: service.id,

      // const { data } = await axios.post(
      //   "/api/payment",
      //   {
      //     // priceId: product.id,
      //   },
      //   {
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //   }
      // );
      window.location.assign(data);
  };

  return (
    <div className="wow fadeInUp relative z-10 rounded-2xl bg-primary bg-opacity-20 shadow-three dark:bg-gray-dark dark:shadow-two hover:shadow-2xl hover:shadow-white dark:hover:shadow-gray-dark" data-wow-delay=".1s "
    >
      <Image className="w-full rounded-t-2xl" src="/images/hero/hero1.jpg" alt="Sunset in the mountains" width={500}
        height={500} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{service.title}</div>
        <p className="text-gray-700 text-base text-white font-light">
          {service.comment}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button
          onClick={handleSubscription}
          className="flex rounded-xl bg-primary p-3 text-base font-semibold text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp"
        >
          En savoir plus
        </button>
      </div>
    </div >
  );
};

export default ServicesBox;

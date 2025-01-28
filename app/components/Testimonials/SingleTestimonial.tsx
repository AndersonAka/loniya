import { Testimonial } from "@/app/types/testimonial";
import { FaBeer } from 'react-icons/fa';
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full">
      <div className="p-8 relative bg-white rounded-3xl w-64 my-4 lg:px-5 xl:px-8 shadow-xl">
        <div className=" bg-yellow text-white text-4xl flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
          {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg> */}
          <FaBeer />
        </div>

        <div className="mt-8">
          <p className="text-xl font-semibold my-2 text-dark">App Development</p>
          <div className="flex space-x-2 text-gray-400 text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p>Marketing Team</p>
          </div>
          <div className="flex space-x-2 text-gray-400 text-sm my-3">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p>1 Weeks Left</p>
          </div>
          <div className="border-t-2"></div>
        </div>
      </div>

    </div>
    // <div className="w-full">
    //   <div
    //     className="p-8 duration-300 rounded-sm wow fadeInUp shadow-two bg-dark dark:shadow-three lg:px-5 xl:px-8 hover:shadow-one dark:hover:shadow-gray-dark"
    //     data-wow-delay=".1s"
    //   >
    //     <div className="flex items-center mb-5 space-x-1">{ratingIcons}</div>
    //     <p className="pb-8 mb-8 text-base leading-relaxed border-b border-white/10 text-white">
    //       “{content}
    //     </p>
    //     <div className="flex items-center">
    //       <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
    //         <Image src={image} alt={name} fill />
    //       </div>
    //       <div className="w-full">
    //         <h3 className="mb-1 text-lg font-semibold text-white lg:text-base xl:text-lg">
    //           {name}
    //         </h3>
    //         <p className="text-sm text-body-color">{designation}</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default SingleTestimonial;

import { Testimonial } from "@/app/types/testimonial";
import Image from "next/image";
import { FaQuoteRight } from 'react-icons/fa';

const StarIcon = () => (
  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="wow fadeInUp rounded-lg bg-white p-8 shadow-testimonial  lg:px-5 xl:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative h-16 w-16 overflow-hidden rounded-full">
              <Image src={image} alt={name} fill />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black ">
                {name}
              </h3>
              <p className="text-sm text-gray-600 ">
                {designation}
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-[2px]">
          {[...Array(star)].map((_, index) => (
            <span key={index} className="text-yellow-500">
              ★
            </span>
          ))}
        </div>

        <p className="mt-5 text-base leading-relaxed text-gray-600">
          &ldquo;{content}&rdquo;
        </p>
      </div>
    </div>
  );
};

export default SingleTestimonial;

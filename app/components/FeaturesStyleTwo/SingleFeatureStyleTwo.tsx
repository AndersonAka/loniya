import { Feature } from "@/app/types/feature";
import Link from "next/link";

const SingleFeatureStyleTwo = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp group p-8 rounded-xl bg-white hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        data-wow-delay=".15s"
      >
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 text-primary group-hover:from-primary group-hover:to-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="mb-5 text-2xl font-bold text-gray-900">
          {title}
        </h3>
        <p className="text-base text-gray-600">
          {paragraph}
        </p>
        <Link
          href="/about"
          className="mt-6 inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
        >
          En savoir plus
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SingleFeatureStyleTwo;

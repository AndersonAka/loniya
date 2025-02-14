import { Feature } from "@/app/types/feature";

const SingleFeatureStyleTwo = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp group p-8 rounded-xl bg-white dark:bg-[#1D2144] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
        data-wow-delay=".15s"
      >
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 text-primary group-hover:from-primary group-hover:to-primary group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        <h3 className="mb-5 text-2xl font-bold text-black dark:text-white">
          {title}
        </h3>
        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
          {paragraph}
        </p>
      </div>
    </div>
  );
};

export default SingleFeatureStyleTwo;

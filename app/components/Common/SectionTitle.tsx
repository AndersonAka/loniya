const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  white
}: {
  title: string;
  paragraph?: string;
  width?: string;
  center?: boolean;
  mb?: string;
  white?: boolean
}) => {
  return (
    <div
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""} ${width === "570px" ? "max-w-[570px]" : `max-w-[${width}]`
        } ${mb === "100px" ? "mb-[100px]" : `mb-[${mb}]`}`}
      data-wow-delay=".1s"
    >
      <h2 className={`mb-4 text-3xl font-light !leading-tight sm:text-5xl md:text-[45px] ${white ? "text-white" : "text-black dark:text-white"
        }`}>
        {title}
      </h2>
      <p className={`text-base font-extralight !leading-relaxed md:text-xl ${white ? "text-white" : "text-body-color dark:text-body-color-dark"
        }`}>
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;

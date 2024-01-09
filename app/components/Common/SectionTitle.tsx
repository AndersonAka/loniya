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
    <>
      <div
        className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""}`}
        data-wow-delay=".1s"
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2 className={`"mb-4 text-3xl font-bold !leading-tight  dark:text-white sm:text-4xl md:text-[45px]" ${white ? "text-white" : "text-black"}`}>
          {title}
        </h2>
        <p className="text-base font-extralight !leading-relaxed text-body-color md:text-xl">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;

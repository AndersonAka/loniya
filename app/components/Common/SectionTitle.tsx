import React from "react";

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  white,
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  white?: boolean;
}) => {
  return (
    <div
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""} max-w-[${width}]`}
      data-wow-delay=".1s"
    >
      <h2
        className={`mb-4 text-4xl font-bold !leading-tight md:text-5xl lg:text-6xl ${white ? "text-white" : "text-heading-color"}`}
      >
        {title}
      </h2>
      <p
        className={`text-lg md:text-xl ${white ? "text-white" : "text-body-color"}`}
      >
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;

import React from "react";

interface SectionTitleProps {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  white?: boolean;
  light?: boolean;
}

const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  white,
  light,
}: SectionTitleProps) => {
  return (
    <div
      className={`wow fadeInUp w-full ${center ? "mx-auto text-center" : ""} ${width ? `max-w-[${width}]` : ""
        }`}
      data-wow-delay=".1s"
    >
      <h2
        className={`mb-4 text-4xl font-bold !leading-tight md:text-5xl lg:text-6xl ${light ? "text-white" : "text-heading-color"
          }`}
      >
        {title}
      </h2>
      <p className={`text-lg md:text-xl ${light ? "text-white" : "text-body-color"}`}>
        {paragraph}
      </p>
    </div>
  );
};

export default SectionTitle;
import ContactFormBox from "./ContactFormBox";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 animate__animated animate__fadeInUp animate__delay-2s">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <ContactFormBox />
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12"> bg-gradient-to-t from-primary
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;

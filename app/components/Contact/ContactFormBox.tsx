const ContactFormBox = () => {
  return (
    <div
      className="wow fadeInUp mb-12 rounded-sm bg-white py-11 px-8 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
      data-wow-delay=".15s"
    >
      <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
        Faites-nous part de vos besoins.
      </h2>
      <p className="mb-12 text-base text-body-color dark:text-body-color-dark">
        Notre équipe {'d\'assistance'} vous répondra dès que possible par e-mail.
      </p>
      {/* FormBold  */}
      {/* <form action="https://formbold.com/s/3npX1" method="POST"> */}
      <form action="https://formbold.com/s/3npX1" method="POST">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="name"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Nom et Prénoms
              </label>
              <input
                type="text"
                placeholder="Enter votre nom"
                className="w-full rounded-xl border border-stroke bg-[#f8f8f8] py-3 px-6 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                name="subject"
                required
              />
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2">
            <div className="mb-8">
              <label
                htmlFor="email"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter votre adresse email"
                className="w-full rounded-xl border border-stroke bg-[#f8f8f8] py-3 px-6 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                required
                name="email"
              />
            </div>
          </div>
          <div className="w-full px-4">
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-sm text-dark dark:text-white"
              >
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                placeholder="Enter your Message"
                className="w-full resize-none rounded-xl border border-stroke bg-[#f8f8f8] py-3 px-6 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                required
              ></textarea>
            </div>
          </div>
          <div className="w-full px-4">
            <button className="rounded-2xl bg-primary py-4 px-9 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
              Envoyer
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactFormBox;

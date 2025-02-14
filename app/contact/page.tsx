import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Loniya Cybersécurité",
    description: "Contactez nos experts en cybersécurité pour sécuriser votre entreprise",
};

const ContactPage = () => {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-gray-dark">
            <div className="container">
                <div className="max-w-2xl mx-auto text-center mb-12">
                    <h1 className="text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[45px] mb-6">
                        Contactez-nous
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Notre équipe d&apos;experts est à votre disposition pour répondre à vos questions.
                    </p>
                </div>

                <div className="max-w-xl mx-auto">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Nom complet
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary focus:ring-primary dark:text-white"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary focus:ring-primary dark:text-white"
                                placeholder="john@example.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={6}
                                className="w-full px-4 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 border-transparent focus:border-primary focus:ring-primary dark:text-white"
                                placeholder="Votre message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full px-8 py-4 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactPage; 
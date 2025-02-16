import { Metadata } from "next";
import SectionTitle from "../components/Common/SectionTitle";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Contact | Loniya Cybersécurité",
    description: "Contactez nos experts en cybersécurité pour sécuriser votre entreprise",
};

export default function ContactPage() {
    return (
        <>
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                {/* Image de fond avec overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                        alt="Contactez-nous"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/40 to-transparent"></div>
                </div>
                {/* Contenu */}
                <div className="container relative z-10">
                    <SectionTitle
                        title="Contactez-nous"
                        paragraph="Notre équipe d'experts est à votre écoute pour répondre à vos besoins"
                        center
                        light
                    />
                </div>
            </section>

            <section className="py-16 md:py-20 lg:py-28">
                <div className="container">
                    <div className="flex flex-wrap -mx-4">
                        <div className="w-full px-4 lg:w-7/12 xl:w-8/12">
                            <div className="wow fadeInUp mb-12 rounded-md bg-white p-8 shadow-lg sm:p-10 lg:px-12 xl:p-14">
                                <form>
                                    <div className="mb-6">
                                        <label className="mb-3 block text-sm font-medium text-dark">
                                            Nom complet
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Entrez votre nom et vos prénom(s)"
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="mb-3 block text-sm font-medium text-dark">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            placeholder="Entrez votre email"
                                            className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label className="mb-3 block text-sm font-medium text-dark">
                                            Message
                                        </label>
                                        <textarea
                                            rows={6}
                                            placeholder="Entrez votre message"
                                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none"
                                        />
                                    </div>
                                    <div>
                                        <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                                            Envoyer
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
                            <div className="wow fadeInUp rounded-md bg-white p-8 shadow-lg sm:p-10 lg:px-12 xl:p-14">
                                <h3 className="mb-8 text-2xl font-bold text-black">
                                    Nos coordonnées
                                </h3>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="text-primary mr-6">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M18.3333 9.41667C18.3333 13.5 15.0833 17.5 10 17.5C4.91667 17.5 1.66667 13.5 1.66667 9.41667C1.66667 5.33333 4.91667 1.66667 10 1.66667C15.0833 1.66667 18.3333 5.33333 18.3333 9.41667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.3333 9.41667C13.3333 11.6667 11.5 13.5 9.25 13.5C7 13.5 5.16667 11.6667 5.16667 9.41667C5.16667 7.16667 7 5.33333 9.25 5.33333C11.5 5.33333 13.3333 7.16667 13.3333 9.41667Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-xl font-bold text-black">
                                            Notre localisation
                                        </h4>
                                        <p className="text-base text-body-color">
                                            Etats Unis, Canada
                                        </p>
                                    </div>
                                </div>
                                <div className="mb-8 flex w-full max-w-[370px]">
                                    <div className="text-primary mr-6">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M15.8333 7.5L11.6667 11.6667L8.33333 8.33333L4.16667 12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13.3333 7.5H15.8333V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="mb-1 text-xl font-bold text-black">
                                            Email
                                        </h4>
                                        <p className="text-base text-body-color">
                                            contact@ibeliocyber.fr
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
} 
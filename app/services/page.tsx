import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/Common/SectionTitle";

export const metadata: Metadata = {
    title: "Nos Services | Ibelio-Cyber",
    description: "Découvrez nos services de cybersécurité sur mesure pour protéger votre entreprise",
};

interface Service {
    id: number;
    title: string;
    description: string;
    comment: string;
    image: string;
}

export default function ServicesPage() {
    return (
        <>
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                {/* Image de fond avec overlay */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                        alt="Services de cybersécurité"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/40 to-transparent"></div>
                </div>
                {/* Contenu */}
                <div className="container relative z-10">
                    <SectionTitle
                        title="Nos Services"
                        paragraph="Des solutions complètes pour sécuriser votre infrastructure numérique"
                        center
                        light
                    />
                </div>
            </section>

            <section className="py-16 md:py-20 lg:py-28">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2 items-center mb-20">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1563986768609-322da13575f3"
                                alt="Vue d'ensemble de nos services"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Une approche globale de la cybersécurité
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Nous proposons une gamme complète de services pour protéger votre entreprise contre les menaces numériques actuelles et futures. Notre expertise couvre tous les aspects de la sécurité informatique.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {services.map((service) => (
                            <div key={service.id} className="wow fadeInUp" data-wow-delay={`0.${service.id}s`}>
                                <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                                    <div className="relative h-64">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover transition-transform duration-500"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-300"></div>
                                        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-90 transition-opacity duration-300"></div>

                                        {/* Titre visible par défaut */}
                                        <div className="absolute bottom-0 left-0 p-6 transform translate-y-0 group-hover:translate-y-full transition-transform duration-300">
                                            <h3 className="text-2xl font-bold text-white">
                                                {service.title}
                                            </h3>
                                        </div>

                                        {/* Contenu qui apparaît au survol */}
                                        <div className="absolute inset-0 p-6 flex flex-col justify-center transform -translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="text-2xl font-bold text-white mb-4">
                                                {service.title}
                                            </h3>
                                            <p className="text-white/90">
                                                {service.comment}
                                            </p>
                                            <Link
                                                href={`/services/${service.id}`}
                                                className="mt-6 inline-flex items-center text-white font-semibold hover:underline"
                                            >
                                                En savoir plus
                                                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

const services = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
        title: 'Audit de conformité',
        comment: 'Ces audits permettent d\'évaluer si l\'organisation respecte les normes réglementaires, les meilleures pratiques du secteur et les politiques internes permettant de garantir la sécurité de votre système d\'information.'
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80',
        title: 'Bilan de sécurité',
        comment: 'Il s\'agit d\'une évaluation complète de votre réseau, de vos applications et de vos appareils afin d\'identifier les faiblesses ou les failles qui pourraient être exploitées par des acteurs malveillants.'
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
        title: 'Accompagnement de projet',
        comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité. Grâce à notre expertise avéré, nous mettons à votre disposition les meilleures pratiques de sécurité.'
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
        title: 'Sensibilisation en sécurité TI',
        comment: 'Il faut être conscient des techniques de piratage, comme les courriels de phishing ou les faux sites web, qui peuvent nous inciter à communiquer des informations personnelles. Nos conseils vous aideront à rester vigilant.'
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
        title: 'Formation en sécurité TI',
        comment: 'Nos formations vous permettent d\'acquérir les compétences et la sensibilisation nécessaires pour identifier les menaces et les vulnérabilités potentielles dans le cyberespace.'
    }
]; 
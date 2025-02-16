import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../components/Common/SectionTitle";

export const metadata: Metadata = {
    title: "À propos | Ibelio-Cyber",
    description: "Découvrez notre expertise en cybersécurité et notre engagement envers la protection de votre entreprise",
};

const teamMembers = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "Directrice Technique",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e",
        bio: "Expert en sécurité des systèmes avec plus de 10 ans d'expérience"
    },
    {
        id: 2,
        name: "Marcus Johnson",
        role: "Responsable Audit",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
        bio: "Spécialiste en conformité et gestion des risques"
    },
    {
        id: 3,
        name: "Emma Rodriguez",
        role: "Experte Sécurité",
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
        bio: "Certifiée en analyse de vulnérabilités et tests d'intrusion"
    }
];

const stats = [
    { id: 1, value: "98%", label: "Satisfaction client" },
    { id: 2, value: "150+", label: "Projets réalisés" },
    { id: 3, value: "10+", label: "Années d'expérience" },
    { id: 4, value: "24/7", label: "Support disponible" },
];

export default function AboutPage() {
    return (
        <>
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
                        alt="À propos de Ibelio-Cyber"
                        fill
                        className="object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="container relative z-10">
                    <SectionTitle
                        title="Notre Histoire"
                        paragraph="Une équipe passionnée au service de votre sécurité numérique"
                        center
                        light
                    />
                </div>
            </section>

            <section className="py-16 md:py-20 lg:py-28">
                <div className="container">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                            <Image
                                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                                alt="Notre mission"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Notre Mission
                            </h2>
                            <p className="text-gray-600 mb-6">
                                Chez Ibelio-Cyber, nous nous engageons à fournir des solutions de cybersécurité innovantes et sur mesure pour protéger votre entreprise contre les menaces numériques en constante évolution.
                            </p>
                            <p className="text-gray-600 mb-8">
                                {` Notre approche combine expertise technique, compréhension approfondie des enjeux business et engagement constant envers l'excellence.`}
                            </p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                {stats.map((stat) => (
                                    <div key={stat.id} className="text-center p-4 bg-gray-50 rounded-xl">
                                        <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                        <div className="text-sm text-gray-600">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="mb-20">
                        <h2 className="text-3xl text-gray-900 font-bold text-center mb-12">Notre Équipe</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="group">
                                    <div className="relative overflow-hidden rounded-2xl bg-gray-100 transform transition-transform duration-300 group-hover:scale-105">
                                        <div className="relative h-80">
                                            <Image
                                                src={member.image}
                                                alt={member.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <p className="text-sm">{member.bio}</p>
                                            </div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
                                            <p className="text-gray-600">{member.role}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="text-center">
                        <div className="max-w-2xl mx-auto mb-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à collaborer avec nous ?</h2>
                            <p className="text-gray-600">Découvrez comment notre expertise peut renforcer la sécurité de votre entreprise.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contactez notre équipe
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
} 
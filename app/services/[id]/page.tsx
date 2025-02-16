import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const services = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80',
        title: 'Audit de conformité',
        comment: 'Ces audits permettent d\'évaluer si l\'organisation respecte les normes réglementaires...',
        fullDescription: `
            <h2>Notre approche d'audit de conformité</h2>
            <p>Nous réalisons un examen approfondi de vos systèmes d'information pour garantir leur conformité aux normes et réglementations en vigueur.</p>
            
            <h3>Nos services comprennent :</h3>
            <ul>
                <li>Évaluation des politiques de sécurité</li>
                <li>Analyse des contrôles d'accès</li>
                <li>Vérification de la protection des données</li>
                <li>Examen des procédures de sauvegarde</li>
                <li>Revue des processus de gestion des incidents</li>
            </ul>
        `
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&q=80',
        title: 'Bilan de sécurité',
        comment: 'Il s\'agit d\'une évaluation complète de votre réseau, de vos applications et de vos appareils...',
        fullDescription: `
            <h2>Évaluation approfondie de votre sécurité</h2>
            <p>Notre bilan de sécurité offre une vue d'ensemble de votre posture de sécurité actuelle et identifie les zones d'amélioration potentielles.</p>
            
            <h3>Le bilan comprend :</h3>
            <ul>
                <li>Tests de pénétration</li>
                <li>Analyse des vulnérabilités</li>
                <li>Évaluation de la sécurité du réseau</li>
                <li>Audit de la sécurité des applications</li>
                <li>Recommandations détaillées</li>
            </ul>
        `
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
        title: 'Accompagnement de projet',
        comment: 'Nous collaborons avec votre équipe pour tout projet lié à la cybersécurité...',
        fullDescription: `
            <h2>Un accompagnement sur mesure</h2>
            <p>Notre équipe d'experts vous accompagne dans tous vos projets de sécurité, de la conception à la mise en œuvre.</p>
            
            <h3>Types d'accompagnement :</h3>
            <ul>
                <li>Conception d'architecture sécurisée</li>
                <li>Implémentation de solutions de sécurité</li>
                <li>Gestion de projet sécurité</li>
                <li>Support technique spécialisé</li>
                <li>Conseil stratégique</li>
            </ul>
        `
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80',
        title: 'Sensibilisation en sécurité TI',
        comment: 'Il faut être conscient des techniques de piratage, comme les courriels de phishing...',
        fullDescription: `
            <h2>Sensibilisation aux cybermenaces</h2>
            <p>La sensibilisation est essentielle pour créer une culture de la sécurité au sein de votre organisation.</p>
            
            <h3>Notre programme inclut :</h3>
            <ul>
                <li>Sessions de sensibilisation interactives</li>
                <li>Simulations de phishing</li>
                <li>Ateliers pratiques</li>
                <li>Matériel de formation personnalisé</li>
                <li>Évaluation des connaissances</li>
            </ul>
        `
    },
    {
        id: 5,
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
        title: 'Formation en sécurité TI',
        comment: 'Nos formations vous permettent d\'acquérir les compétences et la sensibilisation nécessaires...',
        fullDescription: `
            <h2>Formation professionnelle en cybersécurité</h2>
            <p>Nos programmes de formation sont conçus pour développer les compétences de vos équipes en matière de sécurité informatique.</p>
            
            <h3>Modules de formation :</h3>
            <ul>
                <li>Sécurité des réseaux</li>
                <li>Gestion des incidents de sécurité</li>
                <li>Sécurité des applications</li>
                <li>Protection des données</li>
                <li>Conformité et réglementation</li>
            </ul>
        `
    }
];

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
    const service = services.find(s => s.id === parseInt(params.id));
    if (!service) return { title: "Service non trouvé" };

    return {
        title: `${service.title} | Ibelio-Cyber`,
        description: service.comment
    };
}

export default function ServicePage({ params }: { params: { id: string } }) {
    const service = services.find(s => s.id === parseInt(params.id));
    if (!service) notFound();

    return (
        <>
            <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover transform scale-105 hover:scale-100 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent"></div>
                </div>
                <div className="container relative z-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-6">
                        {service.title}
                    </h1>
                    <p className="text-xl text-white/90 text-center max-w-3xl mx-auto">
                        {service.comment}
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-20 lg:py-28">
                <div className="container">
                    <div className="grid lg:grid-cols-3 gap-8 mb-16">
                        <div className="lg:col-span-2">
                            <div className="prose prose-lg max-w-none">
                                <div dangerouslySetInnerHTML={{ __html: service.fullDescription }}></div>
                            </div>
                        </div>
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 bg-gray-50 rounded-2xl p-8 shadow-lg">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Autres services</h3>
                                <div className="space-y-4">
                                    {services
                                        .filter(s => s.id !== service.id)
                                        .map(otherService => (
                                            <Link
                                                key={otherService.id}
                                                href={`/services/${otherService.id}`}
                                                className="flex items-start p-4 rounded-xl hover:bg-white transition-colors group"
                                            >
                                                <div className="relative w-20 h-16 rounded-lg overflow-hidden mr-4">
                                                    <Image
                                                        src={otherService.image}
                                                        alt={otherService.title}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors">
                                                        {otherService.title}
                                                    </h4>
                                                    <p className="text-sm text-gray-600 line-clamp-2">
                                                        {otherService.comment}
                                                    </p>
                                                </div>
                                            </Link>
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <div className="max-w-2xl mx-auto mb-8 text-center">
                            <h2 className="text-3xl font-bold text-gray-900 mb-4">Prêt à sécuriser votre entreprise ?</h2>
                            <p className="text-gray-600">{`Contactez-nous dès aujourd'hui pour discuter de vos besoins en matière de cybersécurité.`}</p>
                        </div>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary rounded-xl hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                        >
                            Contactez-nous
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
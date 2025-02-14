"use client";

import SectionTitle from "../Common/SectionTitle";

const Services = () => {
    return (
        <section className="py-20 lg:py-32 bg-white dark:bg-gray-dark">
            <div className="container">
                <SectionTitle
                    title="Nos Services"
                    paragraph="Solutions de cybersécurité sur mesure pour protéger votre entreprise"
                    center
                    width="650px"
                />

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {/* Contenu des services ici */}
                </div>
            </div>
        </section>
    );
};

export default Services; 
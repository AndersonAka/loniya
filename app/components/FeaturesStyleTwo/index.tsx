"use client"

import SectionTitle from "../Common/SectionTitle";
import SingleFeatureStyleTwo from "./SingleFeatureStyleTwo";
import featuresStyleTwoData from "./featuresStyleTwoData";
import { useEffect } from 'react';

const FeaturesStyleTwo = () => {
  useEffect(() => {
    // Importer WOW.js dynamiquement uniquement côté client
    if (typeof window !== 'undefined') {
      const WOW = require('wowjs');
      const wow = new WOW.WOW({
        live: false
      });
      wow.init();
    }
  }, []);

  return (
    <section className="wow fadeIn relative z-10 py-16 md:py-20 lg:py-28 bg-white dark:bg-gray-dark overflow-hidden">
      <div className="container">
        <SectionTitle
          title="À propos de Loniya"
          paragraph="Loniya déploie les technologies qui accélèrent le développement de ses clients et les aident à réaliser leur vision de l&apos;entreprise du futur."
          center
          width="850px"
        />

        <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
          {featuresStyleTwoData.map((feature) => (
            <SingleFeatureStyleTwo key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesStyleTwo;

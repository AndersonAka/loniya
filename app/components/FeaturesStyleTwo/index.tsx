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
    <section className="wow fadeIn relative z-10 py-16 md:py-20 lg:py-28 bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 md:text-5xl lg:text-6xl">
            À propos de nous
          </h1>
          <p className="text-lg text-gray-600 md:text-xl">
            Ibelio-Cyber déploie les technologies qui accélèrent le développement de ses clients et les aident à réaliser leur vision de l&apos;entreprise du futur.
          </p>
        </div>

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

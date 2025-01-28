"use client"

import SectionTitle from "../Common/SectionTitle";
import SingleFeatureStyleTwo from "./SingleFeatureStyleTwo";
import featuresStyleTwoData from "./featuresStyleTwoData";
import { useEffect } from 'react';
//@ts-ignore
import WOW from 'wowjs';

const FeaturesStyleTwo = () => {

  useEffect(() => {
    // Vérifiez que window est disponible (côté client uniquement)
    if (typeof window !== 'undefined') {
      const wow = new WOW.WOW();
      wow.init();
    }
  }, []);

  return (
    <>
      <section id="features" className="wow fadeIn py-16 md:py-20 lg:py-28" data-wow-duration="2s" data-wow-delay="0.5s">
        <div className="container">
          <SectionTitle
            title="A propos de Loniya"
            paragraph="Loniya déploie les technologies qui accélèrent le développement de ses clients et les aident à réaliser leur vision de l'entreprise du futur."
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
    </>
  );
};

export default FeaturesStyleTwo;

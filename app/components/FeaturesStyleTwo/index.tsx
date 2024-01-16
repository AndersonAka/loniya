import SectionTitle from "../Common/SectionTitle";
import SingleFeatureStyleTwo from "./SingleFeatureStyleTwo";
import featuresStyleTwoData from "./featuresStyleTwoData";

const FeaturesStyleTwo = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28  animate__animated animate__fadeIn animate__delay-2s">
        <div className="container">
          <SectionTitle
            title="A propos de Loniya"
            paragraph="Loniya déploie les technologies qui accélèrent le développement de ses clients et les aident à réaliser leur vision de l'entreprise du futur."
            center
            width="850px"
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3 animate__animated animate__bounceIn animate__delay-2s">
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

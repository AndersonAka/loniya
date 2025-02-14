import { Metadata } from "next";
import Services from "../components/Services";

export const metadata: Metadata = {
    title: "Nos Services | Loniya Cybersécurité",
    description: "Découvrez nos services de cybersécurité sur mesure pour protéger votre entreprise",
};

export default function ServicesPage() {
    return <Services />;
} 
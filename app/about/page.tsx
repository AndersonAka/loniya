import { Metadata } from "next";
import AboutStyleTwo from "../components/AboutStyleTwo";

export const metadata: Metadata = {
    title: "À Propos | Loniya Cybersécurité",
    description: "Découvrez notre expertise en cybersécurité et notre engagement pour la sécurité de votre entreprise",
};

export default function AboutPage() {
    return <AboutStyleTwo />;
} 
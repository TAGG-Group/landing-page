import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { CardStack, Product } from "../../components/kokonutui/card-stack";
import fulserImg from "../../assets/fulser.png";
import juspayImg from "../../assets/juspay.png";

const projects: Product[] = [
  {
    id: "fulser-properties",
    title: "Fulser Properties",
    subtitle: "Real Estate Excellence",
    description: "Plateforme immobilière de luxe offrant des solutions sur mesure pour l'achat, la vente et la gestion de biens d'exception.",
    image: fulserImg,
    link: "https://www.fulserproperties.com/",
    specs: [
      { label: "Type", value: "Immobilier" },
      { label: "Design", value: "Premium" },
      { label: "Tech", value: "Next.js" },
      { label: "Market", value: "Haut de gamme" },
    ],
  },
  {
    id: "juspay",
    title: "Juspay",
    subtitle: "Digital Payment Gateway",
    description: "Passerelle de paiement sécurisée permettant l'agrégation de multiples moyens de paiement (Wave, Orange Money, Cartes) pour les marchands.",
    image: juspayImg,
    specs: [
      { label: "Fintech", value: "Payments" },
      { label: "Security", value: "PCI-DSS" },
      { label: "Scale", value: "High Vol" },
      { label: "API", value: "Restful" },
    ],
  },
  {
    id: "dakar-auto",
    title: "Dakar Auto",
    subtitle: "Smart Parking Solution",
    description: "Application mobile innovante permettant aux automobilistes dakarois de trouver et réserver une place de parking en temps réel.",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f277?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Tech", value: "Flutter" },
      { label: "Backend", value: "NestJS" },
      { label: "Users", value: "+10k" },
      { label: "OS", value: "iOS/And" },
    ],
  },
  {
    id: "senegal-shop",
    title: "Senegal Shop",
    subtitle: "E-commerce Premium",
    description: "Plateforme de vente en ligne multisectorielle avec intégration des paiements locaux (Wave, Orange Money) et logistique intégrée.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Stack", value: "Next.js" },
      { label: "Payment", value: "Local" },
      { label: "UX", value: "Custom" },
      { label: "SEO", value: "99/100" },
    ],
  },
  {
    id: "tagg-erp",
    title: "TÀGG ERP",
    subtitle: "Enterprise Management",
    description: "Système complet de gestion d'entreprise sur mesure pour les PME sénégalaises, couvrant les RH, la comptabilité et les stocks.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    specs: [
      { label: "Type", value: "Saas" },
      { label: "Cloud", value: "AWS" },
      { label: "Security", value: "ISO" },
      { label: "Scale", value: "Global" },
    ],
  },
];

export function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-3 font-mono">
              // nos_realisations
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 font-extrabold leading-tight">
              Des projets qui{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2BA99B] to-[#1A8A7D]">
                parlent d'eux-mêmes.
              </span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Nous avons accompagné de nombreuses entreprises dans leur transformation digitale.
              Chaque carte représente une solution unique, conçue pour répondre à un défi spécifique.
            </p>
            <div className="space-y-4 mb-8 text-gray-500 italic text-sm">
              <p>Survolez les cartes pour les distribuer, cliquez pour zoomer sur un projet.</p>
            </div>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-3 rounded-full text-white font-medium transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2BA99B, #1A8A7D)", boxShadow: "0 10px 20px #2BA99B30" }}
            >
              Lancer votre projet
            </button>
          </motion.div>

          {/* Right: Card Stack */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <CardStack items={projects} />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-[#2BA99B]/05 rounded-full blur-3xl" />
    </section>
  );
}


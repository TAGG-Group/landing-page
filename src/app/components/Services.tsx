import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import {
  Cloud,
  Smartphone,
  Globe,
  Palette,
  Briefcase,
  Code2,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    tag: "SaaS",
    title: "Applications SaaS",
    desc: "Nous concevons des plateformes SaaS robustes et évolutives, hébergées dans le cloud, accessibles partout et taillées pour votre croissance.",
    features: ["Multi-tenant", "Abonnements & billing", "Tableaux de bord", "API intégrée"],
    color: "#2BA99B",
    bg: "from-[#2BA99B]/10 to-transparent",
  },
  {
    icon: Briefcase,
    tag: "Métier",
    title: "Applications Métier",
    desc: "ERP, CRM, GRH, outils de gestion interne — nous digitalisons vos processus pour plus d'efficacité et de productivité.",
    features: ["Sur mesure", "Intégration ERP/CRM", "Workflows automatisés", "Reporting avancé"],
    color: "#E05742",
    bg: "from-[#E05742]/10 to-transparent",
  },
  {
    icon: Globe,
    tag: "Web",
    title: "Sites & Applications Web",
    desc: "Sites vitrine, e-commerce, portails ou applications web complexes — nous créons des expériences en ligne qui convertissent.",
    features: ["Responsive design", "SEO optimisé", "Performance", "CMS intégré"],
    color: "#F5A623",
    bg: "from-[#F5A623]/10 to-transparent",
  },
  {
    icon: Smartphone,
    tag: "Mobile",
    title: "Applications Mobiles",
    desc: "iOS et Android natifs ou cross-platform avec Flutter/React Native — des apps mobiles fluides et intuitives.",
    features: ["iOS & Android", "Flutter / React Native", "Push notifications", "Offline mode"],
    color: "#2BA99B",
    bg: "from-[#2BA99B]/10 to-transparent",
  },
  {
    icon: Palette,
    tag: "Design",
    title: "Design & Identité Visuelle",
    desc: "UI/UX design, branding, charte graphique, prototypage — nous donnons vie à votre identité digitale avec créativité.",
    features: ["UI/UX Design", "Branding", "Figma Prototyping", "Design System"],
    color: "#E05742",
    bg: "from-[#E05742]/10 to-transparent",
  },
  {
    icon: Code2,
    tag: "Logiciels",
    title: "Logiciels sur Mesure",
    desc: "Solutions logicielles desktop ou serveur adaptées à vos besoins spécifiques : automatisation, traitement de données, outils internes.",
    features: ["Architecture solide", "Maintenance incluse", "Documentation", "Tests & QA"],
    color: "#F5A623",
    bg: "from-[#F5A623]/10 to-transparent",
  },
];

export function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 bg-[#060D14] overflow-hidden relative">
      {/* Subtle grid bg */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#2BA99B 1px, transparent 1px), linear-gradient(90deg, #2BA99B 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-3 font-mono">
            // nos_solutions
          </span>
          <h2
            className="text-4xl md:text-5xl text-white mb-5"
            style={{ fontWeight: 800 }}
          >
            Ce que nous{" "}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(135deg, #2BA99B, #7EDED6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              créons pour vous
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto leading-relaxed">
            De l'idée au produit fini — nous maîtrisons toute la chaîne de création digitale
            pour vous livrer des solutions qui font vraiment la différence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative group rounded-2xl border border-white/5 bg-white/[0.03] p-7 overflow-hidden cursor-default transition-all duration-300 hover:border-white/10 hover:-translate-y-1"
            >
              {/* Gradient bg on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
              />

              <div className="relative z-10">
                {/* Tag + Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-mono"
                    style={{
                      backgroundColor: `${service.color}20`,
                      color: service.color,
                    }}
                  >
                    {service.tag}
                  </span>
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${service.color}15` }}
                  >
                    <service.icon size={20} style={{ color: service.color }} />
                  </div>
                </div>

                <h3
                  className="text-white mb-3"
                  style={{ fontWeight: 700, fontSize: "1.1rem" }}
                >
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-5">
                  {service.desc}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                      <span
                        className="w-1 h-1 rounded-full flex-shrink-0"
                        style={{ backgroundColor: service.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  className="flex items-center gap-1.5 text-xs transition-all duration-200"
                  style={{ color: service.color }}
                >
                  En savoir plus
                  <ArrowRight
                    size={13}
                    className={`transition-transform duration-200 ${hovered === i ? "translate-x-1" : ""}`}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

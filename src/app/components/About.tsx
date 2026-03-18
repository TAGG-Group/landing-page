import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Zap, Users, Award } from "lucide-react";
import logoImg from "../../assets/tagg.png";

const teamImage = "https://images.unsplash.com/photo-1553632168-eb4237620881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwdGVhbSUyMGRldmVsb3BlcnMlMjB3b3JraW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc3Mjk3MjM5MHww&ixlib=rb-4.1.0&q=80&w=1080";

const pillars = [
  {
    icon: Zap,
    title: "Agilité & Rapidité",
    desc: "Des cycles de livraison courts, des itérations rapides et une réactivité totale à vos besoins.",
    color: "#2BA99B",
  },
  {
    icon: Users,
    title: "Équipe Experte",
    desc: "Développeurs, designers et chefs de projet passionnés qui font de chaque projet une réussite.",
    color: "#E05742",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    desc: "Code propre, interfaces soignées et solutions robustes — l'excellence à chaque ligne.",
    color: "#F5A623",
  },
];

export function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={teamImage}
                alt="Équipe TÂGG Group"
                className="w-full h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#060D14]/60 via-transparent to-transparent" />

              {/* Slogan overlay */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white/90 text-sm italic font-light leading-snug">
                  "TÂGG – Votre nid digital,{" "}
                  <span className="text-[#7EDED6]">là où les idées prennent leur envol !</span>"
                </p>
              </div>
            </div>

            {/* Floating logo badge */}
            <motion.div
              initial={{ scale: 0, rotate: -10 }}
              animate={inView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
              className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 flex flex-col items-center"
            >
              <img src={logoImg} alt="TÂGG" className="h-12 w-auto mb-1" />
              <p className="text-xs text-gray-400 text-center mt-1">Since 2020</p>
            </motion.div>

            {/* Accent */}
            <div className="absolute -top-5 -left-5 w-20 h-20 rounded-2xl border-2 border-[#2BA99B]/25 bg-[#2BA99B]/05 -z-10" />
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-3 font-mono">
                // qui_sommes_nous
              </span>
              <h2
                className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight"
                style={{ fontWeight: 800 }}
              >
                Bien plus qu'une agence —{" "}
                <span
                  className="text-transparent"
                  style={{
                    background: "linear-gradient(135deg, #2BA99B, #1A8A7D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  votre partenaire digital.
                </span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                TÂGG Group est une entreprise informatique tunisienne spécialisée dans la création
                de solutions digitales sur mesure. Nous transformons vos idées les plus ambitieuses
                en produits digitaux concrets, performants et évolutifs.
              </p>
              <p className="text-gray-500 leading-relaxed mb-10">
                Applications métier, plateformes SaaS, sites web, applications mobiles,
                logiciels sur mesure ou encore identité visuelle — notre équipe couvre
                l'intégralité du spectre digital pour faire décoller votre projet.
              </p>
            </motion.div>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                  className="group p-4 rounded-2xl border hover:shadow-md transition-all duration-300"
                  style={{ borderColor: `${pillar.color}25`, backgroundColor: `${pillar.color}05` }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <pillar.icon size={20} style={{ color: pillar.color }} />
                  </div>
                  <h4 className="text-gray-900 mb-1 text-sm" style={{ fontWeight: 600 }}>
                    {pillar.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

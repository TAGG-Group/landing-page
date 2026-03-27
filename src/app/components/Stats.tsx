import { motion, useInView, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import { CheckCircle, Clock, Star, Layers } from "lucide-react";

const stats = [
  { value: 120, suffix: "+", label: "Projets livrés", icon: CheckCircle, color: "#2BA99B" },
  { value: 48, suffix: "h", label: "Délai moyen de démarrage", icon: Clock, color: "#E05742" },
  { value: 98, suffix: "%", label: "Clients satisfaits", icon: Star, color: "#F5A623" },
  { value: 6, suffix: "", label: "Expertises digitales", icon: Layers, color: "#2BA99B" },
];

function AnimatedNumber({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 55, damping: 18 });
  const display = useTransform(spring, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) motionVal.set(value);
  }, [inView, motionVal, value]);

  return (
    <span className="tabular-nums">
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

const processSteps = [
  { num: "01", title: "Brief & Analyse", desc: "Nous étudions vos besoins et cadrons le projet ensemble.", color: "#2BA99B" },
  { num: "02", title: "Design & Prototypage", desc: "Maquettes UI/UX validées avant le moindre bout de code.", color: "#E05742" },
  { num: "03", title: "Développement", desc: "Notre équipe code, teste et itère en toute agilité.", color: "#F5A623" },
  { num: "04", title: "Livraison & Support", desc: "Déploiement, formation et suivi post-lancement inclus.", color: "#2BA99B" },
];

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stats" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-3 font-mono">
            // notre_impact
          </span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4" style={{ fontWeight: 800 }}>
            Des chiffres qui{" "}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(135deg, #2BA99B, #1A8A7D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              parlent d'eux-mêmes
            </span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            La confiance de nos clients, mesurée en résultats concrets.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative group rounded-2xl border border-gray-100 bg-white p-7 text-center shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
            >
              {/* bg glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
                style={{ background: `radial-gradient(circle at center, ${stat.color}08, transparent 70%)` }}
              />
              <div className="relative z-10">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${stat.color}12` }}
                >
                  <stat.icon size={22} style={{ color: stat.color }} />
                </div>
                <p
                  className="text-4xl text-gray-900 mb-1"
                  style={{ fontWeight: 800, color: stat.color }}
                >
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} inView={inView} />
                </p>
                <p className="text-gray-500 text-sm leading-snug">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="rounded-3xl border border-gray-100 bg-[#F8FAFA] p-10"
        >
          <div className="text-center mb-10">
            <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-2 font-mono">
              // notre_méthode
            </span>
            <h3 className="text-2xl text-gray-900" style={{ fontWeight: 700 }}>
              Comment on travaille
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
                className="relative"
              >
                {/* Connector line */}
                {i < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-px border-t border-dashed border-gray-200 z-0" style={{ width: "calc(100% - 24px)", left: "calc(100% - 0px)" }} />
                )}
                <div className="relative z-10">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-white"
                    style={{ backgroundColor: step.color, fontWeight: 700, fontSize: "0.9rem" }}
                  >
                    {step.num}
                  </div>
                  <h4 className="text-gray-900 mb-2 text-sm" style={{ fontWeight: 600 }}>
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}


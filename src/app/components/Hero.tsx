import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Code2, Smartphone, Globe } from "lucide-react";
import { IntegrationDiagram } from "./IntegrationDiagram";

const heroImage = "https://images.unsplash.com/photo-1760548425425-e42e77fa38f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMGRldmVsb3BtZW50JTIwY29kaW5nJTIwZGFyayUyMG1vZGVybnxlbnwxfHx8fDE3NzI5NzIzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080";

const floatingBadges = [
  { icon: Code2, label: "Développement", color: "#2BA99B", delay: 0 },
  { icon: Smartphone, label: "Mobile", color: "#E05742", delay: 0.3 },
  { icon: Globe, label: "Web & SaaS", color: "#F5A623", delay: 0.6 },
];

export function Hero() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060D14]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="TÀGG Group tech" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#060D14]/95 via-[#060D14]/80 to-[#0D3D37]/70" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#2BA99B 1px, transparent 1px), linear-gradient(90deg, #2BA99B 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.12, 0.22, 0.12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{ background: "radial-gradient(circle, #2BA99B40, transparent 70%)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.08, 0.16, 0.08] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] rounded-full"
          style={{ background: "radial-gradient(circle, #E0574240, transparent 70%)" }}
        />
      </div>

      {/* Floating tech tags */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingBadges.map(({ icon: Icon, label, color, delay }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 + delay, duration: 0.6 }}
            className="absolute hidden md:flex items-center gap-2 px-4 py-2 rounded-full border backdrop-blur-sm"
            style={{
              borderColor: `${color}40`,
              backgroundColor: `${color}10`,
              top: `${28 + i * 18}%`,
              right: `${2 + (i % 2) * 2}%`,
            }}
          >
            <Icon size={14} style={{ color }} />
            <span className="text-white/70 text-xs">{label}</span>
          </motion.div>
        ))}
      </div>

      {/* Animated code lines decorations */}
      <div className="absolute left-6 top-1/3 hidden lg:flex flex-col gap-2 opacity-20 pointer-events-none font-mono text-xs text-[#2BA99B]">
        {["const tagg = new Vision();", "tagg.build('votre_idée');", "tagg.deploy('le_monde');"].map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.5 + i * 0.3, duration: 0.5 }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex items-center mt-20 lg:mt-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">

          {/* Left: Text Content */}
          <div className="text-center lg:text-left flex flex-col justify-between lg:items-start order-2 lg:order-1 h-[450px]">
            <div className="flex flex-col items-center lg:items-start">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 border border-[#2BA99B]/30 bg-[#2BA99B]/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#2BA99B] animate-pulse" />
                <span className="text-[#7EDED6] text-xs md:text-sm tracking-widest uppercase font-mono">
                  Votre Nid Digital
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 leading-[1.4]"
                style={{ fontWeight: 800, letterSpacing: "-0.01em" }}
              >
                <span style={{
                  WebkitTextStroke: "1px #2BA99B",
                  background: "linear-gradient(135deg, #2BA99B, #7EDED6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}>Propulsez votre</span>{" "}
                <span
                  className="text-transparent"
                  style={{
                    WebkitTextStroke: "1px #2BA99B",
                    background: "linear-gradient(135deg, #2BA99B, #7EDED6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  vision
                </span>
                <br />
                <span className="text-[#F5A623]">vers l'excellence</span>{" "}
                <span className="text-[#F5A623]">digitale.</span>
              </motion.h1>
            </div>
          </div>

          {/* Right: Integration Visual */}
          <div className="lg:flex justify-center lg:justify-end order-1 lg:order-2 overflow-visible">
            <IntegrationDiagram />
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 hover:text-[#2BA99B] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={26} />
        </motion.div>
      </motion.button>
      {/* Bottom Tech Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-4 left-0 right-0 border-t border-white/5 bg-white/[0.02] backdrop-blur-sm hidden md:block"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="text-[10px] font-mono text-white/20 uppercase tracking-[0.2em] whitespace-nowrap mr-6">
              Stack de Déploiement :
            </span>
            <div className="flex items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {["Next.js", "OpenAI", "AWS", "Docker", "Tailwind", "PostgreSQL", "Flutter"].map((brand) => (
                <span key={brand} className="text-white text-[11px] font-mono tracking-tighter whitespace-nowrap">
                  {brand}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-5 h-5 rounded-full border border-[#060D14] bg-[#2BA99B]/20" />
              ))}
            </div>
            <span className="text-[10px] font-mono text-white/30">
              +50 Projets déploies
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


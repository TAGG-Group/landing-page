import { motion } from "motion/react";
import { ArrowRight, ChevronDown, Code2, Smartphone, Globe } from "lucide-react";

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
        <img src={heroImage} alt="TÂGG Group tech" className="w-full h-full object-cover opacity-30" />
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
              right: `${6 + (i % 2) * 4}%`,
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
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="inline-flex items-center gap-2 border border-[#2BA99B]/30 bg-[#2BA99B]/10 backdrop-blur-sm rounded-full px-5 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#2BA99B] animate-pulse" />
          <span className="text-[#7EDED6] text-sm tracking-widest uppercase font-mono">
            Entreprise Tech & Digital
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="text-5xl md:text-7xl text-white mb-4 leading-tight"
          style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
        >
          Votre nid{" "}
          <span
            className="text-transparent"
            style={{
              WebkitTextStroke: "1px #2BA99B",
              background: "linear-gradient(135deg, #2BA99B, #7EDED6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            digital
          </span>
          ,{" "}
          <br className="hidden md:block" />
          là où les idées{" "}
          <span className="text-[#F5A623]">prennent leur envol.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          De la conception à la mise en production — TÂGG Group transforme vos idées
          en solutions digitales performantes : SaaS, applications métier, web, mobile, design & logiciels.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            className="group flex items-center gap-2 px-8 py-4 rounded-full text-white transition-all duration-300 shadow-lg"
            style={{ background: "linear-gradient(135deg, #2BA99B, #1A8A7D)", boxShadow: "0 0 30px #2BA99B40" }}
          >
            Démarrer un projet
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollTo("services")}
            className="flex items-center gap-2 px-8 py-4 border border-white/20 hover:border-[#2BA99B]/60 backdrop-blur-sm text-white/80 hover:text-white rounded-full transition-all duration-300"
          >
            Explorer nos solutions
          </button>
        </motion.div>

        {/* Tech stack pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-3"
        >
          {["SaaS", "React", "Flutter", "Node.js", "UI/UX", "PWA", "API REST", "Cloud"].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded-md border border-white/10 bg-white/5 text-white/40 text-xs font-mono"
            >
              {tech}
            </span>
          ))}
        </motion.div>
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
    </section>
  );
}

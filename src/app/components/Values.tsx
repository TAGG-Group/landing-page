import { motion, useInView } from "motion/react";
import { useRef } from "react";

const designImg = "https://images.unsplash.com/photo-1532623034127-3d92b01fb3c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBjcmVhdGl2ZSUyMHdvcmtzcGFjZSUyMGRpZ2l0YWx8ZW58MXx8fHwxNzcyOTcyMzg3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const uxImg = "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwcHJvZHVjdCUyMGRlc2lnbiUyMHV4JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3Mjk3MjM5MXww&ixlib=rb-4.1.0&q=80&w=1080";
const mobileImg = "https://images.unsplash.com/photo-1762341119237-98df67c9c3c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB1aSUyMGRlc2lnbiUyMHNtYXJ0cGhvbmV8ZW58MXx8fHwxNzcyODkzNjUyfDA&ixlib=rb-4.1.0&q=80&w=1080";

const techs = [
  { name: "React / Next.js", pct: 95, color: "#2BA99B" },
  { name: "Flutter / React Native", pct: 88, color: "#E05742" },
  { name: "Node.js / Laravel", pct: 90, color: "#F5A623" },
  { name: "UI/UX Design (Figma)", pct: 92, color: "#2BA99B" },
];

const badges = [
  { label: "120+ projets livrés", color: "#2BA99B" },
  { label: "Agile & Scrum", color: "#E05742" },
  { label: "Code open source", color: "#F5A623" },
];

export function Values() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#F8FAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-3 font-mono">
              // notre_stack
            </span>
            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6 leading-tight" style={{ fontWeight: 800 }}>
              Les technologies{" "}
              <span
                className="text-transparent"
                style={{
                  background: "linear-gradient(135deg, #2BA99B, #1A8A7D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                qui font voler vos projets
              </span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Nous utilisons les technologies les plus modernes et éprouvées pour construire
              des solutions digitales durables, maintenables et performantes.
            </p>

            {/* Tech bars */}
            <div className="space-y-5 mb-10">
              {techs.map((tech, i) => (
                <div key={tech.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>
                      {tech.name}
                    </span>
                    <span className="text-sm font-mono" style={{ color: tech.color }}>
                      {tech.pct}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${tech.pct}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.2 + i * 0.15, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: tech.color }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="px-4 py-2 rounded-full text-sm border"
                  style={{
                    borderColor: `${b.color}30`,
                    backgroundColor: `${b.color}10`,
                    color: b.color,
                  }}
                >
                  {b.label}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: collage */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-52">
                  <img src={designImg} alt="Design" className="w-full h-full object-cover" />
                </div>
                <div
                  className="rounded-2xl p-6 flex flex-col justify-center"
                  style={{ background: "linear-gradient(135deg, #060D14, #0D3D37)" }}
                >
                  <p className="text-white text-sm font-mono mb-2 text-[#7EDED6]">{"<TÂGG />"}</p>
                  <p className="text-white/60 text-xs leading-relaxed">
                    Votre nid digital, là où les idées prennent leur envol.
                  </p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div
                  className="rounded-2xl p-6 flex flex-col justify-center"
                  style={{ background: "linear-gradient(135deg, #E05742, #B03020)" }}
                >
                  <p className="text-white text-2xl mb-1" style={{ fontWeight: 800 }}>6+</p>
                  <p className="text-white/80 text-sm">Expertises digitales</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-52">
                  <img src={mobileImg} alt="Mobile app" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

            {/* Floating pill */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-white rounded-2xl shadow-xl px-6 py-3 flex items-center gap-3 border border-gray-100 whitespace-nowrap"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#2BA99B] animate-pulse" />
              <span className="text-gray-700 text-sm" style={{ fontWeight: 500 }}>
                Votre idée → Votre produit digital ✦
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

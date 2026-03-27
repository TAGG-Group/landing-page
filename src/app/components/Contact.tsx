import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "Email", value: "it@tagg-group.com", color: "#2BA99B" },
  { icon: Phone, label: "Téléphone", value: "+221 76 469 19 60 / +221 78 010 54 26", color: "#E05742" },
  { icon: MapPin, label: "Localisation", value: "Sénégal & International", color: "#F5A623" },
];

const services = [
  "Application SaaS", "Application Métier", "Site Web", "Application Mobile",
  "Design / Branding", "Logiciel sur Mesure", "Autre",
];

export function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 5000);
    setForm({ name: "", email: "", message: "" });
    setSelected(null);
  };

  return (
    <section id="contact" className="py-24 bg-[#060D14] overflow-hidden relative">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#2BA99B 1px, transparent 1px), linear-gradient(90deg, #2BA99B 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />
      {/* Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #2BA99B, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#2BA99B] text-sm tracking-widest uppercase mb-3 font-mono">
            // démarrons_ensemble
          </span>
          <h2 className="text-4xl md:text-5xl text-white mb-5" style={{ fontWeight: 800 }}>
            Votre projet mérite{" "}
            <span
              className="text-transparent"
              style={{
                background: "linear-gradient(135deg, #2BA99B, #7EDED6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              de prendre son envol
            </span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            Partagez-nous votre idée — nous la transformons en réalité digitale.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-4 bg-white/[0.04] border border-white/[0.06] p-5 rounded-2xl"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${info.color}20` }}
                >
                  <info.icon size={18} style={{ color: info.color }} />
                </div>
                <div>
                  <p className="text-xs text-white/30 uppercase tracking-wide mb-1">{info.label}</p>
                  <p className="text-white/80" style={{ fontWeight: 500 }}>{info.value}</p>
                </div>
              </motion.div>
            ))}

            {/* CTA block */}
            <div
              className="mt-2 rounded-2xl p-7 flex flex-col"
              style={{ background: "linear-gradient(135deg, #0D3D37, #2BA99B30)" }}
            >
              <MessageSquare size={28} className="text-[#7EDED6] mb-3" />
              <h4 className="text-white mb-2" style={{ fontWeight: 600 }}>
                Réponse en moins de 24h
              </h4>
              <p className="text-white/50 text-sm leading-relaxed mb-4">
                Notre équipe s'engage à vous répondre rapidement et à vous accompagner
                tout au long de votre projet digital.
              </p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2BA99B] animate-pulse" />
                <span className="text-[#7EDED6] text-sm">Disponible 7j/7</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 bg-white/[0.03] border border-white/[0.06] rounded-3xl p-8 md:p-10"
          >
            {sent ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="flex flex-col items-center justify-center h-full py-14 text-center"
              >
                <CheckCircle size={56} className="text-[#2BA99B] mb-5" />
                <h3 className="text-white text-xl mb-2" style={{ fontWeight: 700 }}>
                  Message envoyé !
                </h3>
                <p className="text-white/50 max-w-xs">
                  Merci ! Notre équipe vous recontactera sous 24h pour parler de votre projet.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Service selector */}
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-wide mb-3">
                    Quel service vous intéresse ?
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelected(s === selected ? null : s)}
                        className="px-3 py-1.5 rounded-full text-xs border transition-all duration-200"
                        style={
                          selected === s
                            ? { backgroundColor: "#2BA99B", borderColor: "#2BA99B", color: "#fff" }
                            : { backgroundColor: "transparent", borderColor: "#ffffff20", color: "#ffffff60" }
                        }
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wide mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] text-white placeholder-white/25 focus:outline-none focus:border-[#2BA99B]/60 focus:ring-1 focus:ring-[#2BA99B]/30 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-wide mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="votre@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] text-white placeholder-white/25 focus:outline-none focus:border-[#2BA99B]/60 focus:ring-1 focus:ring-[#2BA99B]/30 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-white/40 uppercase tracking-wide mb-2">
                    Décrivez votre projet *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Parlez-nous de votre idée, vos besoins, votre délai..."
                    className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.05] text-white placeholder-white/25 focus:outline-none focus:border-[#2BA99B]/60 focus:ring-1 focus:ring-[#2BA99B]/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-white transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, #2BA99B, #1A8A7D)",
                    boxShadow: "0 0 30px #2BA99B30",
                  }}
                >
                  Envoyer ma demande
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


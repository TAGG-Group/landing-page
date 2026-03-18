import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "../../assets/tagg.png";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Processus", href: "#stats" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 flex justify-center transition-all duration-500 ${scrolled ? "top-6 px-4" : "top-0 px-0"
          }`}
      >
        <div className={`transition-all duration-500 flex items-center justify-center ${scrolled
          ? "max-w-7xl w-full px-6 py-3 rounded-full bg-[#060D14]/90 backdrop-blur-md border border-white/[0.08] shadow-2xl shadow-black/40"
          : "w-full bg-transparent border-b border-transparent py-5"
          }`}
        >
          <div className="max-w-7xl w-full flex items-center justify-between px-6">
            {/* Logo */}
            {/* <button onClick={() => scrollTo("#hero")} className="flex items-center gap-2"> */}
            <img
              src={logoImg}
              alt="TÂGG Group"
              className={`h-20 w-auto transition-all duration-300 relative ${scrolled ? "brightness-0 invert" : ""}`}
            />
            {/* </button> */}

            {/* Desktop Links */}
            <div className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`relative text-sm tracking-wide transition-colors duration-200 font-mono ${activeSection === link.href.replace("#", "")
                    ? "text-[#2BA99B]"
                    : "text-white/60 hover:text-white"
                    }`}
                >
                  {link.label}
                  {activeSection === link.href.replace("#", "") && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-[#2BA99B] rounded-full"
                    />
                  )}
                </button>
              ))}
              <button
                onClick={() => scrollTo("#contact")}
                className="px-5 py-2 rounded-full text-white text-sm transition-all duration-200 hover:scale-105"
                style={{ background: "linear-gradient(135deg, #2BA99B, #1A8A7D)", boxShadow: "0 0 20px #2BA99B30" }}
              >
                Démarrer un projet
              </button>
            </div>

            {/* Mobile button */}
            <button
              className="md:hidden text-white/70 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className={`fixed left-1/2 -translate-x-1/2 w-[90%] max-w-sm z-40 bg-[#060D14]/98 backdrop-blur-xl border border-white/[0.08] rounded-3xl px-6 py-6 flex flex-col gap-4 md:hidden shadow-2xl shadow-black/50 transition-all duration-500 ${scrolled ? "top-24" : "top-20"
              }`}
          >
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className={`text-left py-2 text-sm font-mono transition-colors ${activeSection === link.href.replace("#", "")
                  ? "text-[#2BA99B]"
                  : "text-white/60"
                  }`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              className="mt-2 px-5 py-3 rounded-full text-white text-sm text-center"
              style={{ background: "linear-gradient(135deg, #2BA99B, #1A8A7D)" }}
            >
              Démarrer un projet
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

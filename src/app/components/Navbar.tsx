import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import logoImg from "@/assets/tagg.png";

const navLinks = [
  { label: "Accueil", href: "#hero" },
  { label: "À propos", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projets", href: "#projects" },
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
        transition={{ duration: 0.6, ease: "easeOut" }} className={`fixed left-0 right-0 z-[200] flex justify-center transition-all duration-500 ${scrolled
          ? "md:top-6 md:px-4 top-0 px-0"
          : "top-0 px-0"
          }`}
      >
        <div className={`transition-all duration-500 flex items-center justify-center w-full ${scrolled
          ? "md:max-w-7xl md:rounded-full bg-[#060D14]/95 md:bg-[#060D14]/90 backdrop-blur-md border-b md:border border-white/[0.08] shadow-2xl py-3"
          : "bg-transparent border-b border-transparent py-5"
          }`}
        >
          <div className="max-w-7xl w-full flex items-center justify-between px-6">
            {/* Logo */}
            <button onClick={() => scrollTo("#hero")} className="flex items-center relative">
              <img
                src={logoImg}
                alt="TÀGG Group"
                className={`h-12 md:h-12 w-auto scale-[2] md:scale-[3] origin-left transition-all duration-300 ${scrolled ? "brightness-0 invert" : ""}`}
              />
            </button>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8">
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
            </div>
            <button
              onClick={() => scrollTo("#contact")}
              className="hidden md:block px-5 py-2 rounded-full text-white text-sm transition-all duration-200 hover:scale-105"
              style={{ background: "linear-gradient(135deg, #2BA99B, #1A8A7D)", boxShadow: "0 0 20px #2BA99B30" }}
            >
              Démarrer un projet
            </button>

            {/* Mobile button */}
            <button
              className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
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
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-[72px] md:top-24 left-0 right-0 z-[190] bg-[#060D14]/98 backdrop-blur-xl border-b border-white/[0.08] overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-1 p-6">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`text-left py-4 px-4 text-lg font-mono transition-colors rounded-xl ${activeSection === link.href.replace("#", "")
                    ? "text-[#2BA99B] bg-[#2BA99B]/10"
                    : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="mt-4 pt-4 border-t border-white/5">
                <button
                  onClick={() => scrollTo("#contact")}
                  className="w-full py-4 rounded-xl text-white text-lg font-medium text-center"
                  style={{ background: "linear-gradient(135deg, #2BA99B, #1A8A7D)" }}
                >
                  Démarrer un projet
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


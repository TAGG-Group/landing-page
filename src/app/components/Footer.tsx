import { Linkedin, Twitter, Facebook, Instagram, ArrowUp, Code2 } from "lucide-react";
import logoImg from "../../assets/tagg.png";

const footerLinks = {
  "Solutions": [
    "Applications SaaS",
    "Applications Métier",
    "Sites Web",
    "Applications Mobiles",
    "Design & Branding",
    "Logiciels sur Mesure",
  ],
  "Entreprise": [
    "À propos",
    "Notre équipe",
    "Nos projets",
    "Carrières",
    "Contact",
  ],
  "Légal": [
    "Mentions légales",
    "Politique de confidentialité",
    "CGU",
  ],
};

const socials = [
  { icon: Linkedin, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Facebook, href: "#" },
  { icon: Instagram, href: "#" },
];

export function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#030A0D] text-white">
      {/* Top accent bar */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, #2BA99B, #E05742, #F5A623, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src={logoImg} alt="TÂGG Group" className="h-12 w-auto mb-5 brightness-0 invert" />
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-4">
              Votre nid digital, là où les idées prennent leur envol.
            </p>
            <p className="text-white/30 text-xs font-mono mb-6">
              SaaS · Métier · Web · Mobile · Design · Logiciels
            </p>

            {/* Tech badge */}
            <div className="inline-flex items-center gap-2 border border-[#2BA99B]/20 bg-[#2BA99B]/05 rounded-full px-4 py-2 mb-6">
              <Code2 size={14} className="text-[#2BA99B]" />
              <span className="text-[#2BA99B] text-xs font-mono">Made with passion in Tunisia</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-full border border-white/10 hover:border-[#2BA99B] hover:bg-[#2BA99B]/10 flex items-center justify-center transition-all duration-200 text-white/40 hover:text-[#2BA99B]"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h5 className="text-white/80 text-sm mb-4" style={{ fontWeight: 600 }}>
                {title}
              </h5>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/35 hover:text-[#7EDED6] text-sm transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-sm">
            © 2026 TÂGG Group. Tous droits réservés. —{" "}
            <span className="text-[#2BA99B]/60">Votre nid digital</span>
          </p>
          <button
            onClick={scrollToTop}
            className="w-9 h-9 rounded-full border border-white/10 hover:border-[#2BA99B] hover:bg-[#2BA99B]/10 flex items-center justify-center transition-all duration-200 text-white/30 hover:text-[#2BA99B]"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}

"use client"

import { Sparkles, Globe, Smartphone, Monitor, Cloud, Code2 } from "lucide-react";
import { useState, useEffect } from "react";
import logoImg from "../../assets/tagg.png";

export function IntegrationDiagram() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  const icons = [
    { id: 1, y: 80, x: 140, delay: 0, icon: <Sparkles className="w-5 h-5 text-[#7EDED6]" />, label: "AI" },
    { id: 2, y: 160, x: 210, delay: 0.4, icon: <Globe className="w-5 h-5 text-blue-400" />, label: "Web" },
    { id: 3, y: 240, x: 280, delay: 0.8, icon: <Smartphone className="w-5 h-5 text-orange-400" />, label: "Mobile" },
    { id: 4, y: 320, x: 280, delay: 1.2, icon: <Monitor className="w-5 h-5 text-purple-400" />, label: "SaaS" },
    { id: 5, y: 400, x: 210, delay: 1.6, icon: <Cloud className="w-5 h-5 text-sky-400" />, label: "Cloud" },
    { id: 6, y: 480, x: 140, delay: 2, icon: <Code2 className="w-5 h-5 text-emerald-400" />, label: "Software" },
  ]

  const hubX = 520
  const hubY = 280

  return (
    <div className="flex items-center justify-center p-0 lg:p-8 scale-[0.48] sm:scale-[0.65] md:scale-75 lg:scale-100 transition-all duration-500 origin-center lg:origin-right -my-32 sm:-my-20 md:my-0">
      <style>{`
        @keyframes moveAlongPath {
          0% { offset-distance: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { offset-distance: 100%; opacity: 0; }
        }
        
        @keyframes glowPulse {
          0%, 100% { filter: drop-shadow(0 0 2px #2BA99B) drop-shadow(0 0 4px #2BA99B); }
          50% { filter: drop-shadow(0 0 6px #2BA99B) drop-shadow(0 0 12px #2BA99B); }
        }
        
        @keyframes hubGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(43, 169, 155, 0.2); transform: scale(1) translateY(-50%); }
          50% { box-shadow: 0 0 40px rgba(43, 169, 155, 0.4); transform: scale(1.05) translateY(-50%); }
        }
        
        .hub-container {
          animation: hubGlow 4s ease-in-out infinite;
        }
        
        .particle {
          animation: moveAlongPath 3s ease-in-out infinite, glowPulse 3s ease-in-out infinite;
        }
      `}</style>

      <div className="relative w-[600px] h-[560px]">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 560">
          <defs>
            <radialGradient id="particleGradient">
              <stop offset="0%" stopColor="#2BA99B" />
              <stop offset="100%" stopColor="#2BA99B" stopOpacity="0" />
            </radialGradient>
          </defs>

          {icons.map((icon) => {
            const startX = icon.x + 24
            const startY = icon.y
            const endX = hubX - 30
            const endY = hubY

            const controlX1 = startX + (endX - startX) * 0.5
            const controlY1 = startY
            const controlX2 = startX + (endX - startX) * 0.5
            const controlY2 = endY

            const pathD = `M ${startX} ${startY} C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${endX} ${endY}`

            return (
              <g key={icon.id}>
                <path
                  d={pathD}
                  fill="none"
                  stroke="rgba(255,255,255,0.05)"
                  strokeWidth="1"
                />

                <circle r={isMobile ? "4" : "2"} fill="#2BA99B" className="particle" style={{
                  offsetPath: `path('${pathD}')`,
                  animationDelay: `${icon.delay}s`,
                }} />

                <circle r={isMobile ? "8" : "5"} fill="url(#particleGradient)" className="particle" style={{
                  offsetPath: `path('${pathD}')`,
                  animationDelay: `${icon.delay}s`,
                  opacity: 0.2,
                }} />
              </g>
            )
          })}
        </svg>

        {icons.map((icon) => (
          <div
            key={icon.id}
            className="absolute transition-all hover:scale-110 duration-300 pointer-events-auto group"
            style={{
              left: icon.x - 24,
              top: icon.y - 24,
            }}
          >
            {/* Label to the left of the bubble */}
            <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-100 lg:opacity-60 lg:group-hover:opacity-100 transition-opacity">
              <span className={`font-mono font-bold text-white uppercase tracking-widest whitespace-nowrap ${isMobile ? 'text-[16px]' : 'text-[10px]'}`}>
                {icon.label}
              </span>
            </div>

            <div
              className="w-12 h-12 bg-[#0B151F]/40 backdrop-blur-xl rounded-full shadow-2xl border border-white/10 flex items-center justify-center shrink-0"
            >
              <div className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">{icon.icon}</div>
            </div>
          </div>
        ))}

        <div
          className="absolute w-20 h-20 bg-[#0B151F] border border-white/10 rounded-3xl flex items-center justify-center hub-container shadow-[0_0_50px_-12px_rgba(43,169,155,0.5)]"
          style={{
            left: hubX - 40,
            top: hubY,
            transform: 'translateY(-50%)'
          }}
        >
          <img src={logoImg} alt="TÀGG Logo" className="w-12 h-12 object-contain brightness-0 invert opacity-90" />
        </div>
      </div>
    </div>
  )
}


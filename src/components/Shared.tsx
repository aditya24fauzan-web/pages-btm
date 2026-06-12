import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Logo({ className = "", light = false }: { className?: string; light?: boolean }) {
  const textColor = light ? "text-white" : "text-brand-navy";
  const fillColor = light ? "#ffffff" : "#050a1f";
  
  return (
    <a href="#home" className={`flex items-center gap-3 relative z-50 ${className}`}>
      {/* Jika logo.png sudah diunggah, akan tampil di sini. */}
      {/* Menggunakan filter brightness-0 invert jika butuh logo warna putih (light=true) */}
      <img 
        src="/logo.png" 
        alt="Bara Teknik Mandiri" 
        className={`h-12 md:h-16 lg:h-20 object-contain ${
    light ? "brightness-0 invert" : ""
  }`}
        onError={(e) => {
          // Fallback ke SVG bawaan jika gambar logo.png belum ada
          e.currentTarget.style.display = 'none';
          const nextSibling = e.currentTarget.nextElementSibling as HTMLElement;
          if (nextSibling) nextSibling.style.display = 'flex';
        }}
      />
      
      {/* Fallback SVG & Teks jika logo.png tidak ditemukan */}
      <div className="hidden items-center gap-3" style={{ display: 'none' }}>
        <svg width="36" height="36" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 80 L50 20 L65 50 L35 50 Z" fill={fillColor} />
          <path d="M55 80 L70 50 L85 80 Z" fill={fillColor} />
          <path d="M20 80 L85 80 L85 90 L20 90 Z" fill={fillColor} />
        </svg>
        <div className="flex flex-col">
          <span className={`font-sans font-bold text-sm leading-none tracking-widest ${textColor}`}>BARA TEKNIK</span>
          <span className={`font-sans font-bold text-sm leading-none tracking-widest ${textColor} mt-1`}>MANDIRI</span>
        </div>
      </div>
    </a>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Tentang Kami", href: "#about" },
    { name: "Visi Misi", href: "#values" },
    { name: "Layanan", href: "#services" },
    { name: "Traction", href: "#stats" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-6"}`}>
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Logo />
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-semibold text-brand-navy/80 hover:text-brand-blue transition-colors uppercase tracking-wider">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="px-6 py-2.5 bg-brand-navy hover:bg-brand-blue text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 text-sm uppercase tracking-wider">
            Hubungi Kami
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button className="md:hidden relative z-50 p-2 text-brand-navy" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full bg-white shadow-xl pt-24 pb-8 px-6 md:hidden flex flex-col gap-6"
          >
            {links.map((link) => (
              <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-brand-navy border-b border-gray-100 pb-2 uppercase tracking-wide">
                {link.name}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-center mt-4 px-6 py-3 bg-brand-blue text-white rounded-lg font-bold uppercase tracking-wide">
              Hubungi Kami
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

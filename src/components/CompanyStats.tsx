import { motion } from "motion/react";
import { Logo } from "./Shared";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";

export function CompanyStats() {
  const stats = [
    { stat: "170+", label: "PROYEK SELESAI" },
    { stat: "20+", label: "KLIEN AKTIF" },
    { stat: "10+", label: "KOTA TERLAYANI" },
    { stat: "97%", label: "TINGKAT KEPUASAN" },
    { stat: "24/7", label: "DUKUNGAN TEKNIS" },
    { stat: "9+", label: "TAHUN PENGALAMAN" }
  ];

  return (
    <>
      {/* Market Size & Traction Section */}
      <section id="stats" className="py-24 bg-brand-gray relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">Pertumbuhan Berkelanjutan</h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-6 max-w-xl">
                Indonesia sedang memasuki fase pertumbuhan signifikan pada sektor fasilitas kesehatan, farmasi, dan laboratorium. Kebutuhan akan lingkungan terkendali yang aman dan sesuai regulasi terus meningkat tajam.
              </p>
              <p className="text-brand-navy font-semibold text-lg max-w-xl border-l-4 border-brand-blue pl-6 py-2">
                Kami hadir untuk membantu memenuhi tata kelola udara & ruang steril di seluruh penjuru negeri mengikuti standar regulasi Indonesia maupun WHO.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-[2rem] p-10 shadow-xl border border-gray-100 relative overflow-hidden"
            >
              <h3 className="font-bold text-2xl text-brand-navy mb-8 flex items-center gap-3">
                <MapPin className="text-brand-blue" /> Cakupan Seluruh Indonesia
              </h3>
              
              {/* Abstract decorative map area */}
              <div className="w-full flex justify-center py-10 opacity-80">
                 <svg viewBox="0 0 500 200" className="w-full h-auto drop-shadow-md" fill="none" stroke="currentColor">
                   <path d="M50,75 Q75,50 100,100 T150,125" stroke="#050a1f" strokeWidth="8" strokeLinecap="round" />
                   <path d="M140,125 Q160,75 200,100 T225,150" stroke="#2244ff" strokeWidth="8" strokeLinecap="round" />
                   <path d="M210,140 Q250,100 275,110 T300,90" stroke="#40a0ff" strokeWidth="10" strokeLinecap="round" />
                   <path d="M300,75 Q325,100 350,50 T400,75 T450,100" stroke="#eab308" strokeWidth="10" strokeLinecap="round" />
                   
                   <circle cx="75" cy="110" r="4" fill="#050a1f" className="animate-pulse" />
                   <circle cx="125" cy="150" r="5" fill="#2244ff" className="animate-ping" />
                   <circle cx="250" cy="160" r="4" fill="#40a0ff" className="animate-pulse" />
                 </svg>
              </div>
            </motion.div>
          </div>

          {/* Traction Stats Grid */}
          <div className="mb-8">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-serif font-bold text-center text-brand-navy mb-16"
            >
              Kepercayaan yang <span className="italic text-brand-blue">Terbangun</span>
            </motion.h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
              {stats.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl text-center shadow-sm border border-gray-100 hover:shadow-xl transition-shadow group"
                >
                  <div className="text-4xl md:text-5xl font-black text-brand-navy mb-4 group-hover:scale-110 transition-transform duration-300">
                    {item.stat}
                  </div>
                  <div className="text-sm font-bold tracking-widest text-brand-lightblue uppercase">
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer & Contact Section */}
      <footer id="contact" className="bg-brand-navy text-white pt-24 pb-12 relative overflow-hidden">
        {/* Background architecture img masked */}
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
          <img src="https://images.unsplash.com/photo-1541882312674-1296bd84a441?auto=format&fit=crop&q=80" alt="Architecture" className="w-full h-full object-cover grayscale" />
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 border-b border-white/10 pb-16 mb-12">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-8 pl-2 sm:pl-0 transform scale-125 origin-left">
                <Logo light={true} />
              </div>
              <p className="text-2xl font-serif italic text-gray-400 mb-8 max-w-md">
                "Excellence is not built by chance—it is engineered."
              </p>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Keunggulan tidak tercipta secara kebetulan, melainkan dirancang dengan presisi ahli.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid sm:grid-cols-2 gap-10"
            >
              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-bold tracking-widest text-brand-lightblue mb-4 flex items-center gap-2"><MapPin size={20} /> ALAMAT</h4>
                  <p className="text-gray-300 leading-relaxed">
                    Komplek Manglayang Regency<br />
                    Blok H14 No 11, Cileunyi<br />
                    Bandung, Indonesia
                  </p>
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-brand-lightblue mb-4 flex items-center gap-2"><Phone size={20} /> TELEPON</h4>
                  <p className="text-gray-300 leading-relaxed">
                    022-63728625<br />
                    0811-2288-2399
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <div>
                  <h4 className="font-bold tracking-widest text-brand-lightblue mb-4 flex items-center gap-2"><Mail size={20} /> WEBSITE</h4>
                  <p className="text-gray-300 leading-relaxed">
                    www.ptbarateknikmandiri.com
                  </p>
                </div>
                <div>
                  <h4 className="font-bold tracking-widest text-brand-lightblue mb-4">SOCIAL MEDIA</h4>
                  <div className="flex flex-col gap-3">
                    <a href="#" className="flex gap-3 text-gray-300 hover:text-white transition-colors group">
                      <Instagram size={20} className="group-hover:scale-110 transition-transform" /> <span className="font-medium">Instagram</span>
                    </a>
                    <a href="#" className="flex gap-3 text-gray-300 hover:text-white transition-colors group">
                      <Facebook size={20} className="group-hover:scale-110 transition-transform" /> <span className="font-medium">Facebook</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm font-medium">
            <p>&copy; 2026 PT Bara Teknik Mandiri. All rights reserved.</p>
            <p>Designed and Engineered in Indonesia.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

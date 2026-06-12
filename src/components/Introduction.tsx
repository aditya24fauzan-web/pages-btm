import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export function Introduction() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-brand-gray">
        {/* Background abstract shapes */}
        <div className="absolute top-0 right-0 w-3/4 md:w-1/2 h-full bg-brand-lightblue/10 rounded-bl-[120px] -z-10 transform translate-x-10 translate-y-[-10%]" />
        
        <div className="container mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-blue/10 text-brand-blue font-semibold tracking-wider text-sm mb-6 w-fit border border-brand-blue/20">
              BUILDING QUALITY FOR QUALITY OF LIFE
            </div>
            <h1 className="text-5xl md:text-7xl font-bold font-serif text-brand-navy leading-[1.1] mb-6">
              A Trusted Partner <br />
              <span className="text-gradient">in Health Facility</span> <br />
              Development.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-lg leading-relaxed font-sans">
              Menghadirkan solusi sistem HVAC medis dan Cleanroom yang terintegrasi, aman, dan berstandar internasional untuk masa depan fasilitas kesehatan Indonesia.
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <a href="#services" className="px-8 py-4 bg-brand-navy hover:bg-brand-blue text-white rounded-full font-bold transition-all shadow-xl hover:shadow-2xl flex items-center gap-2">
                Jelajahi Layanan <ArrowRight size={20} />
              </a>
              <a href="#about" className="px-8 py-4 bg-white text-brand-navy rounded-full font-bold transition-all shadow-md hover:shadow-lg border border-gray-100 flex items-center gap-2">
                Tentang Kami
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative h-[500px] lg:h-[650px] w-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <img 
              src="/hero.jpg" 
              alt="Medical Surgery Room" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs"
            >
              <h3 className="font-bold text-brand-navy text-4xl mb-1">BARA</h3>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-widest">TEKNIK MANDIRI</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.a 
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-brand-navy/50 hover:text-brand-navy"
        >
          <ChevronDown size={32} />
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="h-[2px] w-12 bg-brand-blue" />
                <span className="font-bold tracking-widest text-brand-blue uppercase text-sm">Tentang Kami</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-navy leading-tight">
                Membangun Fisik, <br/>
                <span className="text-brand-blue text-3xl md:text-5xl font-sans italic tracking-tight">Menciptakan Sistem Keamanan.</span>
              </h2>
              <div className="space-y-6 text-gray-600 text-lg leading-relaxed mt-4">
                <p>
                  Berawal dari spesialis desain dan pembangunan <strong className="text-brand-navy">Cleanroom</strong>, PT Bara Teknik Mandiri kini hadir lebih lengkap dengan solusi sistem HVAC medis dan industri yang terintegrasi.
                </p>
                <p>
                  Bagi kami, konstruksi bukan sekadar membangun fisik, tapi menciptakan sistem yang mendukung keamanan dan kenyamanan banyak orang. Didukung tenaga ahli berpengalaman, kami siap menjadi mitra andal untuk kebutuhan Industri dan Rumah Sakit Anda.
                </p>
              </div>

              <div className="mt-6 flex items-center gap-8 border-t border-gray-100 pt-8">
                <div>
                  <h4 className="text-4xl font-bold text-brand-navy mb-1">ISO</h4>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Standar Mutu</p>
                </div>
                <div className="w-[1px] h-12 bg-gray-200" />
                <div>
                  <h4 className="text-4xl font-bold text-brand-navy mb-1">GMP</h4>
                  <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Kepatuhan Farmasi</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-gray rounded-[2.5rem] -z-10 transform rotate-3" />
              <div className="grid grid-cols-2 gap-4 h-[500px]">
                <img 
                  src="/12.png" 
                  alt="Engineering HVAC Worker" 
                  className="w-full h-full object-cover rounded-3xl shadow-lg col-span-2 md:col-span-1"
                />
                <div className="hidden md:flex flex-col gap-4">
                  <div className="bg-brand-navy rounded-3xl p-8 flex flex-col justify-center h-1/3 shadow-lg">
                    <h3 className="text-white font-bold tracking-widest text-xl mb-2 flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-brand-lightblue animate-pulse"/> EXPERT
                    </h3>
                    <p className="text-gray-400 text-sm">HVAC & Cleanroom Engineering</p>
                  </div>
                  <img 
                    src="https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80" 
                    alt="Cleanroom" 
                    className="w-full h-2/3 object-cover rounded-3xl shadow-lg"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </>
  );
}

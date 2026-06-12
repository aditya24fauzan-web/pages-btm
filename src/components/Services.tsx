import { motion } from "motion/react";
import { AlertCircle, Zap, ShieldCheck, ThermometerSnowflake, FileCheck } from "lucide-react";

export function Services() {
  return (
    <>
      {/* Problems Section */}
      <section id="services" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 md:px-12">
          
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-red-100 text-red-600 font-bold tracking-widest text-xs mb-6 w-fit uppercase">
                Tantangan Industri
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6 leading-tight">
                Standar sterilitas modern menuntut <span className="text-brand-blue">lebih dari sekadar estetika.</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tantangan yang dihadapi oleh fasilitas kesehatan masa kini adalah bagaimana mengintegrasikan teknologi ke dalam ruang operasi tanpa mengorbankan standar sterilitas dan efisiensi energi.
              </p>
            </motion.div>

            <div className="flex flex-col gap-6">
              {[
                { title: "Kontaminasi & Kebersihan", desc: "Banyak fasilitas kesehatan dan industri farmasi ruangannya tidak memenuhi standar ketat BPOM, GMP, atau ISO." },
                { title: "Biaya Operasional Tinggi", desc: "Kebutuhan HEPA Filtration dan AC Presisi sering menyebabkan masalah seperti konsumsi listrik tinggi dan sistem filter yang tidak efisien." },
                { title: "Kelangkaan Vendor Spesialis", desc: "Banyak kontraktor bisa membuat Cleanroom, namun jarang yang menguasai Airflow Engineering dan Pressure Cascade sesuai standar." }
              ].map((problem, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 border-l-4 border-red-500 p-8 rounded-r-3xl flex gap-6 items-start hover:shadow-md transition-shadow"
                >
                  <AlertCircle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-bold text-brand-navy mb-2">{problem.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{problem.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Overview Section */}
      <section className="py-24 bg-brand-navy relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
              Solusi Terintegrasi Kami
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cleanroom bukan hanya terlihat bersih—tetapi harus sesuai regulasi. Kami menciptakan ruang yang lebih aman, lebih bersih, dan lebih andal untuk layanan kesehatan.
            </p>
          </motion.div>

          {/* Solution Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {[
              { icon: <Zap />, title: "Hemat Energi", desc: "Sistem HVAC efisien & Building Management System." },
              { icon: <ShieldCheck />, title: "Pencegahan", desc: "Tekanan terkontrol & monitoring filtrasi HEPA kritis." },
              { icon: <FileCheck />, title: "Sesuai Regulasi", desc: "Pemenuhan standar ISO & GMP untuk ruang steril." },
              { icon: <ThermometerSnowflake />, title: "Iklim Layanan", desc: "Pengaturan suhu, ventilasi & pencahayaan optimal." }
            ].map((sol, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <div className="w-14 h-14 bg-brand-blue/20 rounded-full flex items-center justify-center text-brand-lightblue mb-6">
                  {sol.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{sol.title}</h4>
                <p className="text-gray-400">{sol.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Overview Deep Dive */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/bed.jpg" alt="Hospital doors" className="w-full h-[400px] object-cover rounded-3xl shadow-2xl" />
              <img src="/bed2.jpg" alt="Cleanroom facility" className="w-full h-[300px] object-cover rounded-3xl shadow-2xl self-end" />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-widest text-brand-lightblue uppercase mb-4">Cleanroom Solutions</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Layanan desain, pembangunan, dan validasi cleanroom holistik untuk menciptakan tingkat kebersihan dan kontrol partikel yang selaras dengan kebutuhan industri medis & farmasi.
                </p>
              </div>
              <div className="h-px w-full bg-white/10" />
              <div>
                <h3 className="text-2xl font-bold tracking-widest text-brand-lightblue uppercase mb-4">HVAC Solutions</h3>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Sistem Tata Udara (HVAC) yang dirancang khusus untuk menjamin kualitas udara optimal melalui pengendalian presisi pada parameter suhu, kelembapan, dan filtrasi makro-mikro.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  );
}

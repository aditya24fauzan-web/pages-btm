import { motion } from "motion/react";
import { CheckCircle2, Target, Eye, Wrench, Shield, Lightbulb, Workflow } from "lucide-react";

export function CoreValues() {
  const missions = [
    { title: "Solusi Presisi", text: "Menyediakan solusi konstruksi fasilitas kesehatan yang presisi, inovatif, & berstandar sterilitas tertinggi." },
    { title: "Mitra Operasional", text: "Menjadi mitra terpercaya dalam pengadaan ruang operasi hybrid dan fasilitas medis modular yang efisien." },
    { title: "Infrastruktur Tangguh", text: "Membangun infrastruktur rumah sakit yang tangguh melalui penerapan teknologi terkini & kepatuhan regulasi." },
    { title: "Lingkungan Higienis", text: "Mendedikasikan keahlian teknik untuk menciptakan lingkungan rumah sakit modern demi meningkatkan standar." }
  ];

  const factors = [
    { title: "DESIRE", icon: <Target className="w-8 h-8 text-brand-lightblue" />, desc: "Mengubah visi menjadi kenyataan dengan pengalaman tim ahli." },
    { title: "RESPONSIBILITY", icon: <Shield className="w-8 h-8 text-brand-lightblue" />, desc: "Menangani proyek dari perancangan hingga selesai dengan tanggung jawab." },
    { title: "RELATIONS", icon: <CheckCircle2 className="w-8 h-8 text-brand-lightblue" />, desc: "Memberikan after-sales service terbaik untuk menjaga kualitas sistem." },
    { title: "CREATIVE", icon: <Lightbulb className="w-8 h-8 text-brand-lightblue" />, desc: "Desain modern dan inovatif yang memenuhi standar profesional." },
    { title: "DEVELOPMENT", icon: <Wrench className="w-8 h-8 text-brand-lightblue" />, desc: "Solusi terbaik dengan teknologi canggih dan integrasi tim ahli." },
    { title: "CONCEPT", icon: <Workflow className="w-8 h-8 text-brand-lightblue" />, desc: "Perencanaan cerdas untuk efisiensi maksimal dan hasil luar biasa." }
  ];

  return (
    <>
      {/* Visi Misi Section */}
      <section id="values" className="py-24 bg-brand-navy text-white relative overflow-hidden">
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          
          {/* Visi */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-24 flex flex-col md:flex-row gap-12 items-center"
          >
            <div className="md:w-1/3">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-brand-blue/20 rounded-2xl">
                  <Eye className="w-8 h-8 text-brand-lightblue" />
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold">Visi Kami</h2>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-2xl md:text-4xl font-serif font-medium leading-relaxed italic text-gray-300">
                "Menjadi mitra konstruksi medis terpercaya yang menghadirkan <span className="text-white not-italic font-bold">ruang operasi berstandar internasional</span> melalui inovasi teknologi dan presisi tinggi demi mendukung keselamatan pasien."
              </h3>
            </div>
          </motion.div>

          {/* Misi */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-12"
            >
              <div className="h-[2px] w-12 bg-brand-lightblue" />
              <h2 className="text-3xl font-bold tracking-widest uppercase">Misi Kami</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {missions.map((mission, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 rounded-3xl relative overflow-hidden group hover:bg-white/10 transition-all duration-300"
                >
                  <span className="absolute -top-4 -right-2 text-[120px] font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                    0{idx + 1}
                  </span>
                  <h4 className="text-xl font-bold mb-4 text-brand-lightblue relative z-10">{mission.title}</h4>
                  <p className="text-gray-300 leading-relaxed relative z-10">{mission.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why Choose Us & Key Factors */}
      <section className="py-24 bg-brand-gray relative">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Why choose us */}
          <div className="grid lg:grid-cols-5 gap-16 items-center mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-6">
                Why choose <span className="text-brand-blue block mt-2">Us ?</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Kami menggabungkan keahlian teknik (engineering excellence) dengan kepatuhan tinggi (compliance-focused) untuk menjamin stabilitas lingkungan kritis di fasilitas Anda.
              </p>
              <div className="space-y-6">
                {[
                  "Compliance-Focused untuk kesehatan & farmasi.",
                  "Engineering Excellence dalam HVAC & Cleanroom.",
                  "End-to-End Service dari desain hingga maintenance.",
                  "Reliable Performance untuk stabilitas kritis."
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-0.5" />
                    <span className="text-brand-navy font-medium font-sans leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-3 grid grid-cols-2 gap-4 h-[500px]"
            >
              <img src="/ok.png" alt="/Installation" className="w-full h-full object-cover rounded-3xl shadow-md" />
              <div className="grid grid-rows-2 gap-4">
                 <img src="/installation.jpg" alt="Engineer checking blueprints" className="w-full h-full object-cover rounded-3xl shadow-md" />
                 <img src="/ok.jpeg" alt="Mobile lab" className="w-full h-full object-cover rounded-3xl shadow-md" />
              </div>
            </motion.div>
          </div>

          {/* Key factors Bento */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mb-4">Key Factors</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">Prinsip dasar yang mendorong kami menghasilkan struktur berkualitas.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {factors.map((factor, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-brand-lightblue hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="p-4 bg-gray-50 rounded-2xl w-fit mb-6 group-hover:bg-blue-50 transition-colors">
                    {factor.icon}
                  </div>
                  <div className="flex items-end gap-3 mb-4">
                    <span className="text-3xl font-black text-gray-200 group-hover:text-brand-blue/20 transition-colors">0{idx+1}</span>
                    <h4 className="text-xl font-bold tracking-widest text-brand-navy mb-1">{factor.title}</h4>
                  </div>
                  <p className="text-gray-600 leading-relaxed font-sans">{factor.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

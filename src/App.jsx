import React, { useState, useEffect } from 'react';
import { ArrowUpRight, MoveRight, Instagram, Twitter, Linkedin, MapPin, ArrowDown, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const customStyles = `
  ::-webkit-scrollbar { width: 6px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #3f3f46; border-radius: 4px; }
  ::-webkit-scrollbar-thumb:hover { background: #52525b; }
`;

const FadeIn = ({ children, delay = 0, y = 40, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
    className={className}
  >
    {children}
  </motion.div>
);

const RevealLine = ({ children, delay = 0, className = "" }) => (
  <span className="block overflow-hidden pb-4 -mb-4">
    <motion.span
      className={`block ${className}`}
      initial={{ y: "100%" }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.span>
  </span>
);

const HomeSection = () => (
  <div className="px-6 md:px-12 max-w-7xl mx-auto pb-32">
    <div className="flex flex-col justify-center min-h-[90vh]">
      <div className="max-w-4xl">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1]">
            <RevealLine>We create</RevealLine>
            <RevealLine delay={0.1} className="font-serif italic text-zinc-300">Digital Products.</RevealLine>
          </h1>
        </div>
        <FadeIn delay={0.2}>
          <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
            An independent digital agency focused on crafting exceptional experiences through design and technology.
          </p>
        </FadeIn>
        <FadeIn delay={0.3}>
          <div className="mt-12 flex items-center gap-6">
            <button className="group flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-zinc-200 transition-colors">
              Start a project <MoveRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <span className="text-sm text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <ArrowDown className="w-4 h-4 animate-bounce" /> Scroll to explore
            </span>
          </div>
        </FadeIn>
      </div>
    </div>
    <div className="pt-32 border-t border-white/10">
      <FadeIn>
        <h3 className="text-3xl font-serif italic mb-12">Recent Highlights</h3>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FadeIn delay={0.1}>
          <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Work 1" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <p className="text-white font-medium text-xl">Fintech Dashboard</p>
              <p className="text-zinc-400 text-sm">UX/UI Design</p>
            </div>
          </div>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="aspect-video bg-zinc-900 rounded-3xl overflow-hidden relative group cursor-pointer">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Work 2" className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-70 group-hover:opacity-100" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-8 flex flex-col justify-end">
              <p className="text-white font-medium text-xl">Data Visualization</p>
              <p className="text-zinc-400 text-sm">Frontend Engineering</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </div>
);

const AboutSection = () => (
  <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto pb-48">
    <div className="max-w-4xl">
      <h2 className="text-4xl md:text-7xl font-medium tracking-tight">
        <RevealLine>Wir sind eine</RevealLine>
        <RevealLine delay={0.1} className="font-serif italic text-zinc-300">Digitalagentur.</RevealLine>
      </h2>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="text-xl text-zinc-400 leading-relaxed font-light">
          <FadeIn delay={0.2}>
            <p className="mb-8">
              Hi. Wir sind das Team. Als Digitalagentur machen wir genau das, was es f&uuml;r wundervolle digitale Produkte braucht: Customer Experience Design, Product Engineering und Digital Growth.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p>
              Wir sind ein Team aus &uuml;ber 30 Digital Explorers; und unsere Home Base ist irgendwo da drau&szlig;en in der weiten digitalen Welt.
            </p>
          </FadeIn>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FadeIn delay={0.2} className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden group">
             <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100" />
          </FadeIn>
          <FadeIn delay={0.3} className="aspect-[4/5] bg-zinc-900 rounded-2xl overflow-hidden group translate-y-8">
             <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Office" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 opacity-70 group-hover:opacity-100" />
          </FadeIn>
        </div>
      </div>
    </div>
    <div className="mt-48 max-w-4xl mx-auto text-center">
      <FadeIn>
        <p className="text-sm font-medium tracking-widest uppercase text-zinc-500 mb-8">Our Core Values</p>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {[
          { title: 'Curiosity', desc: 'We ask the right questions to find the perfect technical and visual solutions.' },
          { title: 'Craftsmanship', desc: 'Every pixel and line of code is written with absolute intentionality.' },
          { title: 'Impact', desc: 'We build products that actually move the needle for our partners.' }
        ].map((val, idx) => (
          <FadeIn key={val.title} delay={idx * 0.1}>
            <h4 className="text-2xl font-serif italic mb-4">{val.title}</h4>
            <p className="text-zinc-400">{val.desc}</p>
          </FadeIn>
        ))}
      </div>
    </div>
  </div>
);

const WorkSection = () => {
  const cases = [
    { id: 1, title: 'Customer Experience', category: 'Design', gradient: 'from-fuchsia-600 to-purple-900', img: 'https://images.unsplash.com/photo-1558655146-d09347e92766?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Product Engineering', category: 'Technology', gradient: 'from-blue-600 to-indigo-900', img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Digital Growth', category: 'Marketing', gradient: 'from-rose-600 to-orange-900', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Brand Identity', category: 'Creative', gradient: 'from-emerald-600 to-teal-900', img: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Spatial Computing', category: 'Innovation', gradient: 'from-cyan-600 to-blue-900', img: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'E-Commerce', category: 'Platforms', gradient: 'from-amber-600 to-red-900', img: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' },
  ];

  return (
    <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto pb-48">
      <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
        <h2 className="text-4xl md:text-6xl font-medium tracking-tight">
          <RevealLine>Und das</RevealLine>
          <RevealLine delay={0.1} className="font-serif italic text-zinc-300">k&ouml;nnen wir.</RevealLine>
        </h2>
        <FadeIn delay={0.2} className="mt-6 md:mt-0 text-zinc-400 max-w-xs md:text-right text-sm md:text-base">
          Egal wie man es auch nennt: Leistungen, Services, Kompetenzen &ndash; This is what we do.
        </FadeIn>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((item, index) => (
          <FadeIn key={item.id} delay={(index % 3) * 0.1}>
            <div className="group relative aspect-[3/4] md:aspect-[4/5] rounded-3xl overflow-hidden cursor-pointer">
              <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover grayscale opacity-40 group-hover:scale-105 transition-transform duration-700" />
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 mix-blend-multiply group-hover:opacity-90 transition-opacity duration-500`} />
              <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                <div className="self-start">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-xs font-medium border border-white/20 text-white shadow-lg">
                    {item.category}
                  </span>
                </div>
                <div className="flex justify-between items-end">
                  <h3 className="text-3xl font-medium leading-tight max-w-[80%] text-white">{item.title}</h3>
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-400 shadow-xl">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

const ContactSection = () => (
  <div className="py-32 px-6 md:px-12 max-w-7xl mx-auto pb-48">
    <div className="flex flex-col justify-center min-h-[70vh] text-center">
      <FadeIn>
        <p className="text-zinc-400 font-medium mb-6 uppercase tracking-widest text-sm flex items-center justify-center gap-2">
          <Mail className="w-4 h-4" /> Get in touch
        </p>
      </FadeIn>
      <div className="mt-2">
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-medium tracking-tight hover:text-zinc-300 transition-colors cursor-pointer inline-flex justify-center">
          <RevealLine delay={0.1}>hello@<span className="font-serif italic text-zinc-500">agency</span>.com</RevealLine>
        </h2>
      </div>
    </div>
    <div className="mt-12 pt-24 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-16">
      <FadeIn>
        <h4 className="text-2xl font-serif italic mb-6">Our Office</h4>
        <div className="flex items-start gap-4 text-zinc-400">
          <MapPin className="w-5 h-5 mt-1 shrink-0" />
          <p className="leading-relaxed">
            Musterstra&szlig;e 123<br />
            10115 Berlin<br />
            Germany
          </p>
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h4 className="text-2xl font-serif italic mb-6">Socials</h4>
        <div className="flex flex-col gap-4">
          {[
            { name: 'Instagram', icon: Instagram },
            { name: 'Twitter', icon: Twitter },
            { name: 'LinkedIn', icon: Linkedin }
          ].map((social) => (
            <a key={social.name} href="#" className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors w-max group">
              <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span className="text-lg">{social.name}</span>
            </a>
          ))}
        </div>
      </FadeIn>
    </div>
  </div>
);

export default function App() {
  const [activeTab, setActiveTab] = useState('Intro');
  const tabs = ['Intro', 'About', 'Services', 'Cases'];

  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerHTML = customStyles;
    document.head.appendChild(styleEl);
    return () => document.head.removeChild(styleEl);
  }, []);

  const getTabColor = (tab) => {
    switch (tab) {
      case 'Intro': return '#09090b';
      case 'About': return '#121214';
      case 'Services': return '#0a0a0c';
      case 'Cases': return '#101012';
      default: return '#09090b';
    }
  };

  const renderContent = (tabName) => {
    switch (tabName) {
      case 'Intro': return <HomeSection />;
      case 'About': return <AboutSection />;
      case 'Services': return <WorkSection />;
      case 'Cases': return <ContactSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black text-zinc-50 font-sans selection:bg-zinc-800 selection:text-white">
      <AnimatePresence initial={false}>
        <motion.main
          key={activeTab}
          initial={{ y: '100%', zIndex: 20, boxShadow: '0 -40px 80px rgba(0,0,0,0.8)' }}
          animate={{ y: 0, zIndex: 20, boxShadow: '0 0px 0px rgba(0,0,0,0)', scale: 1, opacity: 1 }}
          exit={{ y: 0, scale: 0.94, opacity: 0.6, zIndex: 10, filter: 'blur(2px)' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full overflow-y-auto overflow-x-hidden"
          style={{ backgroundColor: getTabColor(activeTab) }}
        >
          <header className="relative w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference">
            <p className="text-sm font-medium tracking-wide">Exploring Digital Future. <span className="font-serif italic text-zinc-400">Together.</span></p>
            <div className="text-xl font-serif italic font-bold">
              beaklyn.
            </div>
          </header>
          <div className="min-h-full flex flex-col pt-12">
            {renderContent(activeTab)}
          </div>
        </motion.main>
      </AnimatePresence>
      <div className="fixed bottom-8 left-0 w-full flex justify-center z-50 pointer-events-none px-4">
        <div className="pointer-events-auto relative flex items-center bg-[#1a1a1c]/90 backdrop-blur-xl p-1.5 rounded-full border border-white/10 shadow-2xl">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`
                  relative z-10 px-6 py-2.5 text-sm font-medium transition-colors duration-300 rounded-full
                  ${isActive ? 'text-black' : 'text-zinc-400 hover:text-zinc-200'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-white rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
                {tab === 'Cases' && !isActive && (
                   <span className="absolute top-2 right-3 w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                )}
              </button>
            );
          })}
        </div>
        <button className="pointer-events-auto absolute bottom-0 right-6 md:right-12 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform shadow-xl">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="w-1 h-1 bg-black rounded-full" />
            <div className="w-1 h-1 bg-black rounded-full" />
          </div>
        </button>
      </div>
    </div>
  );
}

import React from 'react';
import {motion} from 'framer-motion';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle'; // Asegúrate de importar esto
import {features} from '../data/features';
import BMICalculator from '../components/features/BMICalculator_temp';

const HomePage = ({navigate}) => (
    <div className="overflow-x-hidden">
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{scale: 1.2}}
                    animate={{scale: 1}}
                    transition={{duration: 10, ease: "easeOut"}}
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                    alt="Gimnasio Fondo"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-neutral-900"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h2
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.5}}
                    className="text-[#FFD700] font-bold tracking-[0.2em] uppercase mb-6"
                >
                    Bienvenido a Tatto's Gym
                </motion.h2>

                <motion.h1
                    initial={{opacity: 0, y: 30}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 0.7, duration: 0.8}}
                    className="font-black text-5xl md:text-7xl lg:text-9xl leading-none mb-8 text-white tracking-tighter drop-shadow-2xl"
                >
                    ROMPE TUS <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-600">
                        LÍMITES
                    </span>
                </motion.h1>

                <motion.p
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{delay: 1.2}}
                    className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed"
                >
                    No es solo un gimnasio, es tu nuevo estilo de vida. Equipamiento profesional, ambiente motivador y resultados reales.
                </motion.p>

                <motion.div
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    transition={{delay: 1.5}}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button onClick={() => navigate('plans')}>
                        Ver Planes
                    </Button>
                    <Button variant="outline" onClick={() => navigate('gallery')}>
                        Ver Instalaciones
                    </Button>
                </motion.div>
            </div>
        </section>

        {/* FEATURES */}
        <section className="bg-neutral-900 py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, idx) => (
                    <motion.div
                        key={idx}
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{delay: idx * 0.2}}
                        className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-[#FFD700] transition-colors group hover:-translate-y-2 duration-300"
                    >
                        <feature.icon className="w-12 h-12 text-[#FFD700] mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white uppercase mb-3">{feature.title}</h3>
                        <p className="text-gray-400">{feature.text}</p>
                    </motion.div>
                ))}
            </div>
        </section>

        {/* INSTAGRAM REEL SECTION (NUEVO) */}
        <section className="py-20 bg-black overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                >
                    <SectionTitle title="Vive la Experiencia" subtitle="Motivación Pura" />
                </motion.div>

                <div className="flex justify-center mt-12">
                    {/* Contenedor del video estilo 'Móvil' */}
                    <motion.div
                        initial={{opacity: 0, scale: 0.9}}
                        whileInView={{opacity: 1, scale: 1}}
                        viewport={{once: true}}
                        transition={{delay: 0.2, duration: 0.6}}
                        className="relative w-full max-w-[350px] h-[620px] rounded-[2rem] overflow-hidden border-4 border-neutral-800 shadow-2xl shadow-yellow-500/10 bg-neutral-900"
                    >
                        {/* El iframe de Instagram */}
                        <iframe
                            src="https://www.instagram.com/reel/DKGUtvqxBc-/embed"
                            className="w-full h-full object-cover"
                            frameBorder="0"
                            scrolling="no"
                            allowTransparency="true"
                            allow="encrypted-media; picture-in-picture"
                            title="Instagram Reel Tatto's Gym"
                        ></iframe>
                    </motion.div>
                </div>

                <div className="mt-8">
                    <a href="https://www.instagram.com/tattos_gym/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFD700] transition-colors text-sm uppercase tracking-widest font-bold">
                        Ver más en @tattos_gym
                    </a>
                </div>
            </div>

            {/* Decoración de fondo */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFD700]/5 rounded-full blur-[100px] pointer-events-none"></div>
        </section>

        {/* CALCULADORA IMC */}
        <BMICalculator />
    </div>
);

export default HomePage;
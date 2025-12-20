import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {Instagram, Play, Heart, MessageCircle} from 'lucide-react';
import Button from '../components/ui/Button';
import {features} from '../data/features';
import BMICalculator from '../components/features/BMICalculator_temp';

const HomePage = ({navigate}) =>
{
    const [isPlaying, setIsPlaying] = useState(false);

    return (
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

            {/* INSTAGRAM REEL SECTION (CUSTOM CARD) */}
            <section className="bg-black py-20 relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-full bg-[#FFD700]/5 blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center gap-12">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            className="text-center"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-white italic tracking-tighter mb-4">
                                ÚLTIMO <span className="text-[#FFD700]">REEL</span>
                            </h2>
                            <p className="text-gray-400">Síguenos para más motivación diaria</p>
                        </motion.div>

                        <motion.div
                            initial={{opacity: 0, scale: 0.9}}
                            whileInView={{opacity: 1, scale: 1}}
                            viewport={{once: true}}
                            whileHover={!isPlaying ? {scale: 1.02} : {}}
                            transition={{duration: 0.4}}
                            className="group relative w-full max-w-[350px] aspect-[9/16] rounded-[2rem] bg-neutral-900 border-2 border-neutral-800 hover:border-[#FFD700] overflow-hidden flex flex-col transition-all duration-300 shadow-2xl hover:shadow-[#FFD700]/20"
                        >
                            {isPlaying ? (
                                <iframe
                                    src="https://www.instagram.com/reel/DKGUtvqxBc-/embed"
                                    className="w-full h-full object-cover"
                                    frameBorder="0"
                                    scrolling="no"
                                    allowTransparency="true"
                                    allow="encrypted-media; picture-in-picture"
                                    title="Instagram Reel Tatto's Gym"
                                ></iframe>
                            ) : (
                                <div
                                    onClick={() => setIsPlaying(true)}
                                    className="w-full h-full flex flex-col cursor-pointer"
                                >
                                    {/* Header Mockup */}
                                    <div className="flex items-center gap-3 p-4 bg-gradient-to-b from-black/80 to-transparent absolute top-0 w-full z-20 pointer-events-none">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 p-[2px]">
                                            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                                                <span className="font-bold text-[10px] text-[#FFD700]">TG</span>
                                            </div>
                                        </div>
                                        <span className="text-white font-medium text-sm">tattos_gym</span>
                                    </div>

                                    {/* Content Placeholder / Play Button */}
                                    <div className="flex-1 relative bg-neutral-800 flex items-center justify-center group-hover:bg-neutral-800/80 transition-colors">
                                        {/* Background Image Placeholder */}
                                        <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-500"></div>

                                        <div className="w-16 h-16 rounded-full bg-[#FFD700] text-black flex items-center justify-center z-10 group-hover:scale-110 transition-transform shadow-lg shadow-yellow-500/50">
                                            <Play fill="currentColor" className="ml-1" />
                                        </div>
                                    </div>

                                    {/* Footer Mockup */}
                                    <div className="p-4 bg-gradient-to-t from-black/90 to-transparent absolute bottom-0 w-full z-20 pointer-events-none">
                                        <div className="flex gap-4 text-white mb-3">
                                            <Heart className="w-6 h-6 hover:text-red-500 transition-colors" />
                                            <MessageCircle className="w-6 h-6 hover:text-blue-500 transition-colors" />
                                        </div>
                                        <p className="text-xs text-gray-300 line-clamp-2">
                                            <span className="font-bold text-white mr-2">tattos_gym</span>
                                            SIMPLEMENTE TATTO'S GYM... #motivation #gym #fitness
                                        </p>
                                    </div>
                                </div>
                            )}
                        </motion.div>

                        <Button href="https://www.instagram.com/tattos_gym/" variant="outline" className="gap-2">
                            <Instagram size={20} /> Seguir en Instagram
                        </Button>
                    </div>
                </div>
                {/* Se eliminó la decoración de fondo */}
            </section>

            {/* CALCULADORA IMC */}
            <BMICalculator />
        </div>
    );
};

export default HomePage;
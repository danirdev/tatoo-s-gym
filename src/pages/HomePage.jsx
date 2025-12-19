import React from 'react';
import {Dumbbell, Star, Clock} from 'lucide-react';
import Button from '../components/ui/Button';

const HomePage = ({navigate}) => (
    <div className="animate-in fade-in duration-500">
        {/* HERO */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                    alt="Gimnasio Fondo"
                    className="w-full h-full object-cover scale-105 animate-pulse-slow"
                    style={{animationDuration: '20s'}}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-neutral-900"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
                <h2 className="text-[#FFD700] font-bold tracking-[0.2em] uppercase mb-6 animate-slide-up">
                    Bienvenido a Tatto's Gym
                </h2>
                <h1 className="font-black text-5xl md:text-7xl lg:text-9xl leading-none mb-8 text-white tracking-tighter drop-shadow-2xl">
                    ROMPE TUS <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-600">
                        LÍMITES
                    </span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    No es solo un gimnasio, es tu nuevo estilo de vida. Equipamiento profesional, ambiente motivador y resultados reales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button onClick={() => navigate('plans')}>
                        Ver Planes
                    </Button>
                    <Button variant="outline" onClick={() => navigate('gallery')}>
                        Ver Instalaciones
                    </Button>
                </div>
            </div>
        </section>

        {/* FEATURES */}
        <section className="bg-neutral-900 py-20 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {icon: Dumbbell, title: "Equipamiento Pro", text: "Maquinaria de última generación para biomecánica perfecta."},
                    {icon: Star, title: "Ambiente Único", text: "Energía positiva y comunidad que te impulsa a mejorar."},
                    {icon: Clock, title: "Horarios Amplios", text: "Entrena a tu ritmo, desde temprano hasta la noche."}
                ].map((feature, idx) => (
                    <div key={idx} className="bg-neutral-800/50 p-8 rounded-2xl border border-neutral-700 hover:border-[#FFD700] transition-colors group">
                        <feature.icon className="w-12 h-12 text-[#FFD700] mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold text-white uppercase mb-3">{feature.title}</h3>
                        <p className="text-gray-400">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
);

export default HomePage;

import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import {team} from '../data/team';

const AboutPage = () => (
    <div className="pt-32 pb-20 px-4 animate-in slide-in-from-bottom-4 duration-500">
        <div className="max-w-7xl mx-auto">
            {/* HISTORIA */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                <div className="relative">
                    <div className="absolute -top-4 -left-4 w-32 h-32 border-t-4 border-l-4 border-[#FFD700]"></div>
                    <img
                        src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop"
                        className="rounded-lg shadow-2xl w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
                        alt="Historia Tatto's Gym"
                    />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 border-b-4 border-r-4 border-[#FFD700]"></div>
                </div>

                <div>
                    <SectionTitle title="Nuestra Historia" subtitle="Pasión por el Hierro" align="left" />
                    <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                        <p>
                            <strong className="text-white">Tatto's Gym</strong> nació con una visión clara: crear un espacio donde el entrenamiento serio y la camaradería se unan. Lo que comenzó como un pequeño proyecto en Jujuy, hoy es un referente para quienes buscan superarse de verdad.
                        </p>
                        <p>
                            No somos una cadena gigante y fría. Somos un gimnasio de barrio con estándares profesionales. Conocemos tu nombre, tus objetivos y celebramos cada uno de tus logros. Aquí no eres un número, eres parte de la familia.
                        </p>
                        <div className="bg-neutral-800 p-6 rounded-xl border-l-4 border-[#FFD700] mt-8">
                            <h4 className="text-white font-bold uppercase mb-2">Nuestra Misión</h4>
                            <p className="text-sm">Inspirar a nuestra comunidad a adoptar un estilo de vida activo y saludable, proporcionando las mejores herramientas en un ambiente de respeto y disciplina.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* STAFF / EQUIPO */}
            <div className="mt-20">
                <SectionTitle title="Nuestro Equipo" subtitle="Profesionales a tu servicio" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {team.map((member, idx) => (
                        <div key={idx} className="group relative overflow-hidden rounded-xl bg-neutral-800">
                            <div className="aspect-[3/4] overflow-hidden">
                                <img src={member.img} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                            </div>
                            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/80 to-transparent p-6 pt-20">
                                <h3 className="text-[#FFD700] font-bold text-2xl uppercase">{member.name}</h3>
                                <p className="text-white font-medium">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default AboutPage;

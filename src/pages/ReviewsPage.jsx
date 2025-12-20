import React from 'react';
import {Quote, Star, MapPin} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import {reviews} from '../data/reviews';

const ReviewsPage = () =>
{
    // Enlace a Google Maps provisto
    const googleMapsLink = "https://www.google.com/maps/place/Tatto's+gym/@-24.3898118,-65.1438777,17z/data=!4m8!3m7!1s0x941bad9278924d11:0x5367fc8b51b60faa!8m2!3d-24.3898118!4d-65.1438777!9m1!1b1!16s%2Fg%2F11lcfrrhf5?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D";

    return (
        <div className="pt-32 pb-20 px-4 animate-in slide-in-from-right-4 duration-500">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Lo que dicen de nosotros" subtitle="Comunidad Tatto's" />

                {/* Grid de Reseñas Destacadas (Locales) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 relative mt-8 hover:border-[#FFD700] transition-colors group">
                            <div className="absolute -top-6 left-8 bg-[#FFD700] p-3 rounded-full text-black group-hover:scale-110 transition-transform">
                                <Quote size={24} fill="black" />
                            </div>
                            <div className="mt-6">
                                <div className="flex text-[#FFD700] mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" />)}
                                </div>
                                <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                                <div>
                                    <h4 className="text-white font-bold uppercase tracking-wide">{review.name}</h4>
                                    <span className="text-gray-500 text-sm font-medium">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Google Maps */}
                <div className="mt-24 text-center bg-neutral-900 rounded-3xl p-8 md:p-16 relative overflow-hidden border border-neutral-800 shadow-2xl">
                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase">
                            ¿Querés ver más opiniones reales?
                        </h3>
                        <p className="text-gray-400 mb-10 text-lg leading-relaxed">
                            La transparencia es clave en Tatto's Gym. Te invitamos a leer las experiencias de nuestros socios directamente en Google o a dejarnos tu propia calificación.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                            {/* Botón para VER reseñas */}
                            <Button
                                href={googleMapsLink}
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                <MapPin size={20} /> Leer Opiniones en Google
                            </Button>

                            {/* Botón para ESCRIBIR reseña */}
                            <Button
                                href={googleMapsLink}
                                className="w-full sm:w-auto"
                            >
                                <Star size={20} fill="black" /> Dejar una Reseña
                            </Button>
                        </div>

                        <p className="mt-6 text-sm text-gray-500">
                            Tu opinión nos ayuda a mejorar día a día. ⭐⭐⭐⭐⭐
                        </p>
                    </div>

                    {/* Decoración de fondo */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-[80px] -mr-40 -mt-40 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFD700]/5 rounded-full blur-[80px] -ml-40 -mb-40 pointer-events-none"></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;
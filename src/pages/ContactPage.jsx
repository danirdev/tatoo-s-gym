import React from 'react';
import {MapPin, ArrowRight, Clock, MessageCircle} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

const ContactPage = () => (
    <div className="pt-32 pb-20 px-4 animate-in fade-in duration-500">
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="Contáctanos" subtitle="Empieza tu cambio" />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Info Cards */}
                <div className="space-y-6">
                    <div className="bg-neutral-800 p-6 rounded-xl flex items-start gap-4 border border-neutral-700">
                        <div className="bg-[#FFD700]/20 p-3 rounded-lg text-[#FFD700]">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-1">Ubicación</h4>
                            <p className="text-gray-400 text-sm mb-2">Jujuy, Argentina</p>
                            <a href="https://maps.app.goo.gl/Ka7gzCmSXZfUFPPp7" target="_blank" className="text-[#FFD700] text-sm hover:underline font-bold flex items-center gap-1">
                                Ver en Mapa <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>

                    <div className="bg-neutral-800 p-6 rounded-xl flex items-start gap-4 border border-neutral-700">
                        <div className="bg-[#FFD700]/20 p-3 rounded-lg text-[#FFD700]">
                            <Clock size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-1">Horarios</h4>
                            <div className="text-gray-400 text-sm space-y-1">
                                <div className="flex justify-between w-48"><span>Lunes - Viernes:</span> <span className="text-white">07:00 - 23:00</span></div>
                                <div className="flex justify-between w-48"><span>Sábados:</span> <span className="text-white">09:00 - 20:00</span></div>
                                <div className="flex justify-between w-48"><span>Domingos:</span> <span className="text-red-400">Cerrado</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-neutral-800 p-6 rounded-xl flex items-start gap-4 border border-neutral-700">
                        <div className="bg-[#FFD700]/20 p-3 rounded-lg text-[#FFD700]">
                            <MessageCircle size={24} />
                        </div>
                        <div>
                            <h4 className="text-white font-bold uppercase mb-1">WhatsApp</h4>
                            <p className="text-gray-400 text-sm mb-2">Consulta precios y planes al instante.</p>
                            <Button href="https://wa.me/5493881234567" variant="ghost" className="!p-0 !h-auto !text-[#FFD700] hover:!bg-transparent hover:underline !justify-start">
                                Enviar Mensaje
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="lg:col-span-2 h-[500px] bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544.7578713567793!2d-65.29742563309998!3d-24.18663806141315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941b0f5555555555%3A0x123456789!2sJujuy!5e0!3m2!1ses!2sar!4v1700000000000!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        style={{border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Maps Tatto's Gym"
                    ></iframe>
                    <div className="absolute inset-0 bg-black/20 pointer-events-none group-hover:bg-transparent transition-colors"></div>
                </div>
            </div>
        </div>
    </div>
);

export default ContactPage;

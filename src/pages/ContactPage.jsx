import React from 'react';
import {MapPin, ArrowRight, Clock, MessageCircle} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import {contactInfo} from '../data/contact';

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
                            <p className="text-gray-400 text-sm mb-2">{contactInfo.address}</p>
                            <a href={contactInfo.mapLink} target="_blank" className="text-[#FFD700] text-sm hover:underline font-bold flex items-center gap-1">
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
                            <div className="text-gray-400 text-sm space-y-3">
                                {contactInfo.hours.map((item, idx) => (
                                    <div key={idx} className="flex flex-col border-b border-white/10 pb-2 last:border-0 last:pb-0">
                                        <span className="text-[#FFD700] font-bold text-xs uppercase mb-1">{item.label}</span>
                                        <span className={item.active ? "text-white font-mono" : "text-red-400 font-bold"}>{item.time}</span>
                                    </div>
                                ))}
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
                            <Button href={`https://wa.me/${contactInfo.whatsapp}`} variant="ghost" className="!p-0 !h-auto !text-[#FFD700] hover:!bg-transparent hover:underline !justify-start">
                                Enviar Mensaje
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="lg:col-span-2 h-[500px] bg-neutral-800 rounded-2xl overflow-hidden border border-neutral-700 relative group">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3633.7553775690994!2d-65.14387769999999!3d-24.3898118!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bad9278924d11%3A0x5367fc8b51b60faa!2sTatto&#39;s%20gym!5e0!3m2!1ses-419!2sar!4v1766166278839!5m2!1ses-419!2sar"
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

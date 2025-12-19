import React from 'react';
import {Dumbbell, Instagram, MessageCircle} from 'lucide-react';
import {navLinks} from '../../data/navigation';

const Footer = ({setActivePage}) =>
{
    return (
        <footer className="bg-black border-t border-neutral-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Dumbbell className="h-8 w-8 text-[#FFD700]" />
                            <span className="font-black text-2xl text-white">
                                TATTO'S <span className="text-[#FFD700]">GYM</span>
                            </span>
                        </div>
                        <p className="text-gray-500 max-w-sm leading-relaxed">
                            Transformando vidas a través del fitness. Únete a la comunidad más fuerte de Jujuy y alcanza tus metas con nosotros.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-3">
                            {navLinks.map(link => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => setActivePage(link.id)}
                                        className="text-gray-500 hover:text-[#FFD700] transition-colors text-sm uppercase font-medium"
                                    >
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold uppercase mb-6">Síguenos</h4>
                        <div className="flex gap-4">
                            <a href="https://www.instagram.com/tattos_gym/" target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-3 rounded-lg text-white hover:bg-[#E1306C] hover:text-white transition-all">
                                <Instagram size={24} />
                            </a>
                            <a href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE)}`} target="_blank" rel="noopener noreferrer" className="bg-neutral-800 p-3 rounded-lg text-white hover:bg-[#25D366] hover:text-white transition-all">
                                <MessageCircle size={24} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>&copy; 2025 Tatto's Gym. Todos los derechos reservados.</p>
                    <p className="mt-2 md:mt-0">Diseñado para ganar.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

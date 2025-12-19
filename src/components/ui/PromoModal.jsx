import React, {useState, useEffect} from 'react';
import {X, Gift} from 'lucide-react';
import Button from './Button';

const PromoModal = () =>
{
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() =>
    {
        // Mostrar el modal después de 8 segundos si no se ha cerrado antes
        const timer = setTimeout(() =>
        {
            const hasSeenPromo = sessionStorage.getItem('hasSeenPromo');
            if(!hasSeenPromo)
            {
                setIsOpen(true);
            }
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    const handleClose = () =>
    {
        setIsOpen(false);
        sessionStorage.setItem('hasSeenPromo', 'true');
    };

    if(!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-neutral-900 border-2 border-[#FFD700] rounded-2xl max-w-md w-full relative shadow-2xl shadow-yellow-500/20 transform animate-in zoom-in-95 duration-300">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <X size={24} />
                </button>

                <div className="p-8 text-center">
                    <div className="bg-[#FFD700]/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <Gift size={40} className="text-[#FFD700]" />
                    </div>

                    <h3 className="text-2xl font-black text-white uppercase mb-2">
                        ¡Tu Primera Clase <span className="text-[#FFD700]">Gratis!</span>
                    </h3>

                    <p className="text-gray-300 mb-8 leading-relaxed">
                        ¿Todavía lo estás pensando? Vení a probar nuestras instalaciones sin compromiso hoy mismo.
                    </p>

                    <div className="space-y-3">
                        <Button
                            href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=Hola!%20Quiero%20reclamar%20mi%20clase%20de%20prueba%20gratis%20%F0%9F%8E%81`}
                            className="w-full"
                        >
                            Reclamar Regalo
                        </Button>
                        <button
                            onClick={handleClose}
                            className="text-gray-500 text-sm hover:text-white transition-colors uppercase font-bold tracking-wider"
                        >
                            No, gracias
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromoModal;
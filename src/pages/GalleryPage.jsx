import React from 'react';
import {Dumbbell} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';
import {galleryImages} from '../data/gallery';

const GalleryPage = () =>
{
    return (
        <div className="pt-32 pb-20 px-4 bg-neutral-900 min-h-screen animate-in zoom-in-95 duration-500">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Nuestras Instalaciones" subtitle="Conoce tu lugar" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {galleryImages.map((img, idx) => (
                        <div key={idx} className="group relative h-80 overflow-hidden rounded-xl cursor-pointer">
                            <img
                                src={img}
                                alt={`Galería ${idx + 1}`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Dumbbell className="text-[#FFD700] w-12 h-12" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;

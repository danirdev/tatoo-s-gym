import React from 'react';
import {Dumbbell} from 'lucide-react';
import SectionTitle from '../components/ui/SectionTitle';

const GalleryPage = () =>
{
    const images = [
        "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=1469&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1623874514711-0f321325f318?q=80&w=1470&auto=format&fit=crop"
    ];

    return (
        <div className="pt-32 pb-20 px-4 bg-neutral-900 min-h-screen animate-in zoom-in-95 duration-500">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Nuestras Instalaciones" subtitle="Conoce tu lugar" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((img, idx) => (
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

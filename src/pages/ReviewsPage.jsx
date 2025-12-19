import React from 'react';
import {Quote, Star} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import {reviews} from '../data/reviews';

const ReviewsPage = () =>
{
    return (
        <div className="pt-32 pb-20 px-4 animate-in slide-in-from-right-4 duration-500">
            <div className="max-w-7xl mx-auto">
                <SectionTitle title="Lo que dicen de nosotros" subtitle="Comunidad Tatto's" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-neutral-800 p-8 rounded-2xl border border-neutral-700 relative mt-8">
                            <div className="absolute -top-6 left-8 bg-[#FFD700] p-3 rounded-full text-black">
                                <Quote size={24} fill="black" />
                            </div>
                            <div className="mt-6">
                                <div className="flex text-[#FFD700] mb-4">
                                    {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#FFD700" />)}
                                </div>
                                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                                <div>
                                    <h4 className="text-white font-bold uppercase">{review.name}</h4>
                                    <span className="text-gray-500 text-sm">{review.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action Reviews */}
                <div className="mt-20 text-center bg-neutral-800 rounded-3xl p-12 relative overflow-hidden">
                    <div className="relative z-10">
                        <h3 className="text-2xl font-bold text-white mb-4">¿Ya entrenaste con nosotros?</h3>
                        <p className="text-gray-400 mb-8">Tu opinión nos ayuda a seguir mejorando cada día.</p>
                        <Button href="https://g.page/r/Cb4R8cOtXOpYEBM/review">Dejar una Reseña</Button>
                    </div>
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#FFD700]/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsPage;

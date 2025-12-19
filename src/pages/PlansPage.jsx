import React from 'react';
import {CheckCircle2, HelpCircle} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';
import {plans} from '../data/plans';
import {faqs} from '../data/faqs';

const PlansPage = () => (
    <div className="pt-32 pb-20 px-4 bg-neutral-900 min-h-screen animate-in zoom-in-95 duration-500">
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="Membresías" subtitle="Invierte en ti mismo" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {plans.map((plan, idx) => (
                    <div
                        key={idx}
                        className={`bg-neutral-800 rounded-2xl p-8 border ${plan.highlight ? 'border-2 border-[#FFD700] relative transform md:-translate-y-4 shadow-2xl shadow-yellow-500/10' : 'border-neutral-700 hover:border-neutral-500 transition-colors'}`}
                    >
                        {plan.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest py-1 px-4 rounded-full">
                                {plan.highlightText}
                            </div>
                        )}
                        <h3 className="text-xl font-bold text-white uppercase mb-4">{plan.title}</h3>
                        <div className="flex items-baseline mb-6">
                            <span className="text-3xl text-[#FFD700] font-bold">$</span>
                            <span className="text-5xl text-white font-black tracking-tight">{plan.price}</span>
                            <span className="text-gray-400 ml-2">{plan.frequency}</span>
                        </div>
                        <p className="text-gray-400 mb-8 text-sm">{plan.description}</p>
                        <ul className="space-y-4 mb-8">
                            {plan.features.map((feature, fIdx) => (
                                <li key={fIdx} className={`flex items-center gap-3 ${feature.included ? (feature.bold ? "text-white" : "text-gray-300") : "text-gray-500 line-through"}`}>
                                    <CheckCircle2 size={18} className={feature.included ? "text-[#FFD700]" : "text-gray-500"} />
                                    {feature.bold ? <strong>{feature.text}</strong> : feature.text}
                                </li>
                            ))}
                        </ul>
                        <Button variant={plan.highlight ? "primary" : "outline"} className="w-full" href={plan.link}>Elegir Plan</Button>
                    </div>
                ))}
            </div>

            {/* FAQ Section */}
            <div className="mt-24 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white text-center mb-8 uppercase">Preguntas Frecuentes</h3>
                <div className="space-y-4">
                    {faqs.map((item, i) => (
                        <div key={i} className="bg-neutral-800 rounded-lg p-6 border border-neutral-700">
                            <h4 className="font-bold text-[#FFD700] mb-2 flex items-center gap-2"><HelpCircle size={18} /> {item.q}</h4>
                            <p className="text-gray-300 text-sm">{item.a}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default PlansPage;

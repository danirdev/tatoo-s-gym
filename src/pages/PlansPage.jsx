import React from 'react';
import {CheckCircle2, HelpCircle} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionTitle from '../components/ui/SectionTitle';

const PlansPage = () => (
    <div className="pt-32 pb-20 px-4 bg-neutral-900 min-h-screen animate-in zoom-in-95 duration-500">
        <div className="max-w-7xl mx-auto">
            <SectionTitle title="Membresías" subtitle="Invierte en ti mismo" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Plan Básico */}
                <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-500 transition-colors">
                    <h3 className="text-xl font-bold text-white uppercase mb-4">Pase Libre</h3>
                    <div className="flex items-baseline mb-6">
                        <span className="text-3xl text-[#FFD700] font-bold">$</span>
                        <span className="text-5xl text-white font-black tracking-tight">15.000</span>
                        <span className="text-gray-400 ml-2">/mes</span>
                    </div>
                    <p className="text-gray-400 mb-8 text-sm">Ideal para comenzar tu viaje fitness sin compromisos a largo plazo.</p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Acceso a sala de musculación
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Acceso a zona de cardio
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Duchas y vestuarios
                        </li>
                        <li className="flex items-center gap-3 text-gray-500 line-through">
                            <CheckCircle2 size={18} /> Rutina personalizada
                        </li>
                    </ul>
                    <Button variant="outline" className="w-full" href="https://wa.me/5493881234567?text=Hola,%20me%20interesa%20el%20Plan%20Pase%20Libre">Elegir Plan</Button>
                </div>

                {/* Plan Recomendado */}
                <div className="bg-neutral-800 rounded-2xl p-8 border-2 border-[#FFD700] relative transform md:-translate-y-4 shadow-2xl shadow-yellow-500/10">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-black font-black uppercase text-xs tracking-widest py-1 px-4 rounded-full">
                        Más Popular
                    </div>
                    <h3 className="text-xl font-bold text-white uppercase mb-4">Full Pack</h3>
                    <div className="flex items-baseline mb-6">
                        <span className="text-3xl text-[#FFD700] font-bold">$</span>
                        <span className="text-5xl text-white font-black tracking-tight">20.000</span>
                        <span className="text-gray-400 ml-2">/mes</span>
                    </div>
                    <p className="text-gray-400 mb-8 text-sm">Para quienes buscan resultados serios con guía profesional.</p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-white">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> <strong>Todo lo del Pase Libre</strong>
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Rutina personalizada en App
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Seguimiento mensual
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Clases grupales incluidas
                        </li>
                    </ul>
                    <Button variant="primary" className="w-full" href="https://wa.me/5493881234567?text=Hola,%20me%20interesa%20el%20Plan%20Full%20Pack">Elegir Plan</Button>
                </div>

                {/* Plan Trimestral */}
                <div className="bg-neutral-800 rounded-2xl p-8 border border-neutral-700 hover:border-neutral-500 transition-colors">
                    <h3 className="text-xl font-bold text-white uppercase mb-4">Trimestral</h3>
                    <div className="flex items-baseline mb-6">
                        <span className="text-3xl text-[#FFD700] font-bold">$</span>
                        <span className="text-5xl text-white font-black tracking-tight">50.000</span>
                        <span className="text-gray-400 ml-2">/total</span>
                    </div>
                    <p className="text-gray-400 mb-8 text-sm">Comprométete con tu cambio y ahorra dinero.</p>
                    <ul className="space-y-4 mb-8">
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Ahorras $10.000
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Congelamiento por 7 días
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Acceso total ilimitado
                        </li>
                        <li className="flex items-center gap-3 text-gray-300">
                            <CheckCircle2 size={18} className="text-[#FFD700]" /> Regalo de bienvenida
                        </li>
                    </ul>
                    <Button variant="outline" className="w-full" href="https://wa.me/5493881234567?text=Hola,%20me%20interesa%20el%20Plan%20Trimestral">Elegir Plan</Button>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-24 max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white text-center mb-8 uppercase">Preguntas Frecuentes</h3>
                <div className="space-y-4">
                    {[
                        {q: "¿Tengo que pagar matrícula?", a: "No, en Tatto's Gym la inscripción es bonificada. Solo pagas tu cuota mensual."},
                        {q: "¿Hay instructor en sala?", a: "Sí, siempre hay un profesor de piso disponible para guiarte en los ejercicios y corregir técnica."},
                        {q: "¿Cuáles son los medios de pago?", a: "Aceptamos efectivo, transferencia bancaria, tarjetas de débito y crédito."}
                    ].map((item, i) => (
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

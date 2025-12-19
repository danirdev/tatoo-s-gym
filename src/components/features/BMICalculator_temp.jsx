import React, {useState} from 'react';
import {Activity, RefreshCcw} from 'lucide-react';
import Button from '../ui/Button';

const BMICalculator_temp = () =>
{
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bmi, setBmi] = useState(null);
    const [status, setStatus] = useState('');

    const calculateBMI = () =>
    {
        if(height && weight)
        {
            const heightInMeters = height / 100;
            const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
            setBmi(bmiValue);

            if(bmiValue < 18.5) setStatus({text: 'Bajo Peso', color: 'text-blue-400'});
            else if(bmiValue >= 18.5 && bmiValue < 24.9) setStatus({text: 'Peso Normal', color: 'text-green-400'});
            else if(bmiValue >= 25 && bmiValue < 29.9) setStatus({text: 'Sobrepeso', color: 'text-yellow-400'});
            else setStatus({text: 'Obesidad', color: 'text-red-500'});
        }
    };

    const reset = () =>
    {
        setHeight('');
        setWeight('');
        setBmi(null);
    };

    return (
        <section className="py-20 bg-neutral-900 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="bg-neutral-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-neutral-700 flex flex-col md:flex-row gap-12 items-center">

                    <div className="flex-1 space-y-6">
                        <h3 className="text-[#FFD700] font-bold tracking-widest uppercase mb-2">Tu Salud Primero</h3>
                        <h2 className="text-4xl font-black text-white uppercase leading-none">Calculadora de <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-yellow-600">Masa Corporal</span></h2>
                        <p className="text-gray-400 text-lg">
                            Descubre tu estado físico actual. El IMC es un indicador clave para planificar tu rutina de entrenamiento en Tatto's Gym.
                        </p>
                    </div>

                    <div className="flex-1 w-full max-w-md bg-neutral-950 p-8 rounded-2xl border border-neutral-800">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Altura (cm)</label>
                                <input
                                    type="number"
                                    value={height}
                                    onChange={(e) => setHeight(e.target.value)}
                                    placeholder="Ej: 175"
                                    className="w-full bg-neutral-900 border border-neutral-700 text-white p-4 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-400 text-sm font-bold mb-2 uppercase">Peso (kg)</label>
                                <input
                                    type="number"
                                    value={weight}
                                    onChange={(e) => setWeight(e.target.value)}
                                    placeholder="Ej: 70"
                                    className="w-full bg-neutral-900 border border-neutral-700 text-white p-4 rounded-lg focus:border-[#FFD700] focus:outline-none transition-colors"
                                />
                            </div>

                            {!bmi ? (
                                <Button onClick={calculateBMI} className="w-full mt-4">
                                    <Activity size={20} /> Calcular Ahora
                                </Button>
                            ) : (
                                <div className="mt-6 animate-in fade-in zoom-in duration-300">
                                    <div className="text-center p-6 bg-neutral-900 rounded-xl border border-neutral-700">
                                        <p className="text-gray-400 uppercase text-xs font-bold mb-2">Tu Resultado</p>
                                        <div className="text-5xl font-black text-white mb-2">{bmi}</div>
                                        <div className={`text-xl font-bold uppercase ${status.color}`}>{status.text}</div>
                                    </div>
                                    <Button onClick={reset} variant="ghost" className="w-full mt-4">
                                        <RefreshCcw size={16} className="mr-2" /> Calcular de nuevo
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Adorno de fondo */}
            <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none"></div>
        </section>
    );
};

export default BMICalculator_temp;
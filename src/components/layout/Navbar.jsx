import React, {useState, useEffect} from 'react';
import {Menu, X, Dumbbell, MessageCircle} from 'lucide-react';
import Button from '../ui/Button';
import {navLinks} from '../../data/navigation';

const Navbar = ({activePage, setActivePage}) =>
{
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() =>
    {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() =>
    {
        window.scrollTo(0, 0);
        setIsMenuOpen(false);
    }, [activePage]);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 shadow-lg border-b border-white/10' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer group"
                        onClick={() => setActivePage('home')}
                    >
                        <Dumbbell className="h-8 w-8 text-[#FFD700] transition-transform group-hover:rotate-12" />
                        <div className="flex flex-col">
                            <span className="font-black text-2xl tracking-tighter leading-none text-white">
                                TATTO'S <span className="text-[#FFD700]">GYM</span>
                            </span>
                            <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 leading-none mt-1">Fitness Club</span>
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-8">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => setActivePage(link.id)}
                                    className={`font-bold uppercase text-sm tracking-wide transition-colors py-2 border-b-2 ${activePage === link.id
                                        ? 'text-[#FFD700] border-[#FFD700]'
                                        : 'text-gray-300 border-transparent hover:text-white hover:border-gray-500'
                                        }`}
                                >
                                    {link.label}
                                </button>
                            ))}
                            <Button variant="primary" className="!py-2 !px-4 !text-xs ml-4" href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE)}`}>
                                <MessageCircle size={16} /> WhatsApp
                            </Button>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-[#FFD700]">
                            {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Content */}
            {isMenuOpen && (
                <div className="md:hidden bg-neutral-900 border-b border-neutral-800 absolute w-full animate-in slide-in-from-top-10">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => setActivePage(link.id)}
                                className={`block w-full text-left px-3 py-4 text-base font-bold border-l-4 ${activePage === link.id
                                    ? 'border-[#FFD700] bg-white/5 text-[#FFD700]'
                                    : 'border-transparent text-gray-300 hover:bg-white/5 hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <div className="pt-4">
                            <Button href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE)}`} className="w-full">
                                Contactar por WhatsApp
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

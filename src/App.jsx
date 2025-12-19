import React, {useState} from 'react';
import {MessageCircle} from 'lucide-react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PlansPage from './pages/PlansPage';
import GalleryPage from './pages/GalleryPage';
import ReviewsPage from './pages/ReviewsPage';
import ContactPage from './pages/ContactPage';
//import PromoModal from './components/ui/PromoModal'; // Importar Modal

function App ()
{
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-[#FFD700] selection:text-black">

      {/* MODAL DE PROMOCIÓN */}
      {/* <PromoModal /> */}

      {/* NAVBAR */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* PAGE CONTENT */}
      <main>
        {activePage === 'home' && <HomePage navigate={setActivePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'plans' && <PlansPage />}
        {activePage === 'gallery' && <GalleryPage />}
        {activePage === 'reviews' && <ReviewsPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href={`https://wa.me/${import.meta.env.VITE_WHATSAPP_NUMBER}?text=${encodeURIComponent(import.meta.env.VITE_WHATSAPP_DEFAULT_MESSAGE)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer group"
        aria-label="Contactar por WhatsApp"
      >
        <span className="absolute right-full mr-4 bg-white text-black px-2 py-1 rounded text-xs font-bold uppercase whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
          ¿Consultas?
        </span>
        <MessageCircle size={32} fill="white" className="text-white" />
      </a>

      {/* FOOTER */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;
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

function App ()
{
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-[#FFD700] selection:text-black">

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
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all transform hover:scale-110 flex items-center justify-center cursor-pointer"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
      </a>

      {/* FOOTER */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}

export default App;

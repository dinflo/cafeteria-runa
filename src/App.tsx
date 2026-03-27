/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Coffee, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Clock, 
  CreditCard, 
  ChevronRight,
  Menu as MenuIcon,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const COLORS = {
  coffee: "#4B2C20",
  terracotta: "#A0522D",
  cream: "#F5F5DC",
  beige: "#D2B48C",
  ink: "#1A0F0A"
};

const MENU_ITEMS = [
  {
    category: "Cafés Normales",
    items: [
      { name: "Espresso", price: "S/ 5.00", desc: "Esencia pura de café seleccionado.", img: "https://picsum.photos/seed/espresso/400/300" },
      { name: "Americano", price: "S/ 7.00", desc: "Espresso con agua caliente, suave y aromático.", img: "https://picsum.photos/seed/americano/400/300" },
      { name: "Café con Leche", price: "S/ 8.00", desc: "Equilibrio perfecto entre café y leche cremosa.", img: "https://picsum.photos/seed/latte/400/300" },
    ]
  },
  {
    category: "Capuchinos",
    items: [
      { name: "Capuchino Clásico", price: "S/ 10.00", desc: "Espresso, leche vaporizada y mucha espuma.", img: "https://picsum.photos/seed/cappuccino/400/300" },
      { name: "Capuchino de Vainilla", price: "S/ 12.00", desc: "Toque dulce de vainilla en cada sorbo.", img: "https://picsum.photos/seed/vanilla/400/300" },
      { name: "Mocaccino", price: "S/ 12.00", desc: "Deliciosa mezcla de café, leche y chocolate.", img: "https://picsum.photos/seed/mocha/400/300" },
    ]
  },
  {
    category: "Frappés Helados",
    items: [
      { name: "Frappé de Café", price: "S/ 14.00", desc: "Café batido con hielo y crema batida.", img: "https://picsum.photos/seed/frappe/400/300" },
      { name: "Frappé de Caramelo", price: "S/ 15.00", desc: "Dulzura helada con hilos de caramelo.", img: "https://picsum.photos/seed/caramel/400/300" },
      { name: "Frappé de Oreo", price: "S/ 16.00", desc: "Explosión de sabor con galleta y chocolate.", img: "https://picsum.photos/seed/oreo/400/300" },
    ]
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A0F0A] font-sans selection:bg-[#A0522D] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-6"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold tracking-tighter flex items-center gap-2 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <Coffee className="text-[#A0522D]" />
            <span className={scrolled ? "text-[#4B2C20]" : "text-white"}>RUNA</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-8 items-center">
            {['Inicio', 'Menú', 'Nosotros', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))}
                className={`text-sm font-medium hover:text-[#A0522D] transition-colors ${scrolled ? "text-[#4B2C20]" : "text-white"}`}
              >
                {item}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('menu')}
              className="bg-[#A0522D] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#4B2C20] transition-all transform hover:scale-105"
            >
              Pedir Ahora
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="text-[#4B2C20]" /> : <MenuIcon className={scrolled ? "text-[#4B2C20]" : "text-white"} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-full left-0 w-full bg-white shadow-xl py-8 flex flex-col items-center gap-6 md:hidden"
          >
            {['Inicio', 'Menú', 'Nosotros', 'Contacto'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase().replace('í', 'i'))}
                className="text-lg font-medium text-[#4B2C20]"
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1920" 
            alt="Coffee background" 
            className="w-full h-full object-cover brightness-50"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#D2B48C] uppercase tracking-[0.3em] text-sm font-bold mb-4 block">Calca, Cusco • Perú</span>
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 tracking-tighter">RUNA</h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-light italic">
              "El alma del café artesanal en el corazón del Valle Sagrado."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('menu')}
                className="bg-[#A0522D] text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-[#A0522D] transition-all transform hover:scale-105"
              >
                Ver Nuestro Menú
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white/20 transition-all"
              >
                Nuestra Historia
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 cursor-pointer"
          onClick={() => scrollToSection('menu')}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4B2C20] mb-4">Nuestro Menú</h2>
          <div className="w-20 h-1 bg-[#A0522D] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Seleccionamos los mejores granos de la región para ofrecerte una experiencia sensorial única en cada taza.
          </p>
        </div>

        <div className="space-y-20">
          {MENU_ITEMS.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-2xl font-bold text-[#A0522D] mb-8 border-l-4 border-[#A0522D] pl-4">
                {category.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIdx) => (
                  <motion.div 
                    key={itemIdx}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
                  >
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 right-4 bg-[#4B2C20] text-white px-3 py-1 rounded-full text-sm font-bold">
                        {item.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-bold mb-2 text-[#4B2C20]">{item.name}</h4>
                      <p className="text-gray-500 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                      <button className="mt-4 text-[#A0522D] font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                        Pedir ahora <ChevronRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-[#4B2C20] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#A0522D]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D2B48C]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Sobre Nosotros</h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              En el corazón de Calca, Cusco, nace **RUNA**, un espacio dedicado a honrar la tradición del café peruano. Nuestro nombre, que en quechua significa "persona" o "ser humano", refleja nuestra filosofía: conectar a las personas a través de una taza de café excepcional.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Trabajamos de la mano con productores locales del Valle Sagrado, asegurando que cada grano sea tratado con el respeto que merece, desde la cosecha hasta el tostado artesanal que realizamos en casa.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="bg-[#A0522D] p-3 rounded-xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Origen Local</h4>
                  <p className="text-sm text-white/60">Granos de Cusco</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-[#A0522D] p-3 rounded-xl">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold">Tostado Diario</h4>
                  <p className="text-sm text-white/60">Frescura garantizada</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border-8 border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" 
                alt="Coffee making process" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#A0522D] p-8 rounded-2xl shadow-2xl hidden md:block">
              <p className="text-3xl font-bold mb-1">100%</p>
              <p className="text-sm uppercase tracking-widest font-bold opacity-80">Artesanal</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20 bg-[#FDFBF7] px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-[#4B2C20] mb-12">Métodos de Pago</h3>
          <div className="flex flex-wrap justify-center gap-12">
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:shadow-md transition-all">
                <img src="https://www.yape.com.pe/assets/images/logo-yape.png" alt="Yape" className="w-12 h-12 object-contain grayscale group-hover:grayscale-0 transition-all" />
              </div>
              <span className="font-bold text-[#4B2C20]">Yape</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:shadow-md transition-all">
                <CreditCard className="text-gray-400 group-hover:text-[#A0522D] transition-all" size={32} />
              </div>
              <span className="font-bold text-[#4B2C20]">Tarjetas</span>
            </div>
            <div className="flex flex-col items-center gap-4 group">
              <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100 group-hover:shadow-md transition-all">
                <span className="text-3xl font-bold text-gray-400 group-hover:text-[#A0522D] transition-all">S/</span>
              </div>
              <span className="font-bold text-[#4B2C20]">Efectivo</span>
            </div>
          </div>
          <p className="mt-10 text-gray-500 italic">"Pago simple, rápido y seguro."</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-[#4B2C20] mb-8">Contáctanos</h2>
            <p className="text-gray-600 mb-10 text-lg">
              ¿Tienes alguna duda o quieres hacer un pedido especial? Estamos aquí para escucharte.
            </p>
            
            <div className="space-y-8">
              <a 
                href="https://wa.me/51917306263" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-2xl bg-[#FDFBF7] hover:bg-[#A0522D] hover:text-white transition-all group"
              >
                <div className="bg-[#A0522D] group-hover:bg-white p-4 rounded-xl text-white group-hover:text-[#A0522D] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">WhatsApp</h4>
                  <p className="opacity-70">+51 917 306 263</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#FDFBF7]">
                <div className="bg-[#A0522D] p-4 rounded-xl text-white">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Ubicación</h4>
                  <p className="opacity-70">Calca, Cusco, Perú</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-2xl bg-[#FDFBF7]">
                <div className="bg-[#A0522D] p-4 rounded-xl text-white">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Horario</h4>
                  <p className="opacity-70">Lun - Sáb: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="h-[500px] rounded-3xl overflow-hidden shadow-2xl border-8 border-[#FDFBF7]">
            {/* Placeholder for Google Maps - In a real app, use an iframe or Google Maps API */}
            <div className="w-full h-full bg-gray-200 relative">
              <img 
                src="https://picsum.photos/seed/map-calca/800/600" 
                alt="Map location" 
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-4 rounded-2xl shadow-xl flex items-center gap-3">
                  <MapPin className="text-[#A0522D]" />
                  <span className="font-bold text-[#4B2C20]">RUNA Cafetería</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0F0A] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tighter mb-2">RUNA</h2>
            <p className="text-white/40 text-sm">© 2026 RUNA Cafetería. Todos los derechos reservados.</p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A0522D] transition-all">
              <Instagram size={20} />
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#A0522D] transition-all">
              <Facebook size={20} />
            </a>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-white/60 mb-2">Hecho con ❤️ en el Valle Sagrado</p>
            <div className="flex gap-4 justify-center md:justify-end text-xs uppercase tracking-widest font-bold opacity-40">
              <a href="#" className="hover:opacity-100">Privacidad</a>
              <a href="#" className="hover:opacity-100">Términos</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  MapPin, 
  Phone, 
  Clock, 
  Instagram, 
  MessageSquare, 
  ChefHat, 
  Star,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types & Constants ---

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  featured?: boolean;
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'b1',
    name: 'The Big Bite',
    description: 'Double beef patties, bacon, mozzarella sticks, onion rings, brioche bun, signature sauce.',
    price: 18500,
    category: 'Beef Burgers',
    featured: true
  },
  {
    id: 'b2',
    name: 'Classic Urban',
    description: 'Beef patty, lettuce, tomato, onion, pickles, house mustard.',
    price: 12000,
    category: 'Beef Burgers'
  },
  {
    id: 'c1',
    name: 'Spicy Ikeja Crispy',
    description: 'Buttermilk fried chicken, spicy slaw, jalapeños, sriracha mayo.',
    price: 14500,
    category: 'Chicken Burgers'
  },
  {
    id: 's1',
    name: 'Philadelphia Steak',
    description: 'Beef fillet, sautéed onion, mushroom, mozzarella, bell pepper, smoky mayo.',
    price: 16040,
    category: 'Sandwiches'
  },
  {
    id: 'st1',
    name: 'Loaded Fries',
    description: 'Crispy fries topped with melted cheese, bacon bits, and spring onions.',
    price: 6500,
    category: 'Starters'
  }
];

const CATEGORIES = ['Beef Burgers', 'Chicken Burgers', 'Sandwiches', 'Starters'];

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1571091723267-bc738321b02b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1512152272829-d311d99a3c65?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606755962773-b312ee972f98?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1481070414801-51fd732d7184?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1549611016-3a70d82b5040?auto=format&fit=crop&q=80&w=800"
];

// --- Components ---

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`bg-white/5 animate-pulse rounded-2xl ${className}`} />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const waLink = "https://wa.me/2349000000000?text=Hello%20MJ's%20Bites!%20I'd%20like%20to%20place%20an%20order%20from%20your%20menu%20at%20Ikeja%20City%20Mall.";

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-charcoal/95 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-mustard rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
            <span className="text-charcoal font-black text-xl italic">MJ</span>
          </div>
          <span className="font-display font-black text-2xl tracking-tighter uppercase">Bites</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {['Menu', 'Gallery', 'Reviews', 'Find Us'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-display font-bold uppercase tracking-widest hover:text-mustard transition-colors"
            >
              {item}
            </a>
          ))}
          <a 
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary py-2 px-6 text-sm"
          >
            Order Now
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-mustard" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-charcoal border-b border-white/10 px-6 py-8 flex flex-col gap-6 md:hidden"
          >
            {['Menu', 'Gallery', 'Reviews', 'Find Us'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="text-2xl font-display font-black uppercase"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a 
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-center"
            >
              Chat on WhatsApp
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const StatusBadge = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const checkStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      setIsOpen(hours >= 10 && hours < 21);
    };
    checkStatus();
    const timer = setInterval(checkStatus, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 w-fit">
      <div className={`w-2 h-2 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
      <span className="text-xs font-bold uppercase tracking-widest text-white/70">
        {isOpen ? 'Open Now' : 'Closed'} • until 21:00
      </span>
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Beef Burgers');
  const [menuLoading, setMenuLoading] = useState(false);
  const [galleryLoading, setGalleryLoading] = useState(true);

  useEffect(() => {
    // Initial gallery loading simulation
    const timer = setTimeout(() => setGalleryLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleCategoryChange = (cat: string) => {
    if (cat === activeCategory) return;
    setMenuLoading(true);
    setActiveCategory(cat);
    setTimeout(() => setMenuLoading(false), 800);
  };

  return (
    <div className="min-h-screen selection:bg-mustard selection:text-charcoal overflow-x-hidden">
      <Navbar />

      {/* --- Hero Section --- */}
      <header className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--color-mustard)_0%,_transparent_50%)]" />
          <div className="absolute bottom-0 left-0 w-full h-full bg-[radial-gradient(circle_at_bottom_left,_var(--color-brick)_0%,_transparent_40%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <StatusBadge />
            <h1 className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter leading-[0.9] mt-6 mb-8 group">
              Big <span className="text-mustard">Bites</span><br />
              <span className="relative">
                Bigger
                <div className="absolute -bottom-2 left-0 w-full h-3 bg-brick/40 -z-10 group-hover:bg-brick/60 transition-colors" />
              </span><br />
              Flavors.
            </h1>
            <p className="text-xl text-white/70 mb-10 max-w-lg leading-relaxed">
              Experience Ikeja’s most notorious burgers. Hand-crafted, urban-inspired, 
              and dangerously addictive. Located in the heart of Ikeja City Mall.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#menu" className="btn-primary group flex items-center gap-2">
                View Menu <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://glovoapp.com" target="_blank" className="btn-secondary flex items-center gap-2">
                <ShoppingBag size={20} /> Order on Glovo
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: 'spring' }}
            className="relative"
          >
            <div className="absolute inset-0 bg-mustard rounded-full blur-[100px] opacity-20 -z-10 animate-pulse" />
            <img 
              src="https://images.unsplash.com/photo-1568901239072-95351db8900d?auto=format&fit=crop&q=80&w=1000" 
              alt="The Big Bite Burger"
              className="w-full object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)]"
              onLoad={(e) => {
                const img = e.target as HTMLImageElement;
                img.classList.add('opacity-100');
              }}
            />
            {/* Floating Tag */}
            <div className="absolute -top-4 -right-4 bg-brick rotate-12 p-4 border-2 border-white">
              <span className="font-display font-black uppercase text-xs tracking-widest block">Signature</span>
              <span className="font-display font-black uppercase text-xl">The Big Bite</span>
            </div>
          </motion.div>
        </div>
      </header>

      {/* --- Story Highlights --- */}
      <section className="py-20 border-y border-white/5 bg-dark-gray/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { icon: ChefHat, label: "Gourmet Craft", val: "100% Beef" },
            { icon: MapPin, label: "Ikeja CM", val: "Shoprite Wing" },
            { icon: MessageSquare, label: "WhatsApp", val: "Order Instantly" },
            { icon: Star, label: "Rating", val: "4.8/5.0" }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-3 group">
              <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-mustard group-hover:text-charcoal transition-colors">
                <item.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{item.label}</p>
                <p className="font-display font-extrabold uppercase text-sm tracking-tight">{item.val}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Menu Section --- */}
      <section id="menu" className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <h2 className="text-5xl font-display font-black uppercase tracking-tighter mb-4">Our <span className="text-mustard italic">Menu</span></h2>
              <p className="text-white/50 max-w-md">Bold flavors, premium ingredients, and the best combos in Nigeria.</p>
            </div>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-6 py-2 rounded-full border text-xs font-bold uppercase tracking-widest transition-all ${
                    activeCategory === cat 
                      ? 'bg-mustard text-charcoal border-mustard' 
                      : 'border-white/10 text-white/50 hover:border-white/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {menuLoading ? (
                // Skeletons while category switches
                [...Array(3)].map((_, i) => (
                  <div key={`skeleton-${i}`} className="industrial-border p-6 rounded-2xl bg-dark-gray/30 h-64">
                    <Skeleton className="h-8 w-3/4 mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-10" />
                    <div className="flex justify-between items-center mt-auto">
                      <Skeleton className="h-6 w-24" />
                      <Skeleton className="h-10 w-10 rounded-full" />
                    </div>
                  </div>
                ))
              ) : (
                MENU_ITEMS.filter(item => item.category === activeCategory).map((item, idx) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ delay: idx * 0.1 }}
                    className="industrial-border p-6 rounded-2xl bg-dark-gray/30 hover:bg-dark-gray/50 transition-colors flex flex-col group"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-display font-bold text-xl uppercase leading-tight group-hover:text-mustard transition-colors">
                        {item.name}
                      </h3>
                    </div>
                    <p className="text-sm text-white/50 mb-8 flex-grow leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                      <span className="font-display font-black text-xl">
                        ₦{item.price.toLocaleString()}
                      </span>
                      <button className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-mustard hover:text-charcoal transition-colors">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>

            {/* Special Promo Card */}
            <div className="lg:col-span-3 mt-12 overflow-hidden rounded-3xl relative p-12 bg-brick group">
              <div className="absolute right-0 top-0 w-1/3 h-full opacity-20 pointer-events-none skew-x-12 translate-x-12 bg-black/50" />
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-[10px] font-bold uppercase tracking-widest text-white mb-4">Most Popular</span>
                  <h3 className="text-4xl md:text-5xl font-display font-black uppercase tracking-tighter mb-4">Build Your Own Combo</h3>
                  <p className="text-white/80 max-w-md text-lg">Add Fries, Creamy Coleslaw, and a Soft Drink to any burger or sandwich.</p>
                </div>
                <div className="bg-charcoal p-8 rounded-2xl text-center rotate-3 scale-110 shadow-2xl">
                  <p className="text-must-white/50 text-xs uppercase font-bold tracking-widest mb-1">Add Just</p>
                  <p className="text-5xl font-display font-black text-mustard">₦4,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Gallery Section --- */}
      <section id="gallery" className="py-24 bg-dark-gray/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display font-black uppercase tracking-tighter">Bite <span className="text-brick italic">Gallery</span></h2>
            <div className="w-24 h-1 bg-mustard mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryLoading ? (
              [...Array(8)].map((_, i) => (
                <div key={`gal-skel-${i}`} className={`rounded-2xl overflow-hidden ${i === 4 ? 'md:col-span-2' : ''}`}>
                  <Skeleton className="w-full h-80" />
                </div>
              ))
            ) : (
              GALLERY_IMAGES.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 0.98 }}
                  className={`overflow-hidden rounded-2xl relative group bg-white/5 ${i === 4 ? 'md:col-span-2 md:row-span-1' : ''}`}
                >
                  <img 
                    src={src} 
                    alt="Food close-up" 
                    className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" 
                    onLoad={(e) => (e.target as HTMLImageElement).classList.add('loaded')}
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <Instagram className="text-white" />
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* --- Reviews Section --- */}
      <section id="reviews" className="py-24 bg-charcoal overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter">Customer <span className="text-mustard">Vibe Check</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                user: "Rachel West",
                text: "Warm and welcoming atmosphere. The Big Bite burger is genuinely the best I've had in Lagos. Those mozzarella sticks inside are a game changer!",
                stars: 5
              },
              {
                user: "David Okon",
                text: "Fast service, even on busy weekends at the mall. The Philadelphia Steak sandwich is incredibly juicy. 10/10 recommendation.",
                stars: 5
              },
              {
                user: "Tami S.",
                text: "The interior is so cool and urban. Great place to hang out with friends before a movie. Don't skip the loaded fries!",
                stars: 4
              }
            ].map((review, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 transform translate-x-1/2 -translate-y-1/2 opacity-5">
                  <ChefHat size={120} />
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.stars)].map((_, i) => <Star key={i} size={14} className="fill-mustard text-mustard" />)}
                </div>
                <p className="text-white/70 italic mb-6 leading-relaxed">"{review.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-mustard/20 flex items-center justify-center font-black text-mustard text-xs">
                    {review.user[0]}
                  </div>
                  <span className="font-display font-bold uppercase text-xs tracking-widest">{review.user}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Footer & Location --- */}
      <footer id="find-us" className="bg-dark-gray pt-24 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <div className="w-8 h-8 bg-mustard rounded flex items-center justify-center">
                  <span className="text-charcoal font-black text-lg italic">MJ</span>
                </div>
                <span className="font-display font-black text-xl tracking-tighter uppercase">Bites</span>
              </div>
              <h3 className="text-2xl font-display font-extrabold uppercase mb-4">The Heart of Ikeja’s Burger Scene.</h3>
              <p className="text-white/50 mb-8 max-w-sm">Premium ingredients, urban craft, and big flavors. Find us in Ikeja City Mall, shoprite wing.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Instagram size={20} />
                </a>
                <a 
                  href="https://wa.me/2349000000000?text=Hello%20MJ's%20Bites!%20I'd%20like%20to%20place%20an%20order%20from%20your%20menu%20at%20Ikeja%20City%20Mall." 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <MessageSquare size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-display font-bold uppercase text-xs tracking-widest text-mustard mb-8">Hours</h4>
              <ul className="space-y-4">
                {['Monday - Saturday', 'Sunday'].map((day) => (
                  <li key={day} className="flex justify-between text-sm">
                    <span className="text-white/50">{day}</span>
                    <span className="font-bold">10:00 - 21:00</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-display font-bold uppercase text-xs tracking-widest text-mustard mb-8">Location</h4>
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="text-brick" />
                  <p className="text-sm text-white/70">Shoprite Wing, Ikeja City Mall, Obafemi Awolowo Way, Alausa, Ikeja, Lagos.</p>
                </div>
                <a 
                  href="https://wa.me/2349000000000?text=Hello%20MJ's%20Bites!%20I'd%20like%20to%20place%20an%20order%20from%20your%20menu%20at%20Ikeja%20City%20Mall." 
                  className="flex gap-3 items-center group hover:text-mustard transition-colors"
                >
                  <Phone size={18} className="text-brick group-hover:text-mustard" />
                  <p className="text-sm text-white/70 tracking-widest font-bold group-hover:text-white transition-colors">+234 (0) 900 000 000</p>
                </a>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="w-full h-[400px] bg-charcoal/50 rounded-3xl overflow-hidden border border-white/10 mb-12 relative group">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.090623696803!2d3.359265214046961!3d6.634351323631899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9394597d3989%3A0xe239e2303577d8a9!2sIkeja%20City%20Mall!5e0!3m2!1sen!2sng!4v1652192000000!5m2!1sen!2sng"
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'grayscale(1) invert(0.9) contrast(1.2)' }} 
              allowFullScreen={true}
              loading="lazy" 
            />
            <div className="absolute inset-0 pointer-events-none border-[12px] border-dark-gray/50 rounded-3xl" />
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[10px] uppercase tracking-widest text-white/30">
            <p>© 2026 MJ'S BITES. All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

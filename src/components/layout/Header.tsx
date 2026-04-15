import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Ana Sayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "Hizmetler", path: "/hizmetler" },
  { label: "Galeri", path: "/galeri" },
  { label: "İletişim", path: "/iletisim" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group transition-transform duration-300 active:scale-95">
            <div className="relative p-1.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg shadow-black/10 group-hover:border-white/40 transition-all overflow-hidden lg:h-14 lg:w-14 h-12 w-12 flex items-center justify-center">
              <img src={logo} alt="Paşa Motor" className="h-full w-auto object-contain drop-shadow-md brightness-110 contrast-110 scale-110" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg md:text-xl tracking-tight leading-none text-foreground group-hover:text-primary transition-colors">
                PAŞA MOTOR
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-primary/80 mt-1">
                Yetkili Bayii
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1.5 px-2 py-1.5 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 relative group overflow-hidden ${
                  location.pathname === link.path
                    ? "text-primary-foreground bg-primary shadow-lg shadow-primary/20"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+902125868598"
              className="hidden sm:flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-lg shadow-primary/20"
            >
              <Phone className="w-4 h-4 fill-current" />
              <span>0212 586 85 98</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 text-foreground transition-all active:scale-90"
              aria-label="Menüyü aç"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`lg:hidden fixed inset-x-0 top-[64px] md:top-[80px] bg-background/95 backdrop-blur-xl border-b border-white/10 shadow-2xl transition-all duration-500 origin-top overflow-hidden ${
          isOpen ? "max-h-[80vh] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <nav className="container mx-auto px-6 flex flex-col gap-2">
          {navLinks.map((link, idx) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className={`px-6 py-4 rounded-2xl text-base font-bold transition-all flex items-center justify-between group ${
                location.pathname === link.path
                  ? "text-primary-foreground bg-primary shadow-lg shadow-primary/20 translate-x-1"
                  : "text-foreground hover:bg-white/10 active:bg-white/20"
              }`}
            >
              {link.label}
              <div className={`w-2 h-2 rounded-full bg-primary transition-all duration-300 ${location.pathname === link.path ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-50"}`} />
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="tel:02125868598"
              className="flex items-center justify-center gap-3 px-6 py-5 rounded-2xl bg-primary text-primary-foreground font-extrabold text-base shadow-lg shadow-primary/30 active:scale-95 transition-all"
            >
              <Phone className="w-5 h-5 fill-current" />
              0212 586 85 98
            </a>
            <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest mt-6 font-bold pb-4">
              Paşa Motor — Motosiklet Tutkunlarının Adresi
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

import { ChevronRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Paşa Motor showroom"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(180deg, hsl(220 20% 7% / 0.3) 0%, hsl(220 20% 7% / 0.85) 60%, hsl(220 20% 7%) 100%)" }}
        />
      </div>

      {/* Particles effect */}
      <div className="hero-particles">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="hero-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
              backgroundColor: '#C9A84C', // override to force gold
              boxShadow: '0 0 8px 2px rgba(201, 168, 76, 0.6)'
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-muted-foreground mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            TVS • Hero • Falcon • Işıldar Yetkili Bayii
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 animate-fade-in text-foreground" style={{ animationDelay: "0.1s" }}>
            İstanbul’da Güvenilir <br />
            <span className="gradient-text">Motosiklet</span> Yetkili Servis Bayisi
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Fatih'te 4 markanın yetkili satış ve servis noktası. Motosiklet satışı, profesyonel servis ve orijinal yedek parça hizmetleri.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link
              to="/iletisim"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-all glow-red"
            >
              Bize Ulaşın
              <ChevronRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+902125868598"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass text-foreground font-semibold text-sm hover:bg-muted/50 transition-all"
            >
              <Phone className="w-4 h-4" />
              Hemen Arayın
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-border/50 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "4", label: "Yetkili Marka" },
              { value: "20+", label: "Yıllık Deneyim" },
              { value: "1000+", label: "Mutlu Müşteri" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading font-bold text-2xl md:text-3xl gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Logo Section */}
        <div className="hero-visual hidden lg:flex justify-center relative w-full h-[500px]">
          <div className="hero-glow"></div>
          <div className="hero-image-wrapper flex items-center justify-center">
            <img
              src="/images/logo.png"
              alt="Paşa Motor Logo"
              className="w-full max-w-[520px] h-auto object-contain z-10 relative drop-shadow-2xl animate-hero-intro"
              onAnimationEnd={(e) => {
                e.currentTarget.classList.remove('animate-hero-intro');
                e.currentTarget.classList.add('animate-hero-float');
              }}
              style={{ 
                filter: "drop-shadow(0 20px 50px rgba(255, 215, 0, 0.5))",
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default HeroSection;

import Layout from "@/components/layout/Layout";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Navigation } from "lucide-react";
import { useState, useMemo } from "react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/seo/SEOHead";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icons
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// Custom Motorcycle Icon for the map
const motorcycleIcon = L.divIcon({
  html: `<div class="w-12 h-12 flex items-center justify-center bg-primary rounded-full shadow-lg border-2 border-white motorcycle-marker">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-white"><circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="9" cy="7.5" r="3.5"/><path d="M5.5 17.5 12 17.5 12 4.5 18.5 4.5"/><path d="M9 7.5 12 11.5"/></svg>
        </div>`,
  className: "custom-div-icon",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

const Iletisim = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", phone: "", subject: "", message: "" });
  
  const position: [number, number] = [41.0072108, 28.9364678];
  
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Mesajınız alındı!", description: "En kısa sürede size dönüş yapacağız." });
    setForm({ name: "", phone: "", subject: "", message: "" });
  };

  return (
    <Layout>
      <SEOHead
        title="İletişim | Paşa Motor - İstanbul Fatih Motosiklet Bayii"
        description="Paşa Motor ile iletişime geçin. Adres: Seyyid Ömer, Kızılelma Cd. No:66, 34098 Fatih/İstanbul. Tel: 0212 586 85 98. WhatsApp: 0534 899 68 17. Motosiklet satış ve servis."
        canonical="https://pasamotor.com.tr/iletisim"
        keywords="paşa motor iletişim, motosiklet bayii telefon, fatih motosiklet adres, istanbul motosiklet iletişim"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-4">İletişim</h1>
            <p className="text-lg text-muted-foreground">Bize ulaşmak için aşağıdaki kanalları kullanabilirsiniz.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="glass-card rounded-xl p-6">
                <h2 className="font-heading font-semibold text-lg text-foreground mb-4">İletişim Bilgileri</h2>
                <div className="space-y-4">
                  <a href="tel:02125868598" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground font-medium">Telefon</p>
                      <p className="text-sm">0212 586 85 98</p>
                    </div>
                  </a>
                  <a href="tel:05348996817" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground font-medium">GSM (Nihat KAN)</p>
                      <p className="text-sm">0534 899 68 17</p>
                    </div>
                  </a>
                  <a href="mailto:pasamotor@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 shrink-0" />
                    <div>
                      <p className="text-sm text-foreground font-medium">E-posta</p>
                      <p className="text-sm">pasamotor@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">Adres</p>
                      <p className="text-sm">Seyyid Ömer, Kızılelma Cd. No:66, 34098 Fatih/İstanbul</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm text-foreground font-medium">Çalışma Saatleri</p>
                      <p className="text-sm">Hİ: 09:00-19:00 | Cmt: 09:00-17:00 | Paz: Kapalı</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://wa.me/905348996817?text=Merhaba%2C%20bilgi%20almak%20istiyorum."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-green-500/20"
                  style={{ backgroundColor: "#25D366", color: "#fff" }}
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-bold text-sm transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20"
                >
                  <Navigation className="w-5 h-5" />
                  Yol Tarifi Al (Ride-To)
                </a>
              </div>

              {/* Leaflet Map */}
              <div className="rounded-2xl overflow-hidden h-[400px] border border-white/10 shadow-2xl relative group">
                <MapContainer 
                  center={position} 
                  zoom={16} 
                  scrollWheelZoom={false}
                  className="h-full w-full"
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={position} icon={motorcycleIcon}>
                    <Popup className="custom-popup">
                      <div className="p-2 text-center">
                        <h4 className="font-bold text-primary mb-1">Paşa Motor</h4>
                        <p className="text-xs text-muted-foreground mb-2">Motosiklet Yetkili Bayii</p>
                        <a 
                          href={googleMapsUrl} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-[10px] bg-primary text-white px-3 py-1 rounded-full font-bold uppercase transition-colors hover:bg-primary/80"
                        >
                          Sürüşü Başlat
                        </a>
                      </div>
                    </Popup>
                  </Marker>
                </MapContainer>
                {/* Mobile specific map tooltip */}
                <div className="absolute top-4 right-4 z-[1000] lg:hidden">
                  <div className="bg-background/80 backdrop-blur-md border border-white/10 p-2 rounded-lg shadow-lg text-[10px] font-bold text-foreground">
                    Haritayı Kaydırın
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card rounded-xl p-6 md:p-8 self-start sticky top-24">
              <h2 className="font-heading font-bold text-2xl text-foreground mb-2">Bize Mesaj Gönderin</h2>
              <p className="text-muted-foreground text-sm mb-6">Sorularınız için formu doldurabilirsiniz.</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Ad Soyad</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Telefon</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="05XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Konu</label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                      placeholder="Mesaj konusu"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-1.5 block">Mesajınız</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                    placeholder="Size nasıl yardımcı olabiliriz?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-primary text-primary-foreground font-extrabold text-base hover:bg-primary/90 hover:-translate-y-1 active:translate-y-0 shadow-lg shadow-primary/30 transition-all"
                >
                  <Send className="w-5 h-5" />
                  Mesajı Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Iletisim;

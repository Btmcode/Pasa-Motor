import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import BrandsSection from "@/components/home/BrandsSection";
import ServicesSection from "@/components/home/ServicesSection";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import JsonLd, { motorcycleDealerSchema } from "@/components/seo/JsonLd";
import SEOHead from "@/components/seo/SEOHead";

const Index = () => {
  return (
    <Layout>
      <SEOHead
        title="Paşa Motor | İstanbul Fatih Motosiklet Yetkili Bayii | TVS, Hero, Falcon, Işıldar"
        description="Paşa Motor; İstanbul Fatih'te TVS, Hero, Falcon ve Işıldar yetkili motosiklet bayisidir. Sıfır motosiklet satışı, profesyonel teknik servis ve orijinal yedek parça hizmetleri sunar."
        canonical="https://pasamotor.com.tr"
        keywords="motosiklet istanbul fatih, tvs motor yetkili bayii, hero motosiklet, falcon motor, ışıldar yetkili servis, kurye motoru"
      />
      <JsonLd data={motorcycleDealerSchema} />
      <HeroSection />
      <BrandsSection />
      <ServicesSection />
      <FAQ />
      <CTASection />
    </Layout>
  );
};

export default Index;

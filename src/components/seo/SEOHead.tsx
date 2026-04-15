import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  schema?: Record<string, unknown>;
}

const SEOHead = ({
  title,
  description,
  canonical = "https://pasamotor.com.tr",
  ogImage = "https://pasamotor.com.tr/images/logo.png",
  keywords = "motosiklet, istanbul, fatih, tvs, hero, falcon, ışıldar, yetkili bayii, motosiklet servis, yedek parça",
  schema,
}: SEOProps) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper: set or create a meta tag
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("[name=")
          ? "name"
          : selector.includes("[property=")
          ? "property"
          : "name";
        const val = selector.match(/["']([^"']+)["']/)?.[1] ?? "";
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    setMeta('meta[name="description"]', description);
    setMeta('meta[name="keywords"]', keywords);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonical);
    setMeta('meta[property="og:image"]', ogImage);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:image"]', ogImage);

    // Canonical
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalEl) {
      canonicalEl = document.createElement("link");
      canonicalEl.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalEl);
    }
    canonicalEl.setAttribute("href", canonical);

    // Schema JSON-LD
    if (schema) {
      const existingScript = document.querySelector('script[data-seo-schema]');
      if (existingScript) existingScript.remove();
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }
  }, [title, description, canonical, ogImage, keywords, schema]);

  return null;
};

export default SEOHead;

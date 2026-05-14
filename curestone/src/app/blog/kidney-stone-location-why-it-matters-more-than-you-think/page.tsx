import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kidney Stone Location: Why It Matters More Than You Think | CureStone",
  description: "Kidney stones occur when excess minerals and salts accumulate as hard deposits in the kidneys. Their size can vary from that of a grain of sand to a golf",
  alternates: {
    canonical: "https://curestone.in/blog/kidney-stone-location-why-it-matters-more-than-you-think",
  },
  openGraph: {
    title: "Kidney Stone Location: Why It Matters More Than You Think | CureStone",
    description: "Kidney stones occur when excess minerals and salts accumulate as hard deposits in the kidneys. Their size can vary from that of a grain of sand to a golf",
    url: "https://curestone.in/blog/kidney-stone-location-why-it-matters-more-than-you-think",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Kidney Stone Location: Why It Matters More Than You Think | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Kidney Stone Location: Why It Matters More Than You Think | CureStone",
  description: "Kidney stones occur when excess minerals and salts accumulate as hard deposits in the kidneys. Their size can vary from that of a grain of sand to a golf",
  image: "https://curestone.in/blogs/kidney-stone-location-why-it-matters-more-than-you-think.jpg",
  url: "https://curestone.in/blog/kidney-stone-location-why-it-matters-more-than-you-think",
  datePublished: "2024-01-01",
  dateModified: "2025-01-01",
  author: {
    "@type": "Person",
    name: "Dr. Anshul Goel",
    url: "https://curestone.in",
    jobTitle: "Senior Urologist",
  },
  publisher: {
    "@type": "Organization",
    name: "CureStone",
    logo: {
      "@type": "ImageObject",
      url: "https://curestone.in/PNG-Black-e1664728676618.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://curestone.in/blog/kidney-stone-location-why-it-matters-more-than-you-think",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://curestone.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Blog",
      item: "https://curestone.in/blog",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Kidney Stone Location: Why It Matters More Than You Think | CureStone",
      item: "https://curestone.in/blog/kidney-stone-location-why-it-matters-more-than-you-think",
    },
  ],
};

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{
        __html: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
        .editorial-gradient { background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%); }
      `}} />

      
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <Navbar />

      <main className="flex-grow pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-28 bg-slate-50">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 text-blue-900 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">article</span> CureStone Blog
            </div>
            <h1 className="font-sans text-4xl lg:text-6xl font-extrabold text-blue-900 leading-tight tracking-tighter mb-6">
              Kidney Stone Location: Why It Matters More Than You Think
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones occur when excess minerals and salts accumulate as hard deposits in the kidneys. Their size can vary from that of a grain of sand to a golf
            </p>
            <a
              href="https://thecurestone.com/kidney/kidney-stone-location-why-it-matters-more-than-you-think/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-700 text-sm font-medium hover:underline"
            >
              <span className="material-symbols-outlined text-sm">open_in_new</span>
              Read original article
            </a>
          </div>
        </section>

        
          {/* Featured Image */}
          <div className="max-w-4xl mx-auto px-8 mb-12">
            <img
              src="/blogs/kidney-stone-location-why-it-matters-more-than-you-think.jpg"
              alt="Kidney Stone Location: Why It Matters More Than You Think"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones occur when excess minerals and salts accumulate as hard deposits in the kidneys. Their size can vary from that of a grain of sand to a golf ball. While a lot is discussed regarding their causes, symptoms, and treatments, the location of the stone is one key issue that is often overlooked. The location of the stone in the urinary tract significantly affects the type of symptoms the patient has, how the condition is diagnosed, and what treatment is most suitable.</p>
              <p className="text-slate-600 leading-relaxed mb-6">We focus on the impact of the location of the kidney stone on its treatment while outlining why this detail makes all the difference in determining the course of treatment in this blog.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Knowing the reason of how matter stone location affects the mentioned challenges can be simplified by understanding basic the structure of urinary tract. These include:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">The Urinary Tract: A Quick Overview</h2>
              <p className="text-slate-600 leading-relaxed mb-6">– Kidneys: The two bean-shaped organs that act as filters of blood to produce urine.</p>
              <p className="text-slate-600 leading-relaxed mb-6">– Ureters: Tubes through which urine would flow from the kidneys to the bladder.</p>
              <p className="text-slate-600 leading-relaxed mb-6">– Bladder: The accepted terminology for the area that stores urine until prompted for expulsion.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">1. Stones in the Kidney</h2>
              <p className="text-slate-600 leading-relaxed mb-6">All parts of the kidneys and bladder are connected by tubes, and every part has its corresponding challenges.</p>
              <p className="text-slate-600 leading-relaxed mb-6">These types of stones are fewer, tend to be small and pass unobserved, and if non-obstructive, stones can form in different areas of the kidney.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Urinary bladder: the small cavities that receives urine from the kidney.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">2. Stones in the Ureter</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney basin: the major part of the kidney that gathers urine prior to it passing through the urine tube.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Less than 5 mm: small stones generally pass by themselves.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Large stones: require methods like RIRS, extracorporeal shockwave lithotripsy (ESWL) and percutaneous nephrolithotomy (PCNL)/ureteroscopy.</p>
          </div>

          {/* CTA */}
          <div className="editorial-gradient rounded-3xl p-12 text-center mt-16 relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-sans text-3xl lg:text-4xl font-extrabold text-white mb-4 tracking-tighter">
                Ready to Be Stone-Free?
              </h2>
              <p className="text-blue-100 text-lg max-w-xl mx-auto mb-8 opacity-90">
                Consult with our expert urologists. Advanced laser procedures with 24-hour recovery.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="bg-amber-500 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                  Book Free Consultation
                </button>
                <a className="text-white flex items-center gap-2 font-bold text-lg" href="tel:+918800263884">
                  <span className="material-symbols-outlined">call</span> +91 88002 63884
                </a>
              </div>
            </div>
            <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-black/5 rounded-full blur-3xl"></div>
          </div>
        </article>

      </main>

      <Footer />
    </div>
  );
}

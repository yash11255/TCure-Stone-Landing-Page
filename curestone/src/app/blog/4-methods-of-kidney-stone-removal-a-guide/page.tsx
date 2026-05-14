import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "4 Methods of Kidney Stone Removal: A Guide | CureStone",
  description: "When you seek help for kidney stones, there are many possible treatments to relieve the discomfort and restore normal kidney function by surgically",
  alternates: {
    canonical: "https://curestone.in/blog/4-methods-of-kidney-stone-removal-a-guide",
  },
  openGraph: {
    title: "4 Methods of Kidney Stone Removal: A Guide | CureStone",
    description: "When you seek help for kidney stones, there are many possible treatments to relieve the discomfort and restore normal kidney function by surgically",
    url: "https://curestone.in/blog/4-methods-of-kidney-stone-removal-a-guide",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "4 Methods of Kidney Stone Removal: A Guide | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "4 Methods of Kidney Stone Removal: A Guide | CureStone",
  description: "When you seek help for kidney stones, there are many possible treatments to relieve the discomfort and restore normal kidney function by surgically",
  image: "https://curestone.in/blogs/4-methods-of-kidney-stone-removal-a-guide.jpg",
  url: "https://curestone.in/blog/4-methods-of-kidney-stone-removal-a-guide",
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
    "@id": "https://curestone.in/blog/4-methods-of-kidney-stone-removal-a-guide",
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
      name: "4 Methods of Kidney Stone Removal: A Guide | CureStone",
      item: "https://curestone.in/blog/4-methods-of-kidney-stone-removal-a-guide",
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
              4 Methods of Kidney Stone Removal: A Guide
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              When you seek help for kidney stones, there are many possible treatments to relieve the discomfort and restore normal kidney function by surgically
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/4-methods-of-kidney-stone-removal-a-guide/"
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
              src="/blogs/4-methods-of-kidney-stone-removal-a-guide.jpg"
              alt="4 Methods of Kidney Stone Removal: A Guide"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">When you seek help for kidney stones, there are many possible treatments to relieve the discomfort and restore normal kidney function by surgically removing the stones. Fortunately, the field of medicine has come a long way, and we now have several effective techniques that can assist in removing kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In this blog, we will cover the four most popular methods: Retrograde Intrarenal Surgery (RIRS),  Extracorporeal Shock Wave Lithotripsy (ESWL), Percutaneous Nephrolithotomy (PCNL), and Laparoscopy or Open surgical techniques. Each technique has its own benefits, and is selected according to the size, position and nature of the stone and the general health of the patient.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Extracorporeal Shock Wave Lithotripsy (ESWL) uses high-energy sound waves to break kidney stones into smaller pieces that can be passed through the urinary tract. The patient lays on a unique table as a machine emits shock waves toward a kidney stone during the procedure. This energy shatters the stone, and over time, pieces are expelled from urination.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Extracorporeal Shock Wave Lithotripsy (ESWL)</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Least Invasive: Painless process involving no incisions or surgical intervention.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Rapid Recovery: Minimal discomfort is reported by most patients and they may resume their routine shortly after the procedure.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Best for Smaller Stones: ESWL is primarily suited for stones smaller than 2 centimeters in diameter and located in the kidney or upper ureter.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Although ESWL is a safe and effective technique overall, it actually shows variable success particularly based on composition of stone and in patients with an altered body habitus. It may take multiple sessions to completely fragment the stone.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Retrograde Intrarenal Surgery (RIRS) is a minimally invasive method that allows the access of the kidney through the nature urinary tract with the help of the flexible ureteroscope. Surgeons use this technique to navigate through the urethra and bladder into the ureter and kidney where the stone is located. After the stone has been visualized, it is fragmented using a laser fiber, and fragments are either extracted or able to pass spontaneously.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Minimally Invasive Procedure: The procedure is carried out through the natural way of urinary passage, thus there are no external cuts leading to lesser risk of infection and scarring.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Precision: A flexible ureteroscope allows for visualization of the stone area in high definition, which helps in targeting the stone and fragmentation.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Versatile: Another major advantage of RIRS is that it can access stones in virtually all locations of the kidney and ureter, including regions that are not amenable to treatment with ESWL.</p>
              <p className="text-slate-600 leading-relaxed mb-6">RIRS has special advantages in the case of lower pole stones or in case of failure of ESWL. But it might not be suitable for very large stones and may require a higher degree of technical skill.</p>
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

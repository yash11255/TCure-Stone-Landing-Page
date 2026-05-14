import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery? | CureStone",
  description: "Gurgaon, which is now officially spelled Gurugram, is the address of some of the most advanced medical care centers in India. Because of the advanced",
  alternates: {
    canonical: "https://curestone.in/blog/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery",
  },
  openGraph: {
    title: "Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery? | CureStone",
    description: "Gurgaon, which is now officially spelled Gurugram, is the address of some of the most advanced medical care centers in India. Because of the advanced",
    url: "https://curestone.in/blog/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery? | CureStone",
  description: "Gurgaon, which is now officially spelled Gurugram, is the address of some of the most advanced medical care centers in India. Because of the advanced",
  image: "https://curestone.in/blogs/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery.jpg",
  url: "https://curestone.in/blog/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery",
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
    "@id": "https://curestone.in/blog/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery",
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
      name: "Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery? | CureStone",
      item: "https://curestone.in/blog/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery",
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
              Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Gurgaon, which is now officially spelled Gurugram, is the address of some of the most advanced medical care centers in India. Because of the advanced
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery/"
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
              src="/blogs/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery.jpg"
              alt="Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Gurgaon, which is now officially spelled Gurugram, is the address of some of the most advanced medical care centers in India. Because of the advanced facilities available in the city and the expertise of the professionals, along with the care they provide, it is well-known for treating many complications, but kidney stone surgery is one of its specialties.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In this article, let us examine the reasons that have contributed to the fame of Gurgaon’s infrastructure and its reliability for treating kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">It seems that nearly everyone and at every age is facing the daunting diagnosis of kidney stones. Lately, it has been seen quite often in the younger adult population, too.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Why Kidney Stones Are More Common Than Ever</h2>
              <p className="text-slate-600 leading-relaxed mb-6">In other words, a combination of not drinking enough water, diet, and exercise, along with many other health problems, has made kidney stones far more detrimental than they used to be. Taking immediate action is now more important than ever.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In this section, we will highlight a few reasons that make Gurugram a trusted spot for kidney stone treatment.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The infrastructure in terms of Gurgaon’s hospitals is at par with the best in the country, with the latest technology, and hence Gurgaon has become a common place for the diagnosis and treatment of stones surgically.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Gurgaon &amp; Its Trusted Infrastructure For Kidney Stone Surgery</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Based in Delhi NCR, CureStone is one of the best healthcare providers with advanced, effective treatments for kidney stones. Our highly trained urologist – Dr Deepanshu Gupta- uses laser and other minimally invasive techniques, which help in faster recovery. In addition to treating kidney stones, we also specialize in Urology, Andrology, and many more. We strive to provide every patient with complete care during their consultation and after their surgery through a simple and caring process.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In Gurgaon, patients can choose from a variety of treatment options, considering the position and size of the stones they have:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Retrograde Intrarenal Surgery (RIRS): A procedure that uses lasers to remove stones non-invasively through the urinary tract.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Extracorporeal Shock Wave Lithotripsy (ESWL): This is a non-invasive procedure where sound waves are used to shatter smaller stones into fragments.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Percutaneous Nephrolithotomy (PCNL): An incisional surgery done to remove large or difficult stones with the use of imaging and other minimal instruments.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Ureteroscopic Lithotripsy (URSL): Uses a ureteroscope to obtain and shatter stones found in the ureter.</p>
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

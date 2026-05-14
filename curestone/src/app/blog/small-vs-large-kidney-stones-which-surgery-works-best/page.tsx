import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Small vs large kidney stones – Which surgery works best? | CureStone",
  description: "Kidney stones are among the most uncomfortable urological ailments that affect millions of people worldwide. The hard deposits develop when salts and minerals",
  alternates: {
    canonical: "https://curestone.in/blog/small-vs-large-kidney-stones-which-surgery-works-best",
  },
  openGraph: {
    title: "Small vs large kidney stones – Which surgery works best? | CureStone",
    description: "Kidney stones are among the most uncomfortable urological ailments that affect millions of people worldwide. The hard deposits develop when salts and minerals",
    url: "https://curestone.in/blog/small-vs-large-kidney-stones-which-surgery-works-best",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Small vs large kidney stones – Which surgery works best? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Small vs large kidney stones – Which surgery works best? | CureStone",
  description: "Kidney stones are among the most uncomfortable urological ailments that affect millions of people worldwide. The hard deposits develop when salts and minerals",
  image: "https://curestone.in/blogs/small-vs-large-kidney-stones-which-surgery-works-best.png",
  url: "https://curestone.in/blog/small-vs-large-kidney-stones-which-surgery-works-best",
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
    "@id": "https://curestone.in/blog/small-vs-large-kidney-stones-which-surgery-works-best",
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
      name: "Small vs large kidney stones – Which surgery works best? | CureStone",
      item: "https://curestone.in/blog/small-vs-large-kidney-stones-which-surgery-works-best",
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
              Small vs large kidney stones – Which surgery works best?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones are among the most uncomfortable urological ailments that affect millions of people worldwide. The hard deposits develop when salts and minerals
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/small-vs-large-kidney-stones-which-surgery-works-best/"
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
              src="/blogs/small-vs-large-kidney-stones-which-surgery-works-best.png"
              alt="Small vs large kidney stones – Which surgery works best?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are among the most uncomfortable urological ailments that affect millions of people worldwide. The hard deposits develop when salts and minerals accumulate within the kidneys. While some stones can pass by themselves, some will require intervention from a physician.</p>
              <p className="text-slate-600 leading-relaxed mb-6">On this page, we’ll go over the differences between large and small kidney stones. We’ll also discuss the procedures offered with their advantages and cons, the costs, recovery times as well as frequently-asked questions.</p>
              <p className="text-slate-600 leading-relaxed mb-6">1. Can small kidney stones pass naturally?</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Small vs Large Kidney Stones: Key Differences</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Yes, stones less than 5mm are often cleared through hydration, medication and pain treatment.</p>
              <p className="text-slate-600 leading-relaxed mb-6">2. Which surgery is best for small stones?</p>
              <p className="text-slate-600 leading-relaxed mb-6">ESWL or RIRS are the most effective options.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Best Procedure for Small Kidney Stones</h2>
              <p className="text-slate-600 leading-relaxed mb-6">3. Which surgery works best for large stones?</p>
              <p className="text-slate-600 leading-relaxed mb-6">PCNL or Mini-PCNL are the gold standards for stones larger than 2 cm.</p>
              <p className="text-slate-600 leading-relaxed mb-6">ESWL offers the quickest recovery often within 2–3 days.</p>
              <p className="text-slate-600 leading-relaxed mb-6">5. What is the success rate of kidney stone surgery?</p>
              <p className="text-slate-600 leading-relaxed mb-6">In the case of kidney stones that are small or large the method of treatment differs. Small stones can pass on themselves or be effectively treated with techniques like ESWL and RIRS, whereas larger stones typically require more sophisticated options like PCNL or Mini-PCNL.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Each procedure comes with advantages as well as risks, recovery times and costs. The best method to determine the best option with you would be to talk with an experienced Urologist. Dr. Deepanshu has extensive experience of over 14 years dealing with kidney stones of all sizes, both large and small and he is the best urologist in Gurgaon. If you are facing kidney stone problems, timely consultation can ensure the best results and protect your kidney health in the long run.</p>
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

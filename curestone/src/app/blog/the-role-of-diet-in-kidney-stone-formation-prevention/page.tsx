import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Role of Diet in Kidney Stone Formation &amp; Prevention | CureStone",
  description: "Kidney stones can be extremely painful; they are hard deposits on the inner lining of a kidney that disrupt normal urinary function. If not treated in a",
  alternates: {
    canonical: "https://curestone.in/blog/the-role-of-diet-in-kidney-stone-formation-prevention",
  },
  openGraph: {
    title: "The Role of Diet in Kidney Stone Formation &amp; Prevention | CureStone",
    description: "Kidney stones can be extremely painful; they are hard deposits on the inner lining of a kidney that disrupt normal urinary function. If not treated in a",
    url: "https://curestone.in/blog/the-role-of-diet-in-kidney-stone-formation-prevention",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "The Role of Diet in Kidney Stone Formation &amp; Prevention | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Role of Diet in Kidney Stone Formation &amp; Prevention | CureStone",
  description: "Kidney stones can be extremely painful; they are hard deposits on the inner lining of a kidney that disrupt normal urinary function. If not treated in a",
  image: "https://curestone.in/blogs/the-role-of-diet-in-kidney-stone-formation-prevention.jpg",
  url: "https://curestone.in/blog/the-role-of-diet-in-kidney-stone-formation-prevention",
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
    "@id": "https://curestone.in/blog/the-role-of-diet-in-kidney-stone-formation-prevention",
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
      name: "The Role of Diet in Kidney Stone Formation &amp; Prevention | CureStone",
      item: "https://curestone.in/blog/the-role-of-diet-in-kidney-stone-formation-prevention",
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
              The Role of Diet in Kidney Stone Formation &amp; Prevention
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones can be extremely painful; they are hard deposits on the inner lining of a kidney that disrupt normal urinary function. If not treated in a
            </p>
            <a
              href="https://thecurestone.com/uncategorized/the-role-of-diet-in-kidney-stone-formation-prevention/"
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
              src="/blogs/the-role-of-diet-in-kidney-stone-formation-prevention.jpg"
              alt="The Role of Diet in Kidney Stone Formation &amp; Prevention"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones can be extremely painful; they are hard deposits on the inner lining of a kidney that disrupt normal urinary function. If not treated in a timely fashion, they can lead to dire complications such as irreversible renal failure. A considerable proportion of the world’s population suffers from kidney stones, which can be attributed to hereditary factors, specific medical ailments, lifestyle choices, and, diet most prominently.</p>
              <p className="text-slate-600 leading-relaxed mb-6">If individuals understand the direct correlation between their dietary habits and their chances of developing kidney stones, they can actively take measures to mitigate the risks. In this blog post, our focus will be the prevention of kidney stones as well as the dietary strategies tailored towards reducing the probability of their formation.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Buildup of urine deposits that consist of calcium, oxalate, uric acid or cystine can lead to the formation of kidney stones. These deposits, when added together, are prone to crystallization, which when uncontrolled, can lead to dry hard deposits. There are numerous varieties of kidney stones, the most common include:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What Are Kidney Stones?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">The stone type a person has significantly impacts their dietary changes.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Some dietary aspects can increase kidney stone formation. These are the major causes:-</p>
              <p className="text-slate-600 leading-relaxed mb-6">One of the major causes of kidneys stones is dehydration. With lack of fluids, urine becomes concentrated and can lead to crystallization.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Diet Impacting The Formation Of Kidney Stones</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Recommendation: Daily fluid intake should be between 2.5 to 3 liters and should be primarily water. A good target is producing at least 2 liters circulation daily.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Sodium further increases the concentration of calcium in urine, leading to stones. Furthermore, ovens/urine-soaked diets lower the amount of soda which promotes stone formation.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Sources to watch: Table salt, fast food, salty snacks, canned soups, and flavored non diet sodas.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">1. Low Fluid Intake</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Recommendation: Limit sodium intake less than 2,300 mg sodium a day (1,500 mg per day for high risk individuals).</p>
              <p className="text-slate-600 leading-relaxed mb-6">Animal protein contains high amounts of uric acid, which is known for lowering the pH of urine, and hence stone formation.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Plant Proteins: Consider limiting animal protein while increasing plant protein from legumes, nuts, and tofu.</p>
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

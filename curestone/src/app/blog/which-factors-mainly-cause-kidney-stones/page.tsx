import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Which Factors Mainly Cause Kidney Stones? | CureStone",
  description: "The hard deposits in the kidney that are crystalline in nature are painful and affect the day to day movement of over millions of people around the globe. The",
  alternates: {
    canonical: "https://curestone.in/blog/which-factors-mainly-cause-kidney-stones",
  },
  openGraph: {
    title: "Which Factors Mainly Cause Kidney Stones? | CureStone",
    description: "The hard deposits in the kidney that are crystalline in nature are painful and affect the day to day movement of over millions of people around the globe. The",
    url: "https://curestone.in/blog/which-factors-mainly-cause-kidney-stones",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Which Factors Mainly Cause Kidney Stones? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Which Factors Mainly Cause Kidney Stones? | CureStone",
  description: "The hard deposits in the kidney that are crystalline in nature are painful and affect the day to day movement of over millions of people around the globe. The",
  image: "https://curestone.in/blogs/which-factors-mainly-cause-kidney-stones.jpg",
  url: "https://curestone.in/blog/which-factors-mainly-cause-kidney-stones",
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
    "@id": "https://curestone.in/blog/which-factors-mainly-cause-kidney-stones",
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
      name: "Which Factors Mainly Cause Kidney Stones? | CureStone",
      item: "https://curestone.in/blog/which-factors-mainly-cause-kidney-stones",
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
              Which Factors Mainly Cause Kidney Stones?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              The hard deposits in the kidney that are crystalline in nature are painful and affect the day to day movement of over millions of people around the globe. The
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/which-factors-mainly-cause-kidney-stones/"
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
              src="/blogs/which-factors-mainly-cause-kidney-stones.jpg"
              alt="Which Factors Mainly Cause Kidney Stones?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">The hard deposits in the kidney that are crystalline in nature are painful and affect the day to day movement of over millions of people around the globe. The deposition of these crystals in the kidney can be uncomfortable at times due to the expulsion of these hard deposits through the urinary tract of the human body. Although, there are very few people who are immune to these stones but having knowledge of the causes can make a positive impact in preventing them.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In today’s article we will discuss diet variations, lifestyle variations, medical conditions, and even genetic factors which play a crucial role in developing kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are a kind of crystalline solid mass that when the urine is supersaturated with salt and minerals deposit in crystals, it forms in the kidney. The renal calculi focus deposits special calcifications retentive systems in the minute pipes of Cone, Grains Kidney that is why these become kidney stones as a result.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What are Kidney stones?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">* The most prevalent type – Calcium Salts Oxalate Stones: consist of excess calcium and spiral salts from urine</p>
              <p className="text-slate-600 leading-relaxed mb-6">* Uril Acid Stones: A high protein diet or gout is a reason of having a sore.</p>
              <p className="text-slate-600 leading-relaxed mb-6">* Struvite Stones: are caused due to the urinary tract infections (UTIs)</p>
              <p className="text-slate-600 leading-relaxed mb-6">* Cystine Stones: result from genetic disorders that are rare.</p>
              <p className="text-slate-600 leading-relaxed mb-6">There are smaller stones that cause the kidney to be harmed when they expand and result in certain complications or larger stones that cause blockage to the human body as intense pain.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are becoming more and more common across the globe alone for both men and women. The following are reasons for this increase:</p>
              <p className="text-slate-600 leading-relaxed mb-6">A number of people do not drink enough water which leads to formation of stones which is a highly concentrated urine.</p>
              <p className="text-slate-600 leading-relaxed mb-6">2. Factors Associated with an Unhealthy Diet</p>
              <p className="text-slate-600 leading-relaxed mb-6">An increase in consumption of salt, sugar, and processed food is leading to stone formation as modern diets are getting worse.</p>
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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dialysis Patients with Kidney Stones: What You Must Know | CureStone",
  description: "Managing kidney disease is already a complex problem to solve. Combine that with kidney stones, and things get more complicated, particularly for patients on",
  alternates: {
    canonical: "https://curestone.in/blog/dialysis-patients-with-kidney-stones-what-you-must-know",
  },
  openGraph: {
    title: "Dialysis Patients with Kidney Stones: What You Must Know | CureStone",
    description: "Managing kidney disease is already a complex problem to solve. Combine that with kidney stones, and things get more complicated, particularly for patients on",
    url: "https://curestone.in/blog/dialysis-patients-with-kidney-stones-what-you-must-know",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Dialysis Patients with Kidney Stones: What You Must Know | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Dialysis Patients with Kidney Stones: What You Must Know | CureStone",
  description: "Managing kidney disease is already a complex problem to solve. Combine that with kidney stones, and things get more complicated, particularly for patients on",
  image: "https://curestone.in/blogs/dialysis-patients-with-kidney-stones-what-you-must-know.jpg",
  url: "https://curestone.in/blog/dialysis-patients-with-kidney-stones-what-you-must-know",
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
    "@id": "https://curestone.in/blog/dialysis-patients-with-kidney-stones-what-you-must-know",
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
      name: "Dialysis Patients with Kidney Stones: What You Must Know | CureStone",
      item: "https://curestone.in/blog/dialysis-patients-with-kidney-stones-what-you-must-know",
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
              Dialysis Patients with Kidney Stones: What You Must Know
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Managing kidney disease is already a complex problem to solve. Combine that with kidney stones, and things get more complicated, particularly for patients on
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/dialysis-patients-with-kidney-stones-what-you-must-know/"
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
              src="/blogs/dialysis-patients-with-kidney-stones-what-you-must-know.jpg"
              alt="Dialysis Patients with Kidney Stones: What You Must Know"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Managing kidney disease is already a complex problem to solve. Combine that with kidney stones, and things get more complicated, particularly for patients on dialysis. Dialysis patients often have to navigate additional challenges for stone management and treatment. Stones can be quite bothersome and, if poorly managed, could lead to other complications.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Having consulted many patients in chronic kidney disease stages 4 and 5 on dialysis, we intend to share why stones can still happen, what warning signs indicate their presence, and what the safest management strategies are, aside from prevention. As a start, we’d like to introduce Dr. Deepanshu Gupta, a renowned urology specialist, with a unique clinical skill in tackling complex stone disease.</p>
              <p className="text-slate-600 leading-relaxed mb-6">That is still possible. It’s worth noting, however, that patients with very low residual kidney function (often associated with near-zero urine output) are the ones who start on dialysis. Yet, there are cases of patients with bladder outlets who still retain some capability of voiding small amounts of urine. That will inevitably expose them to a risk of developing stones.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Can Dialysis Patients Get Kidney Stones?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Even in the situation where someone doesn’t pass any urine, stones can still occur due to lapsed accumulation of minerals or changes to the body’s chemical makeup. Having dialysis does eliminate the risk of crystalline material forming in the kidneys.</p>
              <p className="text-slate-600 leading-relaxed mb-6">What Causes Kidney Stones in Dialysis Patients?</p>
              <p className="text-slate-600 leading-relaxed mb-6">Unlike those with sufficient renal function, the causes in dialysis patients might differ:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">1. Mineral Disorders</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Calcium, phosphate, and uric acid levels are disturbed in dialysis patients. These disturbances can crystallize minerals within the kidneys, leading to stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">These binders can control phosphate levels, but also cause an increase in calcium and therefore, increase the chances of calcium stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Stones such as struvite can develop as a result of bacterial enzymatic activity in patients on peritoneal dialysis and in those with a history of UTIs.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">2. Calcium-Containing Phosphate Bindings</h2>
              <p className="text-slate-600 leading-relaxed mb-6">A low level of urine means different minerals that are considered waste aren’t removed adequately, which greatly increases the chance of stone development, particularly in patients with some renal function.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Symptoms may not be very straightforward in dialysis patients. These might include:</p>
              <p className="text-slate-600 leading-relaxed mb-6">– Blood in the urine, if there is some urine output.</p>
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

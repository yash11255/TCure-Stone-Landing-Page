import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kidney Stones &amp; the Risk of Chronic Kidney Disease | CureStone",
  description: "Kidney stones are a pressing health problem suffered by millions around the world and create sharp pain, discomfort, and distress. Stones are often thought of",
  alternates: {
    canonical: "https://curestone.in/blog/kidney-stones-the-risk-of-chronic-kidney-disease",
  },
  openGraph: {
    title: "Kidney Stones &amp; the Risk of Chronic Kidney Disease | CureStone",
    description: "Kidney stones are a pressing health problem suffered by millions around the world and create sharp pain, discomfort, and distress. Stones are often thought of",
    url: "https://curestone.in/blog/kidney-stones-the-risk-of-chronic-kidney-disease",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Kidney Stones &amp; the Risk of Chronic Kidney Disease | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Kidney Stones &amp; the Risk of Chronic Kidney Disease | CureStone",
  description: "Kidney stones are a pressing health problem suffered by millions around the world and create sharp pain, discomfort, and distress. Stones are often thought of",
  image: "https://curestone.in/blogs/kidney-stones-the-risk-of-chronic-kidney-disease.jpg",
  url: "https://curestone.in/blog/kidney-stones-the-risk-of-chronic-kidney-disease",
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
    "@id": "https://curestone.in/blog/kidney-stones-the-risk-of-chronic-kidney-disease",
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
      name: "Kidney Stones &amp; the Risk of Chronic Kidney Disease | CureStone",
      item: "https://curestone.in/blog/kidney-stones-the-risk-of-chronic-kidney-disease",
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
              Kidney Stones &amp; the Risk of Chronic Kidney Disease
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones are a pressing health problem suffered by millions around the world and create sharp pain, discomfort, and distress. Stones are often thought of
            </p>
            <a
              href="https://thecurestone.com/treatment-option/kidney-stones-the-risk-of-chronic-kidney-disease/"
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
              src="/blogs/kidney-stones-the-risk-of-chronic-kidney-disease.jpg"
              alt="Kidney Stones &amp; the Risk of Chronic Kidney Disease"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are a pressing health problem suffered by millions around the world and create sharp pain, discomfort, and distress. Stones are often thought of as a fleeting concern- something that requires immediate attention and agony. However, stones may entail much deeper underlying issues than what meets the eye.</p>
              <p className="text-slate-600 leading-relaxed mb-6">One of the issues of growing concern among medical practitioners is the relationship between kidney stones and the risk of developing chronic kidney disease (CKD) – a grave long-term affliction which can lead to complete renal failure if left unattended.</p>
              <p className="text-slate-600 leading-relaxed mb-6">This blog looks into the impact of stones on kidney functional efficiency, mechanisms inciting progression towards chronic disease, and what actions can be taken by the patients to foster healthy renal function.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Knowledge Base on Kidney Stones</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are hard mineral or salt deposits that form within the kidney and may range greatly in size from molecules to sizable stones. Stones may affect any part of the urinary tract including the kidney or the bladder.Here are the most notable types of kidney stones:</p>
              <p className="text-slate-600 leading-relaxed mb-6">• Calcium stones (most common, usually calcium oxalate)</p>
              <p className="text-slate-600 leading-relaxed mb-6">• Struvite stones (related to infections)</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Do Kidney Stones Increase the Risk of Chronic Kidney Disease?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Smaller stones typically pass with little to no symptoms. However, larger stones may impede the flow of urine, resulting in excruciating pain, infection, or possibly even damage to the kidney.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The brief answer: yes, it can. Research shows that having kidney stones is at least mildly associated with developing CKD later in life. While not every patient will develop kidney disease, certain circumstances increase the chance.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The following explains how kidney stones may lead to chronic kidney damage:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Having a stone within the urinary tract can cause excess pressure to build within the kidney. Over time this can damage very sensitive kidney tissue, reducing its function. Even a few days of constant blockage can result in permanent harm to the body.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Stones, especially struvite stones, often come hand in hand with repeated UTIs. Chronic infections may lead to scarred kidney tissues, which significantly affect their ability to filter blood effectively.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The formation of kidney stones induces inflammation that may result in fibrosis (scarring) of the kidneys. This scarring continues to worsen kidney functional capacity and contributes to chronic kidney disease (CKD).</p>
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

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hereditary causes of kidney stones | CureStone",
  description: "Kidney stones are small, hard lumps that form within the kidneys of people when the salts and minerals in their urine become hard. Although lifestyle, diet,",
  alternates: {
    canonical: "https://curestone.in/blog/hereditary-causes-of-kidney-stones",
  },
  openGraph: {
    title: "Hereditary causes of kidney stones | CureStone",
    description: "Kidney stones are small, hard lumps that form within the kidneys of people when the salts and minerals in their urine become hard. Although lifestyle, diet,",
    url: "https://curestone.in/blog/hereditary-causes-of-kidney-stones",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Hereditary causes of kidney stones | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Hereditary causes of kidney stones | CureStone",
  description: "Kidney stones are small, hard lumps that form within the kidneys of people when the salts and minerals in their urine become hard. Although lifestyle, diet,",
  image: "https://curestone.in/blogs/hereditary-causes-of-kidney-stones.jpg",
  url: "https://curestone.in/blog/hereditary-causes-of-kidney-stones",
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
    "@id": "https://curestone.in/blog/hereditary-causes-of-kidney-stones",
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
      name: "Hereditary causes of kidney stones | CureStone",
      item: "https://curestone.in/blog/hereditary-causes-of-kidney-stones",
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
              Hereditary causes of kidney stones
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones are small, hard lumps that form within the kidneys of people when the salts and minerals in their urine become hard. Although lifestyle, diet,
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/hereditary-causes-of-kidney-stones/"
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
              src="/blogs/hereditary-causes-of-kidney-stones.jpg"
              alt="Hereditary causes of kidney stones"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are small, hard lumps that form within the kidneys of people when the salts and minerals in their urine become hard. Although lifestyle, diet, and dehydration are typically significant factors in the development of stones, there’s often an unintentional culprit by way of genetics. Kidney stones are more likely to be inherited, meaning that when your parents or siblings are affected, you could be more at risk.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Here in this blog, let’s simplify the genetic reasons behind kidney stones and see how learning about your genes can help you avoid or control this debilitating condition.</p>
              <p className="text-slate-600 leading-relaxed mb-6">If it is referred to as a problem as a hereditary problem, it implies that it can be passed down through parents and children through genes. When it comes to kidney stones, the inherited condition can affect the way that chemicals such as oxalate, calcium, cystine and uric acid are processed within the body. Once these substances are inside the kidneys, they can create a clump and later make stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">If you’ve suffered from repeated kidney stones means they return frequently or if you’ve had them since the age of a child, it is possible that your doctor suspects an underlying genetic issue and suggests particular tests.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Common Hereditary Causes of Kidney Stones</p>
              <p className="text-slate-600 leading-relaxed mb-6">Let’s take a look at the top five most frequently inheritable conditions that lead to kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">It is a condition that is genetic, which causes your kidneys to release excess amounts of the amino acid, also known as cystine, in your urine. Cystine cannot dissolve in water easily and tends to form stones and crystals.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Cystinuria sufferers typically suffer from large, persistent stones that can block their urinary tract. The condition is usually discovered at a young age and has an inheritance pattern.</p>
              <p className="text-slate-600 leading-relaxed mb-6">TIP: Staying hydrated and limiting the intake of salt can aid in controlling cystinuria.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Primary Hyperoxaluria can be described as a genetic liver disease that causes excessive oxalate to be created in the human body. It is a naturally occurring substance found in many food items. When oxalate joins with calcium in urine, it causes kidney stones that contain calcium oxalate. These are the most frequent kinds of kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Secondary Hyperoxaluria isn’t caused by an individual gene mutation, but happens as a result of other illnesses like colon diseases, surgery for bowel, or a high intake of vitamin C that causes levels of oxalates to increase.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Both could lead to repeated stone formation as well as renal injuries or even a chronic kidney condition if untreated in its early stages.</p>
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

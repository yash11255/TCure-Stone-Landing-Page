import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UTI vs Kidney Infection – How to Know the Difference | CureStone",
  description: "Urinary health concerns are quite common, particularly among women; however, anybody can suffer from these issues. The two most frequent concerns can be",
  alternates: {
    canonical: "https://curestone.in/blog/uti-vs-kidney-infection-how-to-know-the-difference",
  },
  openGraph: {
    title: "UTI vs Kidney Infection – How to Know the Difference | CureStone",
    description: "Urinary health concerns are quite common, particularly among women; however, anybody can suffer from these issues. The two most frequent concerns can be",
    url: "https://curestone.in/blog/uti-vs-kidney-infection-how-to-know-the-difference",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "UTI vs Kidney Infection – How to Know the Difference | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "UTI vs Kidney Infection – How to Know the Difference | CureStone",
  description: "Urinary health concerns are quite common, particularly among women; however, anybody can suffer from these issues. The two most frequent concerns can be",
  image: "https://curestone.in/blogs/uti-vs-kidney-infection-how-to-know-the-difference.png",
  url: "https://curestone.in/blog/uti-vs-kidney-infection-how-to-know-the-difference",
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
    "@id": "https://curestone.in/blog/uti-vs-kidney-infection-how-to-know-the-difference",
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
      name: "UTI vs Kidney Infection – How to Know the Difference | CureStone",
      item: "https://curestone.in/blog/uti-vs-kidney-infection-how-to-know-the-difference",
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
              UTI vs Kidney Infection – How to Know the Difference
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Urinary health concerns are quite common, particularly among women; however, anybody can suffer from these issues. The two most frequent concerns can be
            </p>
            <a
              href="https://thecurestone.com/urological-problems/uti-vs-kidney-infection-how-to-know-the-difference/"
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
              src="/blogs/uti-vs-kidney-infection-how-to-know-the-difference.png"
              alt="UTI vs Kidney Infection – How to Know the Difference"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Urinary health concerns are quite common, particularly among women; however, anybody can suffer from these issues. The two most frequent concerns can be Urinary Tract Infection (UTI) and Kidney Infection. The symptoms are generally the same, including burning sensations when urinating, frequent urination or abdominal pain in the lower abdomen.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In this blog, we will discuss the major differences between UTI and kidney infections, including the symptoms, the risks, causes, treatments, and when it is appropriate to consult a physician. In the end, you will be able to recognize each health issue and the best time to seek medical attention to safeguard your health.</p>
              <p className="text-slate-600 leading-relaxed mb-6">A UTI is an infection that can happen anywhere in the urinary system, namely the urethra, bladder, ureters, or kidneys. Most commonly, it will affect the bladder.</p>
              <p className="text-slate-600 leading-relaxed mb-6">UTIs typically result from a bacterium such as E. coli invading the urinary tract. It is typically due to poor hygiene, dehydration, or sexual activity.</p>
              <p className="text-slate-600 leading-relaxed mb-6">This kidney disease is caused by a germ that travels through the bladder and eventually gets into the kidneys, either in one or both. While it’s not a more serious problem than a typical UTI, if it is not treated, it could cause harm to the kidneys.</p>
              <p className="text-slate-600 leading-relaxed mb-6">If not treated, kidney infections could cause irreparable damage to the kidneys or blood poisoning, which is a deadly infection</p>
              <p className="text-slate-600 leading-relaxed mb-6">Both UTIs and kidney infections can be confirmed by:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Call for immediate medical care if you experience:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Early treatment of a UTI will stop it from becoming a kidney infection.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Prevention Tips for UTIs and Kidney Infections</p>
              <p className="text-slate-600 leading-relaxed mb-6">1. Can a UTI turn into a kidney infection?</p>
              <p className="text-slate-600 leading-relaxed mb-6">Yes. If left untreated UTI bacteria can move through the kidneys to cause an infection in the kidneys.</p>
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

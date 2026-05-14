import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why Do Kidney Stones Hurt More at Night? | CureStone",
  description: "Kidney stones tend to be so painful that they are unbearable. Many people are usually puzzled with the idea of why this pain only appears to aggravate at",
  alternates: {
    canonical: "https://curestone.in/blog/why-do-kidney-stones-hurt-more-at-night",
  },
  openGraph: {
    title: "Why Do Kidney Stones Hurt More at Night? | CureStone",
    description: "Kidney stones tend to be so painful that they are unbearable. Many people are usually puzzled with the idea of why this pain only appears to aggravate at",
    url: "https://curestone.in/blog/why-do-kidney-stones-hurt-more-at-night",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Why Do Kidney Stones Hurt More at Night? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Why Do Kidney Stones Hurt More at Night? | CureStone",
  description: "Kidney stones tend to be so painful that they are unbearable. Many people are usually puzzled with the idea of why this pain only appears to aggravate at",
  image: "https://curestone.in/blogs/why-do-kidney-stones-hurt-more-at-night.jpg",
  url: "https://curestone.in/blog/why-do-kidney-stones-hurt-more-at-night",
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
    "@id": "https://curestone.in/blog/why-do-kidney-stones-hurt-more-at-night",
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
      name: "Why Do Kidney Stones Hurt More at Night? | CureStone",
      item: "https://curestone.in/blog/why-do-kidney-stones-hurt-more-at-night",
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
              Why Do Kidney Stones Hurt More at Night?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones tend to be so painful that they are unbearable. Many people are usually puzzled with the idea of why this pain only appears to aggravate at
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/why-do-kidney-stones-hurt-more-at-night/"
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
              src="/blogs/why-do-kidney-stones-hurt-more-at-night.jpg"
              alt="Why Do Kidney Stones Hurt More at Night?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones tend to be so painful that they are unbearable. Many people are usually puzzled with the idea of why this pain only appears to aggravate at night. You are not imagining things, there is a couple of physiological and behavioral considerations involved, which turns nighttime into a rather unpleasant interval of time for a person that is experiencing kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">This blog will cover why kidney stones hurt at night, what to expect and the possible ways of going about the pain.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are hard mineral-salt-based deposits that are solid in nature and occur within the kidneys. They may be very small or large enough as a golf ball in size. These rocks can remain in the kidneys or fall through the urinary system where they can induce pain, obstruction and infections.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Knowing About Kidney Stones</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Just a few common kinds of kidney stones are:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Not all the kidney stones always cause a symptom unless they start to move or obstruct the urinary tract. In case that occurs, there might be the following symptoms:</p>
              <p className="text-slate-600 leading-relaxed mb-6">The pain of kidney stones (renal colic) may vary during the day. Nonetheless, most patients say that their pain appears to be more pungent or intolerable during the night. Here’s why:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Characteristic complaints of stone in the kidneys</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Body position and gravity forms the basis of the design and therefore, the second prerequisite is the body position in relation to gravity.</p>
              <p className="text-slate-600 leading-relaxed mb-6">When you go to bed to sleep, there is no longer the force of gravity, helping urine drain out of the kidneys through the natural way. The thin tube that takes urine to the bladder (the ureter) can become more narrow in some positions, especially when one is lying on one side. It may raise pressure and make stones irritate or block the ureter, so more pain brings.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Before going to bed, most people minimize the amount of fluids that they take in order to prevent the need to use the toilet at night. But, the opposite of the former is more concentrated urine which irritates the urinary tract and exacerbates the inflammation. The slow urine drainage may also increase difficulty in the movement of small stones hence stagnation and pain.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">The pain of kidney stones increases at night, why?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney is still able to filter the blood even when one is sleeping. Urine of people with a high-protein or high-salt diet, particularly in those who have a higher protein diet, can be further concentrated during overnight. This more dilute concentration can then initiate more crystal forming or illness ailment improvement in inflammation that thus increases pain.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The experience of pain may increase at night in our body. When we are at rest, there are fewer distractions, which makes the brain more receptive to pain messengers. Nighttime also decreases the production of cortisol, the natural chemical anti-inflammatory in the body which can heighten the level of pain.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The muscles such as those in the urinary track become more relaxed at the night. This may seem to be good; however, it will impair the strength of muscular contractions (peristalsis) that aid in passing of kidney stones down the ureter. When a stone gets stuck, then that creates more pressure, and more pain.</p>
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

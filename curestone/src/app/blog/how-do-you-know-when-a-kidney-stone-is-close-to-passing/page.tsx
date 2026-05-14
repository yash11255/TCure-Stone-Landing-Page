import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How do you know when a kidney stone is close to passing? | CureStone",
  description: "The passing of a kidney stone can cause intense pain, but the good thing is, some of the small stones pass on their own without surgery or heavy treatment.",
  alternates: {
    canonical: "https://curestone.in/blog/how-do-you-know-when-a-kidney-stone-is-close-to-passing",
  },
  openGraph: {
    title: "How do you know when a kidney stone is close to passing? | CureStone",
    description: "The passing of a kidney stone can cause intense pain, but the good thing is, some of the small stones pass on their own without surgery or heavy treatment.",
    url: "https://curestone.in/blog/how-do-you-know-when-a-kidney-stone-is-close-to-passing",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "How do you know when a kidney stone is close to passing? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How do you know when a kidney stone is close to passing? | CureStone",
  description: "The passing of a kidney stone can cause intense pain, but the good thing is, some of the small stones pass on their own without surgery or heavy treatment.",
  image: "https://curestone.in/blogs/how-do-you-know-when-a-kidney-stone-is-close-to-passing.jpg",
  url: "https://curestone.in/blog/how-do-you-know-when-a-kidney-stone-is-close-to-passing",
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
    "@id": "https://curestone.in/blog/how-do-you-know-when-a-kidney-stone-is-close-to-passing",
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
      name: "How do you know when a kidney stone is close to passing? | CureStone",
      item: "https://curestone.in/blog/how-do-you-know-when-a-kidney-stone-is-close-to-passing",
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
              How do you know when a kidney stone is close to passing?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              The passing of a kidney stone can cause intense pain, but the good thing is, some of the small stones pass on their own without surgery or heavy treatment.
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/how-do-you-know-when-a-kidney-stone-is-close-to-passing/"
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
              src="/blogs/how-do-you-know-when-a-kidney-stone-is-close-to-passing.jpg"
              alt="How do you know when a kidney stone is close to passing?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">The passing of a kidney stone can cause intense pain, but the good thing is, some of the small stones pass on their own without surgery or heavy treatment. But still, if you are in pain, the question that naturally comes to our mind is “how long will it take to pass? And how will I know when it’s over”?</p>
              <p className="text-slate-600 leading-relaxed mb-6">Some signs will help you to know when a kidney stone is passing, or whether you should wait or seek medical help. This blog will help or guide you to understand the signs and how long it can take to pass.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The kidney stones are hard buildups made of salt and minerals that form when your urine becomes compressed with calcium, oxalate, and uric acid. Stones can develop when there’s less water and more crystal-forming substances.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What exactly are kidney stones, and why do they form?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">There are several hints that your body gives you while the kidney stone is close to passing, some of them are:</p>
              <p className="text-slate-600 leading-relaxed mb-6">The pain starts from near your back or ribs and then travels toward your lower abdomen or groin; it’s a sign that the stone is moving down the ureter.</p>
              <p className="text-slate-600 leading-relaxed mb-6">As the stone nears the bladder, even if only a small amount comes out while urinating, you may often feel like you need to urinate.</p>
              <p className="text-slate-600 leading-relaxed mb-6">When a stone enters the bladder, severe pain may suddenly decrease. Passing it through the urethra usually causes only mild discomfort.</p>
              <p className="text-slate-600 leading-relaxed mb-6">If you see cloudy, pink, or reddish urine means the stone is irritating your urinary tract. Sometimes you may even see tiny crystals or particles.</p>
              <p className="text-slate-600 leading-relaxed mb-6">This happens in the final moments before the stone leaves your body completely.</p>
              <p className="text-slate-600 leading-relaxed mb-6">How long does it take a kidney stone to pass?</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stone passage can depend on their size; different sizes have different methods of treatment, like:</p>
              <p className="text-slate-600 leading-relaxed mb-6">You might not require medical care right away if:</p>
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

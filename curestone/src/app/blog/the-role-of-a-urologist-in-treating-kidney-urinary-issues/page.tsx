import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Role of a Urologist in Treating Kidney &amp; Urinary Issues | CureStone",
  description: "Do you know who to turn to if you experience persistent burning while urinating, or if that dull back pain becomes a kidney stone? You may be thinking of a",
  alternates: {
    canonical: "https://curestone.in/blog/the-role-of-a-urologist-in-treating-kidney-urinary-issues",
  },
  openGraph: {
    title: "The Role of a Urologist in Treating Kidney &amp; Urinary Issues | CureStone",
    description: "Do you know who to turn to if you experience persistent burning while urinating, or if that dull back pain becomes a kidney stone? You may be thinking of a",
    url: "https://curestone.in/blog/the-role-of-a-urologist-in-treating-kidney-urinary-issues",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "The Role of a Urologist in Treating Kidney &amp; Urinary Issues | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "The Role of a Urologist in Treating Kidney &amp; Urinary Issues | CureStone",
  description: "Do you know who to turn to if you experience persistent burning while urinating, or if that dull back pain becomes a kidney stone? You may be thinking of a",
  image: "https://curestone.in/blogs/the-role-of-a-urologist-in-treating-kidney-urinary-issues.jpg",
  url: "https://curestone.in/blog/the-role-of-a-urologist-in-treating-kidney-urinary-issues",
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
    "@id": "https://curestone.in/blog/the-role-of-a-urologist-in-treating-kidney-urinary-issues",
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
      name: "The Role of a Urologist in Treating Kidney &amp; Urinary Issues | CureStone",
      item: "https://curestone.in/blog/the-role-of-a-urologist-in-treating-kidney-urinary-issues",
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
              The Role of a Urologist in Treating Kidney &amp; Urinary Issues
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Do you know who to turn to if you experience persistent burning while urinating, or if that dull back pain becomes a kidney stone? You may be thinking of a
            </p>
            <a
              href="https://thecurestone.com/uncategorized/the-role-of-a-urologist-in-treating-kidney-urinary-issues/"
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
              src="/blogs/the-role-of-a-urologist-in-treating-kidney-urinary-issues.jpg"
              alt="The Role of a Urologist in Treating Kidney &amp; Urinary Issues"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Do you know who to turn to if you experience persistent burning while urinating, or if that dull back pain becomes a kidney stone? You may be thinking of a doctor, a nephrologist, or perhaps you’d try some home remedies first — but the true specialist for these maladies is the urologist.</p>
              <p className="text-slate-600 leading-relaxed mb-6">But what exactly is a urologist? Many people assume that urologists are “just” for men’s issues or don’t treat anything other than urinary infections. The truth is far bigger.</p>
              <p className="text-slate-600 leading-relaxed mb-6">From taking care of kidney stones to maintaining bladder health, from addressing male infertility to providing the most innovative surgical treatments – a urologist is the expert for your entire system.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Who is a Urologist?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Let’s simplify this. In this post, you’ll discover what a urologist is, what they treat, and how they work to solve life-changing issues involving the kidneys and urinary system. And if you’ve been putting off that doctor visit, well, this could be your sign to schedule that appointment.</p>
              <p className="text-slate-600 leading-relaxed mb-6">A urologist is a physician who specializes in diseases of the urinary tract and the male reproductive system. This includes:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Though some doctors work exclusively with the kidneys (namely nephrologists), urologists are the authority on all things related to these organs, issuing both medical and surgical treatments.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Urological Conditions Urologists Commonly Treat</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Here is a look at the variety of problems treated by urologists.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are one of the most frequent reasons patients go see a urologist. These agonizing stones develop when minerals and salts crystallize and accumulate in the kidneys.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The breaking the stones (e.g, shockwave therapy (ESWL)</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">1. Kidney Stones</h2>
              <p className="text-slate-600 leading-relaxed mb-6">RIRS (retrogade intra-renal surgery) or PCNL for big stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Such infections are not limited to women; both women and men can get UTIs, and recurrent infections often require the expertise of a urologist. Chronic or severe UTIs could indicate underlying issues such as bladder dysfunction or kidney issues.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Men (those who are 50+) often suffers from frequent urination due to BPH. Both medical and minimally invasive surgical options for prostate enlargement can be provided by Urologists.</p>
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

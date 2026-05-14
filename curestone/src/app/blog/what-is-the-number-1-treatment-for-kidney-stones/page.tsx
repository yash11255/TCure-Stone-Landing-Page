import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Is The Number 1 Treatment For Kidney Stones | CureStone",
  description: "A renal calculus forms when minerals and salts calcify within the kidneys, and is known as a kidney stone. These stones can be rather painful and may result",
  alternates: {
    canonical: "https://curestone.in/blog/what-is-the-number-1-treatment-for-kidney-stones",
  },
  openGraph: {
    title: "What Is The Number 1 Treatment For Kidney Stones | CureStone",
    description: "A renal calculus forms when minerals and salts calcify within the kidneys, and is known as a kidney stone. These stones can be rather painful and may result",
    url: "https://curestone.in/blog/what-is-the-number-1-treatment-for-kidney-stones",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "What Is The Number 1 Treatment For Kidney Stones | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Is The Number 1 Treatment For Kidney Stones | CureStone",
  description: "A renal calculus forms when minerals and salts calcify within the kidneys, and is known as a kidney stone. These stones can be rather painful and may result",
  image: "https://curestone.in/blogs/what-is-the-number-1-treatment-for-kidney-stones.png",
  url: "https://curestone.in/blog/what-is-the-number-1-treatment-for-kidney-stones",
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
    "@id": "https://curestone.in/blog/what-is-the-number-1-treatment-for-kidney-stones",
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
      name: "What Is The Number 1 Treatment For Kidney Stones | CureStone",
      item: "https://curestone.in/blog/what-is-the-number-1-treatment-for-kidney-stones",
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
              What Is The Number 1 Treatment For Kidney Stones
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              A renal calculus forms when minerals and salts calcify within the kidneys, and is known as a kidney stone. These stones can be rather painful and may result
            </p>
            <a
              href="https://thecurestone.com/kidney/what-is-the-number-1-treatment-for-kidney-stones/"
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
              src="/blogs/what-is-the-number-1-treatment-for-kidney-stones.png"
              alt="What Is The Number 1 Treatment For Kidney Stones"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">A renal calculus forms when minerals and salts calcify within the kidneys, and is known as a kidney stone. These stones can be rather painful and may result in urinary tract infections or deterioration of the kidneys if they are not treated promptly.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Luckily, there have been strides in the medical field that can aid in treating the stones depending on their size and location. This blog covers the most popular remedies for kidney stones, specifically focusing on RIRS, FANS RIRS, and PCNL, which are meant for larger kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In the urinary system, kidney stones vary in origin, size, and even shape. Some well known types are calcium oxalate, uric acid, struvite, and cystine stones.  These stones can vary in size, from as small as a grain of sand to as large as a golf ball. While some kidney stones may pass through the urinary tract on their own, others require medical intervention due to their size, location, or associated symptoms. Dehydration, food intake, family history, and other medical issues can lead to the formation of these stones. Common Symptoms often present severe pain on one side or the back, blood in urine, vomiting, nausea, and heightened urge to urinate.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Getting to Know Kidney Stones</h2>
              <p className="text-slate-600 leading-relaxed mb-6">The specific method of remedying issues concerning kidney stones is primarily determined by the size of the stone, the condition of the patient, its location, and its composition. Here, we analyze three major types of surgeries done in a less invasive fashion:</p>
              <p className="text-slate-600 leading-relaxed mb-6">RIRS is a technique performed for the treatment of urinary tract stones located in the renal pelvis and in some other areas. For RIRS, a flexible ureteroscope is passed over the patients head and is placed into the bladder. The telescope is then directed into the ureter and kidney. This allows the surgeon to use a scope advanced into the renal pelvis or one of the renal calyces where the stones are located and laser lithotripsy may be used to fragment the stones into smaller pieces which will be removed or allowed to pass spontaneously.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Additionally, those patients suffering from bleeding diathesis or who are not amenable for any other procedure are also taken care.</p>
              <p className="text-slate-600 leading-relaxed mb-6">FANS RIRS is a state-of-the-art method that incorporates components of both antegrade and retrograde approaches. First, a small flank incision is made, after which a flexible nephroscope is directly introduced into the kidney. This permits access to stones lodged in difficult areas.</p>
              <p className="text-slate-600 leading-relaxed mb-6">PCNL is the most effective treatment of choice for larger kidney stones that are usually 2 cm and above. With this technique, a small incision is made on the back of the patient and the kidney is visualized through a nephroscope. The stone fragments can then be removed efficiently.</p>
              <p className="text-slate-600 leading-relaxed mb-6">These are the factors that need to be considered when choosing between FANS RIRS, RIRS and PCNL. Patient’s wellbeing, stone location, and stone size .</p>
              <p className="text-slate-600 leading-relaxed mb-6">For a comprehensive evaluation by a urologist is essential to determine the most appropriate treatment approach based on individual patient factors.</p>
              <p className="text-slate-600 leading-relaxed mb-6">With advancements in modern medicine comes a more effective and non-invasive treatment options for kidney stone management. Each of these procedures, including RIRS, PCNL, and FANS RIRS come with their own spearhead approaches to removal of kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">If you are looking for someone who can handle complex cases in urology with a personal touch, then look no further because you have already found it. Having more than a decade of experience in endourology, andrology, and renal harvesting, Gurgaon-based urologist Dr. Deepanshu Gupta is an authority in urology care.</p>
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

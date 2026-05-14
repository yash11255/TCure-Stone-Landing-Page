import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Recurring Kidney Stones? Here&#39;s What You Need to Know | CureStone",
  description: "Having kidney stones isn&#39;t a unique issue. Research indicates that close to half of all individuals are likely to form another stone within five to seven",
  alternates: {
    canonical: "https://curestone.in/blog/recurring-kidney-stones-heres-what-you-need-to-know",
  },
  openGraph: {
    title: "Recurring Kidney Stones? Here&#39;s What You Need to Know | CureStone",
    description: "Having kidney stones isn&#39;t a unique issue. Research indicates that close to half of all individuals are likely to form another stone within five to seven",
    url: "https://curestone.in/blog/recurring-kidney-stones-heres-what-you-need-to-know",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Recurring Kidney Stones? Here&#39;s What You Need to Know | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Recurring Kidney Stones? Here&#39;s What You Need to Know | CureStone",
  description: "Having kidney stones isn&#39;t a unique issue. Research indicates that close to half of all individuals are likely to form another stone within five to seven",
  image: "https://curestone.in/blogs/recurring-kidney-stones-heres-what-you-need-to-know.jpg",
  url: "https://curestone.in/blog/recurring-kidney-stones-heres-what-you-need-to-know",
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
    "@id": "https://curestone.in/blog/recurring-kidney-stones-heres-what-you-need-to-know",
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
      name: "Recurring Kidney Stones? Here&#39;s What You Need to Know | CureStone",
      item: "https://curestone.in/blog/recurring-kidney-stones-heres-what-you-need-to-know",
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
              Recurring Kidney Stones? Here&#39;s What You Need to Know
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Having kidney stones isn&#39;t a unique issue. Research indicates that close to half of all individuals are likely to form another stone within five to seven
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/recurring-kidney-stones-heres-what-you-need-to-know/"
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
              src="/blogs/recurring-kidney-stones-heres-what-you-need-to-know.jpg"
              alt="Recurring Kidney Stones? Here&#39;s What You Need to Know"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Having kidney stones isn’t a unique issue. Research indicates that close to half of all individuals are likely to form another stone within five to seven years after having one. While enduring the pain of stones once is bad enough, the heightened pain along with the potential damage to your well-being can significantly decrease your quality of life. Kidney stones are definitely something one would wish did not recur for them, and therefore, it is essential to figure out how to stop future occurrences and what the underlying causes are.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The purpose of this blog is to highlight the causes and the risk factors,along with acknowledging the signs and treatment methods, while focusing on highlighting the preventive measures that can be taken.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones are usually caused when supplements of calcium, oxalate, and uric acid are in your urine. These substances are minerals and salt deposits found in your kidneys and get too concentrated, thus forming stones of different sizes. When there’s no proper dissolution of these minerals, they can crystallize and stick together instead.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What Are Kidney Stones?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Certain stones can be easily passed while others have the potential to severely block the urinary tract, which can result in unbearable pain along with additional health complications.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Dietary choices and shifts in one’s lifestyle significantly impact someone’s life. While changing your food or drink seems easy, the effort does lead to a noticeable difference for some peopl,e which adds to the pain of kidney stones. However, unlike the aforementioned reason for their occurrence, stones that occur multiple times usually stem from underlying problems that need to be addressed. These causes consist of the following:</p>
              <p className="text-slate-600 leading-relaxed mb-6">By knowing the type of stone you form, your physician will have a better understanding on how to prevent them. The two most common include:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What Causes Recurrent Kidney Stones?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">To better tailor treatment to patients with recurrent stones, the physician may suggest conducting a stone analysis post-passing or removal.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The indications of a kidney stone may differ based on the stone’s size and its location within the kidney. Common symptoms include:</p>
              <p className="text-slate-600 leading-relaxed mb-6">In the event that you develop fever or chills along with other symptoms, this could be a sign of an infection and will need urgent medical attention.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In instances of recurring kidney stones, a physician may suggest:</p>
              <p className="text-slate-600 leading-relaxed mb-6">These procedures aid in determining the cause of the stones and also provide a shift to the best solution to treat or prevent these recurrent cases.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Choice of treatment depends upon the size, site, and makeup of the stone. These are the available treatment options:</p>
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

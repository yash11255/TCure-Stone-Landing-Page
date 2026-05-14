import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laparoscopic vs Open Gallbladder Stone Surgery | CureStone",
  description: "Gallstones are a prevalent medical condition that can lead to very painful abdominal pain, nausea, and occasionally infections. If lifestyle modifications and",
  alternates: {
    canonical: "https://curestone.in/blog/laparoscopic-vs-open-gallbladder-stone-surgery",
  },
  openGraph: {
    title: "Laparoscopic vs Open Gallbladder Stone Surgery | CureStone",
    description: "Gallstones are a prevalent medical condition that can lead to very painful abdominal pain, nausea, and occasionally infections. If lifestyle modifications and",
    url: "https://curestone.in/blog/laparoscopic-vs-open-gallbladder-stone-surgery",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Laparoscopic vs Open Gallbladder Stone Surgery | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Laparoscopic vs Open Gallbladder Stone Surgery | CureStone",
  description: "Gallstones are a prevalent medical condition that can lead to very painful abdominal pain, nausea, and occasionally infections. If lifestyle modifications and",
  image: "https://curestone.in/blogs/laparoscopic-vs-open-gallbladder-stone-surgery.png",
  url: "https://curestone.in/blog/laparoscopic-vs-open-gallbladder-stone-surgery",
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
    "@id": "https://curestone.in/blog/laparoscopic-vs-open-gallbladder-stone-surgery",
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
      name: "Laparoscopic vs Open Gallbladder Stone Surgery | CureStone",
      item: "https://curestone.in/blog/laparoscopic-vs-open-gallbladder-stone-surgery",
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
              Laparoscopic vs Open Gallbladder Stone Surgery
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Gallstones are a prevalent medical condition that can lead to very painful abdominal pain, nausea, and occasionally infections. If lifestyle modifications and
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/laparoscopic-vs-open-gallbladder-stone-surgery/"
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
              src="/blogs/laparoscopic-vs-open-gallbladder-stone-surgery.png"
              alt="Laparoscopic vs Open Gallbladder Stone Surgery"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Gallstones are a prevalent medical condition that can lead to very painful abdominal pain, nausea, and occasionally infections. If lifestyle modifications and drugs fail to work, surgery is the most trustworthy option. But the largest question patients have is: “Which is better? laparoscopic or open gallbladder stone surgery?”</p>
              <p className="text-slate-600 leading-relaxed mb-6">This blog will give you a complete comparison of laparoscopic vs open gallbladder stone surgery , including causes, risks, and recovery so you can make the right choice for your health.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The gallbladder is a tiny bag that contains bile, which is used for the digestion of fats. Gallstones may block the bile passage, causing intense pain, nausea, and a fever. In these situations, doctors advise a gallbladder removal surgical procedure (cholecystectomy).</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Understanding Gallbladder Stone Surgery</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Laparoscopic gallbladder surgery is a minimally invasive procedure performed under general anesthesia. The procedure involves:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Open surgery of the gallbladder is an older form of surgery with a bigger cut, typically for complicated cases. Procedures involve:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Q1: will gallstones go away without surgery?</p>
              <p className="text-slate-600 leading-relaxed mb-6">The gallstones that are small can disappear on their own or be treated by medication or diet modifications and lifestyle changes. Surgery is needed if symptoms do not go away.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Q2: Is laparoscopic surgery for everyone?</p>
              <p className="text-slate-600 leading-relaxed mb-6">All patients are treated with laparoscopic surgery. However major gallstones, infections scar tissue, complex anatomy may be best treated through open surgery.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Q3: Will I get gallstones again after having my gallbladder removed?</p>
              <p className="text-slate-600 leading-relaxed mb-6">No. After the gallbladder has been taken out it is impossible to develop stones within it. In rare instances, stones could be found within the bile drains.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Q4: How quickly can I get back to work after surgery?</p>
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

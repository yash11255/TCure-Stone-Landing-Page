import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Does More Walking Help Pass Kidney Stones? | CureStone",
  description: "Kidney stones may be very painful and difficult to cope with. These are minute hard minerals deposits that are formed in the kidneys and may move within the",
  alternates: {
    canonical: "https://curestone.in/blog/does-more-walking-help-pass-kidney-stones",
  },
  openGraph: {
    title: "Does More Walking Help Pass Kidney Stones? | CureStone",
    description: "Kidney stones may be very painful and difficult to cope with. These are minute hard minerals deposits that are formed in the kidneys and may move within the",
    url: "https://curestone.in/blog/does-more-walking-help-pass-kidney-stones",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Does More Walking Help Pass Kidney Stones? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Does More Walking Help Pass Kidney Stones? | CureStone",
  description: "Kidney stones may be very painful and difficult to cope with. These are minute hard minerals deposits that are formed in the kidneys and may move within the",
  image: "https://curestone.in/blogs/does-more-walking-help-pass-kidney-stones.jpg",
  url: "https://curestone.in/blog/does-more-walking-help-pass-kidney-stones",
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
    "@id": "https://curestone.in/blog/does-more-walking-help-pass-kidney-stones",
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
      name: "Does More Walking Help Pass Kidney Stones? | CureStone",
      item: "https://curestone.in/blog/does-more-walking-help-pass-kidney-stones",
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
              Does More Walking Help Pass Kidney Stones?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones may be very painful and difficult to cope with. These are minute hard minerals deposits that are formed in the kidneys and may move within the
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/does-more-walking-help-pass-kidney-stones/"
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
              src="/blogs/does-more-walking-help-pass-kidney-stones.jpg"
              alt="Does More Walking Help Pass Kidney Stones?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones may be very painful and difficult to cope with. These are minute hard minerals deposits that are formed in the kidneys and may move within the urinary system subjecting the sufferer to pain; the intensity may be mild, severe, or in between. A very common question among patients who experience problems in the form of kidney stones is whether walking can help expel the stone quickly .</p>
              <p className="text-slate-600 leading-relaxed mb-6">It is a reasonable issue among those who will prefer not to go through an operation/surgery or healthcare treatment. Walking as a way to make an impact sounds like too much of a good thing. However, with the increasing number of patients who are interested in going natural in managing their condition, it would be critical to have insight on how physical motion has something to do with the passing of a kidney stone.</p>
              <p className="text-slate-600 leading-relaxed mb-6">So, in this blog, we will discuss how walking can help pass a kidney stone and in which cases it can really be helpful.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">How Do Kidney Stones Pass Naturally?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">The natural passage of kidney stones is highly dependent on size, position, and shape of the stone. Small rocks (usually smaller than 5 mm) frequently self-expel with no medical treatment. Nevertheless, stones that are bigger in size can become trapped in the ureter, which is a thin tube that is used to connect the kidneys and the bladder, and therefore, it may cause a lot of pain and even complications.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Once the stones start moving out of the kidney into the bladder they may be able to cause what is called renal colic-this is the sharp rigorous pain felt by the sufferer, and the location at lower back terminating at groin. This is something that is naturally done and the aim, particularly on smaller stones, is to promote this natural flow by non-invasive means involving increased amount of water, ingested medicine and of course, walking.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Walking is a mild form of aerobic activity which contributes to a better circulation, aids in digestion and helps to get the other organs moving. When it comes to kidney stones, walking would encourage passage through the urinary tract and this may facilitate passage of the stone more easily to the bladder.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Does Walking Mean That Kidney Stones Can Pass?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">As you walk, the normal movement and a minimal impact of your steps can cause the stone to move downward, at least when a stone is already in the ureter. Walking daily enhances circulation and will possibly help in the process of kidneys and ureters working to quicker move the stone and thus pass it.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Also, gentle exercise such as long walks may assist in relieving discomfort caused by having kidney stones, provided that such exercise does not exacerbate the condition in question. It can also encourage more water consumption- another major element of expelling kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Although it is important to take some rest when the pain is overwhelming, being inactive can cause the process of passing a stone to become even slower. Sitting down or lying down a long time can make the stone stay in the same position particularly where it is already on a move in the ureter.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Respectful walking once or twice every day can be used to combine a rest and activity. It also eliminates stiffness, facilitates the flow of blood, and even enables people to cope with the stress brought on by pain in the kidney stones, which is important.</p>
              <p className="text-slate-600 leading-relaxed mb-6">With that said, high impact or strenuous activities such as running, jumping and so forth should not be attempted during an active stone event without a doctor recommending otherwise. Whenever there is any kind of pain and nausea and so on that should be a signal to tread slow.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In case you are intending to make walking as one of the possible elements in your kidney stone management package, then here are a few ideas to ponder upon:</p>
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

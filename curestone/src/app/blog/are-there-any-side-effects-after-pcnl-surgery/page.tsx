import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Are There Any Side Effects After PCNL Surgery? | CureStone",
  description: "Hearing the words “you need surgery” and “kidney stones” in the same sentence can be nerve-wracking. It can cause anxiety for patients, especially when they",
  alternates: {
    canonical: "https://curestone.in/blog/are-there-any-side-effects-after-pcnl-surgery",
  },
  openGraph: {
    title: "Are There Any Side Effects After PCNL Surgery? | CureStone",
    description: "Hearing the words “you need surgery” and “kidney stones” in the same sentence can be nerve-wracking. It can cause anxiety for patients, especially when they",
    url: "https://curestone.in/blog/are-there-any-side-effects-after-pcnl-surgery",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Are There Any Side Effects After PCNL Surgery? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Are There Any Side Effects After PCNL Surgery? | CureStone",
  description: "Hearing the words “you need surgery” and “kidney stones” in the same sentence can be nerve-wracking. It can cause anxiety for patients, especially when they",
  image: "https://curestone.in/blogs/are-there-any-side-effects-after-pcnl-surgery.jpg",
  url: "https://curestone.in/blog/are-there-any-side-effects-after-pcnl-surgery",
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
    "@id": "https://curestone.in/blog/are-there-any-side-effects-after-pcnl-surgery",
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
      name: "Are There Any Side Effects After PCNL Surgery? | CureStone",
      item: "https://curestone.in/blog/are-there-any-side-effects-after-pcnl-surgery",
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
              Are There Any Side Effects After PCNL Surgery?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Hearing the words “you need surgery” and “kidney stones” in the same sentence can be nerve-wracking. It can cause anxiety for patients, especially when they
            </p>
            <a
              href="https://thecurestone.com/staghorn/are-there-any-side-effects-after-pcnl-surgery/"
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
              src="/blogs/are-there-any-side-effects-after-pcnl-surgery.jpg"
              alt="Are There Any Side Effects After PCNL Surgery?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Hearing the words “you need surgery” and “kidney stones” in the same sentence can be nerve-wracking. It can cause anxiety for patients, especially when they have to undergo a procedure such as PCNL (Percutaneous Nephrolithotomy).</p>
              <p className="text-slate-600 leading-relaxed mb-6">While it is satisfying to think about how they will finally get relief, a single question always pops up: “What about postoperative considerations? What happens after the surgery and what side effects should I be concerned about, if any?”</p>
              <p className="text-slate-600 leading-relaxed mb-6">We’ll figure this out together—not using scary medical jargon, but by really simplifying things and explaining everything in detail.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">First, What Is PCNL Surgery Exactly?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">PCNL is an advanced surgical procedure that allows you to remove large or stubborn kidney stones that cannot be passed naturally or treated with some other simpler methods. As with any other form of surgery, the procedure involves some risks which are managed by expert hands through a small cut in your back. A surgeon inserts instruments to break and remove the stones and the procedure is termed PCNL which stands for ‘Percutaneous Nephrolithotomy.’ It’s efficient, effective, and often life-changing for those struggling with frequent stone pain.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Understanding the process calms a patient’s nerves, since knowing the steps eases anxiety. I have crafted steps in the form of a simple outline to follow for the procedure of PCNL.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Depending on your case, you will be placed on general anesthesia (asleep) or you will be given a regional anesthesia (numb from the waist down). After you are made comfortable, the area surrounding the surgical site will get cleaned and surgical prep will commence.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What Happens in a PCNL Surgery?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">The surgeon performs a small cut on your back, or incision which is one cm or less where the kidney is located. Ultrasound imaging or X-ray will aid in guiding the needle to the kidney and it will be inserted through the small cut.</p>
              <p className="text-slate-600 leading-relaxed mb-6">When the position is confirmed to be correct, a thin wire needs to be inserted and it will remain in place while being exposed from the needle. The special tube will be called the nephroscope. In this case, it will be gently dilated so it can reach and access the inside of the kidney.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The stones will be removed with care. Once the stone is located by the surgeon, he will perform the removal through the nephroscope. There is a chance that the stone is broken into smaller pieces using laser or ultrasonic energy, if that is the case then tiny surgical tools will be used to remove the pieces.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">1. Preparing and Setting up the Anesthesia</h2>
              <p className="text-slate-600 leading-relaxed mb-6">A nephrostomy tube may be inserted to drain urine or a DJ stent may be placed temporarily to assist with the flow from the kidney to the bladder for the purpose of healing.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The cut is either sutured or left to heal by itself, and you will be moved to the recovery bay. In most cases, patients are monitored for at least 12 hours after surgery to check on recovery progress.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Like any surgery, PCNL comes with it’s side effects such as discomfort or pain that need to be controlled over time. Each one of them qualifies as a postoperative experience. The good news? Most of them are manageable, temporary, and part of the natural healing process.</p>
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

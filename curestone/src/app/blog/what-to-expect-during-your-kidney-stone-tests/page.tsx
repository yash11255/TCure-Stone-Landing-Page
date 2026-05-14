import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What To Expect During Your Kidney Stone Tests? | CureStone",
  description: "Kidney stones can be extremely painful. Should you have been suffering from symptoms such as sudden pain in your back or side, frequent urination, and/or",
  alternates: {
    canonical: "https://curestone.in/blog/what-to-expect-during-your-kidney-stone-tests",
  },
  openGraph: {
    title: "What To Expect During Your Kidney Stone Tests? | CureStone",
    description: "Kidney stones can be extremely painful. Should you have been suffering from symptoms such as sudden pain in your back or side, frequent urination, and/or",
    url: "https://curestone.in/blog/what-to-expect-during-your-kidney-stone-tests",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "What To Expect During Your Kidney Stone Tests? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What To Expect During Your Kidney Stone Tests? | CureStone",
  description: "Kidney stones can be extremely painful. Should you have been suffering from symptoms such as sudden pain in your back or side, frequent urination, and/or",
  image: "https://curestone.in/blogs/what-to-expect-during-your-kidney-stone-tests.jpg",
  url: "https://curestone.in/blog/what-to-expect-during-your-kidney-stone-tests",
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
    "@id": "https://curestone.in/blog/what-to-expect-during-your-kidney-stone-tests",
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
      name: "What To Expect During Your Kidney Stone Tests? | CureStone",
      item: "https://curestone.in/blog/what-to-expect-during-your-kidney-stone-tests",
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
              What To Expect During Your Kidney Stone Tests?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones can be extremely painful. Should you have been suffering from symptoms such as sudden pain in your back or side, frequent urination, and/or
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/what-to-expect-during-your-kidney-stone-tests/"
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
              src="/blogs/what-to-expect-during-your-kidney-stone-tests.jpg"
              alt="What To Expect During Your Kidney Stone Tests?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones can be extremely painful. Should you have been suffering from symptoms such as sudden pain in your back or side, frequent urination, and/or blood in your urine, your doctor needs to conduct a sequence of test to determine if you have kidney stones.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Being tested for kidney stones can be a daunting experience until you know what to expect. This blog takes you through the process of kidney stone testing step-by-step — what happens, why it is done, how to prepare, and what to expect during and after the testing.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones may be different in size, location, and type in each of the two kidneys. Some are so small they will pass through your urinary tract unnoticed, but others can be large and create a logjam at the head of a ureter, in which case they will need to be removed or broken into smaller pieces with surgery. Before starting treatment, your doctor will want as much information about:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Why Testing Is Important?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Getting the diagnosis right leads to a choice to treat with medication, lifestyle changes or surgery if lifestyle changes aren’t helpful first.</p>
              <p className="text-slate-600 leading-relaxed mb-6">After returning from one of these endemic areas, the patient presents with fever and symptoms of jaundice.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In most cases, the diagnosis begins with a comprehensive examination. Your doctor will ask:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Step 1: History and Physical Examination</h2>
              <p className="text-slate-600 leading-relaxed mb-6">You might then have a brief physical exam in which the doctor presses on your abdomen and lower back to see if there’s any tenderness or swelling.</p>
              <p className="text-slate-600 leading-relaxed mb-6">A urinalysis is frequently the first lab test that is ordered. You will be called upon to present a new clean catch urine sample, and the sample is tested for:</p>
              <p className="text-slate-600 leading-relaxed mb-6">If your physician suspects recurrence of stones or infection, a 24-hour urine collection may be prescribed for evaluation of your body’s stone-forming potential.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Most blood sample tests look for high calcium, uric acid and/or creatinine levels that are suggesting a metabolic disorder or kidney function abnormalities. These markers will let us know if the kidney stone is a manifestation of some larger systemic thing we need to get after.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Imaging has an unarguably important role to diagnose stones, their size and localisation. The imaging test that has been most frequently employed is:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Your physician will select the appropriate imaging based on your symptoms, risk factors, and previous medical history.</p>
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

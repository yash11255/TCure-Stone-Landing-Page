import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Avoid Getting a UTI After Sex | CureStone",
  description: "An infection of the urinary tract, also known as UTI, is when bacteria enter the urinary tract, which includes the bladder, urethra and kidneys. Anyone can",
  alternates: {
    canonical: "https://curestone.in/blog/how-to-avoid-getting-a-uti-after-sex",
  },
  openGraph: {
    title: "How to Avoid Getting a UTI After Sex | CureStone",
    description: "An infection of the urinary tract, also known as UTI, is when bacteria enter the urinary tract, which includes the bladder, urethra and kidneys. Anyone can",
    url: "https://curestone.in/blog/how-to-avoid-getting-a-uti-after-sex",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "How to Avoid Getting a UTI After Sex | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "How to Avoid Getting a UTI After Sex | CureStone",
  description: "An infection of the urinary tract, also known as UTI, is when bacteria enter the urinary tract, which includes the bladder, urethra and kidneys. Anyone can",
  image: "https://curestone.in/blogs/how-to-avoid-getting-a-uti-after-sex.jpg",
  url: "https://curestone.in/blog/how-to-avoid-getting-a-uti-after-sex",
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
    "@id": "https://curestone.in/blog/how-to-avoid-getting-a-uti-after-sex",
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
      name: "How to Avoid Getting a UTI After Sex | CureStone",
      item: "https://curestone.in/blog/how-to-avoid-getting-a-uti-after-sex",
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
              How to Avoid Getting a UTI After Sex
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              An infection of the urinary tract, also known as UTI, is when bacteria enter the urinary tract, which includes the bladder, urethra and kidneys. Anyone can
            </p>
            <a
              href="https://thecurestone.com/urological-problems/how-to-avoid-getting-a-uti-after-sex/"
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
              src="/blogs/how-to-avoid-getting-a-uti-after-sex.jpg"
              alt="How to Avoid Getting a UTI After Sex"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">An infection of the urinary tract, also known as UTI, is when bacteria enter the urinary tract, which includes the bladder, urethra and kidneys. Anyone can get UTI but women are more likely to develop UTI; however, women are more likely to suffer from the condition due to sexual contact. Sexual activity can be among the main causes. Any contact, even to the genital tract, could trigger bacteria to spread into the urinary tract.</p>
              <p className="text-slate-600 leading-relaxed mb-6">UTIs can be uncomfortable and symptoms include burning while urinating or discomfort in the abdomen. It is important to be aware that it is possible to avoid with simple steps like showering after sexual activity, taking enough fluids and maintaining a healthy plus clean body.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Many factors increase the likelihood of developing UTI which is just one of the factors. Based on a study from the year 2019 Centers for Disease Control and Prevention or CDC study estimates that between 50% and 60% of females will suffer from a UTI at some point in their lives. The risk of developing a UTI increases when a woman ages and increases to a maximum of double when she reaches the age of 65.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Why Does Having Sex Increase Your Risk of Getting a UTI?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">In this blog, we will explain the reasons behind UTIs after sexual activity, the common symptoms, and easy methods to avoid UTIs so that you can be comfortable and stay healthy.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Dr. Deepanshu Gupta, a urologist in Gurgaon, says bacteria can be transferred through the genital region to the bladder through the urethra in sexual interactions.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Women are more likely to get infections more frequently than men due to having a urethra with a shorter length that allows bacteria like E-coli to move more quickly into the bladder.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What Can You Do to Reduce Your Risk of a UTI After Sex?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">It is important to keep in mind that UTIs aren’t just acquired through penetrative sexual interaction or oral sex. Even contact with genital parts may also introduce bacteria into the urinary tract. Patients with a history of urinary tract infections or urinary tract disorders that are pre-existing or have a weak immune system could also be at risk of getting UTIs in the course of sexual interaction.</p>
              <p className="text-slate-600 leading-relaxed mb-6">UTIs can be a painful and depressing experience but the good news is that making just a small change to your routine after sex can have a significant impact. With just a few simple steps you will decrease the risk of contracting infection.</p>
              <p className="text-slate-600 leading-relaxed mb-6">One of the simplest and best ways to avoid a UTI is to urinate after sex. Sex can push bacteria into the urethra and urinating will flush them out. Make this a practice within 30 minutes after sex it’s an easy step that actually does work.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Drinking plenty of water during the day makes you pee more frequently which keeps your urinary tract clean. Drink a minimum of six to eight glasses of water a day.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Always clean your genitals before and after sex by using mild water and a gentle, fragrance free soap. Avoid hard soaps, perfumed wipes or vaginal douching as these can change the balance of your body and trigger infections.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Simple habit of washing your hands from the back to the front after using the toilet stops bacteria in the area that surrounds the anal entering the vagina and urethra, which is among the primary causes of UTIs.</p>
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

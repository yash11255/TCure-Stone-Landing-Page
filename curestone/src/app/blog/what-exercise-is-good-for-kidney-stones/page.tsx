import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What Exercise is Good for Kidney Stones? | CureStone",
  description: "Kidney stones present a very widespread health issue that may result in extreme pain, uneasiness, and interferences with everyday life. They happen where the",
  alternates: {
    canonical: "https://curestone.in/blog/what-exercise-is-good-for-kidney-stones",
  },
  openGraph: {
    title: "What Exercise is Good for Kidney Stones? | CureStone",
    description: "Kidney stones present a very widespread health issue that may result in extreme pain, uneasiness, and interferences with everyday life. They happen where the",
    url: "https://curestone.in/blog/what-exercise-is-good-for-kidney-stones",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "What Exercise is Good for Kidney Stones? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "What Exercise is Good for Kidney Stones? | CureStone",
  description: "Kidney stones present a very widespread health issue that may result in extreme pain, uneasiness, and interferences with everyday life. They happen where the",
  image: "https://curestone.in/blogs/what-exercise-is-good-for-kidney-stones.jpg",
  url: "https://curestone.in/blog/what-exercise-is-good-for-kidney-stones",
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
    "@id": "https://curestone.in/blog/what-exercise-is-good-for-kidney-stones",
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
      name: "What Exercise is Good for Kidney Stones? | CureStone",
      item: "https://curestone.in/blog/what-exercise-is-good-for-kidney-stones",
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
              What Exercise is Good for Kidney Stones?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Kidney stones present a very widespread health issue that may result in extreme pain, uneasiness, and interferences with everyday life. They happen where the
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/what-exercise-is-good-for-kidney-stones/"
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
              src="/blogs/what-exercise-is-good-for-kidney-stones.jpg"
              alt="What Exercise is Good for Kidney Stones?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones present a very widespread health issue that may result in extreme pain, uneasiness, and interferences with everyday life. They happen where the minerals and salt get accumulated in the kidney and crystallize as hard deposits. As much as the hydration, diet, and genes are some of the factors that lead to the formation of stones, there are changes in lifestyle such as exercise that leads to the formation of a gap.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The physical activity could not only influence the general state of kidneys positively but also help avoid the appearance of the kidney stones again. However, the major trick is selecting the most appropriate form of exercise. Now, let us discuss what exercises are beneficial to kidney stones, how one can get benefited through such exercise and what all precaution you must remember.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Exercise can help manage kidney stones- in many ways:-</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Why Exercise Matters in Kidney Stone Management?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Not every exercise is appropriate in case you are facing kidney stones, particularly when they are accompanied by pain. Nevertheless, in prevention, recurrence rate, and the overall health of kidneys, the following exercises are useful:</p>
              <p className="text-slate-600 leading-relaxed mb-6">One of the ways that are found to be highly effective as well as the safest in patients of kidney stone is walking. A good 30 to 45-minute walk on a daily basis can help to enhance circulation, increase metabolism and keep the exercise stuck together. Walking is also of low impact and can be done at all ages.</p>
              <p className="text-slate-600 leading-relaxed mb-6">2. Aerobic activities, moderate and Light</p>
              <p className="text-slate-600 leading-relaxed mb-6">Sports like jogging, swimming, or biking are good at maintaining physical activity and healthy functioning of kidneys. The practices lead to more sweating, allow one to hydrate as often as possible and produce bodily fluids in order to get rid of the surplus of salts in the body.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Kidney stones may also be managed with the help of Yoga. Other poses trigger the kidneys, enhance blood circulation and strengthen the urinary system. Among the good asanas we can have:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Bhujangasana (Cobra Pose): This pose promotes the flow of blood in the kidneys.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Dhanurasana ( Bow Pose): It supports the functionality of abdominal organs.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Pawanmuktasana (Wind-Relieving Pose): It relieves the bloated stomach and works on the lowering of pressure on the kidneys.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Yoga, when practiced regularly, will also prevent stress, which is associated with a healthier kidney and the rest of the body.</p>
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

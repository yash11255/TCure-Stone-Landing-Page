import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones | CureStone",
  description: "Most people don&#39;t know that kidney stones are actually quite common, along with being incredibly painful. They are small deposits that are hard calcium-based",
  alternates: {
    canonical: "https://curestone.in/blog/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones",
  },
  openGraph: {
    title: "Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones | CureStone",
    description: "Most people don&#39;t know that kidney stones are actually quite common, along with being incredibly painful. They are small deposits that are hard calcium-based",
    url: "https://curestone.in/blog/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones | CureStone",
  description: "Most people don&#39;t know that kidney stones are actually quite common, along with being incredibly painful. They are small deposits that are hard calcium-based",
  image: "https://curestone.in/blogs/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones.jpg",
  url: "https://curestone.in/blog/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones",
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
    "@id": "https://curestone.in/blog/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones",
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
      name: "Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones | CureStone",
      item: "https://curestone.in/blog/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones",
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
              Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              Most people don&#39;t know that kidney stones are actually quite common, along with being incredibly painful. They are small deposits that are hard calcium-based
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones/"
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
              src="/blogs/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones.jpg"
              alt="Role of Ultrasound &amp; CT Scan in Diagnosing Kidney Stones"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">Most people don’t know that kidney stones are actually quite common, along with being incredibly painful. They are small deposits that are hard calcium-based minerals that form in your kidneys and can lead to excruciating pain, extreme nausea, and urinary tract infections. The good news, however, is that diagnosing these stones has gotten easier over the years. Thanks to ultrasound machines and CT scans, doctors can now test and confirm if one has kidney stones with speed and precision.</p>
              <p className="text-slate-600 leading-relaxed mb-6">With all of that info, one may ask: why undergo a CT scan and not an ultrasound, or vise-versa? What can one undergo from these tests? Moreover, how are the things being tested actually functioning? Let’s dive right into answering these questions.</p>
              <p className="text-slate-600 leading-relaxed mb-6">It is important to understand the term kidney stones before going what’s the best method to find out if they exist. Kidney stones are crystallized accumulations of minerals and salts which are also known as renal calculi. Each crystal has a size, some the size of grains and sand while others can match golf balls. They can travel through the urinary tract or could get stuck, which results in a lot of pain and other difficulties too.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">What Are Kidney Stones?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Symptoms that are commonly observed include:</p>
              <p className="text-slate-600 leading-relaxed mb-6">These aligned with other illnesses imaging tests are important in assuring an effective and precise diagnosis.</p>
              <p className="text-slate-600 leading-relaxed mb-6">Just like other health problems, kidney stones don’t only appear in blood or urine tests. Blood and urine tests are not sufficient kidney stones. That’s where ultrasound and computed tomography (CT) scans come in.</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Why Is Imaging Necessary For Diagnosis?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">Each method has its own strengths, and your doctor will choose the most appropriate one depending on your symptoms, age, kidney function, and even how likely you are to be exposed to radiation.</p>
              <p className="text-slate-600 leading-relaxed mb-6">An ultrasound is the first test that checks the kidneys and other parts of the urinary system. This is done by using sound waves. It is commonly the first imaging test performed especially for people who need to irradiate them such as pregnant women or young people.</p>
              <p className="text-slate-600 leading-relaxed mb-6">In many instances, ultrasound is employed as a screening technique as seen in emergencies. Further testing, including CT scans, may be recommended as elucidation.</p>
              <p className="text-slate-600 leading-relaxed mb-6">CT Scan: Gold Standard for Diagnosing Kidney Stones</p>
              <p className="text-slate-600 leading-relaxed mb-6">A CT scan without contrast (meaning requiring dye injection) is the primary method of checking for kidney stones and is considered the most accurate. This scan provides an uncluttered and all-encompassing image of the kidneys, ureters, and bladder.</p>
              <p className="text-slate-600 leading-relaxed mb-6">The detailed information CT’s offer often outweighs the negatives, and are required in situations that need immediate and precise diagnosis.</p>
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

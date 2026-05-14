import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है? | CureStone",
  description: "एक किडनी के साथ जीवन जीना पूरी तरह संभव है, लेकिन इसमें कुछ सावधानी बरतनी बहुत ज़रूरी है। कई मरीजों को एक किडनी होने पर सबसे बड़ा डर यह रहता है कि “अगर कभी",
  alternates: {
    canonical: "https://curestone.in/blog/ek-kidney-wale-mareej-ke-liye",
  },
  openGraph: {
    title: "एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है? | CureStone",
    description: "एक किडनी के साथ जीवन जीना पूरी तरह संभव है, लेकिन इसमें कुछ सावधानी बरतनी बहुत ज़रूरी है। कई मरीजों को एक किडनी होने पर सबसे बड़ा डर यह रहता है कि “अगर कभी",
    url: "https://curestone.in/blog/ek-kidney-wale-mareej-ke-liye",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है? | CureStone",
  description: "एक किडनी के साथ जीवन जीना पूरी तरह संभव है, लेकिन इसमें कुछ सावधानी बरतनी बहुत ज़रूरी है। कई मरीजों को एक किडनी होने पर सबसे बड़ा डर यह रहता है कि “अगर कभी",
  image: "https://curestone.in/blogs/ek-kidney-wale-mareej-ke-liye.jpg",
  url: "https://curestone.in/blog/ek-kidney-wale-mareej-ke-liye",
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
    "@id": "https://curestone.in/blog/ek-kidney-wale-mareej-ke-liye",
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
      name: "एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है? | CureStone",
      item: "https://curestone.in/blog/ek-kidney-wale-mareej-ke-liye",
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
              एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              एक किडनी के साथ जीवन जीना पूरी तरह संभव है, लेकिन इसमें कुछ सावधानी बरतनी बहुत ज़रूरी है। कई मरीजों को एक किडनी होने पर सबसे बड़ा डर यह रहता है कि “अगर कभी
            </p>
            <a
              href="https://thecurestone.com/kidney/%e0%a4%8f%e0%a4%95-%e0%a4%95%e0%a4%bf%e0%a4%a1%e0%a4%a8%e0%a5%80-%e0%a4%b5%e0%a4%be%e0%a4%b2%e0%a5%87-%e0%a4%ae%e0%a4%b0%e0%a5%80%e0%a4%9c-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-%e0%a4%95/"
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
              src="/blogs/ek-kidney-wale-mareej-ke-liye.jpg"
              alt="एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">एक किडनी के साथ जीवन जीना पूरी तरह संभव है, लेकिन इसमें कुछ सावधानी बरतनी बहुत ज़रूरी है। कई मरीजों को एक किडनी होने पर सबसे बड़ा डर यह रहता है कि “अगर कभी सर्जरी करनी पड़ी तो क्या यह सुरक्षित होगी?”</p>
              <p className="text-slate-600 leading-relaxed mb-6">असल में, एक किडनी वाले मरीज के लिए सर्जरी पूरी तरह मुमकिन है, लेकिन यह इस बात पर निर्भर करता है कि सर्जरी किस प्रकार की है और उसके लिए कितनी तैयारी की गई है। Dr. Deepanshu के अनुसार — “सही जांच, सही तैयारी और सही तकनीक से सर्जरी सुरक्षित और असरदार बन सकती है।”</p>
              <p className="text-slate-600 leading-relaxed mb-6">इस ब्लॉग में हम विस्तार से जानेंगे कि एक किडनी वाले मरीज के लिए कौन-कौन सी सर्जरी सुरक्षित मानी जाती है, सर्जरी से पहले किन जांचों की ज़रूरत होती है और Dr. Deepanshu की सलाह क्या है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">एक किडनी के साथ जीवन – क्या संभव है?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">एक किडनी वाला इंसान भी पूरी तरह सामान्य जीवन जी सकता है। बहुत से लोग जन्म से एक किडनी के साथ पैदा होते हैं, तो कुछ लोगों की एक किडनी किसी कारणवश काम करना बंद कर देती है — जैसे चोट, सर्जरी, या बीमारी के कारण।</p>
              <p className="text-slate-600 leading-relaxed mb-6">एक स्वस्थ किडनी शरीर की सारी ज़रूरतें पूरी करने में सक्षम होती है, बशर्ते कि उसका ध्यान रखा जाए। सही डाइट, पर्याप्त पानी, नियमित जांच और डॉक्टर की सलाह से जीवन पूरी तरह सामान्य रह सकता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">एक किडनी वाले मरीज को कई कारणों से सर्जरी की ज़रूरत पड़ सकती है — जैसे:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">सर्जरी की ज़रूरत कब पड़ती है?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">लेकिन इस बात का ध्यान रखना ज़रूरी है कि हर सर्जरी सुरक्षित नहीं होती। यह इस बात पर निर्भर करता है कि किस प्रकार की सर्जरी की जा रही है और मरीज की किडनी की स्थिति कैसी है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">Dr. Deepanshu हमेशा कहते हैं कि एक किडनी वाले मरीज को ऑपरेशन से पहले पूरी जांच करवानी चाहिए। इसमें शामिल हैं:</p>
              <p className="text-slate-600 leading-relaxed mb-6">मिनिमली इनवेसिव सर्जरी, जैसे लैप्रोस्कोपिक या लेज़र तकनीक, एक किडनी वाले मरीजों के लिए सबसे सुरक्षित मानी जाती है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">सर्जरी से पहले जरूरी जांच</h2>
              <p className="text-slate-600 leading-relaxed mb-6">प्रोस्टेट, ब्लैडर या यूरिटर से जुड़ी सर्जरी में लेज़र तकनीक या मिनिमली इनवेसिव तकनीक का उपयोग सुरक्षित रहता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">गॉल ब्लैडर या अपेंडिक्स की सर्जरी सामान्य रूप से एक किडनी वाले मरीज के लिए सुरक्षित होती है, बशर्ते कि ऑपरेशन से पहले पूरी तरह जांच और तैयारी की गई हो।</p>
              <p className="text-slate-600 leading-relaxed mb-6">जब एक किडनी में स्टोन होता है, तो डॉक्टर विशेष सावधानी रखते हैं। लेज़र स्टोन सर्जरी में कम जोखिम, कम दर्द और तेज रिकवरी मिलती है।</p>
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

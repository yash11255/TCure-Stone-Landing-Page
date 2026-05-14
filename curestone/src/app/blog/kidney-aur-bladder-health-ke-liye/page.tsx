import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट | CureStone",
  description: "क्या आप जानते हैं कि आपकी डाइट आपकी किडनी और ब्लैडर की सेहत को सीधा प्रभावित करती है? हम अक्सर शरीर की बाकी ज़रूरतों पर ध्यान देते हैं, लेकिन इन दो अंगों को",
  alternates: {
    canonical: "https://curestone.in/blog/kidney-aur-bladder-health-ke-liye",
  },
  openGraph: {
    title: "किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट | CureStone",
    description: "क्या आप जानते हैं कि आपकी डाइट आपकी किडनी और ब्लैडर की सेहत को सीधा प्रभावित करती है? हम अक्सर शरीर की बाकी ज़रूरतों पर ध्यान देते हैं, लेकिन इन दो अंगों को",
    url: "https://curestone.in/blog/kidney-aur-bladder-health-ke-liye",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट | CureStone",
  description: "क्या आप जानते हैं कि आपकी डाइट आपकी किडनी और ब्लैडर की सेहत को सीधा प्रभावित करती है? हम अक्सर शरीर की बाकी ज़रूरतों पर ध्यान देते हैं, लेकिन इन दो अंगों को",
  image: "https://curestone.in/blogs/kidney-aur-bladder-health-ke-liye.jpg",
  url: "https://curestone.in/blog/kidney-aur-bladder-health-ke-liye",
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
    "@id": "https://curestone.in/blog/kidney-aur-bladder-health-ke-liye",
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
      name: "किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट | CureStone",
      item: "https://curestone.in/blog/kidney-aur-bladder-health-ke-liye",
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
              किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              क्या आप जानते हैं कि आपकी डाइट आपकी किडनी और ब्लैडर की सेहत को सीधा प्रभावित करती है? हम अक्सर शरीर की बाकी ज़रूरतों पर ध्यान देते हैं, लेकिन इन दो अंगों को
            </p>
            <a
              href="https://thecurestone.com/kidney/%e0%a4%95%e0%a4%bf%e0%a4%a1%e0%a4%a8%e0%a5%80-%e0%a4%94%e0%a4%b0-%e0%a4%ac%e0%a5%8d%e0%a4%b2%e0%a5%88%e0%a4%a1%e0%a4%b0-%e0%a4%b9%e0%a5%87%e0%a4%b2%e0%a5%8d%e0%a4%a5-%e0%a4%95%e0%a5%87-%e0%a4%b2/"
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
              src="/blogs/kidney-aur-bladder-health-ke-liye.jpg"
              alt="किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">क्या आप जानते हैं कि आपकी डाइट आपकी किडनी और ब्लैडर की सेहत को सीधा प्रभावित करती है? हम अक्सर शरीर की बाकी ज़रूरतों पर ध्यान देते हैं, लेकिन इन दो अंगों को नज़रअंदाज़ कर देते हैं  जबकि ये दोनों हमारे शरीर के “फिल्टर सिस्टम” की तरह काम करते हैं। किडनी शरीर से टॉक्सिन और अतिरिक्त मिनरल्स को बाहर निकालती है, वहीं ब्लैडर इस प्रक्रिया को पूरा करता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">गलत खानपान, कम पानी पीना या असंतुलित डाइट से किडनी और ब्लैडर की कार्यप्रणाली प्रभावित हो जाती है। धीरे-धीरे यह समस्या स्टोन, इंफेक्शन या क्रॉनिक किडनी डिजीज तक पहुंच सकती है। इस ब्लॉग में Dr. Deepanshu बताते हैं कि सही डाइट से कैसे आप अपनी किडनी और ब्लैडर को हेल्दी रख सकते हैं और कौन-से फूड्स आपके लिए सबसे फायदेमंद हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">किडनी और ब्लैडर दोनों मिलकर शरीर की डिटॉक्स प्रक्रिया को संभालते हैं।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">किडनी और ब्लैडर का काम क्या है?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">अगर इनका काम सही न चले तो शरीर में टॉक्सिन जमा होने लगते हैं, जिससे यूरिनरी इंफेक्शन, ब्लैडर इंफ्लेमेशन और किडनी स्टोन जैसी समस्याएँ बढ़ सकती हैं। इसलिए इनकी सेहत को बनाए रखने के लिए सही डाइट सबसे पहली ज़रूरत है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">पानी किडनी और ब्लैडर दोनों के लिए सबसे ज़रूरी तत्व है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">हर दिन कम से कम 2.5 से 3 लीटर पानी पीना जरूरी है ताकि मूत्र पतला रहे और टॉक्सिन आसानी से बाहर निकलें। पर्याप्त पानी पीने से स्टोन बनने की संभावना भी काफी कम हो जाती है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">किडनी और ब्लैडर को हेल्दी रखने के लिए बेस्ट डाइट</h2>
              <p className="text-slate-600 leading-relaxed mb-6">पानी के अलावा, नारियल पानी, छाछ, नींबू पानी और खीरे का जूस भी बेहतरीन हाइड्रेटिंग विकल्प हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">2. फ्रेश फल और सब्जियाँ — प्राकृतिक डिटॉक्स एजेंट</p>
              <p className="text-slate-600 leading-relaxed mb-6">फलों और सब्जियों में मौजूद फाइबर और एंटीऑक्सिडेंट्स शरीर से वेस्ट निकालने में मदद करते हैं। कुछ अच्छे विकल्प हैं:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">किन चीजों से बचना चाहिए</h2>
              <p className="text-slate-600 leading-relaxed mb-6">प्रोटीन शरीर के लिए जरूरी है, लेकिन इसका ओवरडोज़ किडनी पर दबाव डालता है। बहुत ज्यादा प्रोटीन से यूरिक एसिड और वेस्ट मटेरियल बढ़ जाते हैं। बेहतर है कि एनिमल प्रोटीन की जगह हल्के, पौधे आधारित प्रोटीन लें जैसे:</p>
              <p className="text-slate-600 leading-relaxed mb-6">रेड मीट और अत्यधिक नॉन-वेज सेवन से बचना चाहिए क्योंकि ये किडनी पर एक्स्ट्रा लोड डालते हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">बहुत अधिक नमक ब्लड प्रेशर बढ़ाता है और किडनी की कार्यक्षमता को नुकसान पहुंचाता है।</p>
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

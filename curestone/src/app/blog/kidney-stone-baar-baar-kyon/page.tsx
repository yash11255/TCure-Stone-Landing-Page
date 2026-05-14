import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम | CureStone",
  description: "अगर आपको बार-बार किडनी स्टोन हो रहे हैं, तो यह सिर्फ एक सामान्य समस्या नहीं है — यह आपके जीवन को प्रभावित करने वाली एक बड़ी स्वास्थ्य चुनौती है। किडनी स्टोन",
  alternates: {
    canonical: "https://curestone.in/blog/kidney-stone-baar-baar-kyon",
  },
  openGraph: {
    title: "किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम | CureStone",
    description: "अगर आपको बार-बार किडनी स्टोन हो रहे हैं, तो यह सिर्फ एक सामान्य समस्या नहीं है — यह आपके जीवन को प्रभावित करने वाली एक बड़ी स्वास्थ्य चुनौती है। किडनी स्टोन",
    url: "https://curestone.in/blog/kidney-stone-baar-baar-kyon",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम | CureStone",
  description: "अगर आपको बार-बार किडनी स्टोन हो रहे हैं, तो यह सिर्फ एक सामान्य समस्या नहीं है — यह आपके जीवन को प्रभावित करने वाली एक बड़ी स्वास्थ्य चुनौती है। किडनी स्टोन",
  image: "https://curestone.in/blogs/kidney-stone-baar-baar-kyon.jpg",
  url: "https://curestone.in/blog/kidney-stone-baar-baar-kyon",
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
    "@id": "https://curestone.in/blog/kidney-stone-baar-baar-kyon",
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
      name: "किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम | CureStone",
      item: "https://curestone.in/blog/kidney-stone-baar-baar-kyon",
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
              किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              अगर आपको बार-बार किडनी स्टोन हो रहे हैं, तो यह सिर्फ एक सामान्य समस्या नहीं है — यह आपके जीवन को प्रभावित करने वाली एक बड़ी स्वास्थ्य चुनौती है। किडनी स्टोन
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/%e0%a4%95%e0%a4%bf%e0%a4%a1%e0%a4%a8%e0%a5%80-%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a5%8b%e0%a4%a8-%e0%a4%ac%e0%a4%be%e0%a4%b0-%e0%a4%ac%e0%a4%be%e0%a4%b0-%e0%a4%95%e0%a5%8d%e0%a4%af%e0%a5%8b%e0%a4%82/"
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
              src="/blogs/kidney-stone-baar-baar-kyon.jpg"
              alt="किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">अगर आपको बार-बार किडनी स्टोन हो रहे हैं, तो यह सिर्फ एक सामान्य समस्या नहीं है — यह आपके जीवन को प्रभावित करने वाली एक बड़ी स्वास्थ्य चुनौती है। किडनी स्टोन के दर्द से कई बार रोज़मर्रा के काम करना मुश्किल हो जाता है और बार-बार डॉक्टर के पास जाना पड़ता है। अधिकांश लोग सोचते हैं कि एक बार स्टोन निकल जाने के बाद समस्या खत्म हो जाएगी, लेकिन वास्तविकता यह है कि कई बार स्टोन दोबारा बन जाते हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">इसका कारण केवल एक नहीं होता बल्कि इसमें आपके शरीर की रसायन क्रियाएं, आहार, पानी की कमी, जीवनशैली और स्वास्थ्य स्थितियाँ शामिल होती हैं। इस ब्लॉग में हम समझेंगे कि किडनी स्टोन बार-बार क्यों होता है |  इसके पीछे क्या कारण हैं और इसे रोकने के लिए क्या कदम उठाए जा सकते हैं। साथ ही हम बताएंगे कि Dr. Deepanshu की विशेषज्ञ सलाह इस समस्या का स्थायी समाधान कैसे प्रदान कर सकती है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">किडनी स्टोन का बार-बार बनना एक संकेत है कि आपके शरीर में कुछ अंतर्निहित कारण हैं जिन्हें अनदेखा नहीं किया जा सकता। अगर आपको बार-बार किडनी स्टोन है तो यह कुछ प्रमुख कारणों से हो सकता है:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">किडनी स्टोन बार-बार बनने के मुख्य कारण</h2>
              <p className="text-slate-600 leading-relaxed mb-6">जब आप पर्याप्त मात्रा में पानी नहीं पीते हैं, तो किडनी में तरल कम होने से मिनरल्स और साल्ट क्रिस्टल के रूप में जमा हो जाते हैं, जो धीरे-धीरे स्टोन में बदल जाते हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">यदि आपका आहार अत्यधिक नमक, प्रोटीन और ऑक्सलेट युक्त खाद्य पदार्थों से भरा है, तो यह किडनी स्टोन बनने की प्रक्रिया को तेज करता है। उदाहरण के लिए — पनीर, चॉकलेट, चाय, सोडा, प्रोसेस्ड फूड और रेड मीट का अधिक सेवन।</p>
              <p className="text-slate-600 leading-relaxed mb-6">बार-बार मूत्र मार्ग में संक्रमण होना भी स्टोन बनने का कारण बन सकता है। संक्रमण मूत्र के pH को बदल देता है और यह स्टोन बनने के लिए अनुकूल माहौल बना देता है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">किडनी स्टोन बार-बार बनने से बचने के उपाय</h2>
              <p className="text-slate-600 leading-relaxed mb-6">कुछ लोगों में शरीर में खनिजों और साल्ट का संतुलन बिगड़ जाता है। इस स्थिति में स्टोन का बार-बार बनना स्वाभाविक है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">अत्यधिक वजन, शारीरिक गतिविधियों की कमी, ब्लड शुगर या हाई ब्लड प्रेशर जैसी समस्याएं भी किडनी स्टोन बनने में योगदान देती हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">अगर आपको बार-बार किडनी स्टोन होता है, तो इसकी रोकथाम के लिए कुछ जरूरी सावधानियां अपनाना जरूरी है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">Dr. Deepanshu की सलाह: स्टोन की रोकथाम और उपचार</h2>
              <p className="text-slate-600 leading-relaxed mb-6">दिन में कम से कम 2–3 लीटर पानी पीने से आपका मूत्र पतला रहता है और मिनरल्स जमने का खतरा कम होता है। पानी पीने की आदत बनाए रखना सबसे प्रभावी रोकथाम है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">नियमित रूप से व्यायाम करें और अपना वजन नियंत्रित रखें। इससे किडनी और मूत्र मार्ग से जुड़ी समस्याएं कम होती हैं और मेटाबॉलिक विकार का खतरा भी घटता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">अगर आपको बार-बार किडनी स्टोन की समस्या होती है तो समय-समय पर जांच करवाना बहुत जरूरी है। इससे स्टोन बनने के कारण का पता चलता है और सही इलाज निर्धारित किया जा सकता है।</p>
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

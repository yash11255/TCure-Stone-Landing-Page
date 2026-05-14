import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है? | CureStone",
  description: "किडनी स्टोन आज के समय में एक आम लेकिन बेहद तकलीफदेह समस्या बन चुका है। अचानक तेज दर्द, पेशाब में जलन या खून आना, ये संकेत हैं कि आपको किडनी स्टोन हो सकता है।",
  alternates: {
    canonical: "https://curestone.in/blog/kidney-stone-ke-liye-laser-surgery",
  },
  openGraph: {
    title: "किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है? | CureStone",
    description: "किडनी स्टोन आज के समय में एक आम लेकिन बेहद तकलीफदेह समस्या बन चुका है। अचानक तेज दर्द, पेशाब में जलन या खून आना, ये संकेत हैं कि आपको किडनी स्टोन हो सकता है।",
    url: "https://curestone.in/blog/kidney-stone-ke-liye-laser-surgery",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है? | CureStone",
  description: "किडनी स्टोन आज के समय में एक आम लेकिन बेहद तकलीफदेह समस्या बन चुका है। अचानक तेज दर्द, पेशाब में जलन या खून आना, ये संकेत हैं कि आपको किडनी स्टोन हो सकता है।",
  image: "https://curestone.in/blogs/kidney-stone-ke-liye-laser-surgery.jpg",
  url: "https://curestone.in/blog/kidney-stone-ke-liye-laser-surgery",
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
    "@id": "https://curestone.in/blog/kidney-stone-ke-liye-laser-surgery",
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
      name: "किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है? | CureStone",
      item: "https://curestone.in/blog/kidney-stone-ke-liye-laser-surgery",
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
              किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              किडनी स्टोन आज के समय में एक आम लेकिन बेहद तकलीफदेह समस्या बन चुका है। अचानक तेज दर्द, पेशाब में जलन या खून आना, ये संकेत हैं कि आपको किडनी स्टोन हो सकता है।
            </p>
            <a
              href="https://thecurestone.com/kidney-stones/%e0%a4%95%e0%a4%bf%e0%a4%a1%e0%a4%a8%e0%a5%80-%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a5%8b%e0%a4%a8-%e0%a4%95%e0%a5%87-%e0%a4%b2%e0%a4%bf%e0%a4%8f-%e0%a4%b2%e0%a5%87%e0%a4%9c%e0%a4%bc%e0%a4%b0-%e0%a4%b8/"
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
              src="/blogs/kidney-stone-ke-liye-laser-surgery.jpg"
              alt="किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">किडनी स्टोन आज के समय में एक आम लेकिन बेहद तकलीफदेह समस्या बन चुका है। अचानक तेज दर्द, पेशाब में जलन या खून आना, ये संकेत हैं कि आपको किडनी स्टोन हो सकता है। पारंपरिक सर्जरी में लंबा समय, ज्यादा दर्द और रिकवरी पीरियड की वजह से अब लोग आधुनिक तकनीकों की ओर बढ़ रहे हैं। इन्हीं आधुनिक तरीकों में लेज़र सर्जरी ने यूरोलॉजी की दुनिया में क्रांति ला दी है। इस ब्लॉग में हम जानेंगे- किडनी स्टोन के लिए लेज़र सर्जरी क्या है, इसकी प्रक्रिया कैसे होती है, इसके फायदे और सुरक्षा के पहलू और क्यों यह आज सबसे भरोसेमंद इलाज माना जाता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">किडनी स्टोन मिनरल्स और साल्ट के छोटे-छोटे कणों का जमाव होता है, जो आपस में मिलकर ठोस पत्थर का रूप ले लेते हैं। यह पत्थर बहुत छोटा भी हो सकता है या इतना बड़ा कि दर्द और तकलीफ पैदा कर दे।</p>
              <p className="text-slate-600 leading-relaxed mb-6">लक्षणों में शामिल हैं: पेट या पीठ में तेज दर्द, बार-बार पेशाब आना, पेशाब में खून या बदबू या उल्टी आना|</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">लेज़र सर्जरी बनाम पारंपरिक सर्जरी</h2>
              <p className="text-slate-600 leading-relaxed mb-6">लेज़र सर्जरी, जिसे Laser Lithotripsy कहा जाता है, एक आधुनिक तकनीक है जिसमें लेज़र बीम की मदद से किडनी स्टोन को छोटे टुकड़ों में तोड़ा जाता है। इसके बाद ये छोटे टुकड़े मूत्र के माध्यम से बाहर निकल जाते हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">यह प्रक्रिया आमतौर पर 1–2 घंटे में पूरी हो जाती है और अस्पताल में रहने का समय भी कम होता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">पारंपरिक सर्जरी में पेट या पीठ पर बड़ी चीरा लगती है, जिससे रिकवरी लंबी और दर्दनाक हो सकती है। वहीं लेज़र सर्जरी में:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">लेज़र सर्जरी के फायदे</h2>
              <p className="text-slate-600 leading-relaxed mb-6">लेज़र सर्जरी अत्याधुनिक तकनीक है और इसका सफलता दर 95% से अधिक है। यह एक मिनिमली इनवेसिव प्रक्रिया है, जिसका मतलब है कि इसमें शरीर पर कम चोट लगती है और मरीज जल्दी स्वस्थ हो जाता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">डॉ. दीपांशु जैसे अनुभवी यूरोलॉजिस्ट आधुनिक उपकरणों के साथ इसे करते हैं, जिससे प्रक्रिया और भी सुरक्षित बनती है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">लेज़र सर्जरी की सलाह आमतौर पर तभी दी जाती है जब:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">कब लेज़र सर्जरी जरूरी होती है?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">लेज़र सर्जरी के बाद मरीज को कुछ दिन आराम करना चाहिए और डॉक्टर के निर्देशों का पालन करना चाहिए:</p>
              <p className="text-slate-600 leading-relaxed mb-6">Dr. Deepanshu यूरोलॉजी के क्षेत्र में अनुभव और विशेषज्ञता के लिए जाने जाते हैं। उनके पास अत्याधुनिक लेज़र तकनीक और मरीज-केंद्रित इलाज का एक उत्कृष्ट रिकॉर्ड है। वे हर मरीज की समस्या को व्यक्तिगत रूप से समझकर  सही योजना बनाते हैं, जिससे उपचार सुरक्षित और प्रभावी होता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">किडनी स्टोन आज के समय में तेजी से बढ़ती समस्या है, लेकिन आधुनिक तकनीक जैसे लेज़र सर्जरी इस दर्दनाक समस्या का एक सुरक्षित, तेज़ और असरदार समाधान है। पारंपरिक सर्जरी की तुलना में इसमें दर्द कम, रिकवरी तेज़ और सफलता दर अधिक होती है।</p>
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

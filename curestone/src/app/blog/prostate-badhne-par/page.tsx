import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या? | CureStone",
  description: "क्या आपको पेशाब बार-बार आने की परेशानी होती है, या रात में कई बार उठना पड़ता है? अगर हां, तो यह प्रोस्टेट ग्रंथि के बढ़ने का संकेत हो सकता है। बहुत से पुरुष",
  alternates: {
    canonical: "https://curestone.in/blog/prostate-badhne-par",
  },
  openGraph: {
    title: "प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या? | CureStone",
    description: "क्या आपको पेशाब बार-बार आने की परेशानी होती है, या रात में कई बार उठना पड़ता है? अगर हां, तो यह प्रोस्टेट ग्रंथि के बढ़ने का संकेत हो सकता है। बहुत से पुरुष",
    url: "https://curestone.in/blog/prostate-badhne-par",
    siteName: "CureStone",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या? | CureStone" }],
    locale: "en_IN",
    type: "website",
  },
};


const blogSchema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: "प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या? | CureStone",
  description: "क्या आपको पेशाब बार-बार आने की परेशानी होती है, या रात में कई बार उठना पड़ता है? अगर हां, तो यह प्रोस्टेट ग्रंथि के बढ़ने का संकेत हो सकता है। बहुत से पुरुष",
  image: "https://curestone.in/blogs/prostate-badhne-par.jpg",
  url: "https://curestone.in/blog/prostate-badhne-par",
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
    "@id": "https://curestone.in/blog/prostate-badhne-par",
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
      name: "प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या? | CureStone",
      item: "https://curestone.in/blog/prostate-badhne-par",
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
              प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या?
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8">
              क्या आपको पेशाब बार-बार आने की परेशानी होती है, या रात में कई बार उठना पड़ता है? अगर हां, तो यह प्रोस्टेट ग्रंथि के बढ़ने का संकेत हो सकता है। बहुत से पुरुष
            </p>
            <a
              href="https://thecurestone.com/treatment-option/%e0%a4%aa%e0%a5%8d%e0%a4%b0%e0%a5%8b%e0%a4%b8%e0%a5%8d%e0%a4%9f%e0%a5%87%e0%a4%9f-%e0%a4%ac%e0%a4%a2%e0%a4%bc%e0%a4%a8%e0%a5%87-%e0%a4%aa%e0%a4%b0-%e0%a4%b9%e0%a4%ae%e0%a5%87%e0%a4%b6%e0%a4%be/"
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
              src="/blogs/prostate-badhne-par.jpg"
              alt="प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या?"
              className="w-full rounded-3xl object-cover max-h-[480px]"
            />
          </div>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-8 pb-24">
          <div className="prose prose-slate max-w-none">
            
              <p className="text-slate-600 leading-relaxed mb-6">क्या आपको पेशाब बार-बार आने की परेशानी होती है, या रात में कई बार उठना पड़ता है? अगर हां, तो यह प्रोस्टेट ग्रंथि के बढ़ने का संकेत हो सकता है। बहुत से पुरुष जैसे ही यह सुनते हैं कि उनका प्रोस्टेट बढ़ गया है, वे डर जाते हैं कि अब सर्जरी ही एकमात्र समाधान है। लेकिन सच्चाई यह है कि हर केस में सर्जरी जरूरी नहीं होती ।</p>
              <p className="text-slate-600 leading-relaxed mb-6">उम्र बढ़ने के साथ प्रोस्टेट का आकार बढ़ना एक सामान्य प्रक्रिया है, और कई मामलों में इसे दवाइयों और जीवनशैली में बदलाव से भी नियंत्रित किया जा सकता है। इस ब्लॉग में Dr. Deepanshu बताते हैं कि प्रोस्टेट क्यों बढ़ता है, कौन-से लक्षण दिखते हैं, बिना सर्जरी के क्या विकल्प हैं और कब सर्जरी ज़रूरी बन जाती है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">प्रोस्टेट एक छोटी ग्रंथि है जो पुरुषों की प्रजनन प्रणाली का हिस्सा होती है। यह ब्लैडर के नीचे और मूत्रनली (urethra) के चारों ओर स्थित होती है। इसका मुख्य कार्य एक तरल पदार्थ बनाना है जो स्पर्म को सुरक्षित रखता है और प्रजनन क्षमता को सपोर्ट करता है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">प्रोस्टेट क्या है और इसका काम क्या होता है?</h2>
              <p className="text-slate-600 leading-relaxed mb-6">सामान्य स्थिति में इसका आकार अखरोट जितना होता है, लेकिन उम्र के साथ इसमें धीरे-धीरे वृद्धि होने लगती है — जिसे BPH (Benign Prostatic Hyperplasia) कहा जाता है। यह एक सामान्य, गैर-कैंसरयुक्त वृद्धि है जो लगभग 50 वर्ष से अधिक उम्र के पुरुषों में आम पाई जाती है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">प्रोस्टेट के बढ़ने के पीछे कई कारण हो सकते हैं, जैसे:</p>
              <p className="text-slate-600 leading-relaxed mb-6">हर व्यक्ति में लक्षण अलग हो सकते हैं, लेकिन आमतौर पर इनमें शामिल हैं:</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">प्रोस्टेट बढ़ने के कारण</h2>
              <p className="text-slate-600 leading-relaxed mb-6">इन लक्षणों को नजरअंदाज नहीं करना चाहिए क्योंकि समय के साथ ये बढ़ सकते हैं और ब्लैडर या किडनी को प्रभावित कर सकते हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">नहीं, हर मरीज को सर्जरी की जरूरत नहीं होती। प्रोस्टेट बढ़ने की शुरुआत में दवाइयों और कुछ आसान बदलावों से इसे नियंत्रित किया जा सकता है। सर्जरी तब ही की जाती है जब समस्या गंभीर हो जाए या जीवन की गुणवत्ता पर असर डालने लगे।</p>
              <p className="text-slate-600 leading-relaxed mb-6">अगर प्रोस्टेट का आकार बहुत नहीं बढ़ा है, तो नियमित जांच और अल्ट्रासाउंड से स्थिति पर निगरानी रखी जा सकती है। इससे सर्जरी की आवश्यकता को टाला जा सकता है।</p>
              <h2 className="text-2xl font-bold text-blue-900 mb-4 mt-10">बढ़े हुए प्रोस्टेट के लक्षण</h2>
              <p className="text-slate-600 leading-relaxed mb-6">जब दवाओं से लक्षणों में सुधार न हो और मरीज को रोजमर्रा की गतिविधियों में दिक्कत आने लगे, तब सर्जरी पर विचार किया जाता है।</p>
              <p className="text-slate-600 leading-relaxed mb-6">आज के समय में लेज़र सर्जरी (HoLEP, PVP आदि) और TURP (Transurethral Resection of Prostate) जैसी मिनिमली इनवेसिव तकनीकें बेहद सुरक्षित और प्रभावी हैं।</p>
              <p className="text-slate-600 leading-relaxed mb-6">इन प्रक्रियाओं में दर्द कम होता है, रिकवरी तेज़ होती है और मरीज कुछ ही दिनों में सामान्य जीवन में लौट आता है।</p>
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

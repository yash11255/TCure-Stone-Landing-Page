import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kidney Stone Blogs & Health Articles | CureStone",
  description: "Expert articles on kidney stones, laser treatment, RIRS, PCNL, diet, and urology care. Written by top urologists at CureStone Gurgaon.",
};

export default function BlogListPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-900">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{
        __html: `
        .material-symbols-outlined { font-variation-settings: 'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24; }
        .editorial-gradient { background: linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%); }
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}} />

      <Navbar />

      <main className="flex-grow pt-20">

        {/* Hero */}
        <section className="relative overflow-hidden editorial-gradient py-24 lg:py-32">
          <div className="max-w-5xl mx-auto px-8 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6">
              <span className="material-symbols-outlined text-sm">auto_stories</span> Knowledge Centre
            </div>
            <h1 className="font-sans text-5xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6">
              Kidney Stone <span className="text-amber-400">Health Blog</span>
            </h1>
            <p className="text-blue-100 text-xl max-w-2xl mx-auto opacity-90">
              Expert-written articles on treatments, symptoms, diet, and prevention — from CureStone&apos;s senior urology team.
            </p>
            <div className="mt-8 text-blue-200 text-sm font-medium">
              72 Articles &nbsp;·&nbsp; Updated Weekly
            </div>
          </div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
        </section>

        {/* Blog Grid */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            
          <a href="/blog/10-signs-you-need-to-see-a-kidney-stone-specialist" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/10-signs-you-need-to-see-a-kidney-stone-specialist.jpg" alt="10 Signs You Need to See a Kidney Stone Specialist" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">10 Signs You Need to See a Kidney Stone Specialist</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones can indicate greater issues if not dealt with. Though some small stones might pass on their own, old symptoms may in...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/4-methods-of-kidney-stone-removal-a-guide" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/4-methods-of-kidney-stone-removal-a-guide.jpg" alt="4 Methods of Kidney Stone Removal: A Guide" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">4 Methods of Kidney Stone Removal: A Guide</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">When you seek help for kidney stones, there are many possible treatments to relieve the discomfort and restore normal kidney funct...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/are-there-any-side-effects-after-pcnl-surgery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/are-there-any-side-effects-after-pcnl-surgery.jpg" alt="Are There Any Side Effects After PCNL Surgery?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Are There Any Side Effects After PCNL Surgery?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Hearing the words “you need surgery” and “kidney stones” in the same sentence can be nerve-wracking. It can cause anxiety for pati...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/can-a-7mm-kidney-stone-dissolve-naturally" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/can-a-7mm-kidney-stone-dissolve-naturally.jpg" alt="Can a 7mm kidney stone dissolve Naturally?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Can a 7mm kidney stone dissolve Naturally?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Passing a kidney stone is not that easy. While a smaller stone passes through the urine easily and is not noticeable, a 7mm kidney...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/can-kidney-stone-patients-consume-milk" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/can-kidney-stone-patients-consume-milk.jpg" alt="Can Kidney Stone Patients Consume Milk?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Can Kidney Stone Patients Consume Milk?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">For those with kidney stones, the question of whether drinking milk is beneficial or harmful is certainly a point of concern. Many...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/can-kidney-stones-be-treated-without-surgery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/can-kidney-stones-be-treated-without-surgery.jpg" alt="Can kidney stones be treated without surgery?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Can kidney stones be treated without surgery?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are very common and serious urinary tract diseases that affect lots of people around the world. The pain caused by k...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/can-kidney-stones-cause-permanent-kidney-damage" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/can-kidney-stones-cause-permanent-kidney-damage.jpg" alt="Can Kidney Stones Cause Permanent Kidney Damage?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Can Kidney Stones Cause Permanent Kidney Damage?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones or lithiasis are some of the most common urological problems globally, impacting roughly 80% of the world’s populati...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/can-kidney-stones-kill-you" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/can-kidney-stones-kill-you.jpg" alt="Can Kidney Stones Kill You?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Can Kidney Stones Kill You?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">The incidence of kidney stones is quite high with 1 out of 10 men all over the world experiencing one any time in their lives. The...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/can-you-feel-a-kidney-stone-moving" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/can-you-feel-a-kidney-stone-moving.jpg" alt="Can you feel a kidney stone moving?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Can you feel a kidney stone moving?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are famous regarding the pain they bring and one major question that most patients have is - “Are you able to feel w...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/dialysis-patients-with-kidney-stones-what-you-must-know" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/dialysis-patients-with-kidney-stones-what-you-must-know.jpg" alt="Dialysis Patients with Kidney Stones: What You Must Know" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Dialysis Patients with Kidney Stones: What You Must Know</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Managing kidney disease is already a complex problem to solve. Combine that with kidney stones, and things get more complicated, p...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/do-kidney-stones-cause-urine-blockage" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/do-kidney-stones-cause-urine-blockage.jpg" alt="Do Kidney Stones Cause Urine Blockage?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Do Kidney Stones Cause Urine Blockage?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are small, hard deposits of mineral and acid salts. The kidneys, (or the tubes that connect the kidneys to the bladd...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/does-ejaculating-help-pass-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/does-ejaculating-help-pass-kidney-stones.jpg" alt="Does ejaculating help pass kidney stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Does ejaculating help pass kidney stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">A very common question that may arise when you failed all the other solutions is: does ejaculating get rid of kidney stones? The a...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/does-more-walking-help-pass-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/does-more-walking-help-pass-kidney-stones.jpg" alt="Does More Walking Help Pass Kidney Stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Does More Walking Help Pass Kidney Stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones may be very painful and difficult to cope with. These are minute hard minerals deposits that are formed in the kidne...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/does-pushing-help-pass-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/does-pushing-help-pass-kidney-stones.jpg" alt="Does pushing help pass kidney stones" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Does pushing help pass kidney stones</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">The pain of a kidney stone can be one of the most intense pains in life. Stone causes sharp pain while passing through the urinary...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/gas-pain-vs-gallstones-how-to-tell-the-difference" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/gas-pain-vs-gallstones-how-to-tell-the-difference.png" alt="Gas Pain vs Gallstones: How to Tell the Difference" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Gas Pain vs Gallstones: How to Tell the Difference</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Most individuals have been known to experience abdominal pain, but determining what is causing it can be puzzling. Gas pain and ga...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/hereditary-causes-of-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/hereditary-causes-of-kidney-stones.jpg" alt="Hereditary causes of kidney stones" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Hereditary causes of kidney stones</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are small, hard lumps that form within the kidneys of people when the salts and minerals in their urine become hard....</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-are-bladder-stones-removed-treatment-recovery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-are-bladder-stones-removed-treatment-recovery.jpg" alt="How Are Bladder Stones Removed? Treatment & Recovery" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How Are Bladder Stones Removed? Treatment & Recovery</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Bladder stones are small deposits of minerals, such as calcium or magnesium, that form in the bladder and are usually the result o...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-can-i-get-immediate-relief-from-kidney-stone-pain" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-can-i-get-immediate-relief-from-kidney-stone-pain.jpg" alt="How can I get immediate relief from kidney stone pain?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How can I get immediate relief from kidney stone pain?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Medically termed as renal colic, kidney stone pain is often experienced as an excruciating ordeal. The severe discomfort occurs wh...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-can-i-speed-up-the-passing-of-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-can-i-speed-up-the-passing-of-kidney-stones.jpg" alt="How can I speed up the passing of kidney stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How can I speed up the passing of kidney stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">If you have ever experienced kidney stone pain, you know how sudden and painful it can be, and it can also affect your daily life ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-do-i-check-myself-for-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-do-i-check-myself-for-kidney-stones.jpg" alt="How Do I Check Myself for Kidney Stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How Do I Check Myself for Kidney Stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">It’s likely that kidney stones are more prevalent than you think, and if they are not caught in time, may result in extreme discom...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-do-i-know-if-my-kidney-stone-is-severe" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-do-i-know-if-my-kidney-stone-is-severe.jpg" alt="How Do I Know If My Kidney Stone Is Severe?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How Do I Know If My Kidney Stone Is Severe?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones — or renal calculi — are solid mineral deposits that form in your kidneys. They’re little’s the rare pebble that you...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-do-you-know-when-a-kidney-stone-is-close-to-passing" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-do-you-know-when-a-kidney-stone-is-close-to-passing.jpg" alt="How do you know when a kidney stone is close to passing?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How do you know when a kidney stone is close to passing?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">The passing of a kidney stone can cause intense pain, but the good thing is, some of the small stones pass on their own without su...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-is-it-possible-to-remove-kidney-stones-painlessly" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-is-it-possible-to-remove-kidney-stones-painlessly.jpg" alt="How Is It Possible To Remove Kidney Stones Painlessly?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How Is It Possible To Remove Kidney Stones Painlessly?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones usually develop as a result of the accumulation of minerals and salts that kidneys filter. Most people experience ex...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-much-water-should-you-drink-to-prevent-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-much-water-should-you-drink-to-prevent-kidney-stones.png" alt="How much water should you drink to prevent kidney stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How much water should you drink to prevent kidney stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones can be a painful problem that affects millions all over the world. They are caused by the minerals and salts present...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-to-avoid-getting-a-uti-after-sex" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-to-avoid-getting-a-uti-after-sex.jpg" alt="How to Avoid Getting a UTI After Sex" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How to Avoid Getting a UTI After Sex</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">An infection of the urinary tract, also known as UTI, is when bacteria enter the urinary tract, which includes the bladder, urethr...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-to-choose-the-right-kidney-stone-surgeon-in-gurgaon" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-to-choose-the-right-kidney-stone-surgeon-in-gurgaon.jpg" alt="How to Choose the Right Kidney Stone Surgeon in Gurgaon?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How to Choose the Right Kidney Stone Surgeon in Gurgaon?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are a common urological problem, and appropriate surgeon choice is important for successful treatment and recovery w...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/how-to-identify-avoid-common-urological-problems" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/how-to-identify-avoid-common-urological-problems.jpg" alt="How to Identify & Avoid Common Urological Problems?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">How to Identify & Avoid Common Urological Problems?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">There are more cases of urological problems which include kidneys, the bladder, ureters, urethra, and male organs than most people...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/in-which-kidney-stone-cases-is-the-eswl-method-helpful" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/in-which-kidney-stone-cases-is-the-eswl-method-helpful.jpg" alt="In Which Kidney Stone Cases is the ESWL Method Helpful?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">In Which Kidney Stone Cases is the ESWL Method Helpful?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">All of us know that kidney stones can be one of the most painful conditions people can go through. When it comes to treating kidne...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stone-location-why-it-matters-more-than-you-think" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stone-location-why-it-matters-more-than-you-think.jpg" alt="Kidney Stone Location: Why It Matters More Than You Think" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stone Location: Why It Matters More Than You Think</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones occur when excess minerals and salts accumulate as hard deposits in the kidneys. Their size can vary from that of a ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stone-symptoms-you-shouldnt-ignore" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stone-symptoms-you-shouldnt-ignore.jpg" alt="Kidney Stone Symptoms You Shouldn’t Ignore" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stone Symptoms You Shouldn’t Ignore</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Stones are made of minerals and salts including calcium, oxalate and uric acid, among others, that can become concentrated in the ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stones-and-digestive-issues-whats-the-connection" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stones-and-digestive-issues-whats-the-connection.jpg" alt="Kidney Stones and Digestive Issues: What’s the Connection?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stones and Digestive Issues: What’s the Connection?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones and digestive problems are two very different — and very common — health problems. But they share a commonality that...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stones-in-pregnant-women-what-to-do" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stones-in-pregnant-women-what-to-do.jpg" alt="Kidney Stones In Pregnant Women: What To Do" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stones In Pregnant Women: What To Do</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Pregnancy is frequently considered a beautiful, transformative experience — but it doesn’t come without its share of challenges. O...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stones-in-women-vs-men-whats-the-difference" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stones-in-women-vs-men-whats-the-difference.jpg" alt="Kidney Stones in Women vs. Men: What’s the Difference?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stones in Women vs. Men: What’s the Difference?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are the most common, potentially painful problem of the renal system, and millions of people suffer from them annual...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stones-pain-location-when-to-seek-help" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stones-pain-location-when-to-seek-help.jpg" alt="Kidney Stones Pain Location: When to Seek Help?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stones Pain Location: When to Seek Help?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are the cause for the severest of all pains; happen to people. Ever been stabbed in the back or lower abdomen by a p...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stones-the-risk-of-chronic-kidney-disease" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stones-the-risk-of-chronic-kidney-disease.jpg" alt="Kidney Stones & the Risk of Chronic Kidney Disease" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stones & the Risk of Chronic Kidney Disease</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are a pressing health problem suffered by millions around the world and create sharp pain, discomfort, and distress....</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/kidney-stones-while-pregnant-can-you-wait-until-delivery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/kidney-stones-while-pregnant-can-you-wait-until-delivery.jpg" alt="Kidney Stones While Pregnant: Can You Wait Until Delivery?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Kidney Stones While Pregnant: Can You Wait Until Delivery?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Pregnancy has been termed as one of the most beautiful trips that one could ever take as a woman. However, what happens when the t...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/laparoscopic-vs-open-gallbladder-stone-surgery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/laparoscopic-vs-open-gallbladder-stone-surgery.png" alt="Laparoscopic vs Open Gallbladder Stone Surgery" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Laparoscopic vs Open Gallbladder Stone Surgery</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Gallstones are a prevalent medical condition that can lead to very painful abdominal pain, nausea, and occasionally infections. If...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/laser-vs-shockwave-treatment-for-kidney-stones-which-works-better" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/laser-vs-shockwave-treatment-for-kidney-stones-which-works-better.png" alt="Laser vs shockwave treatment for kidney stones – Which works better?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Laser vs shockwave treatment for kidney stones – Which works better?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are hard, tiny particles that may develop in your kidneys. Sometimes kidney stones remain silent and cause no discom...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/life-after-kidney-stone-surgery-diet-lifestyle-follow-ups" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/life-after-kidney-stone-surgery-diet-lifestyle-follow-ups.jpg" alt="Life After Kidney Stone Surgery: Diet, Lifestyle & Follow-ups" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Life After Kidney Stone Surgery: Diet, Lifestyle & Follow-ups</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Recovering from kidney stone removal involves more than just healing from the procedure. Preventing their reoccurrence and keeping...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/non-surgical-treatment-options-for-small-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/non-surgical-treatment-options-for-small-kidney-stones.jpg" alt="Non-Surgical Treatment Options for Small Kidney Stones" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Non-Surgical Treatment Options for Small Kidney Stones</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">So here we go, let’s talk about kidney stones-and treat it--but without the scalpels! Got an ill-timed, impulsive shot of pain on ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/postsurgical-care-after-urological-procedures-essential-tips-for-recov" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/postsurgical-care-after-urological-procedures-essential-tips-for-recov.jpg" alt="Post‑Surgical Care After Urological Procedures: Essential Tips for Recovery" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Post‑Surgical Care After Urological Procedures: Essential Tips for Recovery</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Once people are out of a urological hospital--whether you are a kidney patient that has undergone kidney stone surgery, have an en...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/preparing-for-a-kidney-stone-surgery-a-patients-guide" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/preparing-for-a-kidney-stone-surgery-a-patients-guide.jpg" alt="Preparing for a Kidney Stone Surgery: A Patient’s Guide" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Preparing for a Kidney Stone Surgery: A Patient’s Guide</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">If you are about to undergo kidney stone surgery, you have every reason to be nervous, anxious, and perhaps even plagued with vari...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/recurring-kidney-stones-heres-what-you-need-to-know" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/recurring-kidney-stones-heres-what-you-need-to-know.jpg" alt="Recurring Kidney Stones? Here\'s What You Need to Know" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Recurring Kidney Stones? Here's What You Need to Know</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Having kidney stones isn't a unique issue. Research indicates that close to half of all individuals are likely to form another sto...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/role-of-ultrasound-ct-scan-in-diagnosing-kidney-stones.jpg" alt="Role of Ultrasound & CT Scan in Diagnosing Kidney Stones" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Role of Ultrasound & CT Scan in Diagnosing Kidney Stones</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Most people don't know that kidney stones are actually quite common, along with being incredibly painful. They are small deposits ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/small-vs-large-kidney-stones-which-surgery-works-best" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/small-vs-large-kidney-stones-which-surgery-works-best.png" alt="Small vs large kidney stones – Which surgery works best?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Small vs large kidney stones – Which surgery works best?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are among the most uncomfortable urological ailments that affect millions of people worldwide. The hard deposits dev...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/the-recovery-after-kidney-stone-surgery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/the-recovery-after-kidney-stone-surgery.jpg" alt="The Recovery after Kidney Stone Surgery" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">The Recovery after Kidney Stone Surgery</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are crystalline solid accumulations that develop in the kidney and result in acute discomfort and difficulty urinati...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/the-role-of-a-urologist-in-treating-kidney-urinary-issues" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/the-role-of-a-urologist-in-treating-kidney-urinary-issues.jpg" alt="The Role of a Urologist in Treating Kidney & Urinary Issues" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">The Role of a Urologist in Treating Kidney & Urinary Issues</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Do you know who to turn to if you experience persistent burning while urinating, or if that dull back pain becomes a kidney stone?...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/the-role-of-diet-in-kidney-stone-formation-prevention" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/the-role-of-diet-in-kidney-stone-formation-prevention.jpg" alt="The Role of Diet in Kidney Stone Formation & Prevention" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">The Role of Diet in Kidney Stone Formation & Prevention</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones can be extremely painful; they are hard deposits on the inner lining of a kidney that disrupt normal urinary functio...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/top-questions-to-ask-your-kidney-stone-specialist-in-gurgaon" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/top-questions-to-ask-your-kidney-stone-specialist-in-gurgaon.jpg" alt="Top Questions To Ask Your Kidney Stone Specialist in Gurgaon" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Top Questions To Ask Your Kidney Stone Specialist in Gurgaon</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Managing a kidney stone for the first time can be stressful and painful. Whether your symptoms are mild or more severe, treatment ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/types-of-kidney-stones-how-theyre-treated-differently" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/types-of-kidney-stones-how-theyre-treated-differently.jpg" alt="Types of Kidney Stones & How They’re Treated Differently" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Types of Kidney Stones & How They’re Treated Differently</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Did you ever think a kidney stone is a simple rock? Think again. The kidney stones can be quite identical in their external appear...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/uti-vs-kidney-infection-how-to-know-the-difference" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/uti-vs-kidney-infection-how-to-know-the-difference.png" alt="UTI vs Kidney Infection – How to Know the Difference" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">UTI vs Kidney Infection – How to Know the Difference</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Urinary health concerns are quite common, particularly among women; however, anybody can suffer from these issues. The two most fr...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/vitamin-b3-may-cut-kidney-stone-risk-by-22-heres-what-you-need-to-know" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/vitamin-b3-may-cut-kidney-stone-risk-by-22-heres-what-you-need-to-know.png" alt="Vitamin B3 May Cut Kidney Stone Risk by 22%—Here’s What You Need to Know" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Vitamin B3 May Cut Kidney Stone Risk by 22%—Here’s What You Need to Know</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are small but mighty when it comes to pain. Anyone who has had them will tell you how sharp, sudden and unbearable t...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-can-mimic-kidney-stone-pain" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-can-mimic-kidney-stone-pain.jpg" alt="What Can Mimic Kidney Stone Pain?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What Can Mimic Kidney Stone Pain?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stone pain is commonly called one of the most severe discomforts anyone can endure sharp, sudden and even intolerable. But ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-causes-kidney-stones-in-women" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-causes-kidney-stones-in-women.jpg" alt="What Causes Kidney Stones in Women?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What Causes Kidney Stones in Women?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones are a common urology condition that occurs in both genders. But women have unique risk factors — including hormone f...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-exercise-is-good-for-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-exercise-is-good-for-kidney-stones.jpg" alt="What Exercise is Good for Kidney Stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What Exercise is Good for Kidney Stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones present a very widespread health issue that may result in extreme pain, uneasiness, and interferences with everyday ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-is-the-most-painful-stage-of-kidney-stones-2" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-is-the-most-painful-stage-of-kidney-stones-2.jpg" alt="What Is The Most Painful Stage Of Kidney Stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What Is The Most Painful Stage Of Kidney Stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones get a bad rap because its pain is extreme, one of the most uncomfortable physical pains that a human being feels. No...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-is-the-new-surgery-for-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-is-the-new-surgery-for-kidney-stones.jpg" alt="What is the New Surgery for Kidney Stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What is the New Surgery for Kidney Stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">The incidence of kidney stones is one of the most prevalent urological issues because millions of individuals across the globe dev...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-is-the-number-1-treatment-for-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-is-the-number-1-treatment-for-kidney-stones.png" alt="What Is The Number 1 Treatment For Kidney Stones" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What Is The Number 1 Treatment For Kidney Stones</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">A renal calculus forms when minerals and salts calcify within the kidneys, and is known as a kidney stone. These stones can be rat...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/what-to-expect-during-your-kidney-stone-tests" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/what-to-expect-during-your-kidney-stone-tests.jpg" alt="What To Expect During Your Kidney Stone Tests?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">What To Expect During Your Kidney Stone Tests?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones can be extremely painful. Should you have been suffering from symptoms such as sudden pain in your back or side, fre...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/where-do-you-feel-kidney-stone-pain-2" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/where-do-you-feel-kidney-stone-pain-2.jpg" alt="Where do you feel kidney stone pain?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Where do you feel kidney stone pain?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Pain in the body can occur for many reasons, but certain types of pain are extremely rare because they begin suddenly and are very...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/which-factors-mainly-cause-kidney-stones" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/which-factors-mainly-cause-kidney-stones.jpg" alt="Which Factors Mainly Cause Kidney Stones?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Which Factors Mainly Cause Kidney Stones?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">The hard deposits in the kidney that are crystalline in nature are painful and affect the day to day movement of over millions of ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/who-is-the-right-candidate-for-pcnl-kidney-stone-removal" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/who-is-the-right-candidate-for-pcnl-kidney-stone-removal.jpg" alt="Who Is the Right Candidate for PCNL Kidney Stone Removal?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Who Is the Right Candidate for PCNL Kidney Stone Removal?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">The experience of having kidney stones can be exasperating and uncomfortable. Medications alongside a healthy lifestyle may aid in...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/why-are-aftercare-follow-up-important-after-kidney-stone-surgery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/why-are-aftercare-follow-up-important-after-kidney-stone-surgery.jpg" alt="Why Are Aftercare & Follow-Up Important After Kidney Stone Surgery?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Why Are Aftercare & Follow-Up Important After Kidney Stone Surgery?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stone treatment involves multiple steps. These include laser stone removal via surgery, RIRS which stands for Retrograde In...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/why-are-kidney-stones-worse-in-the-morning" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/why-are-kidney-stones-worse-in-the-morning.jpg" alt="Why Are Kidney Stones Worse in the Morning?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Why Are Kidney Stones Worse in the Morning?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">You wake up to a searing, cramping, stabbing pain in your lower back or abdomen, and you get a strong suspicion you may be sufferi...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/why-do-kidney-stones-hurt-more-at-night" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/why-do-kidney-stones-hurt-more-at-night.jpg" alt="Why Do Kidney Stones Hurt More at Night?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Why Do Kidney Stones Hurt More at Night?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Kidney stones tend to be so painful that they are unbearable. Many people are usually puzzled with the idea of why this pain only ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/why-is-gurgaon-emerging-as-a-trusted-hub-for-kidney-stone-surgery.jpg" alt="Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Why is Gurgaon Emerging as a Trusted Hub for Kidney Stone Surgery?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Gurgaon, which is now officially spelled Gurugram, is the address of some of the most advanced medical care centers in India. Beca...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/will-removing-kidney-stones-improve-kidney-function" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/will-removing-kidney-stones-improve-kidney-function.jpg" alt="Will Removing Kidney Stones Improve Kidney Function?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">Will Removing Kidney Stones Improve Kidney Function?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">Every year, millions of people suffer the painful condition of kidney stones. Renal calculi, as it is medically termed, is one of ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/एक-कडन-वल-मरज-क-लए-क" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/एक-कडन-वल-मरज-क-लए-क.jpg" alt="एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">एक किडनी वाले मरीज के लिए कौन सी सर्जरी सुरक्षित है?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">एक किडनी के साथ जीवन जीना पूरी तरह संभव है, लेकिन इसमें कुछ सावधानी बरतनी बहुत ज़रूरी है। कई मरीजों को एक किडनी होने पर सबसे बड़ा ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/कडन-और-बलडर-हलथ-क-ल" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/कडन-और-बलडर-हलथ-क-ल.jpg" alt="किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">किडनी और ब्लैडर हेल्थ के लिए बेस्ट डाइट</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">क्या आप जानते हैं कि आपकी डाइट आपकी किडनी और ब्लैडर की सेहत को सीधा प्रभावित करती है? हम अक्सर शरीर की बाकी ज़रूरतों पर ध्यान देते...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/कडन-सटन-क-लए-लजर-स" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/कडन-सटन-क-लए-लजर-स.jpg" alt="किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">किडनी स्टोन के लिए लेज़र सर्जरी कितनी सुरक्षित है?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">किडनी स्टोन आज के समय में एक आम लेकिन बेहद तकलीफदेह समस्या बन चुका है। अचानक तेज दर्द, पेशाब में जलन या खून आना, ये संकेत हैं कि आ...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/कडन-सटन-बर-बर-कय" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/कडन-सटन-बर-बर-कय.jpg" alt="किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">किडनी स्टोन बार-बार क्यों बनते हैं? कारण और रोकथाम</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">अगर आपको बार-बार किडनी स्टोन हो रहे हैं, तो यह सिर्फ एक सामान्य समस्या नहीं है — यह आपके जीवन को प्रभावित करने वाली एक बड़ी स्वास्...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          <a href="/blog/परसटट-बढन-पर-हमश" className="group bg-white rounded-3xl overflow-hidden border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 flex flex-col">
            <div className="overflow-hidden">
              <img src="/blogs/परसटट-बढन-पर-हमश.jpg" alt="प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या?" className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="p-7 flex flex-col gap-3 flex-grow">
              <h2 className="font-sans text-lg font-bold text-blue-900 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">प्रोस्टेट बढ़ने पर हमेशा सर्जरी ज़रूरी है क्या?</h2>
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow">क्या आपको पेशाब बार-बार आने की परेशानी होती है, या रात में कई बार उठना पड़ता है? अगर हां, तो यह प्रोस्टेट ग्रंथि के बढ़ने का संकेत...</p>
              <span className="inline-flex items-center gap-1 text-blue-700 text-sm font-semibold mt-2 group-hover:gap-2 transition-all">
                Read Article <span className="material-symbols-outlined text-base">arrow_forward</span>
              </span>
            </div>
          </a>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 max-w-7xl mx-auto px-8">
          <div className="editorial-gradient rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="font-sans text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tighter">
                Have Kidney Stone Questions?
              </h2>
              <p className="text-blue-100 text-xl max-w-xl mx-auto mb-10 opacity-90">
                Speak directly with our expert urologists. Free consultation, cashless insurance support.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="bg-amber-500 text-white px-12 py-5 rounded-full font-sans font-bold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300">
                  Book Free Consultation
                </button>
                <a className="text-white flex items-center gap-2 font-bold text-lg" href="tel:+918800263884">
                  <span className="material-symbols-outlined">call</span> +91 88002 63884
                </a>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

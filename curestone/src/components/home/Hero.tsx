
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

const STAGES = [
  {
    tag: "Dr. Deepanshu Gupta",
    line1: "WELCOME TO",
    line2: "cure stone",
    desc: "",
  },
  {
    tag: "Precision Care",
    line1: "INDIA'S BEST",
    line2: "kidney stone treatment",
    desc: "1st Ever to start Fans-RIRS in North India — By Dr. Deepanshu Gupta.",
  },
  {
    tag: "98% Success",
    line1: "UNMATCHED",
    line2: "success rate",
    desc: "Maintaining a 98% stone-free success rate over 30,000+ patient lives.",
  },
  {
    tag: "Book Free Consultation",
    line1: "TAKE CONTROL",
    line2: "of your health",
    desc: "Consult India's leading kidney specialist today at Cure Stone.",
  },
];

// Evenly distributed centers for 4 stages
const CENTERS = [0.10, 0.36, 0.63, 0.90];
const HOLD = 0.05;    // balanced hold to prevent overlap
const FADE = 0.06;    // smoother fade transitions

function calcOpacity(p: number, center: number): number {
  const dist = Math.abs(p - center);
  if (dist <= HOLD) return 1;
  if (dist <= HOLD + FADE) {
    // Smooth ease-out curve for fade
    const t = (dist - HOLD) / FADE;
    return 1 - (t * t); // quadratic ease-out
  }
  return 0;
}

function calcY(p: number, center: number): number {
  const dist = Math.abs(p - center);
  const dir = p < center ? 1 : -1;
  if (dist <= HOLD) return 0;
  const t = Math.min((dist - HOLD) / FADE, 1);
  // Smoother ease-out for movement
  return dir * 40 * (t * t);
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);



  // Per-stage element refs
  const tagRefs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);
  const line1Refs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);
  const line2Refs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([null, null, null, null]);

  // quickTo tweener storage
  const qOpacity = useRef<(((v: number) => void) | null)[][]>([[], [], [], []]);
  const qY = useRef<(((v: number) => void) | null)[][]>([[], [], [], []]);
  const qBlur = useRef<(((v: number) => void) | null)[][]>([[], [], [], []]);



  useEffect(() => {
    if (typeof window !== "undefined") {
      window.history.scrollRestoration = "manual";
      window.scrollTo(0, 0);
    }

    const lenis = new Lenis({
      duration: 1.8,        // Slower, smoother scroll
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.7, // Reduced speed for smoother feel
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const ticker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    // Force autoplay for iOS
    const vid = document.querySelector("video");
    if (vid) {
      vid.defaultMuted = true;
      vid.muted = true;
      vid.play().catch(() => { });
    }

    const ctx = gsap.context(() => {
      // ── Set initial state ────────────────────────────────────────────────
      STAGES.forEach((_, i) => {
        const els = [tagRefs.current[i], line1Refs.current[i], line2Refs.current[i], descRefs.current[i]];
        gsap.set(els, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 40,
          filter: i === 0 ? "blur(0px)" : "blur(14px)",
        });
      });

      // ── Build quickTo tweeners with staggered durations ──
      // Shorter durations here prevent animations from lagging behind the scroll, which was causing visual overlap
      const durations = [0.15, 0.22, 0.28, 0.35]; // tag, line1, line2, desc

      STAGES.forEach((_, i) => {
        const els = [tagRefs.current[i], line1Refs.current[i], line2Refs.current[i], descRefs.current[i]];
        qOpacity.current[i] = els.map((el, j) =>
          el ? gsap.quickTo(el, "opacity", { duration: durations[j], ease: "power3.out" }) : null
        );
        qY.current[i] = els.map((el, j) =>
          el ? gsap.quickTo(el, "y", { duration: durations[j] + 0.1, ease: "power3.out" }) : null
        );
        qBlur.current[i] = els.map((el, j) =>
          el ? gsap.quickTo(el, "filter", {
            duration: durations[j] + 0.15,
            ease: "power2.out",
            onUpdate: function () {
              // Ensure filter stays valid during tween
            }
          }) : null
        );
      });

      // ── Scroll-driven animation ─────────────────────────────────────────
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1600%",      // Longer scroll distance = slower text transitions
        scrub: 1.5,          // Lower scrub = more responsive but still smooth
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,    // CRITICAL: adds spacer for smooth next section transition
        snap: {
          snapTo: CENTERS,
          duration: { min: 0.5, max: 1.5 },
          delay: 0.05,
          ease: "power2.inOut"
        },
        onUpdate(self) {
          const p = self.progress;

          // Video slow zoom (1 → 1.08) - subtler
          gsap.set(videoWrapRef.current, { scale: 1 + 0.08 * p });

          // Vignette deepens gradually
          gsap.set(vignetteRef.current, { opacity: 0.50 + 0.40 * p });

          // Fade out the entire hero content gracefully as the user scrolls out of the pin
          // The last stage is at 0.85, so we fade out from 0.85 to 1.0
          const exitFade = p > 0.85 ? 1 - ((p - 0.85) / 0.15) : 1;
          gsap.set(sectionRef.current, { opacity: Math.max(0, exitFade) });

          // Update each stage
          STAGES.forEach((_, i) => {
            const op = calcOpacity(p, CENTERS[i]);
            const y = calcY(p, CENTERS[i]);

            // Opacity & Y via quickTo
            qOpacity.current[i].forEach(fn => fn?.(op));
            qY.current[i].forEach(fn => fn?.(y));

            // Blur with smooth transition
            const blurVal = op < 1 ? 14 * (1 - op) : 0;
            [tagRefs.current[i], line1Refs.current[i], line2Refs.current[i], descRefs.current[i]]
              .forEach(el => {
                if (el) el.style.filter = `blur(${blurVal.toFixed(1)}px)`;
              });
          });
        }
      });

      // Store reference for cleanup
      if (sectionRef.current) {
        (sectionRef.current as any)._st = scrollTrigger;
      }

    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(ticker);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <style dangerouslySetInnerHTML={{
        __html: `
        video::-webkit-media-controls-start-playback-button {
          display: none !important;
          -webkit-appearance: none !important;
        }
        video::-webkit-media-controls {
          display: none !important;
        }
      `}} />
      <section
        ref={sectionRef}
        className="relative w-full h-svh min-h-[600px] overflow-hidden bg-black font-sans"
      >
        {/* Video */}
        <div
          ref={videoWrapRef}
          className="absolute inset-0 z-0 origin-center will-change-transform bg-black pointer-events-none"
          dangerouslySetInnerHTML={{
            __html: `
              <video
                autoplay
                muted
                loop
                playsinline
                preload="auto"
                class="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
              >
                <source src="/Stone_fragments_floating_in_dark…_202605131342.mp4" type="video/mp4" />
              </video>
            `
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div
            ref={vignetteRef}
            className="absolute inset-0 bg-[radial-gradient(ellipse_90%_90%_at_50%_50%,transparent_15%,rgba(0,0,0,0.88)_85%)]"
            style={{ opacity: 0.5 }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/80 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>

        {/* Text stages */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <div className="relative w-full max-w-4xl mx-auto px-6 text-center" style={{ height: "70vh" }}>
            {STAGES.map((s, i) => (
              <div key={i} className="absolute inset-0 flex flex-col items-center justify-center px-6">

                {/* Tag */}
                <span
                  ref={(el) => { tagRefs.current[i] = el; }}
                  className="inline-flex items-center gap-3 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.45em] text-white mb-5 will-change-transform"
                >
                  <span className="block w-6 h-px bg-white/30" />
                  {s.tag}
                  <span className="block w-6 h-px bg-white/30" />
                </span>

                {/* Headline */}
                <h1 className="flex flex-col items-center leading-[0.85]">
                  <span
                    ref={(el) => { line1Refs.current[i] = el; }}
                    className="block font-black text-white uppercase tracking-[-0.055em] will-change-transform whitespace-nowrap"
                    style={{
                      fontSize: "clamp(2.5rem, 8vw, 8rem)",
                      textShadow: "0 4px 60px rgba(0,0,0,0.8), 0 0 120px rgba(255,255,255,0.04)",
                    }}
                  >
                    {s.line1}
                  </span>
                  <span
                    ref={(el) => { line2Refs.current[i] = el; }}
                    className="block font-extralight italic text-white lowercase tracking-wide will-change-transform whitespace-nowrap"
                    style={{
                      fontSize: "clamp(1.4rem, 4.5vw, 4rem)",
                      marginTop: "-0.04em",
                      textShadow: "0 2px 30px rgba(0,0,0,0.7)",
                    }}
                  >
                    {s.line2}
                  </span>
                </h1>

                {/* Description */}
                <p
                  ref={(el) => { descRefs.current[i] = el; }}
                  className="mt-7 text-white font-light leading-relaxed max-w-lg mx-auto will-change-transform"
                  style={{ fontSize: "clamp(0.82rem, 1.5vw, 1rem)" }}
                >
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={buttonsRef}
          className="absolute bottom-16 sm:bottom-20 left-0 right-0 z-30 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 px-6"
        >
          <button
            onClick={() => {
              document.getElementById('appointment-section')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group w-full sm:w-auto px-8 py-4 bg-white text-black text-[11px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:bg-white/90 transition-all duration-300 active:scale-95"
          >
            Book Appointment
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-200">→</span>
          </button>
        </div>

        {/* Scroll hint */}
        <div
          ref={scrollHintRef}
          className="absolute bottom-4 left-0 right-0 z-30 flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <span className="text-[8px] uppercase tracking-[0.55em] text-white">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/35 to-transparent" />
        </div>
      </section>

      {/* Spacer for smooth transition to next section */}
      <div ref={spacerRef} className="h-[20vh] bg-gradient-to-b from-black to-blue-900 pointer-events-none" />
    </div>
  );
}

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
    line2: "CURE STONE",
    desc: "",
  },
  {
    tag: "Precision Care",
    line1: "INDIA'S BEST",
    line2: "KIDNEY STONE TREATMENT",
    desc: "1st Ever to start Fans-RIRS in North India — By Dr. Deepanshu Gupta.",
  },
  {
    tag: "98% Success",
    line1: "UNMATCHED",
    line2: "SUCCESS RATE",
    desc: "Maintaining a 98% stone-free success rate over 30,000+ patient lives.",
  },
  {
    tag: "Book Free Consultation",
    line1: "TAKE CONTROL",
    line2: "OF YOUR HEALTH",
    desc: "Consult India's leading kidney specialist today at Cure Stone.",
  },
];

const CENTERS = [0.08, 0.36, 0.64, 0.92];
const HOLD = 0.055;
const FADE = 0.07;

function calcOpacity(p: number, center: number): number {
  const dist = Math.abs(p - center);
  if (dist <= HOLD) return 1;
  if (dist <= HOLD + FADE) {
    const t = (dist - HOLD) / FADE;
    return 1 - t * t;
  }
  return 0;
}

function calcY(p: number, center: number): number {
  const dist = Math.abs(p - center);
  const dir = p < center ? 1 : -1;
  if (dist <= HOLD) return 0;
  const t = Math.min((dist - HOLD) / FADE, 1);
  return dir * 36 * (t * t);
}

const VIDEO_SRC = "/Stone_fragments_floating_in_dark…_202605131342.mp4";
// Crossfade duration in seconds — how long the two videos overlap
const XFADE_DURATION = 1.2;

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Two video elements for seamless crossfade loop
  const videoA = useRef<HTMLVideoElement>(null);
  const videoB = useRef<HTMLVideoElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const vignetteRef = useRef<HTMLDivElement>(null);

  const tagRefs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);
  const line1Refs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);
  const line2Refs = useRef<(HTMLSpanElement | null)[]>([null, null, null, null]);
  const descRefs = useRef<(HTMLParagraphElement | null)[]>([null, null, null, null]);

  const qOpacity = useRef<(((v: number) => void) | null)[][]>([[], [], [], []]);
  const qY = useRef<(((v: number) => void) | null)[][]>([[], [], [], []]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    // ── Crossfade video loop setup ─────────────────────────────────────
    const a = videoA.current!;
    const b = videoB.current!;

    [a, b].forEach((v) => {
      v.defaultMuted = true;
      v.muted = true;
      v.setAttribute("muted", "");
      v.setAttribute("playsinline", "");
    });

    let active = a;
    let standby = b;
    let xfading = false;

    // Preload standby, then kick off active
    const startPlayback = () => {
      // Start active immediately
      active.currentTime = 0;
      const p = active.play();
      if (p) p.catch(() => { });

      // Standby: load quietly
      standby.currentTime = 0;
      standby.style.opacity = "0";
    };

    const doXfade = () => {
      if (xfading) return;
      xfading = true;

      // Prepare standby from start
      standby.currentTime = 0;
      const sp = standby.play();
      if (sp) sp.catch(() => { });
      standby.style.opacity = "0";

      // Crossfade using GSAP
      gsap.to(standby, {
        opacity: 1,
        duration: XFADE_DURATION,
        ease: "none",
        onComplete: () => {
          // Pause & reset old active
          active.pause();
          active.currentTime = 0;
          active.style.opacity = "1"; // reset for next time

          // Swap roles
          [active, standby] = [standby, active];
          xfading = false;
        },
      });
      gsap.to(active, {
        opacity: 0,
        duration: XFADE_DURATION,
        ease: "none",
      });
    };

    // When active approaches end, start crossfade
    const onTimeUpdate = () => {
      if (!active.duration || xfading) return;
      
      // If we reach the end of the video, instead of crossfading to the beginning, 
      // we want to smoothly play the video backwards to the start.
      // Since HTML5 video doesnt support negative playbackRate reliably across browsers,
      // we do a smooth ping-pong by manually stepping backwards if playbackRate is reversed.
      
      // If playing forward and near end
      if (active.dataset.reversing !== "true" && active.currentTime >= active.duration - 0.1) {
         // Pause forward playback
         active.pause();
         // Simulate reverse playback by using requestAnimationFrame to step back
         let lastTime = performance.now();
         const reversePlay = (now: number) => {
             // If we switched videos or user scrolled away, stop
             if (xfading || active.dataset.reversing !== "true") return; 
             
             const dt = (now - lastTime) / 1000; // delta time in seconds
             lastTime = now;
             
             // Step back 
             active.currentTime = Math.max(0, active.currentTime - dt);
             
             // If reached start, play forward again
             if (active.currentTime <= 0) {
                 active.dataset.reversing = "false";
                 active.playbackRate = 1;
                 active.play().catch(()=>{});
                 return;
             }
             requestAnimationFrame(reversePlay);
         };
         active.dataset.reversing = "true"; // Flag to indicate reverse mode
         requestAnimationFrame(reversePlay);
      }
    };

    a.addEventListener("timeupdate", onTimeUpdate);
    b.addEventListener("timeupdate", onTimeUpdate);

    // iOS/Android first-play retry
    const tryStart = () => {
      if (a.readyState >= 2) {
        startPlayback();
      } else {
        a.addEventListener("canplay", startPlayback, { once: true });
      }
    };
    tryStart();

    const retryOnTouch = () => {
      a.play().catch(() => { });
      b.play().catch(() => { });
    };
    document.addEventListener("touchstart", retryOnTouch, { once: true });
    document.addEventListener("click", retryOnTouch, { once: true });

    // ── Lenis ─────────────────────────────────────────────────────────
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    const lenis = new Lenis({
      duration: isIOS ? 1.2 : 1.6,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.65,
      touchMultiplier: isIOS ? 1.2 : 1.8,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const ticker = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);

    const ctx = gsap.context(() => {
      STAGES.forEach((_, i) => {
        const els = [
          tagRefs.current[i],
          line1Refs.current[i],
          line2Refs.current[i],
          descRefs.current[i],
        ];
        gsap.set(els, {
          opacity: i === 0 ? 1 : 0,
          y: i === 0 ? 0 : 40,
          filter: i === 0 ? "blur(0px)" : "blur(12px)",
        });
      });

      const durations = [0.12, 0.18, 0.24, 0.30];
      STAGES.forEach((_, i) => {
        const els = [
          tagRefs.current[i],
          line1Refs.current[i],
          line2Refs.current[i],
          descRefs.current[i],
        ];
        qOpacity.current[i] = els.map((el, j) =>
          el ? gsap.quickTo(el, "opacity", { duration: durations[j], ease: "power2.out" }) : null
        );
        qY.current[i] = els.map((el, j) =>
          el ? gsap.quickTo(el, "y", { duration: durations[j] + 0.08, ease: "power2.out" }) : null
        );
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=700%",
        scrub: 1.2,
        pin: true,
        anticipatePin: 1,
        pinSpacing: true,
        snap: {
          snapTo: CENTERS,
          duration: { min: 0.25, max: 0.8 },
          delay: 0.0,
          ease: "power2.inOut",
        },
        onUpdate(self) {
          const p = self.progress;

          if (videoWrapRef.current) {
            gsap.set(videoWrapRef.current, { scale: 1 + 0.06 * p });
          }
          if (vignetteRef.current) {
            gsap.set(vignetteRef.current, { opacity: 0.48 + 0.38 * p });
          }

          STAGES.forEach((_, i) => {
            const op = calcOpacity(p, CENTERS[i]);
            const y = calcY(p, CENTERS[i]);
            const blurVal = op >= 0.99 ? 0 : 12 * (1 - op);
            const blurStr = `blur(${blurVal.toFixed(1)}px)`;

            qOpacity.current[i].forEach((fn) => fn?.(op));
            qY.current[i].forEach((fn) => fn?.(y));

            [
              tagRefs.current[i],
              line1Refs.current[i],
              line2Refs.current[i],
              descRefs.current[i],
            ].forEach((el) => {
              if (el) el.style.filter = blurStr;
            });
          });
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      lenis.destroy();
      gsap.ticker.remove(ticker);
      a.removeEventListener("timeupdate", onTimeUpdate);
      b.removeEventListener("timeupdate", onTimeUpdate);
      document.removeEventListener("touchstart", retryOnTouch);
      document.removeEventListener("click", retryOnTouch);
    };
  }, []);

  const videoStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
    pointerEvents: "none",
    outline: "none",
  };

  return (
    <>
      <style>{`
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          background: #000;
        }
        video::-webkit-media-controls,
        video::-webkit-media-controls-panel,
        video::-webkit-media-controls-start-playback-button,
        video::-webkit-media-controls-play-button,
        video::-webkit-media-controls-timeline,
        video::-webkit-media-controls-current-time-display,
        video::-webkit-media-controls-fullscreen-button,
        video::-webkit-media-controls-mute-button,
        video::-webkit-media-controls-volume-slider,
        video::-internal-media-controls-download-button {
          display: none !important;
          -webkit-appearance: none !important;
          opacity: 0 !important;
        }
        * { -webkit-tap-highlight-color: transparent; }
        body { overscroll-behavior-y: none; }
      `}</style>

      <div ref={containerRef} style={{ margin: 0, padding: 0, background: "#000" }}>
        <section
          ref={sectionRef}
          style={{
            position: "relative",
            width: "100%",
            height: "100svh",
            minHeight: 580,
            overflow: "hidden",
            background: "#000",
            margin: 0,
            padding: 0,
          }}
        >
          {/* ── Dual-video crossfade layer ────────────────────────── */}
          <div
            ref={videoWrapRef}
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              transformOrigin: "center center",
              willChange: "transform",
              background: "#000",
              pointerEvents: "none",
            }}
          >
            {/* Video A — starts as active (opacity 1) */}
            <video
              ref={videoA}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              style={{ ...videoStyle, opacity: 1 }}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>

            {/* Video B — standby (opacity 0), cross-fades in */}
            <video
              ref={videoB}
              muted
              playsInline
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
              style={{ ...videoStyle, opacity: 0 }}
            >
              <source src={VIDEO_SRC} type="video/mp4" />
            </video>
          </div>

          {/* ── Overlays ─────────────────────────────────────────── */}
          <div style={{ position: "absolute", inset: 0, zIndex: 10, pointerEvents: "none" }}>
            <div
              ref={vignetteRef}
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "radial-gradient(ellipse 90% 90% at 50% 50%, transparent 15%, rgba(0,0,0,0.88) 85%)",
                opacity: 0.48,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "0 0 auto 0",
                height: 120,
                background: "linear-gradient(to bottom, rgba(0,0,0,0.75), transparent)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: "auto 0 0 0",
                height: 200,
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.45) 55%, transparent 100%)",
              }}
            />
          </div>

          {/* ── Text stages ──────────────────────────────────────── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              zIndex: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              pointerEvents: "none",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 900,
                margin: "0 auto",
                padding: "0 24px",
                height: "70vh",
                textAlign: "center",
              }}
            >
              {STAGES.map((s, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 24px",
                  }}
                >
                  {/* Tag */}
                  <span
                    ref={(el) => { tagRefs.current[i] = el; }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 12,
                      fontSize: "clamp(9px, 2vw, 11px)",
                      fontWeight: 900,
                      letterSpacing: "0.28em",
                      textTransform: "uppercase",
                      color: "#fff",
                      marginBottom: 20,
                      willChange: "transform, opacity",
                    }}
                  >
                    <span style={{ display: "block", width: 24, height: 1, background: "rgba(255,255,255,0.3)" }} />
                    {s.tag}
                    <span style={{ display: "block", width: 24, height: 1, background: "rgba(255,255,255,0.3)" }} />
                  </span>

                  {/* Headline — all bold, no italic */}
                  <h1 style={{ margin: 0, padding: 0, display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 0.85 }}>
                    <span
                      ref={(el) => { line1Refs.current[i] = el; }}
                      style={{
                        display: "block",
                        fontWeight: 900,
                        fontStyle: "normal",
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        fontSize: "clamp(3.0rem, 10vw, 8.5rem)",
                        textShadow: "0 4px 60px rgba(0,0,0,0.8)",
                        willChange: "transform, opacity",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.line1}
                    </span>
                    <span
                      ref={(el) => { line2Refs.current[i] = el; }}
                      style={{
                        display: "block",
                        fontWeight: 900,
                        fontStyle: "normal",
                        color: "#fff",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                        fontSize: "clamp(1.6rem, 5.5vw, 4.8rem)",
                        marginTop: "0.08em",
                        textShadow: "0 2px 30px rgba(0,0,0,0.7)",
                        willChange: "transform, opacity",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {s.line2}
                    </span>
                  </h1>

                  {/* Description */}
                  {s.desc && (
                    <p
                      ref={(el) => { descRefs.current[i] = el; }}
                      style={{
                        marginTop: 28,
                        marginBottom: 0,
                        color: "rgba(255,255,255,0.82)",
                        fontWeight: 700,
                        fontStyle: "normal",
                        lineHeight: 1.65,
                        maxWidth: 480,
                        fontSize: "clamp(0.8rem, 1.5vw, 0.98rem)",
                        willChange: "transform, opacity",
                      }}
                    >
                      {s.desc}
                    </p>
                  )}
                  {!s.desc && (
                    <p
                      ref={(el) => { descRefs.current[i] = el; }}
                      style={{ margin: 0, height: 0, overflow: "hidden" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA Button ───────────────────────────────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(56px, 8vh, 80px)",
              left: 0,
              right: 0,
              zIndex: 30,
              display: "flex",
              justifyContent: "center",
              padding: "0 24px",
            }}
          >
            <button
              onClick={() => {
                document
                  .getElementById("appointment-section")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "14px 36px",
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: 999,
                fontSize: 11,
                fontWeight: 900,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                cursor: "pointer",
                boxShadow: "0 0 30px rgba(255,255,255,0.12)",
                transition: "background 0.25s, transform 0.15s",
                WebkitTapHighlightColor: "transparent",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.88)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#fff")}
              onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
              onTouchStart={(e) => (e.currentTarget.style.transform = "scale(0.97)")}
              onTouchEnd={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              Book Appointment →
            </button>
          </div>

          {/* ── Scroll hint ──────────────────────────────────────── */}
          <div
            style={{
              position: "absolute",
              bottom: 14,
              left: 0,
              right: 0,
              zIndex: 30,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 6,
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                fontSize: 8,
                letterSpacing: "0.5em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.55)",
                fontWeight: 900,
              }}
            >
              Scroll
            </span>
            <div
              style={{
                width: 1,
                height: 28,
                background: "linear-gradient(to bottom, rgba(255,255,255,0.35), transparent)",
              }}
            />
          </div>
        </section>
      </div>
    </>
  );
}
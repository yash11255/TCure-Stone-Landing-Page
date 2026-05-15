import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const SocialIcons = {
  Instagram: () => (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37zM17.5 6.5h.01" /></svg>
  ),
  Facebook: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
  ),
  Youtube: () => (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
  )
};

const Footer = () => {
  const locationLinks = [
    { label: "Gurgaon", href: "/gurgaon" },
    { label: "Delhi", href: "/delhi" },
    { label: "Indore", href: "/indore" },
    { label: "Lucknow", href: "/lucknow" },
    { label: "Jaipur", href: "/jaipur" },
    { label: "Kolkata", href: "/kolkata" },
    { label: "Varanasi", href: "/varanasi" },
    { label: "Agra", href: "/agra" },
    { label: "Cyberhub", href: "/cyberhub" },
    { label: "Phase 2", href: "/phase-2" },
    { label: "Phase 3", href: "/phase-3" },
    { label: "South City 1", href: "/south-city-1" },
    { label: "South City 2", href: "/south-city-2" },
    { label: "Sector 44", href: "/sector-44" },
    { label: "Sector 46", href: "/sector-46" },
  ];

  const sections = [
    {
      title: "Treatments",
      links: [
        { label: "RIRS Laser Surgery", href: "/rirs" },
        { label: "ESWL Lithotripsy", href: "/eswl" },
        { label: "URSL Treatment", href: "/ursl" },
        { label: "Mini PCNL Surgery", href: "/mini-pcnl" },
        { label: "Kidney Stone Surgery", href: "/gurgaon" },
        { label: "Gall Bladder Surgery", href: "/specialties" },
      ],
    },
    {
      title: "Quick Links",
      links: [
        { label: "Cure Stone AI", href: "/checker" },
        { label: "Book Free Consultation", href: "/book" },
      ],
    },
  ];

  return (
    <footer className="relative bg-[#08090A] pt-20 pb-10 overflow-hidden text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_0.8fr_0.8fr_1.2fr] gap-12 lg:gap-8 mb-16">

          {/* Brand & Info */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="inline-block w-fit no-underline">
              <div className="relative w-44 h-12">
                <Image
                  src="https://theCurestone.com/wp-content/uploads/2021/05/PNG-Black-e1664728676618.png"
                  alt="Cure Stone Hospital"
                  fill
                  className="object-contain object-left brightness-0 invert"
                  unoptimized
                />
              </div>
            </Link>
            <p className="text-white/50 text-[13px] leading-relaxed max-w-sm">
              Cure Stone Hospital is a premier urology destination in Gurgaon, delivering precision-driven laser kidney stone surgeries and comprehensive urinary care.
            </p>
            <div className="space-y-3 text-[13px]">
              <a href="tel:+918800263884" className="flex items-center gap-3 text-white/70 no-underline">
                <span className="opacity-50">📞</span> +91 88002 63884
              </a>
              <a href="mailto:care@thecurestone.com" className="flex items-center gap-3 text-white/70 no-underline">
                <span className="opacity-50">✉</span> care@thecurestone.com
              </a>
            </div>
            <div className="flex gap-3 pt-2">
              <a href="https://www.youtube.com/@cure_stone" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-[#FF0000] transition-all">
                <SocialIcons.Youtube />
              </a>
              <a href="https://www.instagram.com/the_cure_stone/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-primary transition-all">
                <SocialIcons.Instagram />
              </a>
              <a href="https://www.facebook.com/curestone/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-primary transition-all">
                <SocialIcons.Facebook />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {sections.map((section, idx) => (
            <div key={idx} className="flex flex-col gap-6">
              <h4 className="text-[10px] font-bold text-white/30 uppercase tracking-[0.25em]">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3 list-none p-0 m-0">
                {section.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <Link href={link.href} className="text-[13px] text-white/60 no-underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Locations */}
          <div className="flex flex-col gap-6">
            <h4 className="text-[10px] font-bold text-black/30 uppercase tracking-[0.25em]">
              Our Locations
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {locationLinks.map((link, lIdx) => (
                <Link
                  key={lIdx}
                  href={link.href}
                  className="text-[13px] text-white/60 no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center py-12 border-y border-white/5 mb-12">
          <div className="rounded-2xl overflow-hidden border border-white/10 aspect-video lg:aspect-auto lg:h-64 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3183934021354!2d77.06771327549376!3d28.439816975770583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19559d21f213%3A0xa736733167a5023b!2sCure%20Stone!5e0!3m2!1sen!2sin!4v1776770895170!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="opacity-90"
              title="Cure Stone Hospital Location"
            ></iframe>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Visit Our Hospital</h4>
              <p className="text-xl font-medium text-white/90"> Cure Stone Hospital</p>
              <p className="text-white/50 text-sm mt-1">Sector 52, Near Plot, 3, Rd No D-13 A, Ardee City, Gurugram, Haryana 122003</p>
            </div>
            <div className="flex flex-wrap gap-8">
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Consultation Hours</p>
                <p className="text-sm text-white/70 font-medium">10:00 AM – 7:00 PM On Appoiment</p>
              </div>
              <div>
                <p className="text-[10px] text-white/30 uppercase tracking-widest mb-1">Emergency Service</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <p className="text-sm text-white/70 font-medium text-green-500/80">Available 24/7</p>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.3183934021354!2d77.06771327549376!3d28.439816975770583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19559d21f213%3A0xa736733167a5023b!2sCure%20Stone!5e0!3m2!1sen!2sin!4v1776770895170!5m2!1sen!2sin"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-widest no-underline"
            >
              Get Directions <span>→</span>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-white/20 uppercase tracking-[0.2em]">
            © 2026 Cure Stone Hospital. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {['Privacy', 'Terms'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-[10px] font-bold text-white/20 uppercase tracking-widest no-underline"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
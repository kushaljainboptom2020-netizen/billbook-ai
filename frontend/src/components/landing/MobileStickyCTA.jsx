import React, { useEffect, useState } from 'react';
import { IndianRupee, ArrowRight } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

export default function MobileStickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past hero (≈600px) and hide near footer
      const scrolled = window.scrollY > 600;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 220;
      setShow(scrolled && !nearBottom);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      className={`md:hidden fixed bottom-0 inset-x-0 z-40 px-3 pb-3 pt-2 transition-all duration-300 ${
        show ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{
        background: 'linear-gradient(to top, rgba(255,255,255,0.96) 60%, rgba(255,255,255,0))',
      }}
      data-testid="mobile-sticky-cta"
    >
      <a
        href={GUMROAD_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between gap-3 w-full px-4 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl shadow-xl shadow-blue-600/30 border border-blue-700"
      >
        <span className="flex items-center gap-2 min-w-0">
          <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-white/15 shrink-0">
            <IndianRupee className="w-5 h-5" />
          </span>
          <span className="flex flex-col items-start min-w-0">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-blue-100 leading-tight">
              Lifetime Access
            </span>
            <span className="text-[15px] font-extrabold leading-tight">Buy Now &mdash; ₹299</span>
          </span>
        </span>
        <ArrowRight className="w-5 h-5 shrink-0" />
      </a>
      {/* Safe-area padding */}
      <div style={{ height: 'env(safe-area-inset-bottom, 0px)' }} />
    </div>
  );
}

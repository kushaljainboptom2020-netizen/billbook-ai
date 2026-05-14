import React, { useEffect, useState } from 'react';
import { IndianRupee, FileText, ShieldCheck, Zap } from 'lucide-react';

const screenshots = [
  {
    src: 'https://customer-assets.emergentagent.com/job_invoice-master-ai/artifacts/cul1fj6s_Screenshot%202026-05-14%20164756.png',
    label: 'GST Dashboard',
    caption: 'Revenue, outstanding & invoice counts at a glance',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_invoice-master-ai/artifacts/94ho0b9m_Screenshot%202026-05-14%20164830.png',
    label: 'Sidebar Navigation',
    caption: 'Dashboard, Invoices, Clients, Expenses, Settings',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_invoice-master-ai/artifacts/pt8rtwmr_Screenshot%202026-05-14%20164809.png',
    label: 'Business Profile',
    caption: 'GSTIN, PAN & address \u2014 saved on every invoice',
  },
  {
    src: 'https://customer-assets.emergentagent.com/job_invoice-master-ai/artifacts/jaete8d5_Screenshot%202026-05-14%20164740.png',
    label: 'Welcome',
    caption: 'Set up in under 60 seconds. No account required.',
  },
];

export default function ProductShowcase() {
  const [idx, setIdx] = useState(0);

  // Auto-rotate
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % screenshots.length), 4000);
    return () => clearInterval(t);
  }, []);

  const current = screenshots[idx];

  return (
    <div className="relative bb-animate-float" data-testid="product-showcase">
      {/* Floating stat \u2014 top-left */}
      <div className="absolute -top-2 -left-3 lg:-left-8 z-20 hidden sm:flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xl">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <IndianRupee className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Revenue</p>
          <p className="text-sm font-bold text-slate-900">₹4,999</p>
        </div>
        <span className="ml-1 text-[11px] font-bold px-1.5 py-0.5 rounded bg-green-100 text-green-700">+12%</span>
      </div>

      {/* Floating stat \u2014 bottom-right */}
      <div className="absolute -bottom-3 -right-2 lg:-right-6 z-20 hidden sm:flex items-center gap-3 bg-white rounded-xl border border-slate-200 px-4 py-3 shadow-xl">
        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
          <FileText className="w-5 h-5 text-blue-600" />
        </div>
        <div>
          <p className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">Invoices</p>
          <p className="text-sm font-bold text-slate-900">{idx === 0 ? '2 this month' : 'Ready to send'}</p>
        </div>
      </div>

      {/* Floating badge \u2014 right side */}
      <div className="absolute top-1/2 -translate-y-1/2 -right-3 lg:-right-10 z-20 hidden md:flex flex-col gap-2 items-end">
        <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-md">
          <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
          100% Private
        </span>
        <span className="inline-flex items-center gap-1.5 bg-white border border-slate-200 rounded-full px-3 py-1.5 text-[11px] font-semibold text-slate-700 shadow-md">
          <Zap className="w-3.5 h-3.5 text-amber-500" />
          Offline-first
        </span>
      </div>

      {/* Device frame \u2014 portrait tablet style */}
      <div className="relative mx-auto w-full max-w-[420px] lg:max-w-[440px]">
        {/* Soft blue glow behind */}
        <div className="absolute -inset-6 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative bb-laptop-shadow">
          <div className="relative rounded-[2rem] bg-slate-900 p-3 border border-slate-800">
            {/* Top notch / camera dot */}
            <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-slate-700 rounded-full" />

            {/* Screen */}
            <div className="relative rounded-[1.4rem] overflow-hidden bg-white aspect-[4/5]">
              {screenshots.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.label}
                  className={`absolute inset-0 w-full h-full object-contain bg-white transition-opacity duration-700 ease-in-out ${
                    i === idx ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
              ))}

              {/* Caption pill */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-slate-900/85 backdrop-blur-sm text-white text-[11px] font-semibold whitespace-nowrap shadow-lg">
                {current.label}
              </div>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="mt-5 flex items-center justify-center gap-2" role="tablist" aria-label="Product screenshots">
          {screenshots.map((s, i) => (
            <button
              key={s.src}
              role="tab"
              aria-selected={i === idx}
              aria-label={`Show ${s.label}`}
              onClick={() => setIdx(i)}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === idx ? 'w-8 bg-blue-600' : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
              data-testid={`showcase-dot-${i}`}
            />
          ))}
        </div>

        {/* Caption */}
        <p className="mt-2 text-center text-xs sm:text-sm text-slate-500 font-medium px-4">
          {current.caption}
        </p>
      </div>
    </div>
  );
}

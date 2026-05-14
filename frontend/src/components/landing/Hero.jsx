import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Cpu, IndianRupee, WifiOff } from 'lucide-react';
import ProductShowcase from './ProductShowcase';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

export default function Hero() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-16 lg:pb-24 overflow-hidden bb-mesh-bg">
      {/* Grid background */}
      <div className="absolute inset-0 bb-grid-bg pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              2026 Edition • Lifetime Deal • Made for India
            </div>

            {/* SEO H1 \u2014 styled with visual hierarchy */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.9rem] xl:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              BillBook AI:{' '}
              <span className="bb-gradient-text">Best Offline GST Billing Software</span> with{' '}
              <span className="underline decoration-blue-600 decoration-4 underline-offset-4">One-Time Payment</span>
              <span className="block mt-2 text-slate-500 text-xl sm:text-2xl lg:text-3xl font-bold">
                (2026 Edition)
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Freedom from monthly subscriptions. Generate GST-compliant invoices in{' '}
              <span className="font-semibold text-slate-900">30 seconds</span>, fully offline, with{' '}
              <span className="font-semibold text-slate-900">AI Receipt Scanning</span> and{' '}
              <span className="font-semibold text-slate-900">Voice Commands</span> built in.
            </p>

            {/* Price stamp */}
            <div className="mt-7 inline-flex items-center gap-3 px-4 py-3 rounded-2xl bg-white border-2 border-blue-200 shadow-sm">
              <div className="flex items-baseline gap-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Pay once</span>
              </div>
              <div className="h-7 w-px bg-slate-200" />
              <div className="flex items-baseline gap-1">
                <IndianRupee className="w-5 h-5 text-blue-600 self-center" />
                <span className="text-3xl font-extrabold text-slate-900">299</span>
                <span className="text-sm font-semibold text-slate-500 line-through">₹5,000+</span>
              </div>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                LIFETIME
              </span>
            </div>

            {/* CTAs */}
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
              >
                <IndianRupee className="w-5 h-5" />
                Get Lifetime Access for ₹299
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white hover:bg-slate-50 text-slate-900 text-base font-semibold rounded-xl border border-slate-300 hover:border-slate-400 transition-all"
              >
                See Features
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl mx-auto lg:mx-0">
              <TrustItem icon={ShieldCheck} label="GST Compliant" />
              <TrustItem icon={WifiOff} label="100% Offline" />
              <TrustItem icon={Cpu} label="Local AI" />
              <TrustItem icon={Zap} label="Voice Powered" />
            </div>

            {/* Social proof */}
            <div className="mt-7 flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {['#1d4ed8', '#2563EB', '#3b82f6', '#60a5fa'].map((c, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full ring-2 ring-white shadow flex items-center justify-center text-white text-xs font-bold"
                    style={{ backgroundColor: c }}
                  >
                    {['RK', 'AS', 'PJ', 'NM'][i]}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-amber-400" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-slate-600 font-medium">
                  Loved by <span className="font-bold text-slate-900">1,200+</span> freelancers & shopkeepers
                </p>
              </div>
            </div>
          </div>

          {/* Product showcase */}
          <div className="lg:col-span-6">
            <ProductShowcase />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center shrink-0">
        <Icon className="w-4 h-4 text-blue-600" />
      </div>
      <span className="text-xs sm:text-sm font-semibold">{label}</span>
    </div>
  );
}

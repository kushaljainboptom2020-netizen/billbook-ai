import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Cpu, IndianRupee } from 'lucide-react';
import LaptopMockup from './LaptopMockup';

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
              100% Offline • No Subscriptions • Made for India
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
              Stop Paying Monthly for{' '}
              <span className="bb-gradient-text">GST Invoicing.</span>
              <br className="hidden sm:block" />
              <span className="text-slate-900">Own Your Data.</span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Professional GST Invoices in{' '}
              <span className="font-semibold text-slate-900">30 seconds</span>. 100% Offline.
              AI-Powered Receipt Scanning. <span className="font-semibold text-slate-900">No Subscriptions, Ever.</span>
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
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
            <div className="mt-8 grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
              <TrustItem icon={ShieldCheck} label="GST Compliant" />
              <TrustItem icon={Zap} label="Works Offline" />
              <TrustItem icon={Cpu} label="Local AI" />
            </div>

            {/* Social proof */}
            <div className="mt-8 flex items-center gap-4 justify-center lg:justify-start">
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
                  Loved by <span className="font-bold text-slate-900">1,200+</span> Indian businesses
                </p>
              </div>
            </div>
          </div>

          {/* Mockup */}
          <div className="lg:col-span-6">
            <LaptopMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 text-slate-700">
      <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center">
        <Icon className="w-4 h-4 text-blue-600" />
      </div>
      <span className="text-xs sm:text-sm font-semibold">{label}</span>
    </div>
  );
}

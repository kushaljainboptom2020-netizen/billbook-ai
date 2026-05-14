import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

export default function FinalCTA() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-10 lg:p-16 text-center text-white shadow-2xl shadow-blue-600/25">
          {/* Decorative blobs */}
          <div className="absolute top-0 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />
          {/* Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%)',
            }}
          />

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold mb-5 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5" />
              Lifetime Access • No Subscriptions
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
              Stop renting your invoicing tool.
              <br />
              <span className="text-blue-200">Own it for ₹299.</span>
            </h2>

            <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
              Join 1,200+ Indian small businesses who switched to a one-time-payment, offline-first, AI-powered GST invoicing tool. No subscriptions. No surprises.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={GUMROAD_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="final-cta"
                className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-blue-700 hover:bg-blue-50 text-base font-bold rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Get Lifetime Access for ₹299
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <div className="flex items-center gap-2 text-blue-100 text-sm">
                <ShieldCheck className="w-4 h-4" />
                7-day refund guarantee
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

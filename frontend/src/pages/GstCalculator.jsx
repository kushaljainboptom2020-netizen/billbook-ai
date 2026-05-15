import React, { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calculator,
  IndianRupee,
  Receipt,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  WifiOff,
  Zap,
  CheckCircle2,
} from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import MobileStickyCTA from '@/components/landing/MobileStickyCTA';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';
const GST_RATES = [0, 3, 5, 12, 18, 28];

function useDocumentMeta(title, description) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta ? meta.getAttribute('content') : null;
    if (meta) meta.setAttribute('content', description);
    return () => {
      document.title = prevTitle;
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc);
    };
  }, [title, description]);
}

export default function GstCalculator() {
  useDocumentMeta(
    'Free Online GST Calculator India (2026) | CGST + SGST + IGST Breakdown — BillBook AI',
    'Free GST Calculator for India. Instantly compute CGST, SGST, IGST and total tax for any amount at 0%, 3%, 5%, 12%, 18% or 28% slabs. Inclusive & exclusive modes. By BillBook AI — the offline GST billing software (₹299 lifetime).',
  );

  const [amount, setAmount] = useState('1000');
  const [rate, setRate] = useState(18);
  const [customRate, setCustomRate] = useState('');
  const [mode, setMode] = useState('exclusive'); // 'exclusive' = add GST, 'inclusive' = remove
  const [supply, setSupply] = useState('intra'); // 'intra' = CGST+SGST, 'inter' = IGST

  const effRate = customRate !== '' && !Number.isNaN(parseFloat(customRate))
    ? parseFloat(customRate)
    : rate;

  const result = useMemo(() => {
    const a = parseFloat(amount);
    if (!Number.isFinite(a) || a < 0) {
      return { base: 0, tax: 0, cgst: 0, sgst: 0, igst: 0, total: 0 };
    }
    const r = effRate / 100;
    let base, tax, total;
    if (mode === 'exclusive') {
      base = a;
      tax = base * r;
      total = base + tax;
    } else {
      total = a;
      base = a / (1 + r);
      tax = total - base;
    }
    const half = tax / 2;
    return {
      base,
      tax,
      cgst: supply === 'intra' ? half : 0,
      sgst: supply === 'intra' ? half : 0,
      igst: supply === 'inter' ? tax : 0,
      total,
    };
  }, [amount, effRate, mode, supply]);

  const reset = () => {
    setAmount('1000');
    setRate(18);
    setCustomRate('');
    setMode('exclusive');
    setSupply('intra');
  };

  return (
    <div className="App min-h-screen bg-white">
      <Header />

      <main className="pt-24 lg:pt-28">
        {/* Hero */}
        <section className="relative pb-12 lg:pb-16 bb-mesh-bg overflow-hidden">
          <div className="absolute inset-0 bb-grid-bg pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              100% Free • No Sign-up • Made for India 2026
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Free Online <span className="bb-gradient-text">GST Calculator</span> for India (2026)
            </h1>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-blue-700 tracking-tight">
              Calculate CGST + SGST + IGST breakdown in seconds.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
              Enter any amount, pick a GST slab, and see the exact tax split for intra-state (CGST+SGST) or inter-state (IGST) supply. No login. No tracking. Just math.
            </p>
          </div>
        </section>

        {/* Calculator + Result */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Inputs */}
              <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 bb-card-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">GST Calculator</h3>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors"
                    data-testid="calc-reset"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reset
                  </button>
                </div>

                {/* Amount */}
                <label className="block">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    {mode === 'exclusive' ? 'Net Amount (before GST)' : 'Gross Amount (including GST)'}
                  </span>
                  <div className="mt-2 relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-lg">₹</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="0"
                      className="w-full pl-10 pr-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-lg font-bold text-slate-900 transition"
                      data-testid="calc-amount"
                    />
                  </div>
                </label>

                {/* GST Rate slabs */}
                <div className="mt-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">GST Rate</span>
                  <div className="mt-2 grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {GST_RATES.map((r) => (
                      <button
                        key={r}
                        type="button"
                        onClick={() => { setRate(r); setCustomRate(''); }}
                        className={`py-2.5 rounded-lg text-sm font-bold border transition ${
                          customRate === '' && rate === r
                            ? 'bg-blue-600 text-white border-blue-700 shadow-md shadow-blue-600/20'
                            : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                        }`}
                        data-testid={`calc-rate-${r}`}
                      >
                        {r}%
                      </button>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-500">Custom:</span>
                    <input
                      type="number"
                      inputMode="decimal"
                      min="0"
                      max="100"
                      step="0.01"
                      value={customRate}
                      onChange={(e) => setCustomRate(e.target.value)}
                      placeholder="e.g. 7.5"
                      className="flex-1 px-3 py-2 rounded-lg border border-slate-200 bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm font-semibold text-slate-900"
                    />
                    <span className="text-sm font-bold text-slate-700">%</span>
                  </div>
                </div>

                {/* Mode + Supply toggles */}
                <div className="mt-6 grid sm:grid-cols-2 gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Calculation</span>
                    <div className="mt-2 inline-flex w-full rounded-lg border border-slate-200 bg-slate-50 p-1">
                      <Toggle active={mode === 'exclusive'} onClick={() => setMode('exclusive')} label="Add GST" />
                      <Toggle active={mode === 'inclusive'} onClick={() => setMode('inclusive')} label="Remove GST" />
                    </div>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Supply Type</span>
                    <div className="mt-2 inline-flex w-full rounded-lg border border-slate-200 bg-slate-50 p-1">
                      <Toggle active={supply === 'intra'} onClick={() => setSupply('intra')} label="Intra-state" />
                      <Toggle active={supply === 'inter'} onClick={() => setSupply('inter')} label="Inter-state" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Result */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 sm:p-7 text-white shadow-xl shadow-blue-600/25 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center gap-2 mb-4">
                      <Receipt className="w-5 h-5" />
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-100">Tax Breakdown</span>
                    </div>

                    <ResultRow label={mode === 'exclusive' ? 'Net Amount' : 'Net (excl. GST)'} value={result.base} />
                    {supply === 'intra' ? (
                      <>
                        <ResultRow label={`CGST (${(effRate / 2).toFixed(2)}%)`} value={result.cgst} sub />
                        <ResultRow label={`SGST (${(effRate / 2).toFixed(2)}%)`} value={result.sgst} sub />
                      </>
                    ) : (
                      <ResultRow label={`IGST (${effRate}%)`} value={result.igst} sub />
                    )}
                    <div className="my-4 h-px bg-white/15" />
                    <ResultRow label={mode === 'exclusive' ? 'Total Payable' : 'Gross Amount'} value={result.total} big />
                  </div>
                </div>

                {/* Quick CTA below result */}
                <a
                  href={GUMROAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="calc-side-cta"
                  className="mt-4 group flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all"
                >
                  Tired of doing this manually? Get BillBook AI — ₹299
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GST Rate Reference */}
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Indian <span className="bb-gradient-text">GST Slabs</span> at a Glance
              </h2>
              <p className="mt-2 text-slate-600">Quick reference for which slab applies to common goods and services.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <RateCard rate="0%" title="Exempt / Nil-rated" examples="Fresh fruits, vegetables, milk, books, basic foodgrains, salt, public-funded education." />
              <RateCard rate="3%" title="Special" examples="Gold, silver, platinum jewellery and precious metals." />
              <RateCard rate="5%" title="Essentials" examples="Packaged foods, apparel under ₹1,000, footwear under ₹1,000, transport, restaurants without ITC." />
              <RateCard rate="12%" title="Standard (lower)" examples="Processed foods, mobile phones, business-class travel, butter, ghee, frozen meat." />
              <RateCard rate="18%" title="Standard (higher)" examples="Most goods & services — IT services, software, telecom, restaurants with ITC, professional services." highlight />
              <RateCard rate="28%" title="Luxury / Sin" examples="Cars, motorcycles, ACs, tobacco, aerated drinks, premium electronics." />
            </div>
          </div>
        </section>

        {/* Why BillBook AI mini-section */}
        <section className="py-12 lg:py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-5">
              <MiniFeature
                icon={WifiOff}
                title="Calculates offline"
                desc="BillBook AI applies the right GST to every invoice line — even with zero internet."
              />
              <MiniFeature
                icon={Zap}
                title="Auto-splits CGST/SGST/IGST"
                desc="Place of supply detected automatically. No mental math, no spreadsheet."
              />
              <MiniFeature
                icon={ShieldCheck}
                title="Your data stays local"
                desc="Calculations + invoices live in your browser. Nothing is uploaded, ever."
              />
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-8 sm:p-12 lg:p-16 text-center text-white shadow-2xl shadow-blue-600/25">
              <div className="absolute top-0 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl pointer-events-none" />
              <div className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-blue-300/20 blur-3xl pointer-events-none" />
              <div className="relative">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-blue-100 text-xs font-semibold mb-5 backdrop-blur-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                  Stop calculating. Start billing.
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                  Tired of calculating manually?
                  <br />
                  <span className="text-blue-200">Download BillBook AI for ₹299.</span>
                </h2>
                <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
                  GST calculation is the easy part. BillBook AI turns every calculation into a professional, GST-compliant invoice in 30 seconds. One-time ₹299. Lifetime access. 100% offline.
                </p>
                <ul className="mt-7 max-w-xl mx-auto grid sm:grid-cols-2 gap-3 text-left">
                  {[
                    'GST-compliant invoices in 30 seconds',
                    'AI receipt scanner (Tesseract.js)',
                    'Voice-powered invoicing',
                    'Data never leaves your device',
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2 text-sm text-blue-50">
                      <CheckCircle2 className="w-5 h-5 shrink-0 text-amber-300" />
                      {t}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={GUMROAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="calc-final-cta"
                    className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-blue-700 hover:bg-blue-50 text-base font-bold rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <IndianRupee className="w-5 h-5" />
                    Download BillBook AI — ₹299 once
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 px-7 py-4 text-white/90 hover:text-white text-base font-semibold rounded-xl border border-white/30 hover:border-white/60 transition-all"
                  >
                    See full features
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <MobileStickyCTA />
    </div>
  );
}

function Toggle({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex-1 py-2 rounded-md text-xs sm:text-sm font-bold transition ${
        active ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
      }`}
    >
      {label}
    </button>
  );
}

function ResultRow({ label, value, sub, big }) {
  const fmt = (n) =>
    n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (
    <div className={`flex items-baseline justify-between ${sub ? 'py-1.5 text-blue-100' : 'py-1 text-white'}`}>
      <span className={`${big ? 'text-sm font-bold uppercase tracking-wider' : sub ? 'text-xs font-semibold' : 'text-sm font-semibold'}`}>
        {label}
      </span>
      <span className={`${big ? 'text-3xl font-extrabold' : sub ? 'text-base font-bold' : 'text-lg font-bold'}`}>
        ₹{fmt(value)}
      </span>
    </div>
  );
}

function RateCard({ rate, title, examples, highlight }) {
  return (
    <div
      className={`rounded-2xl p-5 border ${
        highlight
          ? 'bg-blue-50 border-blue-200'
          : 'bg-white border-slate-200 hover:border-blue-200 transition-colors'
      }`}
    >
      <div className="flex items-baseline justify-between mb-2">
        <span className={`text-3xl font-extrabold ${highlight ? 'text-blue-700' : 'text-slate-900'}`}>{rate}</span>
        {highlight && (
          <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white">
            MOST COMMON
          </span>
        )}
      </div>
      <p className="text-sm font-bold text-slate-900">{title}</p>
      <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{examples}</p>
    </div>
  );
}

function MiniFeature({ icon: Icon, title, desc }) {
  return (
    <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6">
      <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center mb-3">
        <Icon className="w-5 h-5 text-white" />
      </div>
      <p className="font-bold text-slate-900">{title}</p>
      <p className="mt-1.5 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

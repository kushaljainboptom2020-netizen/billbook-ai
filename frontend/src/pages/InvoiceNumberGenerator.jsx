import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calculator,
  Copy,
  FileText,
  Hash,
  IndianRupee,
  RefreshCw,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import MobileStickyCTA from '@/components/landing/MobileStickyCTA';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

function useDocumentMeta(title, description) {
  useEffect(() => {
    const prev = document.title;
    document.title = title;
    let meta = document.querySelector('meta[name="description"]');
    const prevDesc = meta ? meta.getAttribute('content') : null;
    if (meta) meta.setAttribute('content', description);
    return () => {
      document.title = prev;
      if (meta && prevDesc !== null) meta.setAttribute('content', prevDesc);
    };
  }, [title, description]);
}

function currentFY() {
  const d = new Date();
  const y = d.getFullYear();
  // Indian FY: April → March
  const startYear = d.getMonth() >= 3 ? y : y - 1;
  return { startYear, endYear: startYear + 1 };
}

export default function InvoiceNumberGenerator() {
  useDocumentMeta(
    'Free GST Invoice Number Generator (India 2026) \u2014 GSTIN-Compliant Format • BillBook AI',
    'Generate GST-compliant invoice numbers instantly. Pick a prefix, fiscal year and padding \u2014 see your next 20 invoice numbers. Free, offline, mobile-friendly. By BillBook AI (\u20b9299 lifetime).',
  );

  const fy = useMemo(() => currentFY(), []);

  const [prefix, setPrefix] = useState('INV');
  const [separator, setSeparator] = useState('-');
  const [fyFormat, setFyFormat] = useState('short'); // 'short' = 25-26, 'long' = 2025-2026, 'none'
  const [startNumber, setStartNumber] = useState(1);
  const [padding, setPadding] = useState(4);
  const [count, setCount] = useState(10);
  const [copied, setCopied] = useState(false);

  const fyToken = useMemo(() => {
    if (fyFormat === 'short') {
      return `${String(fy.startYear).slice(-2)}-${String(fy.endYear).slice(-2)}`;
    }
    if (fyFormat === 'long') {
      return `${fy.startYear}-${fy.endYear}`;
    }
    return '';
  }, [fyFormat, fy]);

  const buildNumber = (n) => {
    const num = String(n).padStart(Math.max(1, Math.min(8, padding)), '0');
    const parts = [prefix.trim(), fyToken, num].filter(Boolean);
    return parts.join(separator);
  };

  const numbers = useMemo(() => {
    const out = [];
    const start = Number.isFinite(parseInt(startNumber, 10)) ? parseInt(startNumber, 10) : 1;
    const n = Math.max(1, Math.min(50, parseInt(count, 10) || 10));
    for (let i = 0; i < n; i++) out.push(buildNumber(start + i));
    return out;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefix, separator, fyToken, startNumber, padding, count]);

  const reset = () => {
    setPrefix('INV');
    setSeparator('-');
    setFyFormat('short');
    setStartNumber(1);
    setPadding(4);
    setCount(10);
  };

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(numbers.join('\n'));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (e) {
      // ignore
    }
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
              Free Tool • No Sign-up • GST-Compliant Format
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Free <span className="bb-gradient-text">GST Invoice Number Generator</span> for India (2026)
            </h1>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-blue-700 tracking-tight">
              GSTIN-compliant numbering format — unique, consecutive, fiscal-year aware.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
              Pick a prefix, fiscal year format and padding — instantly preview the next 20 invoice numbers your business can use under GST Rule 46.
            </p>
          </div>
        </section>

        {/* Tool */}
        <section className="pb-16 lg:pb-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
              {/* Inputs */}
              <div className="lg:col-span-3 bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 bb-card-shadow">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                      <Hash className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Build your number</h3>
                  </div>
                  <button
                    type="button"
                    onClick={reset}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-blue-700 transition-colors"
                    data-testid="ing-reset"
                  >
                    <RefreshCw className="w-3.5 h-3.5" /> Reset
                  </button>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label="Prefix (max 6 chars)">
                    <input
                      type="text"
                      maxLength={6}
                      value={prefix}
                      onChange={(e) => setPrefix(e.target.value.toUpperCase())}
                      placeholder="INV"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-base font-bold text-slate-900 transition"
                      data-testid="ing-prefix"
                    />
                  </Field>

                  <Field label="Separator">
                    <div className="inline-flex w-full rounded-xl border border-slate-200 bg-slate-50 p-1">
                      {['-', '/', '_'].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setSeparator(s)}
                          className={`flex-1 py-2.5 rounded-lg text-sm font-bold transition ${
                            separator === s ? 'bg-blue-600 text-white shadow' : 'text-slate-600 hover:text-slate-900'
                          }`}
                          data-testid={`ing-sep-${s}`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Fiscal Year format" className="sm:col-span-2">
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { id: 'short', label: `${String(fy.startYear).slice(-2)}-${String(fy.endYear).slice(-2)}` },
                        { id: 'long', label: `${fy.startYear}-${fy.endYear}` },
                        { id: 'none', label: 'No year' },
                      ].map((opt) => (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => setFyFormat(opt.id)}
                          className={`py-2.5 rounded-lg text-sm font-bold border transition ${
                            fyFormat === opt.id
                              ? 'bg-blue-600 text-white border-blue-700 shadow-md shadow-blue-600/20'
                              : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </Field>

                  <Field label="Start number">
                    <input
                      type="number"
                      inputMode="numeric"
                      min={0}
                      value={startNumber}
                      onChange={(e) => setStartNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-base font-bold text-slate-900 transition"
                    />
                  </Field>

                  <Field label={`Zero-padding (${padding} digits)`}>
                    <input
                      type="range"
                      min={1}
                      max={8}
                      value={padding}
                      onChange={(e) => setPadding(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600"
                    />
                  </Field>

                  <Field label={`Preview count (${count})`} className="sm:col-span-2">
                    <input
                      type="range"
                      min={1}
                      max={50}
                      value={count}
                      onChange={(e) => setCount(parseInt(e.target.value, 10))}
                      className="w-full accent-blue-600"
                    />
                  </Field>
                </div>
              </div>

              {/* Preview */}
              <div className="lg:col-span-2">
                <div className="sticky top-24 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 p-6 sm:p-7 text-white shadow-xl shadow-blue-600/25 relative overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />
                  <div className="relative">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-5 h-5" />
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-100">
                          Next {numbers.length} numbers
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={copyAll}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-[11px] font-bold transition"
                        data-testid="ing-copy"
                      >
                        <Copy className="w-3 h-3" />
                        {copied ? 'Copied!' : 'Copy all'}
                      </button>
                    </div>

                    {/* Big highlight = the very next number */}
                    <div className="mb-3 px-4 py-3 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm">
                      <p className="text-[10px] uppercase tracking-wider font-semibold text-blue-100 mb-0.5">
                        Your next invoice number
                      </p>
                      <p className="text-2xl sm:text-3xl font-extrabold tracking-tight break-all">
                        {numbers[0] || 'INV-25-26-0001'}
                      </p>
                    </div>

                    <div className="max-h-72 overflow-y-auto pr-1 space-y-1">
                      {numbers.slice(1).map((n, i) => (
                        <div
                          key={n + i}
                          className="px-3 py-1.5 rounded-md bg-white/5 text-sm font-mono font-semibold tracking-wide break-all"
                        >
                          {n}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <a
                  href={GUMROAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="ing-side-cta"
                  className="mt-4 group flex items-center justify-center gap-2 px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold rounded-xl transition-all"
                >
                  Auto-handle numbering with BillBook AI — ₹299
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* GST Rule 46 explainer */}
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                GST Invoice Numbering Rules — <span className="bb-gradient-text">Rule 46</span> Simplified
              </h2>
              <p className="mt-2 text-slate-600">A GST-compliant invoice number must follow these four rules.</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <Rule
                num="1"
                title="Unique per fiscal year"
                desc="Each invoice number must be unique within the same financial year (April 1 — March 31). Reset your counter every April."
              />
              <Rule
                num="2"
                title="Maximum 16 characters"
                desc="The total length (including prefix, year and separators) cannot exceed 16 characters. Keep your prefix short."
              />
              <Rule
                num="3"
                title="Consecutive series"
                desc="Numbers must be in a continuous series. Skipping numbers is not allowed under GST. Cancel — don\u2019t delete — a bad invoice."
              />
              <Rule
                num="4"
                title="Alphanumeric only"
                desc="Only letters (A–Z, a–z), digits (0–9) and special characters \u2014, /, _ are allowed. No spaces, no symbols."
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
                  Stop counting. Start billing.
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                  Tired of tracking invoice numbers?
                  <br />
                  <span className="text-blue-200">Let BillBook AI auto-number them for ₹299.</span>
                </h2>
                <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
                  BillBook AI follows GST Rule 46 by default — unique, consecutive, fiscal-year aware. No spreadsheet. No double-billing. No fines.
                </p>
                <ul className="mt-7 max-w-xl mx-auto grid sm:grid-cols-2 gap-3 text-left">
                  {[
                    'Auto-resets every fiscal year',
                    'Custom prefix + format per series',
                    'Cancelled invoices preserve gaps',
                    'Works fully offline',
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
                    data-testid="ing-final-cta"
                    className="group inline-flex items-center gap-2 px-7 py-4 bg-white text-blue-700 hover:bg-blue-50 text-base font-bold rounded-xl shadow-xl hover:-translate-y-0.5 transition-all"
                  >
                    <IndianRupee className="w-5 h-5" />
                    Get BillBook AI — ₹299 once
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                  <Link
                    to="/gst-calculator"
                    className="inline-flex items-center gap-2 px-7 py-4 text-white/90 hover:text-white text-base font-semibold rounded-xl border border-white/30 hover:border-white/60 transition-all"
                  >
                    <Calculator className="w-4 h-4" />
                    Try GST Calculator
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

function Field({ label, children, className = '' }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}

function Rule({ num, title, desc }) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-5">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-600 text-white font-extrabold flex items-center justify-center">
          {num}
        </div>
        <div>
          <p className="font-bold text-slate-900">{title}</p>
          <p className="mt-1 text-sm text-slate-600 leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
}

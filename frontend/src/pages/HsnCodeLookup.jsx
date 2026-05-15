import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Calculator,
  Copy,
  IndianRupee,
  Search,
  Sparkles,
  Tag,
  CheckCircle2,
  X,
} from 'lucide-react';
import Header from '@/components/landing/Header';
import Footer from '@/components/landing/Footer';
import MobileStickyCTA from '@/components/landing/MobileStickyCTA';
import { hsnDataset, hsnCategories } from '@/data/hsnDataset';

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

export default function HsnCodeLookup() {
  useDocumentMeta(
    'Free HSN Code & SAC Code Lookup (India 2026) — GST Rate Finder • BillBook AI',
    'Search 100+ HSN and SAC codes with current GST rates (0%, 5%, 12%, 18%, 28%). Find the right HSN code for your product or service in seconds. Free, offline-friendly. By BillBook AI (\u20b9299 lifetime).',
  );

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [type, setType] = useState('All'); // 'All' | 'HSN' | 'SAC'
  const [copiedCode, setCopiedCode] = useState(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return hsnDataset.filter((row) => {
      if (type !== 'All' && row.type !== type) return false;
      if (category !== 'All' && row.category !== category) return false;
      if (!q) return true;
      return (
        row.code.toLowerCase().includes(q) ||
        row.description.toLowerCase().includes(q) ||
        row.category.toLowerCase().includes(q)
      );
    });
  }, [query, category, type]);

  const copy = async (code) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(code);
      setTimeout(() => setCopiedCode(null), 1200);
    } catch (e) {
      // ignore
    }
  };

  return (
    <div className="App min-h-screen bg-white">
      <Header />

      <main className="pt-24 lg:pt-28">
        {/* Hero */}
        <section className="relative pb-10 lg:pb-12 bb-mesh-bg overflow-hidden">
          <div className="absolute inset-0 bb-grid-bg pointer-events-none" />
          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-200 bg-blue-50 text-blue-700 text-xs sm:text-sm font-semibold mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              {hsnDataset.length}+ codes • 100% Free • No Sign-up
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
              Free <span className="bb-gradient-text">HSN Code & SAC Code Lookup</span> for India (2026)
            </h1>
            <h2 className="mt-4 text-lg sm:text-xl font-bold text-blue-700 tracking-tight">
              Find the right HSN code and GST rate for your product or service — in seconds.
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">
              Search by code, product name or category. Covers the most-used HSN (goods) and SAC (services) codes for Indian small businesses, freelancers and shopkeepers.
            </p>
          </div>
        </section>

        {/* Search + filters */}
        <section className="pb-12">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 bb-card-shadow">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search by HSN/SAC code, product or service (e.g. 'mobile', '8517', 'IT services')"
                  className="w-full pl-11 pr-10 py-3.5 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-base font-semibold text-slate-900 transition"
                  data-testid="hsn-search"
                />
                {query && (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 rounded-md hover:bg-slate-100"
                    aria-label="Clear"
                  >
                    <X className="w-4 h-4 text-slate-500" />
                  </button>
                )}
              </div>

              {/* Type filter */}
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">Type:</span>
                {['All', 'HSN', 'SAC'].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setType(t)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                      type === t
                        ? 'bg-blue-600 text-white border-blue-700 shadow-sm shadow-blue-600/20'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                    }`}
                  >
                    {t === 'HSN' ? 'HSN (Goods)' : t === 'SAC' ? 'SAC (Services)' : t}
                  </button>
                ))}
              </div>

              {/* Category chips */}
              <div className="mt-3 flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 mr-1">Category:</span>
                <button
                  type="button"
                  onClick={() => setCategory('All')}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                    category === 'All'
                      ? 'bg-blue-600 text-white border-blue-700'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                  }`}
                >
                  All
                </button>
                {hsnCategories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition ${
                      category === cat
                        ? 'bg-blue-600 text-white border-blue-700'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:text-blue-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <p className="mt-4 text-xs font-semibold text-slate-500">
                Showing <span className="text-slate-900">{results.length}</span> of {hsnDataset.length} codes
              </p>
            </div>

            {/* Results */}
            <div className="mt-6">
              {results.length === 0 ? (
                <div className="text-center py-16 px-4 rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50">
                  <Tag className="w-10 h-10 mx-auto text-slate-300 mb-2" />
                  <p className="font-bold text-slate-700">No matching codes</p>
                  <p className="text-sm text-slate-500 mt-1">Try a different keyword or clear the filters.</p>
                </div>
              ) : (
                <>
                  {/* Desktop table */}
                  <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 bg-white" data-testid="hsn-results">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-left">
                          <th className="py-3 px-4 font-bold text-slate-700 text-xs uppercase tracking-wider w-32">Code</th>
                          <th className="py-3 px-4 font-bold text-slate-700 text-xs uppercase tracking-wider">Description</th>
                          <th className="py-3 px-4 font-bold text-slate-700 text-xs uppercase tracking-wider w-44">Category</th>
                          <th className="py-3 px-4 font-bold text-slate-700 text-xs uppercase tracking-wider w-28 text-center">GST</th>
                        </tr>
                      </thead>
                      <tbody>
                        {results.map((r, i) => (
                          <tr key={r.code + i} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'}>
                            <td className="py-3 px-4">
                              <button
                                type="button"
                                onClick={() => copy(r.code)}
                                className="inline-flex items-center gap-2 px-2.5 py-1.5 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 font-mono font-bold transition"
                                title="Copy code"
                              >
                                {r.code}
                                {copiedCode === r.code ? (
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                ) : (
                                  <Copy className="w-3 h-3 opacity-60" />
                                )}
                              </button>
                              <span className="ml-2 inline-block text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-200 text-slate-600">
                                {r.type}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-slate-800">{r.description}</td>
                            <td className="py-3 px-4 text-slate-600 text-xs font-semibold">{r.category}</td>
                            <td className="py-3 px-4 text-center"><GstBadge gst={r.gst} /></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Mobile cards */}
                  <div className="md:hidden space-y-3">
                    {results.map((r) => (
                      <div key={r.code} className="rounded-xl border border-slate-200 bg-white p-4">
                        <div className="flex items-start justify-between gap-3">
                          <button
                            type="button"
                            onClick={() => copy(r.code)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 font-mono font-bold text-sm"
                          >
                            {r.code}
                            {copiedCode === r.code ? (
                              <CheckCircle2 className="w-3.5 h-3.5" />
                            ) : (
                              <Copy className="w-3 h-3 opacity-60" />
                            )}
                          </button>
                          <GstBadge gst={r.gst} />
                        </div>
                        <p className="mt-2.5 text-sm text-slate-800">{r.description}</p>
                        <p className="mt-1.5 text-[11px] font-semibold text-slate-500">
                          {r.category} • {r.type}
                        </p>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </section>

        {/* What is HSN/SAC explainer */}
        <section className="py-12 lg:py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                What is <span className="bb-gradient-text">HSN / SAC</span>?
              </h2>
              <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
                HSN (Harmonized System of Nomenclature) classifies goods. SAC (Services Accounting Code) classifies services. Both are mandatory on GST invoices.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <InfoCard
                title="Turnover < ₹5 Cr"
                line1="4-digit HSN"
                desc="B2B invoices must show at least 4-digit HSN. B2C is optional."
              />
              <InfoCard
                title="Turnover ≥ ₹5 Cr"
                line1="6-digit HSN"
                desc="Mandatory 6-digit HSN/SAC on all B2B and B2C invoices."
                highlight
              />
              <InfoCard
                title="Exports / Imports"
                line1="8-digit HSN"
                desc="Full 8-digit HSN code is mandatory for cross-border supplies."
              />
            </div>
            <p className="mt-6 text-center text-xs text-slate-500 max-w-2xl mx-auto">
              <strong className="text-slate-700">Disclaimer:</strong> Rates shown are based on CBIC notifications and are for guidance only. Always verify the current rate on the official GST portal before filing.
            </p>
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
                  Tired of looking up codes?
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]">
                  Let BillBook AI auto-fill
                  <br />
                  <span className="text-blue-200">HSN codes and GST rates for ₹299.</span>
                </h2>
                <p className="mt-5 text-base sm:text-lg text-blue-100 max-w-2xl mx-auto">
                  Save your products once. BillBook AI remembers their HSN code + GST rate and applies them automatically to every future invoice — even offline.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={GUMROAD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="hsn-final-cta"
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
                    Open GST Calculator
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

function GstBadge({ gst }) {
  const map = {
    0: 'bg-slate-100 text-slate-700',
    0.25: 'bg-purple-100 text-purple-700',
    3: 'bg-amber-100 text-amber-700',
    5: 'bg-green-100 text-green-700',
    12: 'bg-cyan-100 text-cyan-700',
    18: 'bg-blue-100 text-blue-700',
    28: 'bg-red-100 text-red-700',
  };
  const cls = map[gst] || 'bg-slate-100 text-slate-700';
  return (
    <span className={`inline-block text-xs font-extrabold px-2 py-1 rounded-md ${cls}`}>
      {gst}%
    </span>
  );
}

function InfoCard({ title, line1, desc, highlight }) {
  return (
    <div
      className={`rounded-2xl p-5 border ${
        highlight ? 'bg-blue-50 border-blue-200' : 'bg-white border-slate-200'
      }`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-slate-500">{title}</p>
      <p className={`mt-1 text-2xl font-extrabold ${highlight ? 'text-blue-700' : 'text-slate-900'}`}>{line1}</p>
      <p className="mt-2 text-sm text-slate-600 leading-relaxed">{desc}</p>
    </div>
  );
}

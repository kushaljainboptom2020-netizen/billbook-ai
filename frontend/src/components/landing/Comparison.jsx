import React from 'react';
import { Check, X, Star, AlertCircle } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

const rows = [
  { feature: 'Pricing Model', billbook: 'One-time ₹299', zoho: '₹749/month', tally: '₹18,000+ once', quickbooks: '₹999/month' },
  { feature: '1-Year Total Cost', billbook: '₹299 (lifetime)', zoho: '₹8,988', tally: '₹18,000+', quickbooks: '₹11,988' },
  { feature: '5-Year Total Cost', billbook: '₹299', zoho: '₹44,940', tally: '₹18,000+', quickbooks: '₹59,940' },
  { feature: 'Works Offline', billbook: true, zoho: false, tally: true, quickbooks: false },
  { feature: 'AI Receipt Scanner', billbook: true, zoho: 'Paid Add-on', tally: false, quickbooks: 'Paid Add-on' },
  { feature: 'Data Stays On Your Device', billbook: true, zoho: false, tally: 'Partial', quickbooks: false },
  { feature: 'No Subscription Required', billbook: true, zoho: false, tally: true, quickbooks: false },
  { feature: 'GST Compliant', billbook: true, zoho: true, tally: true, quickbooks: true },
  { feature: 'PDF Invoice Export', billbook: true, zoho: true, tally: true, quickbooks: true },
];

export default function Comparison() {
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 border border-red-100 text-red-700 text-xs font-semibold mb-4">
            <AlertCircle className="w-3.5 h-3.5" />
            The SaaS Pricing Problem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            The <span className="bb-gradient-text">No-Subscription GST Tool</span>
            <br />
            built for India in 2026.
          </h2>
          {/* SEO H2 — frustration keyword */}
          <h2 className="mt-4 text-lg sm:text-xl font-bold text-blue-700 tracking-tight">
            The #1 Tally alternative with a one-time payment.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            BillBook AI replaces ₹5,000+/year SaaS subscriptions with a single ₹299 lifetime purchase. Here's how it stacks up.
          </p>
        </div>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-2xl border border-slate-200 shadow-sm bg-white">
          <table className="w-full text-sm" data-testid="comparison-table">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200">
                <th className="text-left py-4 px-5 font-bold text-slate-700 text-xs uppercase tracking-wider">Feature</th>
                <ColumnHead title="BillBook AI" subtitle="₹299 one-time" highlight />
                <ColumnHead title="Zoho Books" subtitle="₹749 / month" />
                <ColumnHead title="Tally" subtitle="₹18,000+ once" />
                <ColumnHead title="QuickBooks" subtitle="₹999 / month" />
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr
                  key={r.feature}
                  className={`${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/40'} border-t border-slate-100`}
                >
                  <td className="py-4 px-5 font-semibold text-slate-800">{r.feature}</td>
                  <td className="py-4 px-5 text-center bg-blue-50/50 border-x border-blue-100">
                    <Cell value={r.billbook} highlight />
                  </td>
                  <td className="py-4 px-5 text-center"><Cell value={r.zoho} /></td>
                  <td className="py-4 px-5 text-center"><Cell value={r.tally} /></td>
                  <td className="py-4 px-5 text-center"><Cell value={r.quickbooks} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-4">
          <MobilePlanCard
            title="BillBook AI"
            price="₹299"
            priceNote="one-time payment"
            highlight
            features={rows.map((r) => ({ label: r.feature, value: r.billbook }))}
          />
          <MobilePlanCard
            title="Zoho Books"
            price="₹749"
            priceNote="per month, forever"
            features={rows.map((r) => ({ label: r.feature, value: r.zoho }))}
          />
          <MobilePlanCard
            title="Tally"
            price="₹18,000+"
            priceNote="plus AMC fees"
            features={rows.map((r) => ({ label: r.feature, value: r.tally }))}
          />
          <MobilePlanCard
            title="QuickBooks"
            price="₹999"
            priceNote="per month, forever"
            features={rows.map((r) => ({ label: r.feature, value: r.quickbooks }))}
          />
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={GUMROAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="comparison-cta"
            className="inline-flex items-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
          >
            Get Lifetime Access for ₹299
          </a>
          <p className="mt-3 text-sm text-slate-500">
            Save <span className="font-bold text-slate-900">₹44,641</span> over 5 years vs Zoho Books.
          </p>
        </div>
      </div>
    </section>
  );
}

function ColumnHead({ title, subtitle, highlight }) {
  return (
    <th className={`py-4 px-5 text-center ${highlight ? 'bg-blue-600 text-white' : 'text-slate-700'}`}>
      <div className="flex flex-col items-center gap-0.5">
        <div className="flex items-center gap-1">
          {highlight && <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />}
          <span className="text-sm font-bold">{title}</span>
        </div>
        <span className={`text-xs font-medium ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>{subtitle}</span>
      </div>
    </th>
  );
}

function Cell({ value, highlight }) {
  if (value === true) {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-green-100">
        <Check className={`w-4 h-4 ${highlight ? 'text-blue-700' : 'text-green-600'}`} strokeWidth={3} />
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-red-50">
        <X className="w-4 h-4 text-red-500" strokeWidth={3} />
      </div>
    );
  }
  return (
    <span className={`text-sm font-semibold ${highlight ? 'text-blue-700' : 'text-slate-700'}`}>{value}</span>
  );
}

function MobilePlanCard({ title, price, priceNote, features, highlight }) {
  return (
    <div
      className={`rounded-2xl p-5 border-2 ${
        highlight ? 'bg-blue-600 text-white border-blue-700 shadow-xl shadow-blue-600/20' : 'bg-white border-slate-200'
      }`}
    >
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-lg font-bold">{title}</h3>
        {highlight && (
          <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-amber-300 text-amber-900">RECOMMENDED</span>
        )}
      </div>
      <div className="mb-4">
        <div className={`text-3xl font-extrabold ${highlight ? 'text-white' : 'text-slate-900'}`}>{price}</div>
        <div className={`text-xs ${highlight ? 'text-blue-100' : 'text-slate-500'}`}>{priceNote}</div>
      </div>
      <ul className="space-y-2.5">
        {features.map((f, i) => (
          <li key={i} className="flex items-start justify-between gap-3 text-sm">
            <span className={highlight ? 'text-blue-50' : 'text-slate-700'}>{f.label}</span>
            <span className={`shrink-0 font-semibold ${highlight ? 'text-white' : 'text-slate-900'}`}>
              {typeof f.value === 'boolean' ? (
                f.value ? (
                  <Check className={`w-4 h-4 ${highlight ? 'text-amber-300' : 'text-green-600'}`} strokeWidth={3} />
                ) : (
                  <X className="w-4 h-4 text-red-400" strokeWidth={3} />
                )
              ) : (
                f.value
              )}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

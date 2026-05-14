import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Is there a monthly fee for BillBook AI?',
    a: 'No. BillBook AI is a lifetime deal — you pay ₹299 once and use it forever. There are no monthly fees, no per-invoice charges, no “pro” tier and no recurring subscriptions of any kind. One purchase. Lifetime access on Gumroad.',
  },
  {
    q: 'Does BillBook AI work without internet?',
    a: 'Yes, 100% offline. After the first load, BillBook AI runs entirely inside your browser. You can disconnect the internet, work on a flight, work at a remote site or work during an outage — invoicing, client management, expense tracking and AI receipt scanning all keep working.',
  },
  {
    q: 'Is my data safe with BillBook AI?',
    a: 'Yes — your data never leaves your computer. All invoices, clients and receipts are stored locally in your browser. There is no cloud sync, no account login, no third-party processor and no telemetry. Your business data simply cannot leak because it never leaves your device.',
  },
  {
    q: 'What is AI Voice-Powered Invoicing?',
    a: 'BillBook AI is India’s first offline GST tool with voice-powered invoicing. Tap the mic, speak a command like “Invoice Sharma Traders for 5 cotton shirts at ₹500”, and BillBook AI drafts the full invoice — customer, items, quantities, GST split and total — all on-device, in Hindi or English.',
  },
  {
    q: 'Is BillBook AI a real offline GST invoice software?',
    a: 'Yes. BillBook AI generates fully GST-compliant tax invoices — GSTIN, HSN/SAC, CGST + SGST + IGST split, place of supply, taxable value and total — all without sending a single byte to the cloud.',
  },
  {
    q: 'Is it a real alternative to Zoho Books, Tally and QuickBooks?',
    a: 'For freelancers, shopkeepers and small businesses who primarily need GST invoicing, client management, expense tracking and PDF exports, yes. You’ll save ₹5,000–₹50,000+ over five years compared to Zoho Books, Tally AMC fees or QuickBooks.',
  },
  {
    q: 'Will it work on my phone?',
    a: 'Yes. BillBook AI works on any modern browser — Chrome, Edge, Firefox, Safari — on Windows, macOS, Android and iPhone. The mobile UI is touch-optimised and the entire app stays under a few MB.',
  },
  {
    q: 'Do you offer refunds?',
    a: 'Yes. We honor a 7-day no-questions-asked refund window via Gumroad. If BillBook AI doesn’t work for your business, we’ll refund you in full.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Got questions? <span className="bb-gradient-text">We’ve got answers.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Everything you need to know about BillBook AI — the offline, no-subscription, voice-powered GST billing tool for Indian businesses.
          </p>
        </div>

        <div className="space-y-3" data-testid="faq-list">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <div
                key={f.q}
                className={`rounded-xl border transition-all ${
                  open
                    ? 'border-blue-200 bg-blue-50/40 shadow-sm'
                    : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  type="button"
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpenIdx(open ? -1 : i)}
                  aria-expanded={open}
                >
                  <span className="text-base font-semibold text-slate-900">{f.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-blue-600 transition-transform ${
                      open ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-slate-600 leading-relaxed text-sm sm:text-base">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

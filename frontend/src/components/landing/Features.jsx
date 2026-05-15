import React from 'react';
import { FileText, Users, Scan, BarChart3, FileDown, Database, Sparkles } from 'lucide-react';

const features = [
  {
    icon: FileText,
    title: 'Invoice Creator',
    description:
      'Create GST-compliant invoices in 30 seconds with auto-tax calculation, multi-rate support, and clean professional templates.',
    accents: ['CGST + SGST + IGST', 'Auto rounding', 'HSN codes'],
  },
  {
    icon: Users,
    title: 'Client Manager',
    description:
      'Save unlimited customers with GSTIN, contact details, and billing addresses. Reuse instantly on every invoice.',
    accents: ['GSTIN validation', 'Bulk import', 'Quick search'],
  },
  {
    icon: Scan,
    title: 'AI Receipt Scanner',
    description:
      'Snap a photo of any expense receipt and our local AI auto-extracts amount, vendor and date — powered by Tesseract.js in your browser.',
    accents: ['100% Local AI', 'No upload', 'Tesseract.js'],
    badge: 'AI Powered',
  },
  {
    icon: BarChart3,
    title: 'GST Dashboard',
    description:
      'Track sales, expenses and tax liability in real time. Get GSTR-ready summaries with one click — zero spreadsheets.',
    accents: ['GSTR-1 ready', 'Tax summary', 'Monthly P&L'],
  },
  {
    icon: FileDown,
    title: 'PDF Generator',
    description:
      'Generate beautiful, print-ready PDF invoices with your logo, bank details and digital signature. Share via WhatsApp or email.',
    accents: ['Branded PDFs', 'Logo + signature', 'WhatsApp share'],
  },
  {
    icon: Database,
    title: 'Data Backup',
    description:
      'Export your entire business data as a single JSON file. Move between devices, archive, or back up to your own cloud drive.',
    accents: ['JSON export', 'Device transfer', 'Your data, your cloud'],
  },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Six Powerful Modules. One Price.
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything you need to <span className="bb-gradient-text">run your business</span>.
            <br />
            <span className="text-slate-900">Nothing you don’t.</span>
          </h2>
          {/* SEO H2 — frustration keyword */}
          <h2 className="mt-4 text-lg sm:text-xl font-bold text-blue-700 tracking-tight">
            How to make GST bills offline for free — in 30 seconds, forever.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            BillBook AI bundles six essential modules into a single, blazing-fast, offline tool. No bloat. No ads. No nonsense.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6" data-testid="features-grid">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index }) {
  const Icon = feature.icon;
  return (
    <div
      className="group relative bg-white rounded-2xl border border-slate-200 p-6 lg:p-7 transition-all duration-300 hover:-translate-y-1 bb-card-shadow hover:bb-card-shadow-hover hover:border-blue-200"
      data-testid={`feature-card-${index}`}
    >
      {/* Top decoration */}
      <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      {/* Icon */}
      <div className="relative inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-100 mb-5">
        <div className="absolute inset-0 rounded-xl bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
        <Icon className="relative w-6 h-6 text-blue-600 group-hover:text-white transition-colors" strokeWidth={2.25} />
      </div>

      {/* Title + badge */}
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-lg font-bold text-slate-900">{feature.title}</h3>
        {feature.badge && (
          <span className="text-[10px] font-bold tracking-wider px-2 py-0.5 rounded-full bg-blue-600 text-white">
            {feature.badge}
          </span>
        )}
      </div>

      <p className="text-sm text-slate-600 leading-relaxed mb-4">{feature.description}</p>

      {/* Accents */}
      <div className="flex flex-wrap gap-1.5">
        {feature.accents.map((a) => (
          <span
            key={a}
            className="text-[11px] font-semibold px-2 py-1 rounded-md bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors"
          >
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}

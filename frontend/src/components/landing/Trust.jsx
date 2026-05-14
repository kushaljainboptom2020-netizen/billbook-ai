import React from 'react';
import { Lock, WifiOff, Coins, ServerOff, ShieldCheck, CloudOff } from 'lucide-react';

const pillars = [
  {
    icon: Lock,
    title: 'Your data never leaves your device',
    desc: 'All invoices, clients and receipts live in your browser’s local storage. We don’t see them. We can’t see them.',
  },
  {
    icon: WifiOff,
    title: '100% Offline by design',
    desc: 'No login. No server. No internet required. Works on flaky connections, on flights, and at remote sites.',
  },
  {
    icon: Coins,
    title: 'Zero running cost — forever',
    desc: 'No servers to maintain means no subscription to pay. Pay ₹299 once. Use it for life. Pass it to your accountant.',
  },
];

export default function Trust() {
  return (
    <section id="privacy" className="py-16 lg:py-24 bg-gradient-to-b from-white via-blue-50/40 to-white relative overflow-hidden">
      {/* Background shapes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Private by Default
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="bb-gradient-text">Local Data Privacy</span> for Small Business.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            BillBook AI runs entirely inside your browser. There is no cloud, no account, and no &ldquo;data processing agreement.&rdquo; Just software that works for you &mdash; not on you.
          </p>
        </div>

        {/* "No Internet = No Data Leaks" hero callout */}
        <div className="mb-12 lg:mb-14 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-blue-200 bg-white p-6 sm:p-8 lg:p-10 shadow-lg shadow-blue-600/5">
            <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-blue-600/5 blur-2xl pointer-events-none" />
            <div className="absolute -left-10 -bottom-10 w-48 h-48 rounded-full bg-green-500/5 blur-2xl pointer-events-none" />
            <div className="relative flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
              <div className="shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-xl shadow-blue-600/30">
                <ShieldCheck className="w-10 h-10 text-white" strokeWidth={2.25} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1">Our #1 trust promise</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                  <span className="bb-gradient-text">No Internet</span>{' '}
                  <span className="text-slate-400 font-black">=</span>{' '}
                  <span>No Data Leaks.</span>
                </p>
                <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
                  BillBook AI cannot send your invoices, clients or receipts to anyone &mdash; because it has no server to send them to. Your data is mathematically incapable of leaking.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="bg-white rounded-2xl border border-slate-200 p-7 bb-card-shadow hover:bb-card-shadow-hover hover:border-blue-200 transition-all"
                data-testid={`trust-pillar-${i}`}
              >
                <div className="inline-flex w-12 h-12 rounded-xl bg-blue-600 items-center justify-center mb-5 shadow-md shadow-blue-600/20">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2.25} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Zero running cost callout */}
        <div className="mt-12 lg:mt-16 rounded-3xl bg-slate-900 text-white p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-blue-200 text-xs font-semibold mb-4">
                <ServerOff className="w-3.5 h-3.5" />
                The Zero Running Cost Model
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                No servers to run.{' '}
                <span className="text-blue-300">No reason to ever charge you again.</span>
              </h3>
              <p className="mt-4 text-slate-300 leading-relaxed">
                Traditional SaaS tools charge you monthly because they pay monthly — for servers, hosting, databases and support staff. BillBook AI doesn’t have any of those costs, so we don’t pass them on to you. One purchase. Lifetime use.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <CostCard
                icon={CloudOff}
                label="Server cost"
                value="₹0 / mo"
                accent="text-green-400"
              />
              <CostCard
                icon={Lock}
                label="Data fees"
                value="₹0 / mo"
                accent="text-green-400"
              />
              <CostCard
                icon={WifiOff}
                label="Bandwidth"
                value="₹0 / mo"
                accent="text-green-400"
              />
              <CostCard
                icon={Coins}
                label="You pay"
                value="₹299 once"
                accent="text-amber-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CostCard({ icon: Icon, label, value, accent }) {
  return (
    <div className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm px-4 py-4">
      <Icon className="w-5 h-5 text-blue-300 mb-2" />
      <p className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold">{label}</p>
      <p className={`text-xl font-extrabold mt-0.5 ${accent}`}>{value}</p>
    </div>
  );
}

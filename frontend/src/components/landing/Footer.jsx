import React from 'react';
import { Receipt, Mail } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';
const CONTACT_EMAIL = 'insighteyecare9988@gmail.com';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <Receipt className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                BillBook<span className="text-blue-400"> AI</span>
              </span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-slate-400 max-w-md">
              The 100% offline, AI-powered GST invoicing tool for Indian small businesses and freelancers. One-time payment. Lifetime access. Your data stays yours.
            </p>

            {/* Contact */}
            <div className="mt-5">
              <p className="text-xs uppercase tracking-wider font-semibold text-slate-500 mb-2">Get in touch</p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-testid="footer-email"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-blue-600 hover:text-white transition-colors text-sm font-semibold text-slate-200"
              >
                <Mail className="w-4 h-4" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Links */}
          <FooterCol
            className="md:col-span-2"
            title="Product"
            links={[
              { label: 'Features', href: '#features' },
              { label: 'Pricing', href: '#pricing' },
              { label: 'FAQ', href: '#faq' },
              { label: 'Buy on Gumroad', href: GUMROAD_URL },
            ]}
          />
          <FooterCol
            className="md:col-span-2"
            title="Use Cases"
            links={[
              { label: 'Freelancers', href: '#features' },
              { label: 'Retailers', href: '#features' },
              { label: 'Consultants', href: '#features' },
              { label: 'CA Firms', href: '#features' },
            ]}
          />
          <FooterCol
            className="md:col-span-3"
            title="Resources"
            links={[
              { label: 'Offline GST invoice software', href: '#features' },
              { label: 'Zoho Books alternative', href: '#pricing' },
              { label: 'Private AI receipt scanner', href: '#features' },
              { label: 'Privacy & Data', href: '#privacy' },
            ]}
          />
        </div>

        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} BillBook AI. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Made with <span className="text-blue-400 font-semibold">BillBook</span> •{' '}
            <a href="https://mybilbook.in" className="text-blue-400 hover:text-blue-300 underline-offset-2 hover:underline">
              mybilbook.in
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links, className = '' }) {
  return (
    <div className={className}>
      <h4 className="text-xs font-bold text-white mb-4 tracking-wide uppercase">{title}</h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.href?.startsWith('http') ? '_blank' : undefined}
              rel={l.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-sm text-slate-400 hover:text-blue-300 transition-colors"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

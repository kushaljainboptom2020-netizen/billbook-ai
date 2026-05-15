import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Receipt, Calculator, Hash, Tag, ChevronDown, Wrench } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

const tools = [
  { to: '/gst-calculator', label: 'GST Calculator', desc: 'CGST + SGST + IGST breakdown', icon: Calculator },
  { to: '/invoice-number-generator', label: 'Invoice Number Generator', desc: 'GST Rule-46 compliant format', icon: Hash },
  { to: '/hsn-code-lookup', label: 'HSN / SAC Code Lookup', desc: '100+ codes with GST rates', icon: Tag },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();
  const isLanding = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close tools dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setToolsOpen(false);
    setMobileOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Features', href: '/#features' },
    { label: 'Voice AI', href: '/#voice-ai' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled || !isLanding
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-2.5 group" data-testid="logo-link">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Receipt className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              BillBook<span className="text-blue-600"> AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {l.label}
              </a>
            ))}

            {/* Free Tools dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setToolsOpen((o) => !o)}
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                data-testid="nav-free-tools"
                aria-expanded={toolsOpen}
              >
                <Wrench className="w-4 h-4" />
                Free Tools
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform ${toolsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {toolsOpen && (
                <div
                  className="absolute right-0 mt-2 w-80 rounded-2xl border border-slate-200 bg-white shadow-xl shadow-blue-600/10 p-2 z-50"
                  data-testid="tools-dropdown"
                >
                  {tools.map((t) => {
                    const Icon = t.icon;
                    return (
                      <Link
                        key={t.to}
                        to={t.to}
                        className="flex items-start gap-3 px-3 py-2.5 rounded-xl hover:bg-blue-50 transition-colors group"
                        data-testid={`tool-link-${t.to.replace('/', '')}`}
                      >
                        <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-50 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                          <Icon className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-900">{t.label}</p>
                          <p className="text-xs text-slate-500 mt-0.5">{t.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="mt-1 mx-3 pt-2 border-t border-slate-100">
                    <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                      All tools are free. Forever.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="header-cta"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white text-sm font-semibold rounded-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              Get Lifetime Access
            </a>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-testid="mobile-menu-toggle"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200" data-testid="mobile-menu">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              >
                {l.label}
              </a>
            ))}

            <div className="mt-3 pt-3 border-t border-slate-100">
              <p className="px-3 text-[10px] uppercase tracking-wider font-bold text-slate-400 mb-1">
                Free Tools
              </p>
              {tools.map((t) => {
                const Icon = t.icon;
                return (
                  <Link
                    key={t.to}
                    to={t.to}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                  >
                    <Icon className="w-4 h-4" />
                    {t.label}
                  </Link>
                );
              })}
            </div>

            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-3 px-3 py-2.5 bg-blue-600 text-white font-semibold rounded-lg text-center"
            >
              Get Lifetime Access — ₹299
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

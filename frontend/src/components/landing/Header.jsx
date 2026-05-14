import React, { useState, useEffect } from 'react';
import { Menu, X, Receipt } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group" data-testid="logo-link">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-lg blur-md opacity-30 group-hover:opacity-50 transition" />
              <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Receipt className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              BillBook<span className="text-blue-600"> AI</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
                data-testid={`nav-${l.label.toLowerCase()}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
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

          {/* Mobile menu button */}
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

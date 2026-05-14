import React, { useEffect, useState } from 'react';
import { Mic, Sparkles, Zap, ShieldCheck, ArrowRight, Volume2 } from 'lucide-react';

const GUMROAD_URL = 'https://insightful571.gumroad.com/l/noicxm';

const voiceScript = [
  { speaker: 'user', text: '“Invoice Sharma Traders for 5 pieces of cotton shirt at ₹500 each.”', delay: 0 },
  { speaker: 'ai', text: 'Got it. Drafting invoice for Sharma Traders…', delay: 1800 },
  { speaker: 'ai', text: 'Cotton Shirt × 5 • ₹500 each • GST 5%', delay: 3200 },
  { speaker: 'ai', text: 'Total: ₹2,625 • Tap to send via WhatsApp.', delay: 4600 },
];

export default function VoiceAI() {
  const [step, setStep] = useState(0);
  const [listening, setListening] = useState(false);

  useEffect(() => {
    let timeouts = [];
    const start = () => {
      setStep(0);
      setListening(true);
      voiceScript.forEach((line, i) => {
        timeouts.push(setTimeout(() => setStep(i + 1), line.delay));
      });
      timeouts.push(setTimeout(() => setListening(false), 6000));
      timeouts.push(setTimeout(start, 8500));
    };
    start();
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section id="voice-ai" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-blue-600/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold mb-4 shadow-lg shadow-blue-600/30">
            <Sparkles className="w-3.5 h-3.5" />
            India’s First Voice-Powered Offline GST Tool
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            <span className="bb-gradient-text">AI Voice-Powered Invoicing.</span>
            <br />
            <span className="text-slate-900">Just speak. We’ll bill.</span>
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Skip the typing. Skip the tapping. Speak a single sentence in Hindi or English and BillBook AI drafts a complete GST-compliant invoice — instantly, on-device, with zero cloud dependency.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Animated voice demo (the “video/GIF” placeholder, fully animated) */}
          <div className="order-2 lg:order-1" data-testid="voice-demo">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-4 bg-blue-500/15 blur-3xl rounded-3xl pointer-events-none" />

              <div className="relative bg-white rounded-3xl border border-slate-200 shadow-2xl shadow-blue-600/10 overflow-hidden">
                {/* Window chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-100 bg-slate-50">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="ml-3 text-xs font-semibold text-slate-500">BillBook AI — Voice Mode</span>
                  <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-green-100 text-green-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    LIVE — Offline
                  </span>
                </div>

                {/* Mic + visualizer */}
                <div className="px-6 pt-8 pb-6 flex flex-col items-center text-center">
                  <div className="relative">
                    {/* Pulse rings */}
                    {listening && (
                      <>
                        <span className="absolute inset-0 rounded-full bg-blue-500/30 animate-ping" />
                        <span className="absolute -inset-3 rounded-full border-2 border-blue-400/40 animate-pulse" />
                      </>
                    )}
                    <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-600/40">
                      <Mic className="w-9 h-9 text-white" strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Waveform */}
                  <div className="mt-5 flex items-center justify-center gap-1 h-10" aria-hidden="true">
                    {[...Array(28)].map((_, i) => (
                      <span
                        key={i}
                        className="w-1 rounded-full bg-blue-500"
                        style={{
                          height: listening ? `${10 + Math.abs(Math.sin(i * 0.7) * 24)}px` : '4px',
                          opacity: listening ? 0.85 : 0.25,
                          transition: 'all 220ms ease',
                          animation: listening ? `bb-wave 0.${(i % 9) + 2}s ease-in-out ${i * 40}ms infinite alternate` : 'none',
                        }}
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-blue-600">
                    {listening ? 'Listening…' : 'Ready'}
                  </p>
                </div>

                {/* Transcript */}
                <div className="px-5 pb-6 space-y-2.5 min-h-[220px]">
                  {voiceScript.map((line, i) => {
                    const visible = i < step;
                    return (
                      <div
                        key={i}
                        className={`flex ${line.speaker === 'user' ? 'justify-end' : 'justify-start'} transition-all duration-500 ${
                          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
                        }`}
                      >
                        <div
                          className={`max-w-[88%] px-4 py-2.5 rounded-2xl text-sm leading-snug ${
                            line.speaker === 'user'
                              ? 'bg-blue-600 text-white rounded-br-md'
                              : 'bg-slate-100 text-slate-800 rounded-bl-md'
                          }`}
                        >
                          {line.speaker === 'ai' && (
                            <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-blue-600 mb-1">
                              <Volume2 className="w-3 h-3" /> BillBook AI
                            </span>
                          )}
                          <p className={line.speaker === 'ai' ? 'mt-0.5' : ''}>{line.text}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Copy + bullets */}
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              The fastest way to bill a customer is to <span className="bb-gradient-text">say it.</span>
            </h3>
            <p className="mt-4 text-slate-600 leading-relaxed">
              No more switching between calculator, GST sheet, and invoice template. Just talk to BillBook AI like you’d talk to your billing clerk — and a perfect invoice appears on screen, ready to send.
            </p>

            <ul className="mt-7 space-y-4">
              <Bullet
                icon={Mic}
                title="Speak in Hindi or English"
                desc="Natural language. Mixed languages. Customer name, items, quantities and rates — all parsed locally on your device."
              />
              <Bullet
                icon={Zap}
                title="Auto-fills GST, HSN, totals"
                desc="Voice command → line items → CGST + SGST split → grand total. No manual math."
              />
              <Bullet
                icon={ShieldCheck}
                title="100% on-device. Zero cloud."
                desc="Your voice never leaves your browser. No ‘Hey BillBook’ always-listening creepiness. Tap mic. Speak. Done."
              />
            </ul>

            <a
              href={GUMROAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="voice-ai-cta"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold rounded-xl shadow-lg shadow-blue-600/25 hover:-translate-y-0.5 transition-all"
            >
              Unlock Voice Invoicing — ₹299
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bb-wave {
          0% { transform: scaleY(0.4); }
          100% { transform: scaleY(1.4); }
        }
      `}</style>
    </section>
  );
}

function Bullet({ icon: Icon, title, desc }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
        <Icon className="w-5 h-5 text-blue-600" />
      </div>
      <div>
        <p className="font-bold text-slate-900">{title}</p>
        <p className="text-sm text-slate-600 leading-relaxed mt-0.5">{desc}</p>
      </div>
    </li>
  );
}

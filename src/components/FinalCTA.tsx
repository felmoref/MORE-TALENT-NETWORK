import React from "react";
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";
import { BUSINESS_NAME } from "../config";

interface FinalCTAProps {
  onNavigateToJobseeker: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onNavigateToJobseeker }) => {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 text-white relative overflow-hidden">
      {/* Decorative ambient lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20 mb-6">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Take the Next Step</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Ready to Put Your Profile on the Radar?
        </h2>

        {/* Supporting text */}
        <p className="mt-6 text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
          Join {BUSINESS_NAME} and become part of a growing community of Filipino professionals connected to potential career opportunities.
        </p>

        {/* Primary CTA */}
        <div className="mt-10 flex flex-col items-center justify-center">
          <button
            type="button"
            onClick={onNavigateToJobseeker}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-2xl text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all transform hover:-translate-y-0.5 shadow-2xl shadow-amber-400/25 active:scale-95 focus:outline-none focus:ring-4 focus:ring-amber-400/50 cursor-pointer"
          >
            <span>JOIN MORE TALENT NETWORK</span>
            <ArrowRight className="w-5 h-5 text-slate-950 stroke-[2.5]" />
          </button>

          {/* Secondary text */}
          <p className="mt-4 text-xs sm:text-sm text-slate-400 font-medium">
            Free to join. Opportunities are subject to employer requirements.
          </p>

          {/* Reassurance pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              Dedicated Online Profile Builder
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              Privacy-Conscious Community
            </span>
            <span className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              13,000+ Filipino Audience
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

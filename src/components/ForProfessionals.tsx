import React from "react";
import { Check, ArrowRight, Sparkles, UserCheck, Shield, Clock } from "lucide-react";

interface ForProfessionalsProps {
  onNavigateToJobseeker: () => void;
}

export const ForProfessionals: React.FC<ForProfessionalsProps> = ({ onNavigateToJobseeker }) => {
  const benefits = [
    "Share your professional background",
    "Highlight your skills and experience",
    "Tell us what type of opportunities you're looking for",
    "Become part of a growing professional network",
    "Be considered for relevant opportunities",
  ];

  return (
    <section id="for-professionals" className="py-20 sm:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading & Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-500/10 border border-amber-500/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>For Filipino Professionals</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Put Your Professional Profile on the Radar
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Your resume is more than a document. Your skills, experience, career preferences, and professional background can help create opportunities for meaningful connections.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 pt-2">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-amber-300 stroke-[3]" />
                  </div>
                  <span className="text-base text-slate-200 font-medium">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-6">
              <button
                type="button"
                onClick={onNavigateToJobseeker}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-lg shadow-amber-400/20 hover:shadow-xl active:scale-95 cursor-pointer"
              >
                <span>JOIN MORE TALENT NETWORK</span>
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
              <p className="text-xs text-slate-400 mt-2.5">
                Takes ~3 minutes to create your profile • No fee to join
              </p>
            </div>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div className="lg:col-span-5">
            <div className="bg-slate-800/80 rounded-2xl border border-slate-700/80 p-6 sm:p-8 backdrop-blur-sm space-y-6 shadow-2xl">
              <div className="flex items-center gap-3 pb-4 border-b border-slate-700">
                <div className="w-10 h-10 rounded-xl bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-300">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">What You Provide</h3>
                  <p className="text-xs text-slate-400">Structured online candidate profile</p>
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-750 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Core Competencies & Domain</span>
                    <span className="text-xs text-slate-400">Your key functional expertise, tools, and technical proficiencies.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-750 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Work Arrangement Preferences</span>
                    <span className="text-xs text-slate-400">Remote, on-site, or hybrid; local or international interest.</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-750 flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-white block">Career Status & Availability</span>
                    <span className="text-xs text-slate-400">Active job seeker, career mover, or passive candidate.</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-blue-400" />
                  Data treated with care
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  Fast multi-step profile builder
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

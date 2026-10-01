import React from "react";
import { ArrowRight, ArrowDown, ShieldCheck, MapPin, Briefcase, Sparkles, CheckCircle2, Users } from "lucide-react";
import { BUSINESS_NAME } from "../config";

interface HeroProps {
  onNavigateToJobseeker: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigateToJobseeker }) => {
  const scrollToHowItWorks = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#how-it-works");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white pt-12 pb-20 sm:pt-20 sm:pb-28">
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-amber-500/10 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 -left-20 w-80 h-80 bg-indigo-600/10 blur-3xl pointer-events-none rounded-full" />

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Eyebrow & Trust badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <span className="px-3.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-900/60 text-blue-300 border border-blue-700/50">
                {BUSINESS_NAME}
              </span>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-amber-300 bg-amber-500/10 border border-amber-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                <span>Built for Filipino Professionals</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                Your Skills. <br className="hidden sm:inline" />
                Your Experience. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-200">
                  Your Next Opportunity.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Join a growing network of Filipino professionals and job seekers who are open to meaningful career opportunities, employer connections, and recruitment partnerships.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                type="button"
                onClick={onNavigateToJobseeker}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-amber-500/20 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-slate-950 active:scale-95 cursor-pointer"
              >
                <span>JOIN MORE TALENT NETWORK</span>
                <ArrowRight className="w-5 h-5 text-slate-950 stroke-[2.5]" />
              </button>

              <a
                href="#how-it-works"
                onClick={scrollToHowItWorks}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all text-center focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <span>HOW IT WORKS</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            {/* Trust statement & reassurance */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Free to join</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Confidential profile options</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-400" />
                <span>13,000+ community members</span>
              </div>
            </div>
          </div>

          {/* Right Column: Sophisticated Abstract Talent Network Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow Card */}
              <div className="relative rounded-2xl bg-gradient-to-b from-slate-800/90 to-slate-900/90 border border-slate-700/70 p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                {/* Visual Header */}
                <div className="flex items-center justify-between pb-5 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-ping" />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Talent Sourcing Radar
                      </p>
                      <p className="text-sm font-bold text-white">Active Network Node</p>
                    </div>
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded bg-blue-950 text-blue-300 font-mono border border-blue-800/60">
                    PHILIPPINES & GLOBAL
                  </span>
                </div>

                {/* Network Nodes Grid */}
                <div className="py-5 space-y-3.5">
                  {/* Node 1: Senior Tech Professional */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                        IT
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">Cloud & DevOps Architect</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/20 font-medium">
                            Active
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>Metro Manila • Remote Available</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                      Profile Sourced
                    </span>
                  </div>

                  {/* Node 2: Finance & Accounting */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-sm">
                        FA
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">Financial Controller & CPA</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-400/10 text-blue-300 border border-blue-400/20 font-medium">
                            Open
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>Cebu • Hybrid / Global</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-blue-400 bg-blue-500/10 px-2 py-1 rounded">
                      Relevant Match
                    </span>
                  </div>

                  {/* Node 3: Operations & BPO Leader */}
                  <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-amber-600/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-sm">
                        OP
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">Operations Director</span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-purple-400/10 text-purple-300 border border-purple-400/20 font-medium">
                            Passive
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-slate-400 mt-0.5">
                          <MapPin className="w-3 h-3 text-slate-500" />
                          <span>Clark / Pampanga</span>
                        </div>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-amber-400 bg-amber-500/10 px-2 py-1 rounded">
                      In Network
                    </span>
                  </div>
                </div>

                {/* Sourcing Intelligence Footer pill */}
                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    Structured talent mapping
                  </span>
                  <span className="text-slate-300 font-mono">16+ Industry Domains</span>
                </div>
              </div>

              {/* Decorative Floating Metric Badge */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 px-4 py-2.5 rounded-xl shadow-xl border border-amber-300 flex items-center gap-2.5 font-bold text-xs sm:text-sm">
                <Briefcase className="w-4 h-4 text-slate-950" />
                <span>Talent Intelligence Initiative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

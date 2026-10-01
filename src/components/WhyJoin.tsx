import React from "react";
import { Eye, Users, Sparkles, SlidersHorizontal, FileCheck, ArrowRight } from "lucide-react";

interface WhyJoinProps {
  onNavigateToJobseeker: () => void;
}

export const WhyJoin: React.FC<WhyJoinProps> = ({ onNavigateToJobseeker }) => {
  const benefits = [
    {
      num: "01",
      title: "PROFESSIONAL VISIBILITY",
      desc: "Help potential opportunities find your experience.",
      icon: Eye,
    },
    {
      num: "02",
      title: "CAREER CONNECTIONS",
      desc: "Become part of a growing community of Filipino professionals.",
      icon: Users,
    },
    {
      num: "03",
      title: "RELEVANT OPPORTUNITIES",
      desc: "Your profile may be considered when opportunities match your background.",
      icon: Sparkles,
    },
    {
      num: "04",
      title: "CAREER FLEXIBILITY",
      desc: "Tell us whether you're actively looking or simply open to the right opportunity.",
      icon: SlidersHorizontal,
    },
    {
      num: "05",
      title: "ONE PROFESSIONAL PROFILE",
      desc: "Keep your professional information organized in one place.",
      icon: FileCheck,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Candidate Value
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Join MORE TALENT NETWORK?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Gain structured visibility in an initiative built to connect Filipino professionals with meaningful career pathways.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;
            const isFullWidthOnMd = index === 4;
            return (
              <div
                key={item.num}
                className={`bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group ${
                  isFullWidthOnMd ? "md:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-black tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200/60">
                      {item.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                  <span>Advantage {item.num}</span>
                  <span className="text-slate-500 font-medium">Free membership</span>
                </div>
              </div>
            );
          })}

          {/* Quick Registration Highlight Card */}
          <div className="bg-gradient-to-br from-blue-900 to-slate-950 rounded-2xl p-7 text-white border border-blue-800 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-md border border-amber-400/20">
                Get Started
              </span>
              <h3 className="mt-4 text-xl font-bold text-white">
                Ready to Join?
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                Complete our online candidate profile to register with the network.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-800/80">
              <button
                type="button"
                onClick={onNavigateToJobseeker}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow active:scale-95 cursor-pointer"
              >
                <span>JOIN MORE TALENT NETWORK</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

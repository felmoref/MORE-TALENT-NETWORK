import React from "react";
import { FileText, Network, CheckCircle, Building2, ArrowRight } from "lucide-react";

interface HowItWorksProps {
  onNavigateToJobseeker: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onNavigateToJobseeker }) => {
  const steps = [
    {
      step: "01",
      title: "CREATE YOUR PROFILE",
      description: "Tell us about your professional experience, skills, career preferences, and availability.",
      icon: FileText,
      badgeColor: "bg-blue-600 text-white",
      iconBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      step: "02",
      title: "JOIN THE TALENT NETWORK",
      description: "Your profile becomes part of our growing professional network, subject to our privacy notice and consent process.",
      icon: Network,
      badgeColor: "bg-amber-500 text-slate-950",
      iconBg: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      step: "03",
      title: "GET CONSIDERED FOR RELEVANT OPPORTUNITIES",
      description: "When appropriate opportunities become available, suitable candidates may be contacted.",
      icon: CheckCircle,
      badgeColor: "bg-blue-700 text-white",
      iconBg: "bg-blue-50 text-blue-700 border-blue-200",
    },
    {
      step: "04",
      title: "CONNECT WITH POTENTIAL EMPLOYERS",
      description: "Qualified candidates may be introduced to potential employers or recruitment partners based on relevant requirements.",
      icon: Building2,
      badgeColor: "bg-slate-900 text-amber-400",
      iconBg: "bg-slate-100 text-slate-800 border-slate-200",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Process Overview
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            A simple, transparent four-step process for Filipino professionals to put their background and aspirations on the map.
          </p>
        </div>

        {/* Four Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative rounded-2xl p-7 bg-slate-50/70 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className={`text-xs font-black px-3 py-1 rounded-full tracking-wider ${item.badgeColor}`}>
                      {item.step}
                    </span>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.iconBg} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Step Title & Description */}
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-8 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Step {index + 1} of 4</span>
                  {index < 3 && (
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform hidden lg:block" />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Bar below steps */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="text-center sm:text-left">
            <h4 className="text-xl font-bold text-white">Start With Step 01 Today</h4>
            <p className="text-sm text-slate-300 mt-1">
              Create your candidate profile in just a few minutes on our dedicated Jobseeker portal.
            </p>
          </div>
          <button
            type="button"
            onClick={onNavigateToJobseeker}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all shadow-md hover:shadow-amber-400/20 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>JOIN MORE TALENT NETWORK</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

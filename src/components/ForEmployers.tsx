import React from "react";
import {
  Building2,
  Mail,
  Search,
  Users,
  Compass,
  FileSearch,
  BarChart3,
  HelpCircle,
  AlertCircle
} from "lucide-react";
import { BUSINESS_EMAIL, BUSINESS_NAME } from "../config";

export const ForEmployers: React.FC = () => {
  const supportAreas = [
    {
      title: "Candidate Sourcing",
      desc: "Targeted outreach and identification of qualified professionals matching role specifications.",
      icon: Search,
    },
    {
      title: "Talent Identification",
      desc: "Pinpointing key talent segments across active and passive Filipino candidate pools.",
      icon: Users,
    },
    {
      title: "Talent Research",
      desc: "In-depth candidate profile assessment and skills verification across industries.",
      icon: FileSearch,
    },
    {
      title: "Candidate Shortlisting",
      desc: "Curating refined candidate profiles tailored to employer role requirements.",
      icon: Compass,
    },
    {
      title: "Market Intelligence",
      desc: "Insights on salary benchmarks, availability trends, and industry skill depth in the Philippines.",
      icon: BarChart3,
    },
    {
      title: "Recruitment Support",
      desc: "Collaborative assistance to streamline sourcing pipelines for in-house teams.",
      icon: HelpCircle,
    },
  ];

  return (
    <section id="for-employers" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            For Employers & Organizations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Looking for the Right Talent?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-700 leading-relaxed">
            {BUSINESS_NAME} is building a growing community of Filipino professionals across multiple industries. Employers and organizations can connect with us when they need support identifying relevant talent.
          </p>
        </div>

        {/* 6 Support Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {supportAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div
                key={area.title}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {area.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {area.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-medium text-slate-400">
                  <span>Talent Sourcing Support Area</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action Box */}
        <div className="mt-14 max-w-3xl mx-auto bg-gradient-to-br from-blue-900 via-slate-900 to-slate-950 text-white rounded-2xl p-8 sm:p-10 border border-blue-800/50 shadow-xl text-center">
          <div className="w-12 h-12 rounded-xl bg-blue-800/50 text-amber-400 border border-blue-700/60 flex items-center justify-center mx-auto mb-4">
            <Building2 className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            Connect With Our Sourcing Team
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Discuss your talent requirements and explore how our Filipino professional network can support your organization's hiring goals.
          </p>

          <div className="mt-6">
            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=Employer%20Talent%20Inquiry%20-%20MORE%20TALENT%20NETWORK`}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-950" />
              <span>PARTNER WITH US</span>
            </a>
            <p className="text-xs text-slate-400 mt-2">
              Opens email directly to: <span className="text-slate-300 font-mono">{BUSINESS_EMAIL}</span>
            </p>
          </div>
        </div>

        {/* Realistic Positioning Disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400" />
            <span>Sourcing support is subject to candidate availability and specific role requirements.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

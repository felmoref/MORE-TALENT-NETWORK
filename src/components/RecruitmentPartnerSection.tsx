import React from "react";
import { Handshake, Mail, Search, Users, Cpu, FileText, Map, LifeBuoy, AlertCircle } from "lucide-react";
import { BUSINESS_EMAIL } from "../config";

export const RecruitmentPartnerSection: React.FC = () => {
  const cards = [
    {
      title: "Candidate Sourcing",
      description: "Collaborative sourcing pipelines to identify niche and volume talent across the Philippines.",
      icon: Search,
    },
    {
      title: "Talent Identification",
      description: "Discovering high-potential active and passive candidates who meet precise partner specifications.",
      icon: Users,
    },
    {
      title: "Talent Intelligence",
      description: "Data-driven insights into talent clusters, skill distributions, and career motivations.",
      icon: Cpu,
    },
    {
      title: "Candidate Research",
      description: "Detailed pre-qualification and profile research to support partner recruitment workflows.",
      icon: FileText,
    },
    {
      title: "Market Mapping",
      description: "Industry and regional talent mapping across key economic zones in the Philippines.",
      icon: Map,
    },
    {
      title: "Recruitment Support",
      description: "Flexible, ethical sourcing collaboration designed to augment partner search capacities.",
      icon: LifeBuoy,
    },
  ];

  return (
    <section id="partners" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            For Recruitment Partners
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Let's Build Better Talent Connections
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We're interested in working with recruitment organizations and talent partners that need support with candidate sourcing, talent identification, and talent research.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-slate-50/70 rounded-2xl p-6 sm:p-7 border border-slate-200/90 hover:bg-white hover:border-slate-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center mb-5 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs font-medium text-slate-400">
                  <span>Partnership Focus</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partnership Action Box */}
        <div className="mt-14 max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 p-8 sm:p-10 border border-slate-800 text-white text-center shadow-xl">
          <div className="w-12 h-12 rounded-xl bg-blue-900/60 text-amber-400 border border-blue-700/50 flex items-center justify-center mx-auto mb-4">
            <Handshake className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold text-white">
            Explore a Sourcing Collaboration
          </h3>
          <p className="mt-2 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Whether you operate an agency, search boutique, or enterprise sourcing team, reach out to discuss collaborative talent channels.
          </p>

          <div className="mt-6">
            <a
              href={`mailto:${BUSINESS_EMAIL}?subject=Recruitment%20Partnership%20Inquiry%20-%20MORE%20TALENT%20NETWORK`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-950" />
              <span>DISCUSS A PARTNERSHIP</span>
            </a>
            <p className="text-xs text-slate-400 mt-2">
              Send an inquiry to: <span className="text-slate-300 font-mono">{BUSINESS_EMAIL}</span>
            </p>
          </div>
        </div>

        {/* Required Subtle Disclaimer */}
        <div className="mt-8 max-w-2xl mx-auto text-center">
          <p className="text-xs text-slate-500 flex items-center justify-center gap-1.5">
            <AlertCircle className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            <span>Partnerships are subject to applicable requirements, agreements, and regulations.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

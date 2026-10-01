import React from "react";
import { Users, BookOpenCheck, Network, ExternalLink } from "lucide-react";
import { FACEBOOK_URL } from "../config";

export const CommunityStats: React.FC = () => {
  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-200/80 p-6 sm:p-8 md:p-10">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Community Foundation
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built Around a Growing Filipino Career Community
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A career-content community of professionals, career movers, and job seekers coming together across the Philippines.
          </p>
        </div>

        {/* The 3 required verified statistics / cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Card 1: 13K+ Facebook Community */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/70 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-blue-600 hover:text-blue-800 flex items-center gap-1 bg-white px-2 py-1 rounded border border-slate-200 shadow-2xs hover:bg-blue-50 transition-colors"
                title="Visit Facebook Community Page"
              >
                <span>Visit Page</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-6">
              <div className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight flex items-baseline gap-1">
                <span>13K+</span>
                <span className="text-amber-500 text-3xl font-bold">+</span>
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Facebook Community
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Followers engaging with professional career insights, workplace guidance, and opportunities.
              </p>
            </div>
          </div>

          {/* Card 2: Career-focused Content & Resources */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/70 hover:border-amber-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 border border-amber-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                <BookOpenCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
                Active Discussions
              </span>
            </div>

            <div className="mt-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Career-focused
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Content & Resources
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                Practical perspectives on resume readiness, interview preparation, market trends, and professional career growth.
              </p>
            </div>
          </div>

          {/* Card 3: Growing Professional Talent Network */}
          <div className="relative group rounded-xl p-6 bg-gradient-to-b from-slate-50 to-white border border-slate-200/70 hover:border-blue-400 hover:shadow-md transition-all duration-200 flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Network className="w-6 h-6 text-blue-700" />
              </div>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
                Sourcing Initiative
              </span>
            </div>

            <div className="mt-6">
              <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Growing
              </div>
              <h3 className="mt-2 text-lg font-bold text-slate-800">
                Professional Talent Network
              </h3>
              <p className="mt-1 text-sm text-slate-600 leading-relaxed">
                A structured initiative connecting skilled Filipino candidates with prospective employers and recruitment partners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

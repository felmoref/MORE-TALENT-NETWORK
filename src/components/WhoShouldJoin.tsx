import React from "react";
import { Search, Compass, Eye, Award, Laptop, Globe2, ArrowRight } from "lucide-react";

interface WhoShouldJoinProps {
  onNavigateToJobseeker: () => void;
}

export const WhoShouldJoin: React.FC<WhoShouldJoinProps> = ({ onNavigateToJobseeker }) => {
  const categories = [
    {
      title: "JOB SEEKERS",
      tagline: "Active Search",
      description: "For professionals actively searching for their next opportunity.",
      icon: Search,
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      accent: "border-blue-500",
    },
    {
      title: "CAREER MOVERS",
      tagline: "Transition & Pivot",
      description: "For professionals considering a new role, industry, or career direction.",
      icon: Compass,
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      accent: "border-amber-500",
    },
    {
      title: "PASSIVE CANDIDATES",
      tagline: "Employed & Open",
      description: "For professionals who are currently employed but open to relevant opportunities.",
      icon: Eye,
      badgeColor: "bg-indigo-50 text-indigo-700 border-indigo-200",
      accent: "border-indigo-500",
    },
    {
      title: "EXPERIENCED PROFESSIONALS",
      tagline: "Leadership & Depth",
      description: "For professionals who want their experience and skills to be visible to potential opportunities.",
      icon: Award,
      badgeColor: "bg-purple-50 text-purple-700 border-purple-200",
      accent: "border-purple-500",
    },
    {
      title: "REMOTE PROFESSIONALS",
      tagline: "Work From Anywhere",
      description: "For professionals interested in remote and hybrid opportunities.",
      icon: Laptop,
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      accent: "border-emerald-500",
    },
    {
      title: "GLOBAL-MINDED FILIPINO TALENT",
      tagline: "International Horizons",
      description: "For professionals interested in opportunities beyond their current location, subject to applicable requirements.",
      icon: Globe2,
      badgeColor: "bg-sky-50 text-sky-700 border-sky-200",
      accent: "border-sky-500",
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
            Network Audience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Who Should Join MORE TALENT NETWORK?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Whether you are aggressively seeking your next role or comfortably employed and curious about market opportunities, our network is designed for you.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-5">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.badgeColor} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                      {item.tagline}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Profile Track #{index + 1}</span>
                  <button
                    type="button"
                    onClick={onNavigateToJobseeker}
                    className="inline-flex items-center gap-1 font-semibold text-blue-700 hover:text-blue-900 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Register profile</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

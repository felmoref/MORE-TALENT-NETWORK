import React, { useState } from "react";
import {
  Code,
  DollarSign,
  Users2,
  Cpu,
  Hammer,
  TrendingUp,
  Headphones,
  Stethoscope,
  Cog,
  Truck,
  GraduationCap,
  UtensilsCrossed,
  Factory,
  FolderKanban,
  Wrench,
  Sparkles,
  Search,
  AlertCircle,
  ArrowRight
} from "lucide-react";

interface CategoryItem {
  name: string;
  subtext: string;
  icon: React.ElementType;
}

interface TalentCategoriesProps {
  onNavigateToJobseeker: () => void;
}

export const TalentCategories: React.FC<TalentCategoriesProps> = ({ onNavigateToJobseeker }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const categories: CategoryItem[] = [
    { name: "IT & Technology", subtext: "Software, Cloud, Cybersecurity, Data, AI", icon: Code },
    { name: "Finance & Accounting", subtext: "CPAs, Bookkeeping, FP&A, Tax, Audit", icon: DollarSign },
    { name: "Human Resources", subtext: "Talent Acquisition, People Ops, Compensation", icon: Users2 },
    { name: "Engineering", subtext: "Civil, Mechanical, Electrical, Chemical, Industrial", icon: Cpu },
    { name: "Construction", subtext: "Project Management, Architecture, Estimating", icon: Hammer },
    { name: "Sales & Marketing", subtext: "Digital Marketing, SEO, B2B Sales, Growth", icon: TrendingUp },
    { name: "Customer Service & BPO", subtext: "Technical Support, CX, Team Leaders, QA", icon: Headphones },
    { name: "Healthcare", subtext: "Nursing, Medical Allied, Health Tech, Admin", icon: Stethoscope },
    { name: "Operations", subtext: "Process Improvement, General Ops, Facility Mgmt", icon: Cog },
    { name: "Logistics & Supply Chain", subtext: "Procurement, Freight, Warehouse, Inventory", icon: Truck },
    { name: "Education", subtext: "Instructional Design, Academic, Corporate Training", icon: GraduationCap },
    { name: "Hospitality", subtext: "Tourism, Food & Beverage, Hotel Management", icon: UtensilsCrossed },
    { name: "Manufacturing", subtext: "Quality Assurance, Production, Plant Ops", icon: Factory },
    { name: "Administration", subtext: "Executive Assistants, Office Mgmt, Coordination", icon: FolderKanban },
    { name: "Skilled Trades", subtext: "Specialized Technicians, Maintenance, Field Work", icon: Wrench },
    { name: "Other Professional Roles", subtext: "Legal, Creative Design, Consulting, Strategy", icon: Sparkles },
  ];

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.subtext.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Professional Disciplines
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Talent Across Multiple Industries
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Our talent network encompasses professional disciplines spanning traditional, digital, and technical sectors across the country and overseas.
          </p>

          {/* Quick Search Filter */}
          <div className="mt-8 max-w-md mx-auto relative">
            <div className="relative">
              <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Filter by industry or role (e.g. Finance, Tech, BPO)..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 bg-slate-50/50 text-sm text-slate-900 placeholder:text-slate-400 transition-all outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-600 font-medium px-1.5 py-0.5"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 16 Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCategories.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.name}
                type="button"
                onClick={onNavigateToJobseeker}
                className="group text-left p-5 rounded-xl border border-slate-200/90 bg-slate-50/60 hover:bg-white hover:border-blue-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {item.subtext}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400 w-full">
                  <span>Register profile</span>
                  <span className="text-amber-600 font-semibold group-hover:underline">Join &rarr;</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Mandatory Note */}
        <div className="mt-12 max-w-3xl mx-auto p-4 rounded-xl bg-slate-100/90 border border-slate-200 flex items-start gap-3 text-slate-600">
          <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
          <p className="text-xs sm:text-sm leading-relaxed">
            <strong className="font-semibold text-slate-700">Notice on Industry Categories:</strong>{" "}
            These categories represent areas of talent we aim to connect. They do not indicate that opportunities are currently available in every category.
          </p>
        </div>
      </div>
    </section>
  );
};

import React from "react";
import { Info, Target, Eye, Handshake, AlertCircle } from "lucide-react";
import { BUSINESS_NAME } from "../config";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: About Text & Strategic Positioning */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-100/70 border border-blue-200">
              <Info className="w-3.5 h-3.5 text-blue-700" />
              <span>About {BUSINESS_NAME}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              More Than a Job Board
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-700 leading-relaxed">
              <p className="font-medium text-slate-900">
                {BUSINESS_NAME} is being built as a professional community where Filipino talent can become more visible to potential employers and recruitment partners.
              </p>
              <p>
                Instead of simply posting job vacancies, we're building a structured talent network that brings together professional experience, skills, career preferences, and opportunities.
              </p>
            </div>

            {/* Strategic Highlight Box */}
            <div className="p-5 sm:p-6 rounded-xl bg-white border-l-4 border-amber-400 border border-slate-200/90 shadow-sm">
              <p className="text-base sm:text-lg font-semibold text-slate-900 italic">
                &ldquo;Your profile can help us understand what you do, what you're looking for, and the kinds of opportunities you may be open to.&rdquo;
              </p>
            </div>

            {/* Crucial Required Disclaimer */}
            <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3 text-amber-950">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="font-semibold text-amber-900">Important Disclaimer:</strong>{" "}
                Joining {BUSINESS_NAME} does not guarantee employment, interviews, or placement.
              </p>
            </div>
          </div>

          {/* Right: How We Differ / Positioning Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">
                Our Strategic Positioning
              </h3>

              <div className="space-y-6">
                {/* Pillar 1 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center shrink-0">
                    <Eye className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Proactive Talent Sourcing</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      A structured talent-sourcing initiative where professional profiles are categorized to support relevant sourcing needs.
                    </p>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center shrink-0">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Career Preferences First</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      We consider your preferred work arrangement, industry focus, and career stage rather than just keyword matches.
                    </p>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center shrink-0">
                    <Handshake className="w-5 h-5 text-blue-700" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900">Collaborative Network</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Designed to connect candidates, prospective employers, and recruitment partners in an organized ecosystem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-100 text-xs text-slate-500 italic">
                Positioned as a professional talent network and talent-sourcing initiative.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

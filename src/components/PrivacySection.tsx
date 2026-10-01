import React from "react";
import { ShieldCheck, Lock, AlertCircle, FileText, ArrowUpRight } from "lucide-react";
import { BUSINESS_NAME, PRIVACY_URL } from "../config";

interface PrivacySectionProps {
  onOpenPrivacyModal: () => void;
}

export const PrivacySection: React.FC<PrivacySectionProps> = ({ onOpenPrivacyModal }) => {
  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PRIVACY_URL === "#" || !PRIVACY_URL.startsWith("http")) {
      e.preventDefault();
      onOpenPrivacyModal();
    }
  };

  return (
    <section id="privacy" className="py-20 sm:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-gradient-to-b from-slate-50 to-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-lg shadow-slate-900/5 relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-7 h-7" />
              </div>

              <div className="space-y-4 flex-1">
                <span className="text-xs font-bold tracking-widest uppercase text-blue-700 bg-blue-100/70 px-3 py-1 rounded-full border border-blue-200">
                  Privacy & Trust
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                  Your Information Matters
                </h2>

                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  We respect the privacy of professionals who join {BUSINESS_NAME}. Information submitted through our registration process will be handled according to the applicable privacy notice and consent provided during registration.
                </p>

                {/* Important Warnings / Reassurances */}
                <div className="p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 space-y-2 text-left">
                  <div className="flex items-start gap-2.5">
                    <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-amber-950 leading-relaxed">
                      Joining {BUSINESS_NAME} does not guarantee employment, interviews, or placement.
                    </p>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Lock className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm font-medium text-amber-950 leading-relaxed">
                      Please review the Privacy Notice and consent information before submitting your profile.
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                  <a
                    href={PRIVACY_URL}
                    onClick={handlePrivacyClick}
                    target={PRIVACY_URL.startsWith("http") ? "_blank" : undefined}
                    rel={PRIVACY_URL.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-400"
                  >
                    <FileText className="w-4 h-4 text-slate-600" />
                    <span>VIEW PRIVACY NOTICE</span>
                    {PRIVACY_URL.startsWith("http") && <ArrowUpRight className="w-4 h-4 text-slate-400" />}
                  </a>
                  <span className="text-xs text-slate-500">
                    Transparent data handling • Voluntary submission
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

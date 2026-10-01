import React, { useEffect } from "react";
import { X, ShieldCheck, Lock, FileText, CheckCircle2 } from "lucide-react";
import { BUSINESS_NAME, BUSINESS_EMAIL } from "../config";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div 
        className="relative bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-5 border-b border-slate-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 id="privacy-modal-title" className="text-xl font-bold text-slate-900">
                Privacy Notice & Data Handling
              </h3>
              <p className="text-xs text-slate-500">{BUSINESS_NAME}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
            aria-label="Close privacy notice"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-5 text-sm text-slate-700 max-h-[65vh] overflow-y-auto pr-2">
          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 text-blue-950">
            <p className="font-semibold text-blue-900">Our Privacy Commitment</p>
            <p className="mt-1 text-xs text-blue-800 leading-relaxed">
              We respect the privacy of professionals who join {BUSINESS_NAME}. Information submitted through our registration process will be handled according to the applicable privacy notice and consent provided during registration.
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                1. Purpose of Information Collection
              </h4>
              <p className="mt-1 text-slate-600 text-xs sm:text-sm leading-relaxed">
                The information you provide in the registration Google Form (such as contact information, professional background, skills, work arrangement preferences, and availability) is collected to maintain a structured talent network and identify potential matches for relevant opportunities, employers, or recruitment partners.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-4 h-4 text-blue-600" />
                2. Consent & Profile Sharing
              </h4>
              <p className="mt-1 text-slate-600 text-xs sm:text-sm leading-relaxed">
                By submitting your profile, you consent to being included in our professional talent network. When relevant opportunities arise, your background may be considered. We do not sell personal data to unrelated third parties.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                3. Updating or Removing Your Profile
              </h4>
              <p className="mt-1 text-slate-600 text-xs sm:text-sm leading-relaxed">
                You retain control over your information. If you wish to update your preferences or request the removal of your profile from the talent network at any time, you may contact us at{" "}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-blue-700 underline font-medium">
                  {BUSINESS_EMAIL}
                </a>.
              </p>
            </div>

            <div className="pt-2 border-t border-slate-200">
              <p className="text-xs text-slate-500 font-medium">
                <strong>Important Notice:</strong> Joining {BUSINESS_NAME} does not guarantee employment, interviews, or placement. Please review the Privacy Notice and consent information before submitting your profile.
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};

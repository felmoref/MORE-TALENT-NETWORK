import React from "react";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import {
  BUSINESS_NAME,
  TAGLINE,
  BUSINESS_EMAIL,
  FACEBOOK_URL,
  PRIVACY_URL,
} from "../config";

interface FooterProps {
  onNavigate: (page: "home" | "jobseeker", sectionHash?: string) => void;
  onOpenPrivacyModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacyModal }) => {
  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "jobseeker",
    sectionHash?: string
  ) => {
    e.preventDefault();
    onNavigate(page, sectionHash);
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PRIVACY_URL === "#" || !(PRIVACY_URL as string).startsWith("http")) {
      e.preventDefault();
      onOpenPrivacyModal();
    }
  };

  return (
    <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 border border-amber-400/40 flex items-center justify-center shadow-inner">
                <span className="font-extrabold text-amber-400 text-lg tracking-wider">M</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl font-black tracking-tight text-white">MORE</span>
                  <span className="text-xs font-semibold tracking-wider text-slate-300 uppercase">
                    TALENT NETWORK
                  </span>
                </div>
              </div>
            </div>

            <p className="text-sm font-medium text-amber-400/90 italic">
              &ldquo;{TAGLINE}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              A professional talent community and talent-sourcing initiative dedicated to elevating Filipino careers and facilitating strategic employer connections.
            </p>

            {/* Social link */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href={FACEBOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-slate-900 hover:bg-blue-900/40 border border-slate-800 hover:border-blue-700/60 text-slate-300 hover:text-white transition-all"
                aria-label="Follow MORE TALENT NETWORK on Facebook"
              >
                <svg className="w-4 h-4 fill-current text-blue-400" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Facebook Community (13K+)</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href="#home"
                  onClick={(e) => handleLinkClick(e, "home")}
                  className="hover:text-amber-400 transition-colors"
                >
                  HOME
                </a>
              </li>
              <li>
                <a
                  href="#jobseeker"
                  onClick={(e) => handleLinkClick(e, "jobseeker")}
                  className="text-amber-400 font-semibold hover:text-amber-300 transition-colors flex items-center gap-1.5"
                >
                  <span>JOBSEEKER</span>
                  <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded">Apply</span>
                </a>
              </li>
              <li>
                <a
                  href="#for-employers"
                  onClick={(e) => handleLinkClick(e, "home", "#for-employers")}
                  className="hover:text-amber-400 transition-colors"
                >
                  EMPLOYERS
                </a>
              </li>
              <li>
                <a
                  href="#partners"
                  onClick={(e) => handleLinkClick(e, "home", "#partners")}
                  className="hover:text-amber-400 transition-colors"
                >
                  RECRUITMENT PARTNERS
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  onClick={(e) => handleLinkClick(e, "home", "#about")}
                  className="hover:text-amber-400 transition-colors"
                >
                  ABOUT
                </a>
              </li>
            </ul>
          </div>

          {/* Legal & Contact */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Trust & Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li>
                <a
                  href={PRIVACY_URL}
                  onClick={handlePrivacyClick}
                  target={(PRIVACY_URL as string).startsWith("http") ? "_blank" : undefined}
                  rel={(PRIVACY_URL as string).startsWith("http") ? "noopener noreferrer" : undefined}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Privacy Notice</span>
                  {(PRIVACY_URL as string).startsWith("http") && <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS_EMAIL}`}
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>Contact: {BUSINESS_EMAIL}</span>
                </a>
              </li>
              <li className="pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate("jobseeker")}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors cursor-pointer"
                >
                  <span>JOIN MORE TALENT NETWORK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Disclaimer */}
        <div className="pt-8 pb-6 border-b border-slate-900 text-xs text-slate-400 leading-relaxed">
          <p>
            <strong>Disclaimer:</strong> {BUSINESS_NAME} is a professional talent community and talent-sourcing initiative. Joining the network does not guarantee employment, interviews, placement, or any specific opportunity. Opportunities are subject to employer requirements and applicable laws and regulations.
          </p>
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>&copy; 2026 {BUSINESS_NAME}. All rights reserved.</p>
          <p className="text-[11px] text-slate-500">
            Professional Talent Community • Philippines
          </p>
        </div>
      </div>
    </footer>
  );
};

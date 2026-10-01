import React, { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { BUSINESS_NAME } from "../config";

interface NavbarProps {
  currentPage: "home" | "jobseeker";
  onNavigate: (page: "home" | "jobseeker", sectionHash?: string) => void;
  onOpenPrivacy?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    page: "home" | "jobseeker",
    sectionHash?: string
  ) => {
    e.preventDefault();
    onNavigate(page, sectionHash);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/95 backdrop-blur-md shadow-lg shadow-slate-950/20 border-b border-slate-800"
          : "bg-slate-950 border-b border-slate-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, "home")}
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-amber-400 rounded-lg p-1"
            aria-label={`${BUSINESS_NAME} Home`}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-700 via-blue-900 to-slate-950 border border-amber-400/40 flex items-center justify-center shadow-inner shadow-blue-500/20">
              <span className="font-extrabold text-amber-400 text-lg tracking-wider">M</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-amber-400 transition-colors">
                  MORE
                </span>
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-300 uppercase">
                  TALENT NETWORK
                </span>
              </div>
              <span className="text-[10px] text-amber-400/80 font-medium tracking-widest uppercase hidden sm:block">
                Filipino Talent Initiative
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
            {/* HOME */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className={`text-sm font-semibold transition-colors px-2 py-1 rounded-md ${
                currentPage === "home"
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              HOME
            </a>

            {/* JOBSEEKER (Visually highlighted as the primary action) */}
            <a
              href="#jobseeker"
              onClick={(e) => handleLinkClick(e, "jobseeker")}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-black tracking-wider uppercase transition-all shadow-sm ${
                currentPage === "jobseeker"
                  ? "bg-amber-400 text-slate-950 ring-2 ring-amber-300 shadow-amber-400/30 shadow-md"
                  : "bg-amber-400/15 text-amber-300 border border-amber-400/50 hover:bg-amber-400 hover:text-slate-950 hover:border-amber-400"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>JOBSEEKER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse hidden xl:inline-block" />
            </a>

            {/* EMPLOYERS */}
            <a
              href="#for-employers"
              onClick={(e) => handleLinkClick(e, "home", "#for-employers")}
              className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors px-2 py-1"
            >
              EMPLOYERS
            </a>

            {/* RECRUITMENT PARTNERS */}
            <a
              href="#partners"
              onClick={(e) => handleLinkClick(e, "home", "#partners")}
              className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors px-2 py-1"
            >
              RECRUITMENT PARTNERS
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "home", "#about")}
              className="text-sm font-semibold text-slate-300 hover:text-amber-400 transition-colors px-2 py-1"
            >
              ABOUT
            </a>
          </nav>

          {/* Mobile Hamburger Toggle (visible on screens smaller than lg) */}
          <div className="flex lg:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950 border-b border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {/* HOME */}
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            >
              HOME
            </a>

            {/* JOBSEEKER (Highlighted) */}
            <a
              href="#jobseeker"
              onClick={(e) => handleLinkClick(e, "jobseeker")}
              className="px-3 py-2.5 rounded-lg text-base font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors flex items-center justify-between shadow-sm"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                JOBSEEKER
              </span>
              <span className="text-[11px] uppercase tracking-wider font-extrabold bg-slate-950 text-amber-400 px-2 py-0.5 rounded-full">
                Register Profile
              </span>
            </a>

            {/* EMPLOYERS */}
            <a
              href="#for-employers"
              onClick={(e) => handleLinkClick(e, "home", "#for-employers")}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            >
              EMPLOYERS
            </a>

            {/* RECRUITMENT PARTNERS */}
            <a
              href="#partners"
              onClick={(e) => handleLinkClick(e, "home", "#partners")}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            >
              RECRUITMENT PARTNERS
            </a>

            {/* ABOUT */}
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "home", "#about")}
              className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-200 hover:text-amber-400 hover:bg-slate-900 transition-colors"
            >
              ABOUT
            </a>
          </div>

          <div className="pt-3 border-t border-slate-800">
            <button
              type="button"
              onClick={() => {
                onNavigate("jobseeker");
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-amber-400"
            >
              <span>JOIN MORE TALENT NETWORK</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-[11px] text-center text-slate-400 mt-2">
              Internal candidate registration • Free to join
            </p>
          </div>
        </div>
      )}
    </header>
  );
};

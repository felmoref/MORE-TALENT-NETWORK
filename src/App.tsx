/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CommunityStats } from "./components/CommunityStats";
import { AboutSection } from "./components/AboutSection";
import { HowItWorks } from "./components/HowItWorks";
import { WhoShouldJoin } from "./components/WhoShouldJoin";
import { TalentCategories } from "./components/TalentCategories";
import { ForProfessionals } from "./components/ForProfessionals";
import { ForEmployers } from "./components/ForEmployers";
import { RecruitmentPartnerSection } from "./components/RecruitmentPartnerSection";
import { WhyJoin } from "./components/WhyJoin";
import { PrivacySection } from "./components/PrivacySection";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { PrivacyModal } from "./components/PrivacyModal";
import { JobseekerPage } from "./components/JobseekerPage";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "jobseeker">(() => {
    if (typeof window !== "undefined" && window.location.hash === "#jobseeker") {
      return "jobseeker";
    }
    return "home";
  });
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  // Sync with window.location.hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#jobseeker") {
        setCurrentPage("jobseeker");
      } else if (window.location.hash === "#home" || window.location.hash === "") {
        setCurrentPage("home");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleNavigate = (page: "home" | "jobseeker", sectionHash?: string) => {
    setCurrentPage(page);

    if (page === "jobseeker") {
      window.history.pushState(null, "", "#jobseeker");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      if (sectionHash && sectionHash.startsWith("#")) {
        window.history.pushState(null, "", sectionHash);
        // Small delay to ensure home content is mounted before scrolling
        setTimeout(() => {
          const target = document.querySelector(sectionHash);
          if (target) {
            target.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }, 50);
      } else {
        window.history.pushState(null, "", "#home");
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-amber-400 selection:text-slate-950 font-sans antialiased">
      {/* Sticky Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPrivacy={() => setPrivacyModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === "jobseeker" ? (
          <JobseekerPage
            onBackToHome={() => handleNavigate("home")}
            onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
          />
        ) : (
          <>
            <Hero onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
            <CommunityStats />
            <AboutSection />
            <HowItWorks onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
            <WhoShouldJoin onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
            <TalentCategories onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
            <ForProfessionals onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
            <ForEmployers />
            <RecruitmentPartnerSection />
            <WhyJoin onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
            <PrivacySection onOpenPrivacyModal={() => setPrivacyModalOpen(true)} />
            <FinalCTA onNavigateToJobseeker={() => handleNavigate("jobseeker")} />
          </>
        )}
      </main>

      {/* Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
      />

      {/* Privacy Notice Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}

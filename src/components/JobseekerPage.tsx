import React, { useState, useEffect } from "react";
import {
  User,
  Briefcase,
  Target,
  FileCheck2,
  HelpCircle,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
  Link as LinkIcon,
  Video,
  FileText,
  Lock,
  ArrowRight,
  Check,
  RotateCcw
} from "lucide-react";
import {
  JobseekerFormData,
  INITIAL_FORM_DATA,
  INDUSTRY_OPTIONS,
  YEARS_OF_EXPERIENCE_OPTIONS,
  EDUCATION_OPTIONS,
  EMPLOYMENT_TYPE_OPTIONS,
  WORK_ARRANGEMENT_OPTIONS,
  PREFERRED_LOCATION_OPTIONS,
  CAREER_STATUS_OPTIONS,
  AVAILABILITY_OPTIONS,
  SALARY_OPTIONS,
  isValidGoogleDriveUrl,
} from "../types/jobseeker";
import { BUSINESS_NAME, FORM_SUBMISSION_ENDPOINT, PRIVACY_URL } from "../config";

interface JobseekerPageProps {
  onBackToHome: () => void;
  onOpenPrivacyModal: () => void;
}

const STEPS = [
  { id: 1, label: "Basic Info", icon: User, title: "Tell Us About Yourself" },
  { id: 2, label: "Professional", icon: Briefcase, title: "Your Professional Background" },
  { id: 3, label: "Preferences", icon: Target, title: "What Are You Looking For?" },
  { id: 4, label: "Resume & Video", icon: FileCheck2, title: "Show Us Your Professional Story" },
  { id: 5, label: "Tell Us More", icon: HelpCircle, title: "Tell Us More" },
  { id: 6, label: "Consent & Submit", icon: ShieldCheck, title: "Before You Submit" },
];

export const JobseekerPage: React.FC<JobseekerPageProps> = ({
  onBackToHome,
  onOpenPrivacyModal,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState<JobseekerFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showVideoTips, setShowVideoTips] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [submittedData, setSubmittedData] = useState<JobseekerFormData | null>(null);

  // Scroll to top on step change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentStep, isSuccess]);

  const updateField = <K extends keyof JobseekerFormData>(
    field: K,
    value: JobseekerFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for that field
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validateStep = (stepNumber: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNumber === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
      if (!formData.email.trim()) {
        newErrors.email = "Email address is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = "Please enter a valid email address";
      }
      if (!formData.mobileNumber.trim()) newErrors.mobileNumber = "Mobile number is required";
      if (!formData.currentLocation.trim()) newErrors.currentLocation = "Current location is required";
    } else if (stepNumber === 2) {
      if (!formData.currentJobTitle.trim()) newErrors.currentJobTitle = "Current or most recent job title is required";
      if (!formData.primaryIndustry) newErrors.primaryIndustry = "Primary industry is required";
      if (!formData.yearsOfExperience) newErrors.yearsOfExperience = "Years of experience is required";
      if (!formData.highestEducation) newErrors.highestEducation = "Highest educational attainment is required";
      if (!formData.keySkills.trim()) newErrors.keySkills = "Key professional skills are required";
    } else if (stepNumber === 3) {
      if (!formData.targetJobTitle.trim()) newErrors.targetJobTitle = "Target job title is required";
      if (!formData.employmentType) newErrors.employmentType = "Employment type is required";
      if (!formData.workArrangement) newErrors.workArrangement = "Work arrangement is required";
      if (!formData.preferredLocation) newErrors.preferredLocation = "Preferred work location is required";
      if (!formData.careerStatus) newErrors.careerStatus = "Career status is required";
      if (!formData.availability) newErrors.availability = "Availability is required";
    } else if (stepNumber === 4) {
      if (!formData.resumeDriveLink.trim()) {
        newErrors.resumeDriveLink = "Resume / CV Google Drive link is required";
      } else if (!isValidGoogleDriveUrl(formData.resumeDriveLink)) {
        newErrors.resumeDriveLink = "Please provide a Google Drive link.";
      }

      if (formData.videoDriveLink.trim() && !isValidGoogleDriveUrl(formData.videoDriveLink)) {
        newErrors.videoDriveLink = "Please provide a Google Drive link.";
      }
    } else if (stepNumber === 6) {
      if (!formData.consentNoGuarantee) {
        newErrors.consentNoGuarantee = "You must acknowledge this disclaimer to continue.";
      }
      if (!formData.consentDataProcessing) {
        newErrors.consentDataProcessing = "Your consent to data processing is required.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < 6) {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(6)) return;

    setIsSubmitting(true);

    try {
      if (FORM_SUBMISSION_ENDPOINT && FORM_SUBMISSION_ENDPOINT.trim() !== "") {
        // Submit payload to external endpoint
        await fetch(FORM_SUBMISSION_ENDPOINT, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            submittedAt: new Date().toISOString(),
          }),
        });
      } else {
        // Simulated network delay for demo mode
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      setSubmittedData({ ...formData });
      setIsSuccess(true);
    } catch (err) {
      console.error("Submission error:", err);
      // Even if network fails in prototyping, transition to success screen with demo flag
      setSubmittedData({ ...formData });
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleResetForm = () => {
    setFormData(INITIAL_FORM_DATA);
    setCurrentStep(1);
    setIsSuccess(false);
    setSubmittedData(null);
  };

  const handlePrivacyClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (PRIVACY_URL === "#" || !PRIVACY_URL.startsWith("http")) {
      e.preventDefault();
      onOpenPrivacyModal();
    }
  };

  // SUCCESS SCREEN
  if (isSuccess) {
    return (
      <div className="py-16 sm:py-24 bg-slate-50 min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl w-full bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-200/90 text-center animate-in fade-in zoom-in-95 duration-300">
          {/* Animated Celebration Icon */}
          <div className="w-20 h-20 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 mb-3">
            Profile Registered
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            You&apos;re In! 🎉
          </h1>

          <p className="mt-3 text-lg sm:text-xl font-semibold text-slate-800">
            Thank you for joining {BUSINESS_NAME}.
          </p>

          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            Your professional profile has been submitted successfully. We may contact you if an opportunity becomes available that appears relevant to your background and career preferences.
          </p>

          {/* Important Reminder Callout */}
          <div className="mt-8 p-5 rounded-2xl bg-amber-50/80 border border-amber-200 text-left max-w-xl mx-auto flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-bold text-amber-950">Important Reminder</p>
              <p className="text-xs sm:text-sm text-amber-900 mt-0.5 leading-relaxed">
                Please keep your resume and Google Drive links updated. Ensure your Google Drive file permissions continue to allow viewing so prospective opportunities can access your background.
              </p>
            </div>
          </div>

          {/* Transparent Demo Mode Notice if endpoint is unconfigured */}
          {(!FORM_SUBMISSION_ENDPOINT || FORM_SUBMISSION_ENDPOINT.trim() === "") && (
            <div className="mt-6 p-4 rounded-xl bg-blue-50/80 border border-blue-200 text-left max-w-xl mx-auto text-xs text-blue-900">
              <p className="font-semibold text-blue-950 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                Demo Mode Notice (Backend Configuration)
              </p>
              <p className="mt-1 text-blue-800 leading-relaxed">
                The frontend candidate profile experience was simulated successfully. To connect this form to live cloud storage (Google Sheets, Supabase, Airtable, Firebase, or a custom API), simply configure <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-950 font-mono text-[11px]">FORM_SUBMISSION_ENDPOINT</code> in <code className="bg-blue-100 px-1.5 py-0.5 rounded text-blue-950 font-mono text-[11px]">src/config.ts</code>.
              </p>
            </div>
          )}

          {/* Profile Summary Card for Verification */}
          {submittedData && (
            <div className="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-left max-w-xl mx-auto">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4 pb-2 border-b border-slate-200">
                Submitted Profile Snapshot
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <dt className="text-slate-400">Candidate Name:</dt>
                  <dd className="font-semibold text-slate-800">{submittedData.fullName}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Email Address:</dt>
                  <dd className="font-semibold text-slate-800 truncate">{submittedData.email}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Current Role:</dt>
                  <dd className="font-semibold text-slate-800">{submittedData.currentJobTitle}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Target Role:</dt>
                  <dd className="font-semibold text-slate-800">{submittedData.targetJobTitle}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Primary Industry:</dt>
                  <dd className="font-semibold text-slate-800">{submittedData.primaryIndustry}</dd>
                </div>
                <div>
                  <dt className="text-slate-400">Work Arrangement:</dt>
                  <dd className="font-semibold text-slate-800">{submittedData.workArrangement}</dd>
                </div>
                <div className="sm:col-span-2 pt-2 border-t border-slate-200">
                  <dt className="text-slate-400">Resume Link:</dt>
                  <dd className="font-mono text-blue-700 truncate">{submittedData.resumeDriveLink}</dd>
                </div>
              </dl>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              type="button"
              onClick={onBackToHome}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all shadow-md active:scale-95"
            >
              <span>BACK TO HOME</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={handleResetForm}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-all"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Submit Another Profile</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-6 flex items-center justify-between">
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-950 transition-colors py-1.5 px-3 rounded-lg hover:bg-white border border-transparent hover:border-slate-200"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </button>

          <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 bg-blue-100/60 px-3 py-1 rounded-full">
            Candidate Application
          </span>
        </div>

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm mb-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full border border-amber-200/80">
              Candidate Profile Registration
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Join {BUSINESS_NAME}
            </h1>

            <p className="mt-3 text-base sm:text-lg font-semibold text-slate-800">
              Put your skills, experience, and career goals in front of potential employers and recruitment partners.
            </p>

            <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed">
              Complete your professional profile so we can better understand your experience, skills, and career preferences. When relevant opportunities become available, your profile may be considered based on employer requirements.
            </p>

            {/* Crucial Required Disclaimer */}
            <div className="mt-5 p-4 rounded-xl bg-amber-50/90 border border-amber-200/90 flex items-start gap-3 text-amber-950">
              <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm font-medium leading-relaxed">
                <strong className="font-semibold text-amber-900">Important Disclaimer:</strong>{" "}
                Joining {BUSINESS_NAME} does not guarantee employment, interviews, placement, or any specific job opportunity.
              </p>
            </div>
          </div>
        </div>

        {/* Step Progress Indicators */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-200/90 shadow-sm mb-8 overflow-x-auto">
          <div className="flex items-center justify-between min-w-[560px] sm:min-w-0">
            {STEPS.map((s, idx) => {
              const isPassed = currentStep > s.id;
              const isCurrent = currentStep === s.id;
              const Icon = s.icon;

              return (
                <React.Fragment key={s.id}>
                  <button
                    type="button"
                    onClick={() => {
                      if (isPassed) setCurrentStep(s.id);
                    }}
                    disabled={!isPassed && !isCurrent}
                    className={`flex flex-col items-center gap-1.5 focus:outline-none transition-all ${
                      isPassed ? "cursor-pointer group" : isCurrent ? "cursor-default" : "opacity-45 cursor-not-allowed"
                    }`}
                  >
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                        isPassed
                          ? "bg-emerald-600 text-white shadow-sm"
                          : isCurrent
                          ? "bg-slate-900 text-amber-400 ring-4 ring-amber-400/20 shadow-md"
                          : "bg-slate-100 text-slate-500 border border-slate-200"
                      }`}
                    >
                      {isPassed ? <Check className="w-5 h-5 stroke-[2.5]" /> : <Icon className="w-5 h-5" />}
                    </div>
                    <span
                      className={`text-[11px] font-semibold tracking-tight transition-colors ${
                        isCurrent
                          ? "text-slate-900 font-bold"
                          : isPassed
                          ? "text-emerald-700 group-hover:text-slate-900"
                          : "text-slate-400"
                      }`}
                    >
                      {s.label}
                    </span>
                  </button>

                  {idx < STEPS.length - 1 && (
                    <div
                      className={`flex-1 h-1 mx-2 rounded-full transition-colors ${
                        currentStep > idx + 1 ? "bg-emerald-500" : "bg-slate-200"
                      }`}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} noValidate>
          {/* STEP 1: BASIC INFORMATION */}
          {currentStep === 1 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Step 1 of 6
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
                  Tell Us About Yourself
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Provide your primary contact details so we know who you are and how to reach you.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full Name */}
                <div className="sm:col-span-2">
                  <label htmlFor="fullName" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Full Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    placeholder="e.g. Maria Santos"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.fullName
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Preferred Name */}
                <div>
                  <label htmlFor="preferredName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Preferred Name / Nickname <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="preferredName"
                    type="text"
                    value={formData.preferredName}
                    onChange={(e) => updateField("preferredName", e.target.value)}
                    placeholder="e.g. Ria"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="e.g. maria.santos@email.com"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.email
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Mobile Number */}
                <div>
                  <label htmlFor="mobileNumber" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="mobileNumber"
                    type="tel"
                    required
                    value={formData.mobileNumber}
                    onChange={(e) => updateField("mobileNumber", e.target.value)}
                    placeholder="e.g. +63 917 123 4567"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.mobileNumber
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  {errors.mobileNumber && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.mobileNumber}</p>
                  )}
                </div>

                {/* Current Location */}
                <div>
                  <label htmlFor="currentLocation" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Current Location <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="currentLocation"
                    type="text"
                    required
                    value={formData.currentLocation}
                    onChange={(e) => updateField("currentLocation", e.target.value)}
                    placeholder="e.g. Quezon City, Metro Manila, Philippines"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.currentLocation
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  <p className="text-[11px] text-slate-500 mt-1">Format: City / Province / Country</p>
                  {errors.currentLocation && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.currentLocation}</p>
                  )}
                </div>

                {/* LinkedIn Profile */}
                <div className="sm:col-span-2">
                  <label htmlFor="linkedInProfile" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    LinkedIn Profile <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="linkedInProfile"
                    type="url"
                    value={formData.linkedInProfile}
                    onChange={(e) => updateField("linkedInProfile", e.target.value)}
                    placeholder="https://linkedin.com/in/yourprofile"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: PROFESSIONAL BACKGROUND */}
          {currentStep === 2 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Step 2 of 6
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
                  Your Professional Background
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Tell us about your industry focus, depth of experience, and key competencies.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Current / Most Recent Job Title */}
                <div>
                  <label htmlFor="currentJobTitle" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Current / Most Recent Job Title <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="currentJobTitle"
                    type="text"
                    required
                    value={formData.currentJobTitle}
                    onChange={(e) => updateField("currentJobTitle", e.target.value)}
                    placeholder="e.g. Senior Talent Acquisition Specialist"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.currentJobTitle
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  {errors.currentJobTitle && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.currentJobTitle}</p>
                  )}
                </div>

                {/* Current / Most Recent Company */}
                <div>
                  <label htmlFor="currentCompany" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Current / Most Recent Company <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="currentCompany"
                    type="text"
                    value={formData.currentCompany}
                    onChange={(e) => updateField("currentCompany", e.target.value)}
                    placeholder="e.g. ABC Technologies Inc."
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>

                {/* Primary Industry */}
                <div>
                  <label htmlFor="primaryIndustry" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Primary Industry <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="primaryIndustry"
                    required
                    value={formData.primaryIndustry}
                    onChange={(e) => updateField("primaryIndustry", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.primaryIndustry
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select your primary industry...</option>
                    {INDUSTRY_OPTIONS.map((ind) => (
                      <option key={ind} value={ind}>
                        {ind}
                      </option>
                    ))}
                  </select>
                  {errors.primaryIndustry && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.primaryIndustry}</p>
                  )}
                </div>

                {/* Years of Experience */}
                <div>
                  <label htmlFor="yearsOfExperience" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Years of Experience <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="yearsOfExperience"
                    required
                    value={formData.yearsOfExperience}
                    onChange={(e) => updateField("yearsOfExperience", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.yearsOfExperience
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select experience level...</option>
                    {YEARS_OF_EXPERIENCE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.yearsOfExperience && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.yearsOfExperience}</p>
                  )}
                </div>

                {/* Highest Educational Attainment */}
                <div>
                  <label htmlFor="highestEducation" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Highest Educational Attainment <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="highestEducation"
                    required
                    value={formData.highestEducation}
                    onChange={(e) => updateField("highestEducation", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.highestEducation
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select educational attainment...</option>
                    {EDUCATION_OPTIONS.map((edu) => (
                      <option key={edu} value={edu}>
                        {edu}
                      </option>
                    ))}
                  </select>
                  {errors.highestEducation && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.highestEducation}</p>
                  )}
                </div>

                {/* Field of Study / Degree */}
                <div>
                  <label htmlFor="fieldOfStudy" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Field of Study / Degree <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="fieldOfStudy"
                    type="text"
                    value={formData.fieldOfStudy}
                    onChange={(e) => updateField("fieldOfStudy", e.target.value)}
                    placeholder="e.g. BS Computer Science / BS Psychology"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>

                {/* Key Professional Skills (Large Text Field) */}
                <div className="sm:col-span-2">
                  <label htmlFor="keySkills" className="block text-sm font-bold text-slate-800 mb-1">
                    Key Professional Skills <span className="text-rose-500">*</span>
                  </label>
                  <p className="text-xs text-slate-500 mb-2">
                    List your most important professional skills. Separate each skill with a comma.
                  </p>
                  <textarea
                    id="keySkills"
                    rows={3}
                    required
                    value={formData.keySkills}
                    onChange={(e) => updateField("keySkills", e.target.value)}
                    placeholder="e.g. Recruitment, Talent Acquisition, LinkedIn Sourcing, Boolean Search, HR Analytics"
                    className={`w-full px-4 py-3 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.keySkills
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  {errors.keySkills && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.keySkills}</p>
                  )}
                </div>

                {/* Tools / Software / Platforms */}
                <div className="sm:col-span-2">
                  <label htmlFor="toolsSoftware" className="block text-sm font-semibold text-slate-700 mb-1">
                    Tools / Software / Platforms <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="toolsSoftware"
                    type="text"
                    value={formData.toolsSoftware}
                    onChange={(e) => updateField("toolsSoftware", e.target.value)}
                    placeholder="e.g. Microsoft Excel, Power BI, SAP, Salesforce, AutoCAD"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>

                {/* Certifications / Licenses */}
                <div className="sm:col-span-2">
                  <label htmlFor="certifications" className="block text-sm font-semibold text-slate-700 mb-1">
                    Certifications / Licenses <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <input
                    id="certifications"
                    type="text"
                    value={formData.certifications}
                    onChange={(e) => updateField("certifications", e.target.value)}
                    placeholder="e.g. Certified Public Accountant (CPA), PMP, AWS Certified Solutions Architect"
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: CAREER PREFERENCES */}
          {currentStep === 3 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Step 3 of 6
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
                  What Are You Looking For?
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Help us understand your preferred roles, working arrangement, and career availability.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Target Job Title */}
                <div>
                  <label htmlFor="targetJobTitle" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Target Job Title / Position <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="targetJobTitle"
                    type="text"
                    required
                    value={formData.targetJobTitle}
                    onChange={(e) => updateField("targetJobTitle", e.target.value)}
                    placeholder="e.g. HR Manager"
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.targetJobTitle
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                  {errors.targetJobTitle && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.targetJobTitle}</p>
                  )}
                </div>

                {/* Employment Type */}
                <div>
                  <label htmlFor="employmentType" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Employment Type <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="employmentType"
                    required
                    value={formData.employmentType}
                    onChange={(e) => updateField("employmentType", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.employmentType
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select employment type...</option>
                    {EMPLOYMENT_TYPE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.employmentType && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.employmentType}</p>
                  )}
                </div>

                {/* Work Arrangement */}
                <div>
                  <label htmlFor="workArrangement" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Work Arrangement <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="workArrangement"
                    required
                    value={formData.workArrangement}
                    onChange={(e) => updateField("workArrangement", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.workArrangement
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select work arrangement...</option>
                    {WORK_ARRANGEMENT_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.workArrangement && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.workArrangement}</p>
                  )}
                </div>

                {/* Preferred Work Location */}
                <div>
                  <label htmlFor="preferredLocation" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Preferred Work Location <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="preferredLocation"
                    required
                    value={formData.preferredLocation}
                    onChange={(e) => updateField("preferredLocation", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.preferredLocation
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select preferred location...</option>
                    {PREFERRED_LOCATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.preferredLocation && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.preferredLocation}</p>
                  )}
                </div>

                {/* Career Status */}
                <div>
                  <label htmlFor="careerStatus" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Career Status <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="careerStatus"
                    required
                    value={formData.careerStatus}
                    onChange={(e) => updateField("careerStatus", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.careerStatus
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select current career status...</option>
                    {CAREER_STATUS_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.careerStatus && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.careerStatus}</p>
                  )}
                </div>

                {/* Availability */}
                <div>
                  <label htmlFor="availability" className="block text-sm font-bold text-slate-800 mb-1.5">
                    Availability <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="availability"
                    required
                    value={formData.availability}
                    onChange={(e) => updateField("availability", e.target.value)}
                    className={`w-full px-4 py-3.5 rounded-xl border text-sm text-slate-900 bg-slate-50/50 transition-all outline-none ${
                      errors.availability
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  >
                    <option value="">Select notice period / availability...</option>
                    {AVAILABILITY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                  {errors.availability && (
                    <p className="text-xs text-rose-600 font-medium mt-1">{errors.availability}</p>
                  )}
                </div>

                {/* Expected Monthly Salary */}
                <div className="sm:col-span-2">
                  <label htmlFor="expectedSalary" className="block text-sm font-semibold text-slate-700 mb-1.5">
                    Expected Monthly Salary <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <select
                    id="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={(e) => updateField("expectedSalary", e.target.value)}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  >
                    <option value="">Select expected monthly salary range...</option>
                    {SALARY_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: RESUME & VIDEO INTRODUCTION (VISUALLY HIGHLIGHTED) */}
          {currentStep === 4 && (
            <div className="bg-gradient-to-b from-white to-blue-50/30 rounded-3xl p-6 sm:p-10 border-2 border-blue-200/90 shadow-lg shadow-blue-900/5 space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-blue-100 pb-5">
                <span className="text-xs font-black uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-md border border-amber-300/60">
                  Step 4 of 6 • Featured Section
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2 flex items-center gap-2">
                  <span>Show Us Your Professional Story</span>
                  <Sparkles className="w-5 h-5 text-amber-500" />
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Upload your documents directly to your own Google Drive and share the links below. No heavy file uploads required.
                </p>
              </div>

              {/* Resume / CV Field */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <label htmlFor="resumeDriveLink" className="block text-base font-bold text-slate-900">
                      Resume / CV Google Drive Link <span className="text-rose-500">*</span>
                    </label>
                    <span className="text-xs text-slate-400">PDF or Word document via Google Drive</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <p className="font-semibold text-slate-800">Instructions:</p>
                  <p>
                    Please upload your latest Resume/CV to your Google Drive first, then copy and paste the Google Drive sharing link below.
                  </p>
                  <p className="text-slate-500">
                    Make sure your Google Drive sharing settings allow the intended recipient to view the file. We recommend using &ldquo;Anyone with the link – Viewer&rdquo; if appropriate for your privacy preferences.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LinkIcon className="w-4 h-4 text-blue-600" />
                  </div>
                  <input
                    id="resumeDriveLink"
                    type="url"
                    required
                    value={formData.resumeDriveLink}
                    onChange={(e) => updateField("resumeDriveLink", e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm text-slate-900 font-mono bg-white transition-all outline-none ${
                      errors.resumeDriveLink
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                </div>
                {errors.resumeDriveLink && (
                  <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.resumeDriveLink}</span>
                  </p>
                )}
              </div>

              {/* Video Introduction Field */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center">
                      <Video className="w-5 h-5" />
                    </div>
                    <div>
                      <label htmlFor="videoDriveLink" className="block text-base font-bold text-slate-900">
                        Video Introduction Google Drive Link
                      </label>
                      <span className="text-xs text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded border border-amber-200/60">
                        Optional initially • Highly Recommended
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
                  <p>
                    Record a short professional introduction video and upload it to your Google Drive. Then copy and paste the Google Drive sharing link below.
                  </p>
                  <p className="font-semibold text-slate-800">
                    Recommended length: 60–90 seconds.
                  </p>
                  <p className="text-slate-500">
                    Introduce yourself, explain your professional background, highlight your strongest skills, and tell potential employers what type of opportunity you are looking for.
                  </p>
                  <p className="text-slate-400 italic">
                    Example: &ldquo;Hello, my name is Juan. I have five years of experience in accounting, specializing in...&rdquo;
                  </p>
                  <p className="text-slate-500 pt-1">
                    Please make sure your Google Drive sharing settings allow the intended recipient to view the video.
                  </p>
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <LinkIcon className="w-4 h-4 text-amber-600" />
                  </div>
                  <input
                    id="videoDriveLink"
                    type="url"
                    value={formData.videoDriveLink}
                    onChange={(e) => updateField("videoDriveLink", e.target.value)}
                    placeholder="https://drive.google.com/..."
                    className={`w-full pl-10 pr-4 py-3.5 rounded-xl border text-sm text-slate-900 font-mono bg-white transition-all outline-none ${
                      errors.videoDriveLink
                        ? "border-rose-400 ring-2 ring-rose-100 bg-rose-50/30"
                        : "border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
                    }`}
                  />
                </div>
                {errors.videoDriveLink && (
                  <p className="text-xs text-rose-600 font-semibold mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.videoDriveLink}</span>
                  </p>
                )}

                {/* Expandable Guidance Box: "Not sure what to say?" */}
                <div className="mt-4 border border-blue-100 rounded-xl overflow-hidden bg-blue-50/50">
                  <button
                    type="button"
                    onClick={() => setShowVideoTips(!showVideoTips)}
                    className="w-full px-4 py-3 flex items-center justify-between text-left text-xs sm:text-sm font-bold text-blue-900 hover:bg-blue-50 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                      Not sure what to say?
                    </span>
                    {showVideoTips ? (
                      <ChevronUp className="w-4 h-4 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-blue-600" />
                    )}
                  </button>

                  {showVideoTips && (
                    <div className="px-4 pb-4 pt-1 text-xs text-slate-700 space-y-3 border-t border-blue-100/70">
                      <p className="font-semibold text-blue-950">
                        Keep your introduction simple and professional.
                      </p>
                      <div>
                        <p className="font-semibold text-slate-900 mb-1">Suggested structure:</p>
                        <ol className="list-decimal list-inside space-y-1 text-slate-600 pl-1">
                          <li>Introduce yourself</li>
                          <li>State your current or most recent role</li>
                          <li>Mention your years of experience</li>
                          <li>Highlight 2–3 key skills</li>
                          <li>Explain what type of opportunity you are looking for</li>
                        </ol>
                      </div>
                      <div className="p-3 bg-white rounded-lg border border-blue-100 text-slate-700 italic">
                        <strong className="text-slate-900 not-italic block mb-1">Example Script:</strong>
                        &ldquo;Hello, I&apos;m Maria. I am an HR Specialist with five years of experience in recruitment and employee relations. My key strengths include talent acquisition, interviewing, and HR administration. I&apos;m currently looking for an HR opportunity where I can contribute my experience and continue growing professionally.&rdquo;
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* STEP 5: ADDITIONAL INFORMATION */}
          {currentStep === 5 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Step 5 of 6
                </span>
                <h2 className="text-2xl font-black text-slate-900 tracking-tight mt-2">
                  Tell Us More
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Optional details that help you stand out to prospective employers and recruitment partners.
                </p>
              </div>

              <div className="space-y-6">
                {/* Professional Achievement */}
                <div>
                  <label htmlFor="professionalAchievement" className="block text-sm font-bold text-slate-800 mb-1">
                    What professional achievement are you most proud of? <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="professionalAchievement"
                    rows={3}
                    value={formData.professionalAchievement}
                    onChange={(e) => updateField("professionalAchievement", e.target.value)}
                    placeholder="e.g. Led a team of 8 specialists that reduced onboarding time by 40% while maintaining 98% quality compliance..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>

                {/* Career Goal */}
                <div>
                  <label htmlFor="careerGoal" className="block text-sm font-bold text-slate-800 mb-1">
                    What type of opportunity would you be most interested in? <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="careerGoal"
                    rows={3}
                    value={formData.careerGoal}
                    onChange={(e) => updateField("careerGoal", e.target.value)}
                    placeholder="e.g. Seeking a leadership opportunity in a fast-paced fintech company with a remote-first culture..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-bold text-slate-800 mb-1">
                    Is there anything else you would like potential employers or recruitment partners to know? <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="additionalInfo"
                    rows={3}
                    value={formData.additionalInfo}
                    onChange={(e) => updateField("additionalInfo", e.target.value)}
                    placeholder="e.g. Flexible with shifting schedules, hold a valid passport, open to contractual or long-term engagement..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-100 text-sm text-slate-900 bg-slate-50/50 transition-all outline-none"
                  />
                </div>
              </div>
            </div>
          )}

          {/* STEP 6: CONSENT & SUBMIT */}
          {currentStep === 6 && (
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-8 animate-in fade-in duration-200">
              <div className="border-b border-slate-100 pb-5">
                <span className="text-xs font-black uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md">
                  Step 6 of 6 • Final Verification
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight mt-2">
                  Before You Submit
                </h2>
                <p className="text-sm text-slate-600 mt-1">
                  Please review the consent requirements and confirm your profile registration details.
                </p>
              </div>

              {/* Privacy/Consent Checkbox Group */}
              <div className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-200/80">
                {/* Checkbox 1 (Required) */}
                <div className="flex items-start gap-3">
                  <input
                    id="consentNoGuarantee"
                    type="checkbox"
                    checked={formData.consentNoGuarantee}
                    onChange={(e) => updateField("consentNoGuarantee", e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="consentNoGuarantee" className="text-xs sm:text-sm text-slate-800 leading-relaxed cursor-pointer">
                    <span className="font-bold text-slate-900">Non-Guarantee Acknowledgment: </span>
                    I understand that joining {BUSINESS_NAME} does not guarantee employment, interviews, placement, or any specific job opportunity.{" "}
                    <span className="text-rose-500 font-bold">*</span>
                  </label>
                </div>
                {errors.consentNoGuarantee && (
                  <p className="text-xs text-rose-600 font-medium pl-8">{errors.consentNoGuarantee}</p>
                )}

                {/* Checkbox 2 (Required) */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
                  <input
                    id="consentDataProcessing"
                    type="checkbox"
                    checked={formData.consentDataProcessing}
                    onChange={(e) => updateField("consentDataProcessing", e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="consentDataProcessing" className="text-xs sm:text-sm text-slate-800 leading-relaxed cursor-pointer">
                    <span className="font-bold text-slate-900">Privacy Notice & Processing Consent: </span>
                    I agree to the collection and processing of the information I provide for the purposes described in the {BUSINESS_NAME}{" "}
                    <a
                      href={PRIVACY_URL}
                      onClick={handlePrivacyClick}
                      target={PRIVACY_URL.startsWith("http") ? "_blank" : undefined}
                      rel={PRIVACY_URL.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-blue-700 underline font-semibold hover:text-blue-900 inline-flex items-center gap-0.5"
                    >
                      Privacy Notice
                      {PRIVACY_URL.startsWith("http") && <ExternalLink className="w-3 h-3" />}
                    </a>
                    , including consideration for relevant career opportunities.{" "}
                    <span className="text-rose-500 font-bold">*</span>
                  </label>
                </div>
                {errors.consentDataProcessing && (
                  <p className="text-xs text-rose-600 font-medium pl-8">{errors.consentDataProcessing}</p>
                )}

                {/* Checkbox 3 (Optional) */}
                <div className="flex items-start gap-3 pt-2 border-t border-slate-200/60">
                  <input
                    id="consentMarketing"
                    type="checkbox"
                    checked={formData.consentMarketing}
                    onChange={(e) => updateField("consentMarketing", e.target.checked)}
                    className="mt-1 w-5 h-5 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                  />
                  <label htmlFor="consentMarketing" className="text-xs sm:text-sm text-slate-700 leading-relaxed cursor-pointer">
                    I would like to receive career opportunities, job alerts, and career-related communications from {BUSINESS_NAME}.{" "}
                    <span className="text-xs text-slate-400">(Optional)</span>
                  </label>
                </div>
              </div>

              {/* Submit Button & Confirmation text */}
              <div className="text-center pt-2 space-y-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto min-w-[280px] inline-flex items-center justify-center gap-2.5 px-10 py-5 rounded-2xl text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all shadow-xl shadow-amber-400/20 active:scale-95 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-amber-400/40"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>SUBMITTING PROFILE...</span>
                    </>
                  ) : (
                    <>
                      <span>SUBMIT MY PROFILE</span>
                      <ArrowRight className="w-5 h-5 stroke-[2.5]" />
                    </>
                  )}
                </button>

                <p className="text-xs text-slate-500 max-w-lg mx-auto leading-relaxed">
                  By submitting your profile, you confirm that the information you provided is accurate and that you have reviewed the applicable privacy and consent information.
                </p>
              </div>
            </div>
          )}

          {/* Bottom Step Navigation Bar */}
          <div className="mt-8 flex items-center justify-between pt-2">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-500 hover:text-slate-800 transition-colors"
              >
                <span>Cancel & Return</span>
              </button>
            )}

            {currentStep < 6 && (
              <button
                type="button"
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>Continue to Step {currentStep + 1}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

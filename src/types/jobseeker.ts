export interface JobseekerFormData {
  // Step 1: Basic Information
  fullName: string;
  preferredName: string;
  email: string;
  mobileNumber: string;
  currentLocation: string;
  linkedInProfile: string;

  // Step 2: Professional Background
  currentJobTitle: string;
  currentCompany: string;
  primaryIndustry: string;
  yearsOfExperience: string;
  highestEducation: string;
  fieldOfStudy: string;
  keySkills: string;
  toolsSoftware: string;
  certifications: string;

  // Step 3: Career Preferences
  targetJobTitle: string;
  employmentType: string;
  workArrangement: string;
  preferredLocation: string;
  careerStatus: string;
  availability: string;
  expectedSalary: string;

  // Step 4: Resume & Video Introduction
  resumeDriveLink: string;
  videoDriveLink: string;

  // Step 5: Additional Information
  professionalAchievement: string;
  careerGoal: string;
  additionalInfo: string;

  // Step 6: Consent & Privacy
  consentNoGuarantee: boolean;
  consentDataProcessing: boolean;
  consentMarketing: boolean;
}

export const INITIAL_FORM_DATA: JobseekerFormData = {
  fullName: "",
  preferredName: "",
  email: "",
  mobileNumber: "",
  currentLocation: "",
  linkedInProfile: "",

  currentJobTitle: "",
  currentCompany: "",
  primaryIndustry: "",
  yearsOfExperience: "",
  highestEducation: "",
  fieldOfStudy: "",
  keySkills: "",
  toolsSoftware: "",
  certifications: "",

  targetJobTitle: "",
  employmentType: "",
  workArrangement: "",
  preferredLocation: "",
  careerStatus: "",
  availability: "",
  expectedSalary: "",

  resumeDriveLink: "",
  videoDriveLink: "",

  professionalAchievement: "",
  careerGoal: "",
  additionalInfo: "",

  consentNoGuarantee: false,
  consentDataProcessing: false,
  consentMarketing: false,
};

export const INDUSTRY_OPTIONS = [
  "IT & Technology",
  "Finance & Accounting",
  "Human Resources",
  "Engineering",
  "Construction",
  "Sales",
  "Marketing",
  "Customer Service / BPO",
  "Healthcare",
  "Education",
  "Operations",
  "Logistics & Supply Chain",
  "Manufacturing",
  "Hospitality & Tourism",
  "Retail",
  "Banking / Financial Services",
  "Government / Public Sector",
  "Media & Communications",
  "Real Estate",
  "Energy / Utilities",
  "Telecommunications",
  "Professional Services",
  "Skilled Trades",
  "Other",
] as const;

export const YEARS_OF_EXPERIENCE_OPTIONS = [
  "Less than 1 year",
  "1–2 years",
  "3–5 years",
  "6–10 years",
  "11–15 years",
  "16–20 years",
  "20+ years",
] as const;

export const EDUCATION_OPTIONS = [
  "Bachelor's Degree",
  "Master's Degree",
  "Doctorate / PhD",
  "Post-Graduate Diploma",
  "Associate Degree",
  "Vocational / Technical Certification",
  "College Undergraduate",
  "Senior High School Diploma",
  "High School Diploma",
  "Other",
] as const;

export const EMPLOYMENT_TYPE_OPTIONS = [
  "Full-time",
  "Part-time",
  "Contract",
  "Project-based",
  "Freelance",
  "Consulting",
  "Open to opportunities",
] as const;

export const WORK_ARRANGEMENT_OPTIONS = [
  "On-site",
  "Hybrid",
  "Remote",
  "Open to all",
] as const;

export const PREFERRED_LOCATION_OPTIONS = [
  "My current location",
  "Anywhere in the Philippines",
  "Metro Manila",
  "Other Philippine locations",
  "Remote",
  "International / Overseas",
  "Open to relocation",
  "Open to opportunities",
] as const;

export const CAREER_STATUS_OPTIONS = [
  "Actively looking for a job",
  "Open to the right opportunity",
  "Currently employed but exploring",
  "Not currently looking",
] as const;

export const AVAILABILITY_OPTIONS = [
  "Immediately",
  "Within 1 week",
  "Within 2 weeks",
  "Within 1 month",
  "1–3 months",
  "More than 3 months",
  "Not currently looking",
] as const;

export const SALARY_OPTIONS = [
  "Below ₱20,000",
  "₱20,000–₱29,999",
  "₱30,000–₱39,999",
  "₱40,000–₱49,999",
  "₱50,000–₱59,999",
  "₱60,000–₱79,999",
  "₱80,000–₱99,999",
  "₱100,000+",
  "Prefer not to say",
  "Open to discussion",
] as const;

/**
 * Validates Google Drive URL format
 */
export function isValidGoogleDriveUrl(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  const trimmed = url.trim().toLowerCase();
  return (
    trimmed.startsWith("https://drive.google.com/") ||
    trimmed.startsWith("http://drive.google.com/") ||
    trimmed.startsWith("drive.google.com/")
  );
}

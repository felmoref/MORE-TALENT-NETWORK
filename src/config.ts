/**
 * MORE TALENT NETWORK - Site Configuration
 * 
 * Update these central configuration variables here.
 * Any changes made in this file will automatically propagate throughout the entire website.
 */

// Form Submission Endpoint (e.g., Google Apps Script, Supabase, Airtable, Firebase, or custom webhook)
// When left empty (""), the website operates in transparent Demo Mode.
export const FORM_SUBMISSION_ENDPOINT: string = "";

// Brand details
export const BUSINESS_NAME: string = "MORE TALENT NETWORK";
export const TAGLINE: string = "Connecting Filipino Talent with Opportunity";

// Contact & Social channels
export const BUSINESS_EMAIL: string = "fflores1@byupathway.edu";
export const FACEBOOK_URL: string = "https://facebook.com/REPLACE_WITH_PAGE_URL";

// Privacy policy link (set to "#" or custom URL; if "#", opens an in-page modal/drawer)
export const PRIVACY_URL: string = "#";

// Navigation links config
export const NAV_LINKS = [
  { id: "home", label: "HOME", href: "#home" },
  { id: "jobseeker", label: "JOBSEEKER", href: "#jobseeker", isHighlighted: true },
  { id: "employers", label: "EMPLOYERS", href: "#for-employers" },
  { id: "partners", label: "RECRUITMENT PARTNERS", href: "#partners" },
  { id: "about", label: "ABOUT", href: "#about" },
] as const;

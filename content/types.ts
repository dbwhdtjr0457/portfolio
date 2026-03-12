export type LinkStatus = "confirmed" | "needs_check";
export type LinkPlacement = "intro" | "footer";
export type NavigationVisibility = "active" | "conditional";
export type CtaVariant = "primary" | "secondary";
export type EntryKind = "experience" | "project";
export type RecommendedPlacement = "experience" | "project" | "optional-section";

export type SiteMetadataContent = {
  siteName: string;
  title: string;
  description: string;
  lang: "ko";
  locale: "ko-KR";
};

export type NavigationItem = {
  id: string;
  label: string;
  href: string;
  visibility: NavigationVisibility;
};

export type ExternalLink = {
  id: string;
  label: string;
  href: string;
  description: string;
  status: LinkStatus;
  placement: LinkPlacement;
};

export type CtaItem = {
  id: string;
  label: string;
  href: string;
  variant: CtaVariant;
};

export type IntroContent = {
  name: string;
  role: string;
  headline: string;
  description: string[];
  primaryLinkIds: string[];
  ctas: CtaItem[];
};

export type SummaryItem = {
  id: string;
  title: string;
  description: string;
};

export type EntrySubItem = {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  note?: string;
};

export type PortfolioEntryBase = {
  id: string;
  kind: EntryKind;
  name: string;
  headline: string;
  role: string;
  summary: string;
  description: string;
  highlights: string[];
  techStack: string[];
  links: ExternalLink[];
  note?: string;
};

export type Experience = PortfolioEntryBase & {
  kind: "experience";
  period: string;
  collaboration: string[];
  subItems: EntrySubItem[];
};

export type Project = PortfolioEntryBase & {
  kind: "project";
  projectType: string;
  period?: string;
  featuredReason?: string;
};

export type SkillGroup = {
  id: string;
  category: string;
  description: string;
  items: string[];
};

export type EducationContent = {
  school: string;
  college: string;
  major: string;
  degree: string;
  period: string;
  track: string;
  credits: string;
  score: string;
  coursework: string[];
  trainings: CredentialItem[];
  certifications: CredentialItem[];
  language: CredentialItem[];
};

export type ActivityHighlight = {
  id: string;
  title: string;
  description: string;
  source: string;
  relatedEntryId: string;
  recommendedPlacement: RecommendedPlacement;
};

export type CredentialItem = {
  id: string;
  title: string;
  detail: string;
};

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  detail?: string;
};

export type ActivitySummary = {
  id: string;
  title: string;
  description: string;
  source: string;
};

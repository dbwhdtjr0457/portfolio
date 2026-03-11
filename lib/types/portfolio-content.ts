export type HomeSectionId =
  | "hero"
  | "positioning"
  | "featured-cases"
  | "additional-projects"
  | "collaboration"
  | "about"
  | "proof-links";

export interface SiteIdentity {
  name: string;
  nickname: string;
  email: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  keywords: string[];
}

export interface HomeSection {
  id: HomeSectionId;
  title: string;
  description: string;
}

export interface NavigationItem extends HomeSection {
  label: string;
  shortLabel: string;
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  nickname: string;
  role: string;
  positioning: string;
  supportingPoints: string[];
}

export interface HighlightItem {
  title: string;
  description: string;
}

export interface EvidenceLink {
  label: string;
  href: string;
  type: "github" | "email";
}

export interface ProjectEntryBase {
  slug: string;
  title: string;
  organization: string;
  role: string;
  summary: string;
  context: string;
  tech: string[];
  evidenceLinks: EvidenceLink[];
  notes: string[];
}

export interface FeaturedCase extends ProjectEntryBase {
  problem: string[];
  goal: string[];
  risks: string[];
  decisions: string[];
  contributions: string[];
  outcomes: string[];
}

export interface AdditionalProject extends ProjectEntryBase {
  highlights: string[];
}

export interface StrengthPattern {
  title: string;
  description: string;
}

export interface CollaborationEvidence {
  title: string;
  summary: string;
  proofType: string;
}

export interface WorkStyleContent {
  primaryPositioning: string;
  secondaryPositionings: string[];
  workingPrinciples: string[];
  strengthPatterns: StrengthPattern[];
  collaborationEvidence: CollaborationEvidence[];
}

export interface EducationRecord {
  school: string;
  major: string;
  degree: string;
  score: string;
  relatedCoursework: string[];
}

export interface CredentialRecord {
  title: string;
  detail: string;
}

export interface LanguageRecord {
  title: string;
  detail: string;
}

export interface TechGroup {
  title: string;
  items: string[];
}

export interface FormalSpecsContent {
  education: EducationRecord;
  certifications: CredentialRecord[];
  languages: LanguageRecord[];
  coreTechGroups: TechGroup[];
}

export interface LinksContent {
  contacts: EvidenceLink[];
  proofLinks: EvidenceLink[];
  notes: string[];
}

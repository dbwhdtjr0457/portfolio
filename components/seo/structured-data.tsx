import { contactItems, introContent, siteMetadata, skills } from "@/content";
import { getAbsoluteUrl } from "@/lib/site-url";

type OrganizationJsonLd = {
  "@type": "CollegeOrUniversity";
  name: string;
};

type WebsiteJsonLd = {
  "@type": "WebSite";
  "@id": string;
  name: string;
  url: string;
  description: string;
  inLanguage: string;
};

type PersonJsonLd = {
  "@type": "Person";
  "@id": string;
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  email?: string;
  sameAs?: string[];
  alumniOf: OrganizationJsonLd;
  knowsAbout: string[];
};

type GraphJsonLd = {
  "@context": "https://schema.org";
  "@graph": [WebsiteJsonLd, PersonJsonLd];
};

function getContactValue(id: string) {
  return contactItems.find((item) => item.id === id);
}

export function StructuredData() {
  const websiteId = getAbsoluteUrl("/#website");
  const personId = getAbsoluteUrl("/#person");
  const siteUrl = getAbsoluteUrl("/");
  const githubProfile = getContactValue("github-profile");
  const email = getContactValue("email");
  const knowsAbout = Array.from(new Set(skills.flatMap((group) => group.items)));

  const person: PersonJsonLd = {
    "@type": "Person",
    "@id": personId,
    name: introContent.name,
    jobTitle: introContent.role,
    description: siteMetadata.description,
    url: siteUrl,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "경희대학교",
    },
    knowsAbout,
  };

  if (email?.value) {
    person.email = email.value;
  }

  if (githubProfile?.href) {
    person.sameAs = [githubProfile.href];
  }

  const data: GraphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": websiteId,
        name: siteMetadata.siteName,
        url: siteUrl,
        description: siteMetadata.description,
        inLanguage: siteMetadata.locale,
      },
      person,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

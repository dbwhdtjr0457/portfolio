import { contactContent, introContent, siteMetadata, skills } from "@/content";
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
  email: string;
  alumniOf: OrganizationJsonLd;
  knowsAbout: string[];
};

type GraphJsonLd = {
  "@context": "https://schema.org";
  "@graph": [WebsiteJsonLd, PersonJsonLd];
};

export function StructuredData() {
  const websiteId = getAbsoluteUrl("/#website");
  const personId = getAbsoluteUrl("/#person");
  const siteUrl = getAbsoluteUrl("/");
  const knowsAbout = Array.from(new Set(skills.flatMap((group) => group.items)));

  const person: PersonJsonLd = {
    "@type": "Person",
    "@id": personId,
    name: introContent.name,
    jobTitle: introContent.role,
    description: siteMetadata.description,
    url: siteUrl,
    email: contactContent.email,
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "경희대학교",
    },
    knowsAbout,
  };

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

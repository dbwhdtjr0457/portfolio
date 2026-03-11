const localSiteUrl = "http://localhost:3000";

function resolveSiteUrl() {
  const candidate =
    process.env.NEXT_PUBLIC_SITE_URL ??
    process.env.URL ??
    process.env.DEPLOY_PRIME_URL ??
    process.env.DEPLOY_URL ??
    localSiteUrl;

  return new URL(candidate);
}

export function getSiteUrl() {
  return resolveSiteUrl();
}

export function getAbsoluteUrl(path: string) {
  return new URL(path, resolveSiteUrl()).toString();
}

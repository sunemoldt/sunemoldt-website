// Lightweight SEO helper — sets title, description, canonical and OG tags.
// Use inside a useEffect on each page.

type SeoOptions = {
  title: string;
  description: string;
  path: string; // e.g. "/", "/om", "/kontakt"
};

const SITE_URL = "https://moldtconsulting.dk";

const upsertMeta = (selector: string, attr: "name" | "property", key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
};

const upsertCanonical = (href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
};

export const setSeo = ({ title, description, path }: SeoOptions) => {
  const url = `${SITE_URL}${path}`;
  document.title = title;

  upsertMeta('meta[name="description"]', "name", "description", description);
  upsertCanonical(url);

  upsertMeta('meta[property="og:title"]', "property", "og:title", title);
  upsertMeta('meta[property="og:description"]', "property", "og:description", description);
  upsertMeta('meta[property="og:url"]', "property", "og:url", url);
  upsertMeta('meta[property="og:type"]', "property", "og:type", "website");

  upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
  upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title);
  upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
};

import { useEffect } from "react";

const setAttributes = (node, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    if (value === undefined || value === null) return;
    node.setAttribute(key, value);
  });
};

const upsertHeadNode = (selector, tagName, attributes) => {
  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement(tagName);
    document.head.appendChild(node);
  }

  setAttributes(node, attributes);
  return node;
};

export function usePageMeta({
  title,
  lang,
  description,
  keywords,
  canonical,
  alternates = [],
  openGraph = {},
}) {
  useEffect(() => {
    if (lang) {
      document.documentElement.lang = lang;
    }

    if (title) {
      document.title = title;
    }

    if (description) {
      upsertHeadNode('meta[name="description"]', "meta", {
        name: "description",
        content: description,
      });
    }

    if (keywords) {
      upsertHeadNode('meta[name="keywords"]', "meta", {
        name: "keywords",
        content: keywords,
      });
    }

    if (canonical) {
      upsertHeadNode('link[rel="canonical"]', "link", {
        rel: "canonical",
        href: canonical,
      });
    }

    document.head
      .querySelectorAll('link[rel="alternate"][hreflang]')
      .forEach((node) => node.remove());

    alternates.forEach(({ hrefLang, href }) => {
      const node = document.createElement("link");
      setAttributes(node, {
        rel: "alternate",
        hreflang: hrefLang,
        href,
      });
      document.head.appendChild(node);
    });

    Object.entries(openGraph).forEach(([property, content]) => {
      upsertHeadNode(`meta[property="${property}"]`, "meta", {
        property,
        content,
      });
    });
  }, [title, lang, description, keywords, canonical, alternates, openGraph]);
}

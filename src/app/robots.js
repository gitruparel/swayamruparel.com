export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [],
      },
    ],
    sitemap: "https://swayamruparel.com/sitemap.xml",
    host: "https://swayamruparel.com",
  };
}

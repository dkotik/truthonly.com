import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import astroI18next from "astro-i18next";
import mdx from "@astrojs/mdx";
import svelte from "@astrojs/svelte";
// const target = "docs";
// https://astro.build/config
// legacy: { // this may be required for ESM import to work in regular markdown
//     astroFlavoredMarkdown: true,
// },

// https://astro.build/config
export default defineConfig({
  site: "https://truthonly.com",
  // base: '/docs',
  // outDir: target,
  publicDir: "src/public",
  // trailingSlash: "never",
  server: {
    port: 8081
  },
  build: {
    format: "file"
  },
  integrations: [astroI18next(), // playformInline({ // inline CSS for faster load
  robotsTxt({
    sitemapBaseFileName: "sitemap-index",
    // default 'sitemap-index'
    policy: [
      // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 10,
        // cleanParam: "ref /articles/",
        disallow: ["/assets/"]
      }
    ],
    sitemap: [
      'https://truthonly.com/sitemap-index.xml',
    ],
    // Sitemap: https://<YOUR SITE>/sitemap-index.xml
  }), //   compress: true,
  //   preloadFonts: true,
  //   inlineFonts: false,
  //   mergeStylesheets: true,
  // }),
  // playformCompress({
  // // Exclude: [
  // // 	"File.png",
  // // 	(File: string) =>
  // // 		File === "./Target/Favicon/Image/safari-pinned-tab.svg",
  // // ],
  // CSS: true,
  // HTML: {
  //   "html-minifier-terser": {
  //     removeAttributeQuotes: true
  //   }
  // },
  // Image: true,
  // JavaScript: true,
  // JSON: true,
  // SVG: true
  // })
  sitemap({
    // https://docs.astro.build/en/guides/integrations-guide/sitemap/
    serialize(item) {
      if (/^https\:\/\/truthonly\.com\/ru\/SKIP\/$/.test(item.url)) {
        console.warn(" ! [SKIP] Skipped in sitemap:", item.url);
        return undefined;
      }

      if (/^https\:\/\/truthonly\.com\/.*\/$/.test(item.url)) {
        // ends with slash, but must end in .html
        item.url = item.url.substr(0, item.url.length - 1) + ".html";
      } else if (item.url === "https://truthonly.com/") {
        // don't do anything to the root
      } else {
        item.url += ".html";
      }
      return item;
    },

    i18n: {
      defaultLocale: 'en', // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
      locales: {
        ua: "uk-UA",
        ru: "ru-RU",
        en: "en-US"
      },
    }
    //   entryLimit: 10000,
    //   changefreq: "weekly",
    //   priority: 0.7,
  }), mdx(), svelte()]
});

/*
export default defineConfig({
  site: "https://truthonly.com",
  // base: '/docs',
  // outDir: target,
  publicDir: "src/public",
  // trailingSlash: "never",
  server: {
    port: 8081
  },
  build: {
    format: "file"
  },
  integrations: [
    svelte(),
    astroI18next(),
    // compress({
    //   // path: target,
    //   // logger: 0, // default 2
    //   // css: false,
    //   // html: false,
    //   // js: false,
    //   // img: false,
    //   // svg: false
    // }),
    robotsTxt({
      sitemapBaseFileName: "sitemap-index",
      // default 'sitemap-index'
      policy: [
        // https://github.com/alextim/astro-lib/tree/main/packages/astro-robots-txt#readme
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 10,
          // cleanParam: "ref /articles/",
          disallow: ["/assets/"]
        }
      ]
    }),
    sitemap({
      // https://docs.astro.build/en/guides/integrations-guide/sitemap/
      serialize(item) {
        if (/^https\:\/\/truthonly\.com\/ru\/SKIP\/$/.test(item.url)) {
          console.warn(" ! [SKIP] Skipped in sitemap:", item.url);
          return undefined;
        }

        if (/^https\:\/\/truthonly\.com\/.*\/$/.test(item.url)) {
          // ends with slash, but must end in .html
          item.url = item.url.substr(0, item.url.length - 1) + ".html";
        } else if (item.url === "https://truthonly.com/") {
          // don't do anything to the root
        } else {
          item.url += ".html";
        }

        // console.log(item.url);

        return item;
      },

      i18n: {
        entryLimit: 10000,
        changefreq: "weekly",
        priority: 0.7,
        // lastmod: new Date("2022-02-24"),
        defaultLocale: "uk",
        // All urls that don't contain `es` or `fr` after `site` will be treated as default locale, i.e. `en`
        locales: {
          ua: "uk-UA",
          ru: "ru-RU",
          en: "en-US"
          // The `defaultLocale` value must present in `locales` keys
        }
      }
    })
  ],
  output: "static"
});
 */

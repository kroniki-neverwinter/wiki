// @ts-check

import { createRequire } from "node:module";
import { themes as prismThemes } from "prism-react-renderer";
import "dotenv/config";
import { defaultAppUrls } from "./src/config/urls.js";

const require = createRequire(import.meta.url);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Kroniki Neverwinter",
  tagline: "",
  favicon: "img/KN_logo_min.jpg",
  url: "https://wiki.nwn.net.pl",
  baseUrl: "/",
  projectName: "wiki",
  organizationName: "kroniki-neverwinter",
  trailingSlash: false,
  onBrokenLinks: "throw",
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },
  i18n: {
    defaultLocale: "pl",
    locales: ["pl"],
  },
  customFields: {
    apiUrl: process.env.KN_FORM_API_URL || defaultAppUrls.apiUrl,
    discordAuthUrl:
      process.env.KN_DISCORD_AUTH_URL || defaultAppUrls.discordAuthUrl,
    discordMeUrl: process.env.KN_DISCORD_ME_URL || defaultAppUrls.discordMeUrl,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/kroniki-neverwinter/wiki/tree/main/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME,
        appId: process.env.ALGOLIA_APP_ID,
        placeholder: "Znajdź na stronie...",
        searchParameters: {
          hitsPerPage: 10,
        },
      },
      colorMode: {
        defaultMode: "light",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Kroniki Neverwinter",
        logo: {
          alt: "Kroniki Neverwinter logo",
          src: "img/KN_logo_min.jpg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "wikiSidebar",
            position: "left",
            label: "Wiki",
          },
          {
            to: "/wiedza-o-swiecie",
            label: "Wiedza o świecie",
            position: "left",
          },
          {
            to: "/karta-postaci",
            label: "Karta postaci",
            position: "left",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Info",
            items: [
              {
                label: "Regulamin",
                to: "docs/Podstawowe informacje/Regulamin gry na serwerze",
              },
              {
                label: "Intro",
                to: "docs/category/podstawowe-informacje",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/hvnSa8Wm4J",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Facebook",
                href: "https://www.facebook.com/profile.php?id=100068897737798&locale=pl_PL",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kroniki Neverwinter`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "wiedza-o-swiecie",
        path: "wiedza-o-swiecie",
        routeBasePath: "wiedza-o-swiecie",
        sidebarPath: require.resolve("./sidebarsInfo.js"),
        editUrl: "https://github.com/kroniki-neverwinter/wiki/tree/main/",
        remarkPlugins: [],
        rehypePlugins: [],
      },
    ],
  ],
};

export default config;

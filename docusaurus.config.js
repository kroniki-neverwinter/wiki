// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';
import 'dotenv/config';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kroniki Neverwinter',
  tagline: '',
  favicon: 'img/KN_logo_min.jpg',
  // Set the production url of your site here
  url: 'https://wiki.nwn.net.pl',
  baseUrl: '/',
  projectName: 'wiki', // Usually your repo name.
  organizationName: 'kroniki-neverwinter', // Usually your GitHub org/user name.
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
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
        placeholder: 'Znajdź na stronie...',
        searchParameters: {
          hitsPerPage: 10,
        }
      },
      colorMode: {
        defaultMode: 'light', // Default color mode
        respectPrefersColorScheme: true, // Respect user's system color scheme preference
      },
      navbar: {
        title: 'Main',
        logo: {
          alt: 'My Site Logo',
          src: 'img/KN_logo_min.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'wikiSidebar',
            position: 'left',
            label: 'Wiki',
          },
          { to: '/informacje-o-swiecie', label: 'Informacje o świecie', position: 'left' },
          { to: '/karta-postaci', label: 'Karta postaci', position: 'left' },
        ],
      },
      footer: {
        links: [
          {
            title: 'Info',
            items: [
              {
                label: 'Regulamin',
                to: 'docs/Podstawowe informacje/Regulamin gry na serwerze',
              },
              {
                label: 'Intro',
                to: 'docs/category/podstawowe-informacje',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/qcYHESw34C',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/profile.php?id=100068897737798&locale=pl_PL',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kroniki Neverwinter`,
      },
    }),
};

export default config;

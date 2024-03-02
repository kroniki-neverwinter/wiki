// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kroniki Neverwinter',
  tagline: '',
  favicon: 'img/KN_logo_min.jpg',
  // Set the production url of your site here
  url: 'https://pwierzbieniec.github.io',
  baseUrl: '/neverwinter-nights-wiki/',
  projectName: 'neverwinter-nights-wiki', // Usually your repo name.
  organizationName: 'pwierzbieniec', // Usually your GitHub org/user name.
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
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Main',
        style: 'dark',
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
          {to: '/blog', label: 'Blog', position: 'left'},
        ],
      },
      footer: {
        style: 'dark',
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
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

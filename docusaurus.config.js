// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NOVA34 Documentation',
  tagline: 'Ultra Small Linux Board - Open Source',
  favicon: 'img/favicon.ico',

  url: 'https://your-nova34-site.example.com',
  baseUrl: '/',

  organizationName: 'innovativeboards', // Change this to your GitHub organization or username
  projectName: 'nova34-docs', // Change this to your repository name

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'ignore', // Change to 'warn' if you want to see warnings for broken links

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
          sidebarPath: require.resolve('./sidebars.js'),
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
      navbar: {
        title: 'Home',
        logo: {
          alt: 'NOVA34 Logo',
          src: 'img/logoboard.bmp',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs', // Modifica qui per usare l'ID corretto
            position: 'left',
            label: 'Documentation',
          },
          {
            href: 'https://github.com/your-org/nova34',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Schematics',
                to: '/docs/schematics/cover-block',
              },
             
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/your-org/nova34',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/your-discord-link',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} NOVA34 Project. Built with Docusaurus.`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,  // Disables the toggle switch
      },
    }),
};

export default config;

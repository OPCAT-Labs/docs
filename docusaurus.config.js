// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OP_CAT',
  tagline: 'OP_CAT Docs',
  url: 'https://docs.opcatlabs.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/op_cat_logo.jpg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'opcat-labs', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          id: 'opcat-docs',
          routeBasePath: '/',
          path: './opcat-docs',
          sidebarPath: './opcat-docs/sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: '',
        logo: {
          alt: 'OP_CAT logo',
          src: 'img/op_cat_logo.jpg',
        },
        items: [
          {
            position: "left",
            to: "/",
            label: "OP_CAT docs",
          },
          {
            /* Only visible under docs. See src/custom/custom.css */
            href: 'https://github.com/OPCAT-Labs/docs',
            label: 'Help us improve this page',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OP_CAT Labs.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: '82071YP9QT',
        apiKey: '1bea775ee26025441b760f123bf1da9c',
        indexName: 'ocpat-docs',
      },
    }),

  plugins: [
  ],
};

module.exports = config;

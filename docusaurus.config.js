// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const readingTime = require('reading-time');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  // plugins: [
  //   '@docusaurus/plugin-content-blog',
  //   '@docusaurus/plugin-content-pages',
  // ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: "/",
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          // beforeDefaultRemarkPlugins: [readingTime],
          // remarkPlugins: [readingTime],
          showLastUpdateAuthor: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // sidebarPath: 'sidebars.js',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "/doc_snippets/Skypoint-logo.png",
      navbar: {
        style: "dark",
        logo: {
          alt: 'Site Logo',
          src: "/doc_snippets/Skypoint-logo.png",
          href: '/',
          target: '_self',
          style: {height: "51px", width : "51px", position: "relative", marginTop: "-10px"},
          // className: 'custom-navbar-logo-class'
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'SkyPoint documentation',
            title: "",
            style: {color: "#fff"}
          },

        ],
      },
      footer: {
        copyright: `© ${new Date().getFullYear()} SkyPoint Cloud Inc. All rights reserved.`,
        style: {textAlign: "left"}
      },
    }),
};

module.exports = config;

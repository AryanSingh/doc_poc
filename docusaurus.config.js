// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const readingTime = require('reading-time');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Site',
  tagline: 'SkypointCloud',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  plugins: [require.resolve('docusaurus-lunr-search')],
  favicon: '/doc_snippets/Skypoint-logo-large.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SkypointCloud', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

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

          editUrl: 'https://github.com/AryanSingh/doc_poc/blob/master',
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
          src: "/doc_snippets/new_log.png",
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
        copyright: `© ${new Date().getFullYear()} SkyPoint Cloud Inc. All rights reserved.`
      },
      colorMode: {
        disableSwitch: true
      }
    }),
};

module.exports = config;

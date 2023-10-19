// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    markdown: {
	mermaid: true,
    },
    themes: ['@docusaurus/theme-mermaid'],
  title: 'Makerville Wiki',
  tagline: 'Knowledgebase for the the Makerville Community',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.makerville.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'anujdeshpande', // Usually your GitHub org/user name.
  projectName: 'wiki.makerville.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anujdeshpande/wiki.makerville.io/tree/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/anujdeshpande/wiki.makerville.io/',
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Makerville Wiki',
        logo: {
          alt: 'Makerville Logo',
          src: 'img/logo.svg',
        },
          items: [
              {
		  type: 'docSidebar',
		  sidebarId: 'tutorialSidebar',
		  position: 'left',
		  label: 'Wiki',
              },
              {
		  to: 'https://blog.makerville.io',
		  label: 'Blog',
		  position: 'left'
	      },
	      {
		  to: 'http://wiki.makerville.io/docs/Lists/hardware-vendors',
		  label: 'Vendor List',
		  position: 'left'
	      },
              {
		  href: 'https://github.com/anujdeshpande/wiki.makerville.io/',
		  label: 'GitHub',
		  position: 'right',
              },
          ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Wiki',
                to: '/docs/intro',
              },
		{
                label: 'Vendors List',
                to: '/docs/Lists/hardware-vendors',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'About',
                href: 'https://community.makerville.io',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/makerville',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/makerville_io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.makerville.io',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/anujdeshpande/wiki.makerville.io/',
              },
            ],
          },
        ],
	  copyright: `Makerville Wiki © 2023 is licensed under CC BY-NC-SA 4.0`
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;

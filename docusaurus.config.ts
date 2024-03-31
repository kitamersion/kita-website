import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kitamersion',
  tagline: 'Simple immersion tool - Open source',
  favicon: 'img/favicon.ico',

  url: 'https://www.kitamersion.com',
  baseUrl: '/',

  organizationName: 'kitamersion',
  projectName: 'kita-website',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/kitamersion/kita-website',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/kitamersion/kita-website',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Kitamersion',
      logo: {
        alt: 'My Site Logo',
        src: 'img/icon192.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'documentationSidebar',
          position: 'left',
          label: 'Documentation',
        },
        {
          href: 'https://github.com/kitamersion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Kitamersion',
          items: [
            {
              label: 'Documentation',
              to: '/docs/welcome',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/kitamersion',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kitamersion. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

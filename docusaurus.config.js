// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Airy',
  tagline: 'Over the mountains,mountains',
  url: 'https://airy.ink',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  noIndex: true,
  organizationName: 'facebook',
  projectName: 'docusaurus',

  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
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

  // 搜索框
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        docsRouteBasePath: "/docs",
        docsDir: "docs",
        indexDocs: true,
        indexPages: true,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 55,
        // ```
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 页眉
      navbar: {
        title: '',
        logo: {
          alt: 'Airy',
          src: 'img/mainLogo.png',
        },
        items: [
          // 文档
          {
            label: '一些记录',
            to: 'docs/about',
            position: 'left'
          },

          // 博客
          {
            label: 'Blog',
            to: '/blog',
            position: 'left'
          },

          // 中英切换导航
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },

        ],
      },

      // 页脚
      footer: {
        style: 'light',
        links: [
          // 文档
          {
            title: '本站',
            items: [
            ]
          },

          {
            title: '本站',
            items: [

            ]
          },

          // 友情链接：
          {
            title: '友情链接：',
            items: [
              {
                label: 'Airy的个人生活',
                href: 'https://www.blairwj.cn/',
              },
              {
                label: '丹恪梦的个人博客',
                href: 'https://www.hinay.cn/',
              }
            ],
          },
        ],
        copyright: `
      <p>
        <a href="http://beian.miit.gov.cn/" target="_blank" >
          <strong>
            鄂ICP备2022002437号
          </strong>
        </a>
      </p>
      <p>
        Copyright © ${new Date().getFullYear()}
        <a href='http://airy.ink' target='_blank'>
        <a href='https://www.blairwj.cn/' target='_blank'>
          <img src='/img/mainLogo.png' width='130px'>
        </a>
        All rights reserved.
      </p>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

module.exports = config;

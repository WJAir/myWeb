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
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          breadcrumbs: true,
        },
        blog: {
          showReadingTime: true,
          editLocalizedFiles: false,
          blogTitle: 'Airy’s blog',
          blogDescription: 'Blog',
          blogSidebarCount: 10,
          blogSidebarTitle: 'Life',
          routeBasePath: 'blog',
          include: ['**/*.{md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
          rehypePlugins: [],
          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
          truncateMarker: /<!--s*(truncate)s*-->/,
          feedOptions: {
            type: 'all',
            title: '',
            description: '',
            copyright: '',
            language: undefined,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // 搜索框
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        hashed: true,
        language: ["en", "zh"],
        docsRouteBasePath: "/docs",
        docsDir: "docs",
        blogDir: "blog",
        indexDocs: true,
        indexBlog: true,
        indexPages: true,
        removeDefaultStopWordFilter: true,
        removeDefaultStemmer: true,
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 55,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 页眉
      navbar: {
        title: '📷Airy',
        // logo: {
        //   alt: 'Airy',
        //   src: '',
        // },
        items: [
          {
            label: "🥟",
            position: "right",
            to: "/",
          },
          {
            label: '📒记录',
            to: 'docs/abouts',
            position: 'right',
            items: [
              {
                label: "🖼️img",
                to: "hello",
              },
              {
                label: "🎞️video",
                to: "docs/video1",
              },
            ]
          },
          {
            label: '🧛🏻关于',
            to: 'docs/about',
            position: 'right'
          },
          // 博客
          {
            label: '📜日记',
            to: '/blog',
            position: 'right'
          },

          {
            label: '👨🏼‍🤝‍👨🏻友情链接',
            position: 'right',
            items: [
              {
                label: '👦🏻Airy的个人生活',
                href: 'https://www.blairwj.cn/',
              },
              {
                label: '👨🏻‍🦱丹恪梦的个人博客',
                href: 'https://www.hinay.cn/',
              }
            ],
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

        ],
        copyright: `
      <p class="foot">
        <a href="http://beian.miit.gov.cn/" target="_blank" >
          <strong>
            鄂ICP备2022002437号-1
          </strong>
        </a>
      </p>
      <p class="foot">
        Copyright © ${new Date().getFullYear()}
        <a href='http://airy.ink' target='_blank'>
        <a href='https://www.blairwj.cn/' target='_blank'>
          <font color='' size='4' face='华文行楷'>Airy</font>
        </a>
        Built with Docusaurus.
      </p>`,
      },
      prism: {
        // theme: require('prism-react-renderer/themes/github'),
        theme: require('prism-react-renderer/themes/dracula'),
        // darkTheme: require('prism-react-renderer/themes/dracula');,
        additionalLanguages: ['lua'],
      },

      // 侧边栏
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },

      // 代码在线编辑
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },

      // 主题模式
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },

      // 公告条
      announcementBar: {
        id: 'support_us',
        content:
          `<a class="announcement_link" target="_self"  href="./video1">🎃 世界的尽头 🗿</a>`,
        backgroundColor: '#ace0f9',
        textColor: '#091E42',
        isCloseable: true,
      },
    }),
};

module.exports = config;

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
          sidebarCollapsed: true,
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
          `<a class="announcement_link" target="_self"  href="/docs/video1">🎃 世界的尽头 🗿</a>`,
        backgroundColor: '#ace0f9',
        textColor: '#091E42',
        isCloseable: false,
      },
      // 导航栏
      navbar: {
        title: 'Over the mountains,mountains',
        // logo: {
        //   alt: 'Airy',
        //   src: '',
        // },
        hideOnScroll: true,
        items: [
          {
            label: '关于',
            to: 'docs/about',
            position: 'left'
          },

          {
            label: '记录',
            to: 'docs/abouts',
            position: 'left',
          },

          // 博客
          {
            label: '日记',
            to: '/blog',
            position: 'left',
          },

          // 友链
          {
            label: '友链',
            position: 'left',
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

          // 图页
          {
            type: 'html',
            position: 'left',
            value: '<a href="/hello"><button class="button button--outline button--primary" >Img</button></a>',
          },

          // video
          {
            type: 'html',
            position: 'left',
            value: '<a href="/docs/video1"><button class="button button--outline button--primary" >Video</button></a>',
          },
          // 搜索
          {
            type: 'search',
            position: 'right',
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
            鄂ICP备2022002437号-1
        </a>
      </p>
      <p class="foot">
        Copyright © ${new Date().getFullYear()}
        <a href='mailto:Airy23@outlook.com' target='_blank'>
          Airy23@outlook.com
        </a>
        Built with <a href='https://www.docusaurus.cn/' target='_blank'>Docusaurus</a>.
      </p>`,
      },
    }),
};

module.exports = config;

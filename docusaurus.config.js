/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'FIS Prefabs',
  tagline: 'Dinosaurs are cool',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/fis-logo.svg',
      },
      items: [
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About WaveMaker',
          position: 'right',
        },
        {
          type: 'doc',
          docId: 'intro',
          position: 'right',
          label: 'Projects',
        },
        {
          to: 'enablement/',
          activeBasePath: 'enablement',
          label: 'Enablement',
          position: 'right',
        },
        {
          to: 'engagement/',
          activeBasePath: 'engagement',
          label: 'Engagement',
          position: 'right',
        },
        {to: 'https://fisd1-consumer-studio.wavemakeronline.com/forum', label: 'Forum', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright ©  2013-${new Date().getFullYear()} WaveMaker, Inc. All rights reserved. `,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },

    ],
  ],
};

const siteConfig = {
  useEnglishUrl: true,
  title: 'Test Site', // Title for your website.
  tagline: 'A website for testing',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/', // Base URL for your project */
  projectName: 'test-site',
  organizationName: 'facebook',
  headerLinks: [
    {doc: 'index', label: 'Docs'}
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/docusaurus.svg',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#2E8555',
    secondaryColor: '#205C3B',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,
  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/docusaurus.png',
  twitterImage: 'img/docusaurus.png',
};

module.exports = siteConfig;

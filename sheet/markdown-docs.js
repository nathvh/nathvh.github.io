module.exports = {
  page: {
    layout: 'default',
    toc: true
  },
  site: {
    // editSourceUrl: 'https://github.com/<git-org>/<git-repository>/tree/master/sheet',
    title: 'Dev pratiques',
    // url: 'https://<git-org>.github.io/<git-repository>/'
  },
  template: {
    name: 'default',
    cssFiles: [
      '/css/main.css'
    ],
    cssVars: {
      brandColor: '#922020',
      brandColorLight: '#FBECEC',
      brandColorDark: '#1F0707'
    },
    favicon: '/favicon.png',
    finePrint: '<p>This is some mighty find print. Yes, some mighty fine print.</p>' +
      '<p><strong>NOTE:</strong> Book icon obtained under the <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons (Attribution 3.0 Unported)</a> license, created by <a href="https://www.iconfinder.com/laurareen">Laura Reen</a>. So, if you want to keep this icon you need to keep the attribution.</p>',
    footerLinks: [
      { title: 'Github', href: 'https://github.com/<git-org>/<git-repository>' }
    ]
  }
}
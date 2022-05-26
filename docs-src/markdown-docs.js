module.exports = {
  page: {
    layout: 'default',
    toc: true
  },
  site: {
//    editSourceUrl: 'https://github.com/nathvh/nathvh.github.io/tree/main/docs-src',
    title: 'Dev Pratique',
//    url: 'https://nathvh.github.io/'
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
    favicon: '/images/book-48.png',
    finePrint: '<p>Ce site est en cours de construction. Il est susceptible de changer, de déménager, de disparaître, ou autre, du jour au lendemain, sans préavis.<p>'+
            '<p><strong>NOTE : </strong>l\'icône du livre est sous licence <a href="https://creativecommons.org/licenses/by/3.0/" target="_blank">Creative Commons (Attribution 3.0 Unported)</a>, et a été créé par <a href="https://www.iconfinder.com/laurareen">Laura Reen</a>.</p>',
    footerLinks: [
      { title: 'Github', href: 'https://github.com/nathvh/nathvh.github.io' }
    ]
  }
}
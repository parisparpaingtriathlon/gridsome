module.exports = {
  siteName: `Paris Parpaing Triathlon`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'news/*.md',
        typeName: 'NewsItem',
        route: '/news/:slug',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'member/*.md',
        typeName: 'Member',
        route: '/member/:slug'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'performance/*.md',
        typeName: 'Performance',
        route: '/performance/:slug',
        refs: {
          peoples: {
            typeName: 'Member',
            create: false
          }
        }
      }
    }
  ]
};

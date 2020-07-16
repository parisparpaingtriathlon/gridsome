module.exports = {
  siteName: `Paris Parpaing Triathlon`,
  titleTemplate: `%s - PPT`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'news/*.md',
        typeName: 'News',
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
    }
  ]
};

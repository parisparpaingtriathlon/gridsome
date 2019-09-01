module.exports = {
  siteName: `Paris Parpaing Triathlon`,
  titleTemplate: `%s - PPT`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/:slug'
      }
    }
  ]
}

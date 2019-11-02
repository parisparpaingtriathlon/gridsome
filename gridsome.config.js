module.exports = {
  siteName: `Paris Parpaing Triathlon`,
  titleTemplate: `%s - PPT`,

  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/*.md',
        typeName: 'BlogPost',
        route: '/post/:slug',
        refs: {
          tags: {
            typeName: "Tag",
            route: "/tag/:id",
            create: true
          }
        }
      }
    }
  ]
};

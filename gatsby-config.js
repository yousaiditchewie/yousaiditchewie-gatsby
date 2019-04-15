module.exports = {
  siteMetadata: {
    title: "Yousaiditchewie",
    description:
      "Digital design, development, and marketing strategy for the web and mobile applicaitons. Based in Nashville, Tennessee.",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
}

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "First Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "testtrackingID",
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `first-gatsby-site`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
        schemas: {
          post: require("./prismic_types/post.json"),
        },
      },
    },
  ],
};

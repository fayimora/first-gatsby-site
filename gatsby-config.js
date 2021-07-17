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
  ],
};

/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  plugins: [
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `our-services`,
        // Path to the directory
        path: `${__dirname}/src/our-services/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/images/`,
      },
    },

  ],
  siteMetadata: {
    title: 'JB Coatings',
    description: 'Detroit based powdercoating service',
    copyright: 'Copyright JSB 2023',
    contact: 'jbscoatings@gmail.com'
  }
}

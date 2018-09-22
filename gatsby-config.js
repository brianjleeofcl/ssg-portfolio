const pixrem = require('pixrem');
const autoprefixer = require('autoprefixer');

const activeEnv = process.env.ACTIVE_ENV || 'development';
require('dotenv').config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    title: `Brian Lee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-screenshot`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `svgo`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Crimson Text:600']
        }
      }
    },
    {
      resolve: `gatsby-source-medium`,
      options: {
        username: process.env.MEDIUM_USER,
      },
    }
  ],
}

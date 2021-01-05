module.exports = {
  siteMetadata: {
    title: `BKB24 | Web Design & Development`,
    author: `BKB24`,
    description: `BKB24. Web Design & Development. I make websites and applications, can make you a custom coded or WordPress site, on-page local SEO for your business and more.`,
    siteUrl: `https://bkb24.com/`,
    social: {
      linkedin: `asd`
    },
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     path: `${__dirname}/content/blog`,
    //     name: `blog`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/folio`,
        name: `folio`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    // `gatsby-plugin-feed`,
//     {
//       resolve: `gatsby-plugin-manifest`,
//       options: {
//         name: `Gatsby Starter Blog`,
//         short_name: `GatsbyJS`,
//         start_url: `/`,
//         background_color: `#ffffff`,
//         theme_color: `#663399`,
//         display: `minimal-ui`,
//         icon: `content/assets/gatsby-icon.png`,
//       },
//     },
    // {
    //   resolve: `gatsby-plugin-google-fonts`,
    //   options: {
    //     fonts: [
    //       `Lato\:400,700,900`,
    //       `Open Sans\:400,600,700`
    //     ],
    //     display: 'swap'
    //   }
    // },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Lato`,
    //         variants: [`400`, `700`, `900`]
    //       },
    //       {
    //         family: `Open Sans`,
    //         variants: [`400`, `600`, `700`]
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: `Lato`,
              variants: [`400`, `700`, `900`]
            },
            {
              family: `Open Sans`,
              variants: [`400`, `600`, `700`]
            }
          ],
        },
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    // },
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms`
  ],
}

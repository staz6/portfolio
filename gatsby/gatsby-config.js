require("dotenv").config({
  path: `.env`,
})
module.exports = {
  siteMetadata: {
    title: `Aahad Portfolio`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GATSBY_ID, // Google Analytics / GA
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          send_page_view: true // default appears to be false.
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
        
        
      },
    },
    
    {
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": process.env.PROJECT_ID,
      "dataset": process.env.DATA_SET
    }
  }
  
  ,{
    resolve: `gatsby-plugin-material-ui`,
    options: {
      stylesProvider: {
        injectFirst: true,
      },
    },
  },"gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-react-helmet", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      
      icon: `src/images/icon.png`, 
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }]
};
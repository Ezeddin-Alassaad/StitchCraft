/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://stitch-craft-phi.vercel.app/', // Replace with your actual domain
    generateRobotsTxt: true,          // Optional: Generates a robots.txt file
    exclude: ['/private/*'],          // Optional: Exclude specific routes
  };
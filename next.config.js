const withImages = require('next-images');
const withCSS = require('./node_modules/@zeit/next-css');
const withSass = require('./node_modules/@zeit/next-sass');

module.exports = withImages(withCSS(withSass({})));

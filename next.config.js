// const withCSS = require('');
const withCSS = require('./node_modules/@zeit/next-css');
const withSass = require('./node_modules/@zeit/next-sass');

module.exports = withCSS(withSass({}));

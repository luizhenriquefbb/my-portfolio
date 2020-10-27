const withImages = require('next-images');
const withCSS = require('./node_modules/@zeit/next-css');
const withSass = require('./node_modules/@zeit/next-sass');

const nextConfig = {
    serverRuntimeConfig: {},
    publicRuntimeConfig: {},
}

const config = {
    ...nextConfig,
}

module.exports = withCSS(withSass(withImages(config)))

const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
const isProd = process.env.NODE_ENV === 'production';
const cdnPath = 'https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages/';
const path = isProd ? cdnPath : '/';

module.exports = withPWA({
  reactStrictMode: true,
  // Use the CDN in production and localhost for development.
  assetPrefix: path,
  images: {
    loader: 'imgix',
    path,
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !isProd,
    fallbacks: {
      // image: '/static/images/fallback.png',
      // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
      // font: '/static/font/fallback.woff2',
      // audio: ...,
      // video: ...,
    },
  },
});

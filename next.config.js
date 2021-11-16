const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');
// const { i18n } = require('./next-i18next.config');
const isProd = process.env.NODE_ENV === 'production';
// const cdnPath = 'https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages';
// const path = isProd ? cdnPath : '';
// const imageConfig = isProd
//   ? {
//       loader: 'imgix',
//       path,
//     }
//   : undefined;

module.exports = withPWA({
  swcMinify: true,
  // experimental: {
  //   urlImports: ['https://cdn.jsdelivr.net'],
  // },
  // i18n,
  reactStrictMode: true,
  // Use the CDN in production and localhost for development.
  // assetPrefix: path,
  // images: imageConfig,
  images: isProd
    ? {
        loader: 'imgix',
        path: 'https://css.show',
      }
    : undefined,
  pwa: {
    dest: 'public',
    runtimeCaching,
    disable: !isProd,
    buildExcludes: [
      /middleware-manifest\.json$/,
      /_middleware.js$/,
      /_middleware.js.map$/,
    ],
    // fallbacks: {
    // image: '/static/images/fallback.png',
    // document: '/other-offline',  // if you want to fallback to a custom page other than /_offline
    // font: '/static/font/fallback.woff2',
    // audio: ...,
    // video: ...,
    // },
  },
});

const isProd = process.env.NODE_ENV === 'production';
const cdnPath = 'https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages/';

module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? cdnPath : '',
  images: {
    loader: 'imgix',
    path: cdnPath,
  },
};

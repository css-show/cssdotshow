const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  reactStrictMode: true,
  future: {
    webpack5: true,
  },
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? 'https://cdn.jsdelivr.net/gh/zhanghecool/cssdotshow@gh-pages/'
    : '',
};

/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  ignoredRouteFiles: ['.*'],
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  serverBuildPath: 'functions/web/index.js',
  assetsBuildDirectory: 'public/build',
  publicPath:
    process.env.NODE_ENV === 'development' ? '/build/' : '/public/build/',
  // appDirectory: "app",
};

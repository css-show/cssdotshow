const { createRequestHandler } = require('@css-show/remix-cloudbase');
const build = require('@remix-run/dev/server-build');

module.exports.main = createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});

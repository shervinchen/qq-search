const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://api.uomg.com/',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '',
      // },
    })
  );
};

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/access_token',
    createProxyMiddleware({
      target: 'https://www.github.com/login/oauth',
      changeOrigin: true,
    })
  );
};
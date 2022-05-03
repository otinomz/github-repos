const { createProxyMiddleware } = require('http-proxy-middleware');

module.export = app => {
  app.use(
    '/login/oauth/access_token',
    createProxyMiddleware({
      target: 'https://github.com',
      changeOrigin: true,
    })
  );

  app.listen(3000);
};
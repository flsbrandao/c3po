module.exports = (app) => {
  app.use(require('./customer-routes'));
  app.use(require('./cities-routes'));
}
const systemConfig = require("../../config/system");
const dashboardRoutes = require("./dashboard.route");

module.exports = (app) => {
  app.use(systemConfig.prefixAdmin + "/dashboard", dashboardRoutes);
};

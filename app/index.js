const routerMyModel = require("./mymodel/router");

module.exports = app => {
  app.use("/routeForModel", routerMyModel);
};

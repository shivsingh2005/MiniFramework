// server.js
const http = require("http");
const Router = require("./router");
const Middleware = require("./middleware");
const Response = require("./response");
const ErrorHandler = require("./errorHandler");

class App {
  constructor() {
    this.router = new Router();
    this.middlewares = [];
  }

  use(fn) {
    this.middlewares.push(fn);
  }

  get(path, handler) {
    this.router.register("GET", path, handler);
  }

  post(path, handler) {
    this.router.register("POST", path, handler);
  }

 listen(port, callback) {
  const server = http.createServer(async (req, res) => {
    Response.extend(res);

    try {
      await Middleware.run(this.middlewares, req, res);

      const pathname = new URL(req.url, `http://${req.headers.host}`).pathname.replace(/\/$/, "");
      const routeHandler = this.router.resolve(req.method, pathname);

      if (routeHandler) {
        routeHandler(req, res);
      } else {
        res.status(404).json({ error: "Route Not Found" });
      }
    } catch (err) {
      ErrorHandler.handle(err, res);
    }
  });

  server.listen(port, callback);
}

}

module.exports = () => new App();

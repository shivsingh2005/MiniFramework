// middleware.js
class Middleware {
  static async run(middlewares, req, res) {
    let index = 0;

    function next() {
      const middleware = middlewares[index++];
      if (middleware) middleware(req, res, next);
    }

    next();
  }
}

module.exports = Middleware;

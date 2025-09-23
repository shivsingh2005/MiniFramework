// router.js
class Router {
  constructor() {
    this.routes = {};
  }

  register(method, path, handler) {
    if (!this.routes[method]) this.routes[method] = {};
    this.routes[method][path] = handler;
  }

  resolve(method, path) {
    return this.routes[method]?.[path];
  }
}

module.exports = Router;

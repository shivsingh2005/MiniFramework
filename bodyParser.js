// bodyParser.js
module.exports = function jsonBodyParser(req, res, next) {
  return new Promise((resolve, reject) => {
    if (req.method === "GET" || !req.headers["content-type"]) {
      req.body = {};
      // Parse query params for GET requests
      const url = new URL(req.url, `http://${req.headers.host}`);
      req.query = Object.fromEntries(url.searchParams);
      return resolve(next());
    }

    const contentType = req.headers["content-type"] || "";
    let body = "";

    req.on("data", chunk => body += chunk.toString());
    req.on("end", () => {
      try {
        if (contentType.includes("application/json")) {
          req.body = body ? JSON.parse(body) : {};
        } else {
          const params = new URLSearchParams(body);
          req.body = Object.fromEntries(params);
        }
        resolve(next());
      } catch (err) {
        reject(err);
      }
    });

    req.on("error", reject);
  });
};

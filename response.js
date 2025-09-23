// response.js
class Response {
  static extend(res) {
    res.json = (data) => {
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
    };

    res.status = (code) => {
      res.statusCode = code;
      return res;
    };

    res.send = (data) => {
      res.end(data);
    };
  }
}

module.exports = Response;

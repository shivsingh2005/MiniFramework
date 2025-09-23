// errorHandler.js
class ErrorHandler {
  static handle(err, res) {
    res.status(500).json({
      error: "Internal Server Error",
      message: err.message,
    });
  }
}

module.exports = ErrorHandler;

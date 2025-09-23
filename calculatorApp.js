// calculatorApp.js
const createApp = require("./index"); // Import your mini framework
const app = createApp();

// Middleware: simple logger
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Middleware: parse JSON body (for POST)
const bodyParser = require("./bodyParser"); // if you created it earlier
app.use(bodyParser);

// GET route: basic operations via query params
// Example: /add?a=5&b=10
app.get("/add", (req, res) => {
  const a = parseFloat(req.query?.a) || 0;
  const b = parseFloat(req.query?.b) || 0;
  res.json({ operation: "add", result: a + b });
});

app.get("/subtract", (req, res) => {
  const a = parseFloat(req.query?.a) || 0;
  const b = parseFloat(req.query?.b) || 0;
  res.json({ operation: "subtract", result: a - b });
});

app.get("/multiply", (req, res) => {
  const a = parseFloat(req.query?.a) || 0;
  const b = parseFloat(req.query?.b) || 0;
  res.json({ operation: "multiply", result: a * b });
});

app.get("/divide", (req, res) => {
  const a = parseFloat(req.query?.a) || 0;
  const b = parseFloat(req.query?.b) || 1; // avoid division by zero
  res.json({ operation: "divide", result: a / b });
});

// POST route: send JSON body { a: 5, b: 10, op: "add" }
app.post("/calculate", (req, res) => {
  const { a = 0, b = 0, op = "add" } = req.body || {};
  let result;

  switch (op) {
    case "add": result = a + b; break;
    case "subtract": result = a - b; break;
    case "multiply": result = a * b; break;
    case "divide": result = b !== 0 ? a / b : "Infinity"; break;
    default: result = "Invalid operation";
  }

  res.json({ operation: op, result });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Calculator server running on port ${PORT}`));

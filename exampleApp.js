// exampleApp.js
const myFramework = require("./index");
const app = myFramework();

// Middleware
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use((req, res, next) => {
  req.customValue = "Hello from Middleware!";
  next();
});

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Welcome to My Framework" });
});

app.get("/data", (req, res) => {
  res.json({ data: req.customValue });
});

app.post("/submit", (req, res) => {
  res.status(201).json({ message: "Data received" });
});

// Start server
app.listen(3000, () => console.log("Server running on port 3000"));

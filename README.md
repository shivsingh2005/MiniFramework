🚀 MiniNode Framework

A lightweight backend framework built from scratch using Node.js http module.
Created to understand how routing, middleware, and response handling work internally (similar to Express.js).

✨ Features

Custom Router (GET & POST)

Middleware Support (app.use)

JSON & URL-encoded Body Parser

Extended Response Methods:

res.json()

res.status()

res.send()

Centralized Error Handling

Example Apps Included

📁 Structure
bodyParser.js
calculatorApp.js
errorHandler.js
exampleApp.js
index.js
middleware.js
response.js
router.js
server.js
package.json

▶ Run the Project
node exampleApp.js


or

node calculatorApp.js


Server runs at:

http://localhost:3000

🛠 Basic Usage
const createApp = require("./index");
const app = createApp();

// Middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

// Route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

🧮 Example API

GET:

/add?a=5&b=10


POST:

POST /calculate
Body: { "a": 10, "b": 5, "op": "add" }

🎯 Purpose

Built for learning:

Backend fundamentals

Middleware chaining

Routing logic

HTTP server internals

Author: Shiv Singh

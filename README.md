🚀 MiniNode Framework

A lightweight Node.js backend framework built from scratch using the native http module.

This project demonstrates how routing, middleware chaining, response helpers, body parsing, and error handling work internally — similar to Express.js but fully custom-built for learning and backend fundamentals.

📌 Features

✅ Custom Router (GET & POST support)

✅ Middleware System

✅ JSON & URL-encoded Body Parser

✅ Custom Response Methods (res.json, res.status, res.send)

✅ Centralized Error Handling

✅ Clean Modular Architecture

✅ Example Applications Included

✅ Built using Native Node.js http Module

📁 Project Structure
miniproject/
│
├── bodyParser.js        → Parses JSON & URL-encoded request bodies
├── calculatorApp.js     → Example calculator API app
├── errorHandler.js      → Centralized error handling
├── exampleApp.js        → Basic example application
├── index.js             → Exports app factory
├── middleware.js        → Middleware execution engine
├── response.js          → Extends response object
├── router.js            → Route registration & resolution
├── server.js            → Core framework logic
└── package.json

🏗 Architecture Overview

The framework is built around the following components:

1️⃣ App Class

Core of the framework

Manages routes and middleware

Starts the HTTP server

2️⃣ Router

Registers routes

Resolves route handlers based on method & path

3️⃣ Middleware Engine

Executes middleware functions sequentially

Uses next() pattern

4️⃣ Response Enhancer

Extends native Node.js res object with:

res.json()
res.status()
res.send()

5️⃣ Error Handler

Handles uncaught errors and returns:

{
  "error": "Internal Server Error",
  "message": "error message"
}

🛠 Installation

Clone the repository:

git clone <your-repository-link>
cd miniproject


Install dependencies (if any):

npm install

▶ Running the Server
Run Example App
node exampleApp.js

Run Calculator App
node calculatorApp.js


Server runs at:

http://localhost:3000

📌 Usage Guide
1️⃣ Create an App
const createApp = require("./index");
const app = createApp();

2️⃣ Register Middleware
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

3️⃣ Define Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.post("/submit", (req, res) => {
  res.status(201).json({ success: true });
});

4️⃣ Start Server
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

📦 Response Methods
Method	Description
res.json(data)	Sends JSON response
res.status(code)	Sets HTTP status code
res.send(data)	Sends raw response

Example:

res.status(200).json({ message: "Success" });

📥 Body Parsing

Supports:

application/json

application/x-www-form-urlencoded

Query parameters for GET requests

Example:

POST /calculate
Content-Type: application/json

{
  "a": 10,
  "b": 5,
  "op": "add"
}

🧮 Calculator Example API
GET Routes
/add?a=5&b=10
/subtract?a=10&b=5
/multiply?a=3&b=4
/divide?a=20&b=5


Example:

http://localhost:3000/add?a=5&b=10


Response:

{
  "operation": "add",
  "result": 15
}

POST Route
POST /calculate


Body:

{
  "a": 10,
  "b": 5,
  "op": "multiply"
}


Response:

{
  "operation": "multiply",
  "result": 50
}

🧠 Learning Purpose

This framework was built to:

Understand how Express works internally

Learn middleware chaining

Practice HTTP server handling

Build routing logic from scratch

Improve backend architecture understanding

Strengthen core Node.js knowledge

🚀 Future Improvements

Dynamic route parameters (/user/:id)

Static file serving

Async-safe middleware chaining

Error middleware (like Express)

CORS middleware

Rate limiting

TypeScript support

Publish as an NPM package

📄 License

ISC License

👨‍💻 Author

Shiv Singh
B.Tech CSIT | Backend & Systems Enthusiast

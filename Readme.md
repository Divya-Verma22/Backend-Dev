Day 1 of Revising Backend From scratch !!

📌 Backend Development 
<!-- 🚀 What I Learned Today----------------------- -->

This repository documents my learning journey in Backend Development with Node.js, Express.js, and MongoDB.

🔑 Key Topics Covered today
Node.js Setup → Installed Node.js & npm, initialized project with npm init.
Express.js → Built REST APIs, handled requests & responses.
Routing → Created multiple routes (GET, POST, PUT, DELETE).
Controllers → Separated business logic from routes for cleaner code.
Models → Designed MongoDB schemas with Mongoose.
MongoDB Setup → Connected local MongoDB, performed CRUD operations, used find() and filters.
Environment Variables → Used .env and dotenv to manage secrets (e.g., DB URL, PORT).
Config Files → Centralized app configuration (DB connection, constants).
Nodemon → Auto-reloaded server during development.
Postman → Tested API endpoints with different request types.



🛠️ Tech Stack
Node.js
Express.js
MongoDB + Mongoose
dotenv
nodemon
Postman (API testing tool)



📂 Project Structure
backend/
│── config/
│   └── db.js          # Database connection setup
│
│── models/
│   └── Todo.js        # Mongoose schema
│
│── controllers/
│   └── todoController.js   # Business logic
│
│── routes/
│   └── todoRoutes.js   # API routes
│
│── .env               # Environment variables
│── index.js           # Entry point (Express server)
│── package.json


⚡ API Example (Todo App)
Create a Todo
POST /api/todos
Body (JSON):

{
  "title": "Learn Backend",
  "description": "Practice Node.js and Express"
}

Get All Todos
GET /api/todos

Update a Todo
PUT /api/todos/:id

Delete a Todo
DELETE /api/todos/:id

📌 How to Run

Clone the repo

git clone <repo-url>
cd backend
Install dependencies
npm install
Setup .env file
Run the server
npm run dev


(using nodemon)
Test APIs in Postman 🚀

✅ What I Achieved
Understood MVC pattern in backend (Model-View-Controller).
Built CRUD APIs with Express & MongoDB.
Managed environment configs with .env.
Tested & debugged APIs using Postman.


Used Rest Apis and perform routing - get , post , put , delete
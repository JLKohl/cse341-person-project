# Disney Planner

Disney Planner is a backend-focused full-stack web application designed to 
demonstrate secure authentication and protected API access.
Users authenticate through Google OAuth, allowing access to secured REST API routes
and interactive API documentation.

---

## Features

- Google OAuth authentication using Passport.js
- Session-based authentication and protected routes
- RESTful API architecture
- Protected Swagger/OpenAPI API documentation
- MongoDB data storage
- Backend deployment on Render

---

## Live Application
https://cse341-personal-project-m6ip.onrender.com

---

## Technologies

Backend:
- Node.js
- Express

Authentication:
- Passport.js (Google OAuth)
- Express Sessions

Database:
- MongoDB

API Design:
- REST API architecture

Documentation:
- Swagger / OpenAPI

Deployment:
- Render

Templating:
- EJS (login interface)

---

## Authentication Overview

Users authenticate through Google OAuth. After login, 
Passport.js creates a server-side session used to verify access to protected routes.
Unauthorized users are redirected away from restricted pages, including API documentation.

---

## Running Locally

Clone the repository:

git clone https://github.com/yourusername/disney-planner

Install dependencies:

npm install

Start the server:

npm start

---

## Future Improvements

- Expanded planner functionality
- Additional API endpoints
- Enhanced frontend interface

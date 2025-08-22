# 🔐 MERN Auth System

A full-stack **Authentication System** built with **MongoDB, Express, React (Vite), and Node.js**.  
This project includes user authentication (sign up, login, JWT-based auth), protected routes, and product management.

---

## 🚀 Tech Stack

### Backend
- **Node.js**
- **Express.js**
- **MongoDB (Mongoose)**
- **JWT Authentication**
- **dotenv** for environment variables

### Frontend
- **React (Vite)**
- **TailwindCSS**
- **React Router**

---

## 📂 Project Structure

```
MERN/
│
├── backend/ # Server-side code
│ ├── configs/ # Database connection
│ ├── controllers/ # Business logic (auth, products)
│ ├── middlewares/ # JWT validation, request validation
│ ├── models/ # Mongoose models (User, Products)
│ ├── routes/ # API routes
│ ├── index.js # Entry point
│ └── .env # Environment variables
│
├── vite-project/ # Client-side code
│ ├── src/
│ │ ├── pages/ # React pages (Login, Signup, Home, etc.)
│ │ ├── App.jsx # App component with routes
│ │ ├── main.jsx # Entry point
│ │ └── assets/ # Static assets
│ ├── public/ # Public static files
│ ├── tailwind.config.js # TailwindCSS config
│ ├── vite.config.js # Vite config
│ └── index.html
```

---

## ⚙️ Installation & Setup

###  Clone the repository
```bash
git clone https://github.com/Chaitnya-Ghai/auth-system.git
cd auth-system

**### 1️⃣ Backend Setup**
cd backend
npm install
-
Create a .env file inside the backend folder and add the following:
PORT=5000
MONGO_URI=your_mongo_db_connection_string
JWT_SECRET=your_secret_key
-
Run the backend server:

npm start

**### 2️⃣Frontend Setup**
cd vite-project
npm install
npm run dev

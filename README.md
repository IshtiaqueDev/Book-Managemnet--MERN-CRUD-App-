# 📚 Book Management System

A simple and efficient Book Management System built using the MERN Stack (MongoDB, Express.js, React.js, Node.js).

This application allows users to manage books through a clean single-page interface with complete CRUD functionality. Users can add, view, update, and delete book records while the application communicates with a backend REST API.

---

## 🚀 Features

- 📖 Display all books in a structured list
- ➕ Add new books
- ✏️ Edit existing book details
- 🗑️ Delete books
- 🔄 Real-time data updates
- 🧩 Reusable React components
- 🌐 Frontend and backend integration through REST APIs

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router DOM
- Axios
- Bootstrap
- Vite

**Backend**
- Node.js
- Express.js
- MongoDB
- Mongoose

---

## 🖼️ Image Preview

![Preview](./BM.PNG)

---

## 🏗️ Project Structure

```
Book Management System
├── Backend
│   ├── models
│   ├── routes
│   ├── controllers
│   └── app.js
│
└── Frontend
    ├── components
    │   ├── Form
    │   ├── BookList
    │   └── EditForm
    │
    └── App.jsx
```

---

## 🔌 API Functionality

The application uses REST APIs for managing book data:

| Method   | Description        |
|----------|---------------------|
| `GET`    | Fetch all books      |
| `POST`   | Add a new book        |
| `PUT`    | Update book details   |
| `DELETE` | Remove a book          |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone your-repository-url
```

### Backend

```bash
cd Backend
npm install
npm run dev
```

Create a `.env` file inside the `Backend` folder:

```env
MONGODB_URI=your_database_url
PORT=5000
```

### Frontend

```bash
cd Frontend
npm install
npm run dev
```

---

## 📚 Learning Outcomes

Through this project, I practiced:

- Building a full-stack MERN application
- Creating REST APIs with Express.js
- Working with MongoDB and Mongoose
- Connecting React frontend with backend services
- Managing application state and forms
- Creating reusable components

---

## 👨‍💻 Author

**Ishtiaque Dev**
MERN Stack Developer
# 📝 MERN Check List

A full-stack task management application built using the MERN stack. Check List helps users organize their daily tasks by creating, updating, completing, and deleting to-do items through a clean and responsive interface.

## 🚀 Features

- Create new tasks
- Edit existing tasks
- Mark tasks as complete/incomplete
- Delete tasks
- Responsive and modern user interface
- RESTful API architecture
- MongoDB database integration
- Redis caching with Upstash for improved performance

## 🛠️ Tech Stack

### Frontend

- React
- React Router
- Axios
- Tailwind CSS
- DaisyUI

### Backend

- Node.js
- Express.js

### Database

- MongoDB

### Caching

- Upstash Redis

## 📦 Installation

### Clone the repository

```bash
git clone https://github.com/dhrishtishetty/check-list.git
cd check-list
```

### Install dependencies

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd ../frontend
npm install
```

### Configure Environment Variables

Create a `.env` file inside the `backend` directory and add the following:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_upstash_redis_url
UPSTASH_REDIS_REST_TOKEN=your_upstash_redis_token
```

### Run the application

#### Backend

```bash
# Build the frontend
npm run build

# Start the application
npm run dev
```

## 🌐 Deployment

**Live Demo:** https://your-live-demo-link.onrender.com

The application can be deployed using platforms such as **Render**, **Vercel**, or **Railway**, with **MongoDB Atlas** as the database and **Upstash Redis** for cloud caching.

## 📸 Preview

_Add screenshots or GIFs of the application here._

## 👨‍💻 Author

**Dhrishti Shetty**

GitHub: https://github.com/dhrishtishetty

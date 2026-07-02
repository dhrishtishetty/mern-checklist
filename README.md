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

**Home Page:**
<img width="1913" height="968" alt="image" src="https://github.com/user-attachments/assets/b95b10b6-2f23-404e-97c6-4ca269406f42" />

**Create Page:**
<img width="1917" height="962" alt="image" src="https://github.com/user-attachments/assets/58873e90-9571-4b62-9163-aaeadb9f2ab8" />

**Update Page:**
<img width="1915" height="963" alt="image" src="https://github.com/user-attachments/assets/8f9f3d55-704c-4702-a77c-e5ace07bfb9c" />


## 👨‍💻 Author

**Dhrishti Shetty**

GitHub: https://github.com/dhrishtishetty

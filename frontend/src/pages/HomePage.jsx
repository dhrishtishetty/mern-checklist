import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../lib/axios.js";
import RateLimitedUI from "../components/RateLimitedUI.jsx";
import TaskCard from "../components/TaskCard.jsx";
import TasksNotFound from "../components/TasksNotFound.jsx";

const HomePage = () => {
  const [isRateLimited, setIsRateLimited] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await api.get("/tasks");

        setTasks(res.data);
        setIsRateLimited(false);
      } catch (error) {
        console.log(error);

        if (error.response?.status === 429) {
          setIsRateLimited(true);
        } else {
          toast.error("Failed to load tasks");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, []);

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const progress = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "pending") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const motivation = () => {
    if (progress === 100 && totalTasks > 0)
      return "🎉 Awesome! Everything is done!";
    if (progress >= 80) return "🎯 Almost there!";
    if (progress >= 50) return "🔥 Great work! Keep going!";
    if (progress > 0) return "💪 Making progress!";
    return "🚀 Let's get started!";
  };

  return (
    <div className="min-h-screen bg-base-200">

      {isRateLimited && <RateLimitedUI />}

      <div className="max-w-7xl mx-auto px-4 py-8">

        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">

            <div className="flex justify-between items-center">
              <h2 className="card-title text-2xl">
                Today's Progress
              </h2>

              <span className="badge badge-primary badge-lg">
                {progress}%
              </span>
            </div>

            <progress
              className="progress progress-primary w-full h-3 mt-2"
              value={progress}
              max="100"
            ></progress>

            <p className="mt-5 text-lg font-medium text-base-content/80">
              {motivation()}
            </p>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <div className="join">

            <button
              className={`btn join-item ${
                filter === "all" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("all")}
            >
              All ({totalTasks})
            </button>

            <button
              className={`btn join-item ${
                filter === "pending" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("pending")}
            >
              Pending ({pendingTasks})
            </button>

            <button
              className={`btn join-item ${
                filter === "completed" ? "btn-primary" : ""
              }`}
              onClick={() => setFilter("completed")}
            >
              Completed ({completedTasks})
            </button>

          </div>
        </div>

        {loading && (
          <div className="text-center text-primary py-10">
            Loading...
          </div>
        )}

        {!loading &&
          filteredTasks.length === 0 &&
          !isRateLimited && <TasksNotFound />}

        {!loading &&
          filteredTasks.length > 0 &&
          !isRateLimited && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTasks.map((task) => (
                <TaskCard
                  key={task._id}
                  task={task}
                  setTasks={setTasks}
                />
              ))}
            </div>
          )}
      </div>
    </div>
  );
};

export default HomePage;
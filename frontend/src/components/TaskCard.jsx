import { CheckCircle2, Circle, PenSquareIcon, Trash2Icon } from "lucide-react";
import { Link } from "react-router";
import toast from "react-hot-toast";
import api from "../lib/axios.js";
import { formatDate } from "../lib/utils.js";

const TaskCard = ({ task, setTasks }) => {
  const priorityBadge = {
    High: "badge-error",
    Medium: "badge-warning",
    Low: "badge-success",
  };

  const priorityBorder = {
    High: "border-error",
    Medium: "border-warning",
    Low: "border-success",
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await api.delete(`/tasks/${id}`);

      setTasks((prev) => prev.filter((task) => task._id !== id));

      toast.success("Task deleted successfully!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete task");
    }
  };

  const toggleCompleted = async () => {
    try {
      const res = await api.put(`/tasks/${task._id}`, {
        completed: !task.completed,
      });

      setTasks((prev) =>
        prev.map((t) => (t._id === task._id ? res.data : t))
      );

      toast.success(
        task.completed
          ? "Task marked as pending."
          : "Task completed! 🎉"
      );
    } catch (error) {
      console.error(error);
      toast.error("Couldn't update task");
    }
  };

  return (
    <div
      className={`card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 border-l-4 ${priorityBorder[task.priority]}`}
    >
      <div className="card-body">

        <div className="flex justify-between items-start">

          <button
            onClick={toggleCompleted}
            className="btn btn-ghost btn-circle btn-sm"
          >
            {task.completed ? (
              <CheckCircle2 className="size-6 text-success" />
            ) : (
              <Circle className="size-6" />
            )}
          </button>

          <span className={`badge ${priorityBadge[task.priority]}`}>
            {task.priority}
          </span>

        </div>

        <h2
          className={`card-title mt-2 ${
            task.completed ? "line-through opacity-60" : ""
          }`}
        >
          {task.title}
        </h2>

        <p
          className={`text-base-content/70 line-clamp-3 ${
            task.completed ? "line-through opacity-60" : ""
          }`}
        >
          {task.description}
        </p>

        <div className="card-actions justify-between items-center mt-5">

          <span className="text-sm text-base-content/60">
            {formatDate(new Date(task.createdAt))}
          </span>

          <div className="flex gap-2">

            <Link
              to={`/task/${task._id}`}
              className="btn btn-ghost btn-xs"
            >
              <PenSquareIcon className="size-4" />
            </Link>

            <button
              onClick={() => handleDelete(task._id)}
              className="btn btn-ghost btn-xs text-error"
            >
              <Trash2Icon className="size-4" />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
};

export default TaskCard;
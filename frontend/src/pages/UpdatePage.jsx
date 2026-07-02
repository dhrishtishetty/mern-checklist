import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import api from "../lib/axios";
import toast, { LoaderIcon } from "react-hot-toast";
import { ArrowLeftIcon, Trash2Icon } from "lucide-react";

const UpdatePage = () => {
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const res = await api.get(`/tasks/${id}`);
        setTask(res.data);
      } catch (error) {
        console.log(error);
        toast.error("Failed to fetch task");
      } finally {
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this task?")) return;

    try {
      await api.delete(`/tasks/${id}`);
      toast.success("Task deleted successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete task");
    }
  };

  const handleSave = async () => {
    if (!task.title.trim() || !task.description.trim()) {
      toast.error("All fields are required");
      return;
    }

    setSaving(true);

    try {
      await api.put(`/tasks/${id}`, task);

      toast.success("Task updated successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update task");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex justify-center items-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200">
      <div className="container mx-auto px-4 py-8">

        <div className="max-w-2xl mx-auto">

          <div className="flex justify-between items-center mb-6">

            <Link to="/" className="btn btn-ghost">
              <ArrowLeftIcon className="size-5" />
              Back to Tasks
            </Link>

            <button
              className="btn btn-error btn-outline"
              onClick={handleDelete}
            >
              <Trash2Icon className="size-5" />
              Delete Task
            </button>

          </div>

          <div className="card bg-base-100 shadow-lg">

            <div className="card-body">

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>

                <input
                  type="text"
                  className="input input-bordered"
                  value={task.title}
                  onChange={(e) =>
                    setTask({ ...task, title: e.target.value })
                  }
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Description</span>
                </label>

                <textarea
                  className="textarea textarea-bordered h-32"
                  value={task.description}
                  onChange={(e) =>
                    setTask({
                      ...task,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div className="form-control mb-4">
                <label className="label">
                  <span className="label-text">Priority</span>
                </label>

                <select
                  className="select select-bordered"
                  value={task.priority}
                  onChange={(e) =>
                    setTask({
                      ...task,
                      priority: e.target.value,
                    })
                  }
                >
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>

              <div className="form-control mb-6">
                <label className="label cursor-pointer justify-start gap-3">

                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={task.completed}
                    onChange={(e) =>
                      setTask({
                        ...task,
                        completed: e.target.checked,
                      })
                    }
                  />

                  <span className="label-text">
                    Mark as Completed
                  </span>

                </label>
              </div>

              <div className="card-actions justify-end">

                <button
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handleSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default UpdatePage;
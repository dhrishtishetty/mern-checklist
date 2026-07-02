import Task from "../models/task.model.js";

export const getAllTasks = async(_, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        res.status(200).json(tasks);
    } catch (error) {
        console.error("Error in getAllTasks controller", error);
        res.status(500).json({ "message": "Internal Server Error" });
    }
}

export const getTask = async(req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        res.status(200).json(task);
    } catch (error) {
        console.error("Error in getTask controller", error);
        res.status(500).json({ "message": "Internal Server Error" });
    }
}

export const createTask = async(req, res) => {
    try {
        const { title, description, priority } = req.body;
        const newTask = new Task({ title, description, priority });
        const savedTask = await newTask.save();
        res.status(201).json(savedTask);
    } catch (error) {
        console.error("Error in createTask controller", error);
        res.status(500).json({ "message": "Internal Server Error" });
    }
}

export const updateTask = async(req, res) => {
    try {
        const { title, description, priority, completed } = req.body;
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, { title, description, priority, completed }, { new: true });

        if(!updatedTask) return res.json({ "message": "Task not found" });
        res.json(updatedTask);
    } catch (error) {
        console.error("Error in updateTask controller", error);
        res.status(500).json({ "message": "Internal Server Error" });
    }
}

export const deleteTask = async(req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask) return res.json({ "message": "Task not found" });

        res.json({ "message": "Task deleted successfully" });
    } catch (error) {
        console.error("Error in deleteTask controller", error);
        res.status(500).json({ "message": "Internal Server Error" });
    }
}
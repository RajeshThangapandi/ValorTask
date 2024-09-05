const Task = require('../models/task');

// Assign Task

exports.assignTask = async (req, res) => {
    try {
        const { internId, description, dueDate, priority } = req.body;
        const task = new Task({
            internId,
            description,
            dueDate,
            priority
        });
        await task.save();
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve Tasks
exports.getTasks = async (req, res) => {
    try {
        const { internId } = req.params;
        const tasks = await Task.find({ internId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Task
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Task
exports.deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        await Task.findByIdAndDelete(id);
        res.status(200).json({ message: 'Task deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

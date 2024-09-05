const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    internId: { type: mongoose.Schema.Types.ObjectId, ref: 'Intern', required: true },
    description: { type: String, required: true },
    dueDate: { type: Date, required: true },
    priority: { type: String, enum: ['low', 'medium', 'high'], required: true },
    status: { type: String, enum: ['pending', 'completed'], default: 'pending' },
});

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;

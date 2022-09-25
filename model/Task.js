const mongoose = require('mongoose');
const TaskSchema = mongoose.Schema({
    description: {
        type: String,
        required: [true, 'The task field is required'],
    },
    category: {
        type: String,
        required: [true, 'The category field is required'],
    },
    due_date: {
        type: String,
        required: [true, 'The due date field is required'],
    },
}, { timestamps: true });

const Task = mongoose.model('tasks', TaskSchema);
module.exports = Task
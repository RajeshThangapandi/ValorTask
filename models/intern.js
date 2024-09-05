const mongoose = require('mongoose');

const internSchema = new mongoose.Schema({
    name: { type: String, required: true },
    contact: { type: String, required: true },
    department: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date },
    status: { type: String, enum: ['active', 'inactive'], default: 'active' },
});

const Intern = mongoose.model('Intern', internSchema);
module.exports = Intern;

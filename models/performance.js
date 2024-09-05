const mongoose = require('mongoose');

const performanceSchema = new mongoose.Schema({
    internId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Intern',
        required: true
    },
    review: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    rating: {        // Make sure this field is defined in your schema
        type: Number,
        required: true
    },
    date: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('Performance', performanceSchema);

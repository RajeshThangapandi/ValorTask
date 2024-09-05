const Feedback = require('../models/feedback');

// Add Feedback
exports.addFeedback = async (req, res) => {
    try {
        const { internId, feedbackText, date } = req.body;
        const feedback = new Feedback({
            internId,
            feedbackText,
            date
        });
        await feedback.save();
        res.status(201).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve Feedback
exports.getFeedback = async (req, res) => {
    try {
        const { internId } = req.params;
        const feedbacks = await Feedback.find({ internId });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Feedback
exports.updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedFeedback = await Feedback.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Feedback
exports.deleteFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        await Feedback.findByIdAndDelete(id);
        res.status(200).json({ message: 'Feedback deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

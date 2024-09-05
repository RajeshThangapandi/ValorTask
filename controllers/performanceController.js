const Performance = require('../models/performance');

// Add Performance Record
exports.addPerformanceRecord = async (req, res) => {
    try {
        const { internId, review, score, date,rating } = req.body;
        const performance = new Performance({
            internId,
            review,
            score,
            date,
            rating
        });
        await performance.save();
        res.status(201).json(performance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Retrieve Performance Records
exports.getPerformanceRecords = async (req, res) => {
    try {
        const { internId } = req.params;
        const performanceRecords = await Performance.find({ internId });
        res.status(200).json(performanceRecords);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update Performance Record
exports.updatePerformanceRecord = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedPerformance = await Performance.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(updatedPerformance);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete Performance Record
exports.deletePerformanceRecord = async (req, res) => {
    try {
        const { id } = req.params;
        await Performance.findByIdAndDelete(id);
        res.status(200).json({ message: 'Performance record deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

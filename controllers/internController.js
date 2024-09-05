const Intern = require('../models/intern');

// Create a new intern
exports.createIntern = async (req, res) => {
    try {
        const intern = new Intern(req.body);
        await intern.save();
        res.status(201).json(intern);
    } catch (error) {
        res.status(500).json({ message: 'Error creating intern', error });
    }
};

// Get all interns
exports.getInterns = async (req, res) => {
    try {
        const interns = await Intern.find();
        res.json(interns);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving interns', error });
    }
};

// Get a specific intern by ID
exports.getInternById = async (req, res) => {
    try {
        const intern = await Intern.findById(req.params.id);
        if (!intern) return res.status(404).json({ message: 'Intern not found' });
        res.json(intern);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving intern', error });
    }
};

// Update an intern's details
exports.updateIntern = async (req, res) => {
    try {
        const intern = await Intern.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!intern) return res.status(404).json({ message: 'Intern not found' });
        res.json(intern);
    } catch (error) {
        res.status(500).json({ message: 'Error updating intern', error });
    }
};

// Delete an intern
exports.deleteIntern = async (req, res) => {
    try {
        const intern = await Intern.findByIdAndDelete(req.params.id);
        if (!intern) return res.status(404).json({ message: 'Intern not found' });
        res.json({ message: 'Intern deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting intern', error });
    }
};

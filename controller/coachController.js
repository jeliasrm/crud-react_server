import Coach from '../model/coachModel.js';

export const createdCoach = async (req, res) =>{
    try {
        const newCoach = new Coach(req.body);
        const savedCoach = await newCoach.save();
        res.status(200).json({ message: "Coach created successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllCoaches = async (req, res) => {
    try {
        const coaches = await Coach.find();
        if (!coaches || coaches.length === 0) {
            return res.status(400).json({ message: "No coaches found." });
        }
        res.status(200).json(coaches);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updateCoach = async (req, res) => {
    try {
        const updatedCoach = await Coach.findByIdAndUpdate
        (req.params.id, req.body, { new: true });
        if (!updatedCoach) {
            return res.status(404).json({ message: "Coach not found." });
        }
        res.status(200).json({ message: "Coach updated successfully." });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deleteCoach = async (req, res) => {
    try {
        const deletedCoach = await Coach.findByIdAndDelete(req.params.id);
        if (!deletedCoach) {
            return res.status(404).json({ message: "Coach not found." });
        }
        res.status(200).json({ message: "Coach deleted successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
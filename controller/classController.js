import Class from '../model/classModel.js';

export const createdClass = async (req, res) =>{
    try {
        const newClass = new Class(req.body);
        const savedClass = await newClass.save();
        res.status(200).json({ message: "Class created successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllClasses = async (req, res) => {
    try {
        const classes = await Class.find();
        if (!classes || classes.length === 0) {
            return res.status(400).json({ message: "No classes found." });
        }
        res.status(200).json(classes);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateClass = async (req, res) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params, req.body, { new: true });
        if (!updatedClass) {
            return res.status(404).json({ message: "Class not found." });
        }
        res.status(200).json({ message: "Class updated successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteClass = async (req, res) => {
    try {
        const deletedClass = await Class.findByIdAndDelete(req.params.id);
        if (!deletedClass) {
            return res.status(404).json({ message: "Class not found." });
        }
        res.status(200).json({ message: "Class deleted successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
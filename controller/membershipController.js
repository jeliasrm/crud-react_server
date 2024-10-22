import Membership from "../model/membershipModel.js";

export const createdMembership = async (req, res) =>{
    try {
        const newMembership = new Membership(req.body);
        const savedMembership = await newMembership.save();
        res.status(200).json({ message: "Membership created successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const getAllMemberships = async (req, res) => {
    try {
        const memberships = await Membership.find();
        if (!memberships || memberships.length === 0) {
            return res.status(400).json({ message: "No memberships found." });
        }
        res.status(200).json(memberships);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const updateMembership = async (req, res) => {
    try {
        const updatedMembership = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMembership) {
            return res.status(404).json({ message: "Membership not found." });
        }
        res.status(200).json({ message: "Membership updated successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteMembership = async (req, res) => {
    try {
        const deletedMembership = await Membership.findByIdAndDelete(req.params.id);
        if (!deletedMembership) {
            return res.status(404).json({ message: "Membership not found." });
        }
        res.status(200).json({ message: "Membership deleted successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: false },
    birth: { type: Date, required: false },
    gender: { type: String, required: false },
    address: { type: String, required: false },
    phone: { type: String, required: false },
    email: { type: String, required: true },
    occupation: { type: String, required: false },
    education: { type: String, required: false },
    socialMedia: { type: String, required: false },
    references: { type: String, required: false },
    emergencyPhone: { type: String, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false },
    // Add other fields as needed
});

export default mongoose.model("User", userSchema);
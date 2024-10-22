import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
    memberId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    memberName: { type: String, required: true },
    membershipType: { type: String, required: false },
    price: { type: Number, required: false },
    startDate: { type: Date, required: false },
    endDate: { type: Date, required: false },
    isActive: { type: Boolean, default: false },
});

export default mongoose.model("Membership", membershipSchema);
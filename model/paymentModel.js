import mongoose from "mongoose";

const paymentModel = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    paymentMethod: { type: String, required: true },
    amount: { type: Number, required: true },
    paymentDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false },
    
})

export default mongoose.model("Payment", paymentModel);
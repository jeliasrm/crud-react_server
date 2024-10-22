import mongoose from "mongoose";

export const productSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    description: { type: String, required: false },
    price: { type: Number, required: false },
    quantity: { type: Number, required: false },
    isActive: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model("Product", productSchema);
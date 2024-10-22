import mongose from 'mongoose';

const classSchema = new mongose.Schema({

    name: { type: String, required: true },
    description: { type: String, required: false },
    teacher: { type: mongose.Schema.Types.ObjectId, ref: "Coach", required: true },
    users: [{ type: mongose.Schema.Types.ObjectId, ref: "User", required: false }],
    schedule: { type: String, required: false },
    price: { type: Number, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    isActive: { type: Boolean, default: false },
    });

export default mongose.model("Class", classSchema);
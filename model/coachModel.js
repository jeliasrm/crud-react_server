import mongose from 'mongoose';

const coachSchema = new mongose.Schema({
    
        name: { type: String, required: true },
        lastName: { type: String, required: false },
        birth: { type: Date, required: false },
        speciality: { type: String, required: false },

});

export default mongose.model("Coach", coachSchema);
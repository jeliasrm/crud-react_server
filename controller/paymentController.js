import Payment from '../model/paymentModel.js';

export const createPayment = async (req, res) => {
    try {
        const newPayment = new Payment(req.body);
        const savedPayment = await newPayment.save();
        res.status(200).json({ message: "Payment created successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        if (!payments || payments.length === 0) {
            return res.status(400).json({ message: "No payments found." });
        }
        res.status(200).json(payments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const updatePayment = async (req, res) => {
    try {
        const updatedPayment = await Payment.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPayment) {
            return res.status(404).json({ message: "Payment not found." });
        }
        res.status(200).json({ message: "Payment updated successfully." });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const deletePayment = async (req, res) => {
    try {
        const deletedPayment = await Payment.findByIdAndDelete(req.params.id);
        if (!deletedPayment) {
            return res.status(404).json({ message: "Payment not found." });
        }
        res.status(200).json({ message: "Payment deleted successfully." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

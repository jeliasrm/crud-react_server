import e from 'express';

import {
    createPayment,
    getAllPayments,
    updatePayment,
    deletePayment
} from '../controller/paymentController.js';

const router = e.Router();

router.post('/payment', createPayment);
router.get('/payments', getAllPayments);
router.put('/update/payment/:id', updatePayment);
router.delete('/delete/payment/:id', deletePayment);

export default router;
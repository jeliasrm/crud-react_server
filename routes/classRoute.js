import e from 'express';

import {
    createdClass,
    getAllClasses,
    updateClass,
    deleteClass
} from '../controller/classController.js';

const router = e.Router();

router.post('/class', createdClass);
router.get('/classes', getAllClasses);
router.put('/update/class/:id', updateClass);
router.delete('/delete/class/:id', deleteClass);

export default router;
import e from 'express';

import {
    createdCoach,
    getAllCoaches,
    updateCoach,
    deleteCoach
} from '../controller/coachController.js';

const router = e.Router();

router.post('/coach', createdCoach);
router.get('/coaches', getAllCoaches);
router.put('/update/coach/:id', updateCoach);
router.delete('/delete/coach/:id', deleteCoach);

export default router;
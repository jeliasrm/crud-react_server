import e from "express";

import {
    createdMembership,
    getAllMemberships,
    updateMembership,
    deleteMembership,
} from "../controller/membershipController.js";

const router = e.Router();

router.post("/membership", createdMembership);
router.get("/memberships", getAllMemberships);
router.put("/update/membership/:id", updateMembership);
router.delete("/delete/membership/:id", deleteMembership);

export default router;
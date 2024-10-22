import e from "express";

import {
    getUserById,
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
} from "../controller/userController.js";

const router = e.Router();

router.get("/user/:id", getUserById);
router.get("/users", getAllUsers);
router.post("/user", createUser);
router.put("/update/user/:id", updateUser);
router.delete("/delete/user/:id", deleteUser);

export default router;
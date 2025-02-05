import express from "express";
import { getUserById, createUser, updateUser, deleteUser } from "../../controllers/userControllers.js";

const router = express.Router();

// ✅ Fix: Use Express middleware-style async functions
router.get("/:id", async (req, res, next) => {
    try {
        await getUserById(req, res);
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req, res, next) => {
    try {
        await createUser(req, res);
    } catch (error) {
        next(error);
    }
});

router.put("/:id", async (req, res, next) => {
    try {
        await updateUser(req, res);
    } catch (error) {
        next(error);
    }
});

router.delete("/:id", async (req, res, next) => {
    try {
        await deleteUser(req, res);
    } catch (error) {
        next(error);
    }
});

export { router as userRouter };
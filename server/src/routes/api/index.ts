import { userRouter } from "./userRoutes.js"; // ✅ Correct Import
import express from "express";

const router = express.Router();

router.use("/users", userRouter);

export { router as apiRouter };
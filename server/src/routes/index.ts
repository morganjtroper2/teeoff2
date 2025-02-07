import express from "express";
import { userRouter } from "./api/userRoutes.js";

const router = express.Router();

router.use("/users", userRouter);

export { router as apiRouter };
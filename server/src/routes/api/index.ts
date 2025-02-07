import { userRouter } from "./userRoutes.js";
import express from "express";

const router = express.Router();

router.use("/users", userRouter);

export { router as apiRouter };
import { Router, Request, Response, NextFunction } from "express";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const login = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const passwordIsValid = await bcrypt.compare(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Invalid password" });
        }

        if (!("id" in user)) {
            return res.status(500).json({ message: "User ID missing in database" });
        }

        const secretKey = process.env.JWT_SECRET_KEY || "";
        const token = jwt.sign(
            { username: user.username, id: (user as any).id },
            secretKey,
            { expiresIn: "1h" }
        );

        return res.json({ token });
    } catch (error) {
        next(error);
    }
};

const router = Router();

// ✅ Fix: Use Express middleware-style function instead of direct call
router.post("/login", async (req, res, next) => {
    try {
        await login(req, res, next);
    } catch (error) {
        next(error);
    }
});

export { router as authRouter };
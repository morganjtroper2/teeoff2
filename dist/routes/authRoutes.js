"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRouter = exports.login = void 0;
const express_1 = require("express");
const user_js_1 = require("../models/user.js");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const user = await user_js_1.User.findOne({ where: { username } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const passwordIsValid = await bcrypt_1.default.compare(password, user.password);
        if (!passwordIsValid) {
            return res.status(401).json({ message: "Invalid password" });
        }
        if (!("id" in user)) {
            return res.status(500).json({ message: "User ID missing in database" });
        }
        const secretKey = process.env.JWT_SECRET_KEY || "";
        const token = jsonwebtoken_1.default.sign({ username: user.username, id: user.id }, secretKey, { expiresIn: "1h" });
        return res.json({ token });
    }
    catch (error) {
        next(error);
    }
};
exports.login = login;
const router = (0, express_1.Router)();
exports.authRouter = router;

router.post("/login", async (req, res, next) => {
    try {
        await (0, exports.login)(req, res, next);
    }
    catch (error) {
        next(error);
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const SECRET_KEY = "your-secret-key"; // Hardcoded for now
const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await user_1.User.findOne({ where: { username } });
    if (!user)
        return res.status(404).json({ message: "User not found" });
    const passwordIsValid = await bcrypt_1.default.compare(password, user.password);
    if (!passwordIsValid)
        return res.status(401).json({ message: "Invalid password" });
    const token = jsonwebtoken_1.default.sign({ username }, SECRET_KEY, { expiresIn: "1h" });
    res.json({ token });
};
exports.login = login;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = void 0;
const user_js_1 = require("../models/user.js");

const getUserById = async (req, res) => {
    try {
        const user = await user_js_1.User.findByPk(req.params.id, {
            attributes: { exclude: ["password"] },
        });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};
exports.getUserById = getUserById;
// ✅ Add missing functions
const createUser = async (req, res) => { };
exports.createUser = createUser;
const updateUser = async (req, res) => { };
exports.updateUser = updateUser;
const deleteUser = async (req, res) => { };
exports.deleteUser = deleteUser;

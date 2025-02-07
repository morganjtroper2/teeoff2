"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const userControllers_js_1 = require("../../controllers/userControllers.js");
const router = express_1.default.Router();
exports.userRouter = router;

router.get("/:id", async (req, res, next) => {
    try {
        await (0, userControllers_js_1.getUserById)(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.post("/", async (req, res, next) => {
    try {
        await (0, userControllers_js_1.createUser)(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.put("/:id", async (req, res, next) => {
    try {
        await (0, userControllers_js_1.updateUser)(req, res);
    }
    catch (error) {
        next(error);
    }
});
router.delete("/:id", async (req, res, next) => {
    try {
        await (0, userControllers_js_1.deleteUser)(req, res);
    }
    catch (error) {
        next(error);
    }
});

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const bcrypt_1 = __importDefault(require("bcrypt"));
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
class User extends sequelize_1.Model {
    username;
    password;
    async setPassword(password) {
        const saltRounds = 10;
        this.password = await bcrypt_1.default.hash(password, saltRounds);
    }
    async validPassword(password) {
        return await bcrypt_1.default.compare(password, this.password);
    }
}
exports.User = User;
User.init({
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: "users",
    sequelize,
    hooks: {
        beforeCreate: async (user) => {
            await user.setPassword(user.password);
        },
    },
});

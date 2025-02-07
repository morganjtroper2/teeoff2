import { DataTypes, Sequelize, Model } from "sequelize";
import bcrypt from "bcrypt";

const sequelize = new Sequelize("sqlite::memory:");

export class User extends Model {
  public username!: string;
  public password!: string;

  async setPassword(password: string) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(password, saltRounds);
  }

  async validPassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}

User.init(
  {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "users",
    sequelize,
    hooks: {
      beforeCreate: async (user: User) => {
        await user.setPassword(user.password);
      },
    },
  }
);
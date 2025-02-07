import { Request, Response } from "express";
import { User } from "../models/user.js";

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["password"] },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(user);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Add missing functions
export const createUser = async (req: Request, res: Response) => { /*...*/ };
export const updateUser = async (req: Request, res: Response) => { /*...*/ };
export const deleteUser = async (req: Request, res: Response) => { /*...*/ };
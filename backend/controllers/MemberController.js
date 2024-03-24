import memberModel from "../models/memberModel.js";
import { issueJWT } from "../helpers/jwt.js";
import { comparePassword, hashPassword } from "../middleware/passwordHasher.js";

export const getAllMembers = async (req, res, next) => {
    try {
        const members = await memberModel.find();
        res.status(200).json(members);
    } catch (error) {
        next(error);
    }
}

export const loginMember = async (req, res, next) => {
    try {
        const { email, password} = req.body;
        const searchEmail = await memberModel.findOne({ email: email });
        const searchPassword = await memberModel.findOne({ password: password });
        const passwordMatch = await comparePassword(password, searchEmail.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
        res.status(200).json({ message: "Login successful" });     
    } catch (error) {
        next(error)
    }
}

export const createMember = async (req, res, next) => {
    try {
      req.body.password = await hashPassword(req.body.password);
      const newUser = await memberModel.create(req.body);
      res.status(200).json({ message: "User created!", user: newUser });
    } catch (err) {
      err.status = 404;
      next(err);
    }
  };
import memberModel from "../models/memberModel.js";

export const loginMember = async (req, res, next) => {
    const { email, password} = req.body;
    const searchEmail = await memberModel.findOne({ email: email });
    const searchPassword = await memberModel.findOne({ password: password });
    if (searchEmail && searchPassword) {
        res.status(200).json({ message: "Login successful" });
    }
}


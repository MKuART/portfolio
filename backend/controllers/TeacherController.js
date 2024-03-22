import { issueJWT } from "../helpers/jwt.js";
import { comparePassword, hashPassword } from "../middleware/passwordHasher.js";
import studentModel from "../models/studentModel.js";
import teacherModel from "../models/teacherModel.js";


export const getAllTeachers = async (req, res, next) => {
  try {
    res.status(200).json(await teacherModel.find());
  } catch (err) {
    err.status = 402;
    next(err);
  }
};

export const createTeacher = async (req, res, next) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    const newUser = await teacherModel.create(req.body);
    res.status(200).json({ message: "User created!", user: newUser });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

export const findUser = async (req, res, next) => {
  const foundUser = teacherModel.findById(req.body._id).populate('courses', 'teacher', 'grades');
  try {
    res.status(200).json({ message: foundUser });
  } catch (err) {
    err.status = 402;
    next(err);
  }
};

export const loginTeacher = async (req, res, next) => {
  try {
    
    const { email, password } = req.body;
    const searchEmail = await teacherModel.findOne({ email });
    
    if (!searchEmail) {
      return res.status(404).send("Email not found!");
    }
    
    const passwordMatch = await comparePassword(password, searchEmail.password);
    if (!passwordMatch) {
      return res.status(404).send("Password doesnt match!");
    }
    const token = issueJWT(searchEmail);
    res.cookie("jwt", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
    });
    res.status(200).json({ message: "Login successful" });
  } catch (err) {
    err.status = 415;
    next(err);
  }
};

export const logoutTeacher = async (req, res, next) => {
  try {
    res
      .clearCookie("jwt", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .send("User logged out!");
  } catch (err) {
    res.status(404).send({ message: "Error happened" });
  }
};


export const checkCookieForTeacher = async (req ,res ,next) => {
  const cookie = req.user.id;
  // Fürs Frontend
  const student = await studentModel.findOne({cookie});
  if(student){
    const error = new Error("No Teacher!")
    console.log(error);
    next(error);
  }
  // Fürs Frontend
  try{
    if(!cookie){
      return res.status(401).send({message: "Cookien not found!"})
    }
   return res.status(200).send({message: "Cookie sent!"})
  }catch(error){
    next(error)
  }
}

export const teacherDeleter = async (req, res, next) => {
  const deletedUser = await teacherModel.findByIdAndDelete(req.user.id);
  try {
    res
      .clearCookie("jwt", {
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .status(200)
      .json({ message: "User deleted!", deleted: deletedUser });
  } catch (err) {
    err.status = 402;
    next(err);
  }
};


export const getDataForTeacher = async(req, res, next) => {
  const userId = req.user.id;
  const search = await teacherModel.findOne({ _id: userId });
  res.status(200).send({ search });
}
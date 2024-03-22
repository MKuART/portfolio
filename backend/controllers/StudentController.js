import { issueJWT } from "../helpers/jwt.js";
import { comparePassword, hashPassword } from "../middleware/passwordHasher.js";
import studentModel from "../models/studentModel.js";
import teacherModel from "../models/teacherModel.js";
import coursesModel from "../models/coursesModel.js";

export const getAllstudents = async (req, res, next) => {
  try {
    res.status(200).json(await studentModel.find());
  } catch (err) {
    err.status = 402;
    next(err);
  }
};

export const createStudent = async (req, res, next) => {
  try {
    req.body.password = await hashPassword(req.body.password);
    const newUser = await studentModel.create(req.body);
    res.status(200).json({ message: "User created!", user: newUser });
  } catch (err) {
    err.status = 404;
    next(err);
  }
};

export const findStudent = async (req, res, next) => {
  const foundUser = studentModel.findById(req.body._id).populate('courses', 'teacher', 'grades');
  try {
    res.status(200).json({ message: foundUser });
  } catch (err) {
    err.status = 402;
    next(err);
  }
};

export const loginStudent = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    
    const searchEmail = await studentModel.findOne({ email });
    
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

export const logoutStudent = async (req, res, next) => {
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

export const studentDeleter = async (req, res, next) => {
  const deletedUser = await studentModel.findByIdAndDelete(req.user.id);
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


export const checkCookie = async (req ,res ,next) => {
  const cookie = req.user.id;
  const teacher = await teacherModel.findOne({cookie});
  if(teacher){
    const error = new Error("No Teacher!")
    next(error);
  }
  try{
    if(!cookie){
      return res.status(401).send({message: "Cookien not found!"})
    }
   return res.status(200).send({message: "Cookie sent!"})
  }catch(error){
    next(error)
  }
}

export const getDataForStudent = async(req, res, next) => {
  const userId = req.user.id;
  const search = await studentModel.findOne({ _id: userId });
  res.status(200).send({ search });
}

export const updateStudent = async (req, res, next) => {
  const { teacher, courses } = req.body;
  try {
    const updatedStudent = await studentModel.findByIdAndUpdate(
      req.params.id,
      { $addToSet: { courses: courses, teacher: teacher } },
      { new: true, runValidators: true }
    );

    await teacherModel.updateMany(
      { _id: { $in: teacher } },
      { $addToSet: { students: req.params.id } }
    );

    await coursesModel.updateMany(
      { _id: { $in: courses } },
      { $addToSet: { students: req.params.id } }
    );

    res.json(updatedStudent);
  } catch (err) {
    next(err);
  }
}

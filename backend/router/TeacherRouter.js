import express from "express";
import { studentsValidator } from "../middleware/studentsValidator.js";
import { validateRequest } from "../middleware/validator.js";
import { checkCookieForTeacher, createTeacher, getAllTeachers, getDataForTeacher, loginTeacher, logoutTeacher, teacherDeleter } from "../controllers/TeacherController.js";
import { verifyToken } from "../helpers/jwt.js";
import { checkCookie } from "../controllers/StudentController.js";

const router = express.Router()

router
.route("/")
.get( getAllTeachers )
.post( validateRequest, studentsValidator, createTeacher )
.delete(verifyToken, teacherDeleter )

router
.route("/login")
.post( loginTeacher )

router
.route("/logout")
.post( logoutTeacher )

router
.route("/checkCookie")
.get(verifyToken, checkCookieForTeacher)

router
.route("/profile")
.get(verifyToken, getDataForTeacher)



export default router;
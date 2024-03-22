import express from "express";
import { studentsValidator } from "../middleware/studentsValidator.js";
import { validateRequest } from "../middleware/validator.js";
import { checkCookie, createStudent, getAllstudents, getDataForStudent, loginStudent, logoutStudent, studentDeleter, updateStudent } from "../controllers/StudentController.js";
import { verifyToken } from "../helpers/jwt.js";

const router = express.Router()

router
.route("/")
.get( getAllstudents )
.post( validateRequest, studentsValidator,  createStudent )
.delete(verifyToken, studentDeleter )

router
.route("/:id")
.patch(updateStudent)

router
.route("/login")
.post(loginStudent )

router
.route("/logout")
.post( logoutStudent )

router
.route("/profile")
.get(verifyToken, getDataForStudent)

router
.route("/checkCookie")
.get(verifyToken, checkCookie)

export default router;
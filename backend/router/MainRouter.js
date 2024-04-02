import express from "express";
import ProjectRouter from "./ProjectRouter.js";
import StudentRouter from "./StudentRouter.js";
import TeacherRouter from "./TeacherRouter.js";
import MemberRouter from './MemberRouter.js';

const router = express.Router()

router
.use("/student", StudentRouter)
.use("/teacher", TeacherRouter)

.use('/member', MemberRouter)
.use('/project', ProjectRouter)

export default router;
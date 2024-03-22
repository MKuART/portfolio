import express from "express"

import StudentRouter from "./StudentRouter.js"
import TeacherRouter from "./TeacherRouter.js"

const router = express.Router()

router
.use("/student", StudentRouter)
.use("/teacher", TeacherRouter)

export default router;
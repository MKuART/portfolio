import express from "express";
import ProjectRouter from "./ProjectRouter.js";
import MemberRouter from './MemberRouter.js';
import CategoryRoute from "./CategoryRoute.js";

const router = express.Router()

router

.use('/member', MemberRouter)
.use('/project', ProjectRouter)
.use('/category', CategoryRoute)

export default router;
import { body } from 'express-validator';
import teacherSchema from '../models/teacherModel.js';
import studentSchema from '../models/studentModel.js';

export const studentsValidator = [
    body("fullName")
        .notEmpty()
        .withMessage("fullname required!")
        .trim()
        .isLength({ min: 6})
        .escape(),
    body("age")
        .notEmpty()
        .withMessage("age required!")
        .isInt({ min: 16})
        .withMessage("age must be 16 or higher")
        .trim()
        .escape(),
    body("email")
        .notEmpty()
        .withMessage("email required!")
        .trim()
        .isEmail()
        .withMessage("Email is not allowed!")
        .isLength({ min: 10, max: 15})
        .custom( async ( value, { req }) => {
            try {
                const existingEmailTeacher = await teacherSchema.findOne({ email: value });
                const existingEmailStudent = await studentSchema.findOne({ email: value });
                if( existingEmailStudent || existingEmailTeacher ) {
                    throw new Error("email already exist!")
                }
                
            } catch (error) {
                
            }
        })
        .normalizeEmail()
        .escape(),
    body("password")
        .notEmpty()
        .withMessage("password required!")
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()-+=]).*$/)
        .withMessage("Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character")
        .trim()
        .isStrongPassword()
        .withMessage("password is not strong enough!")
        .isLength({ min: 5 })
        .escape(),
    body("role")
    .optional()
    .isString()
    .escape()
        
]
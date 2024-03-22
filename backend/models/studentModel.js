import { Schema, model } from "mongoose";

const studentSchema = new Schema(
  {
    fullname: { type: String, required: true },
    age: Number,
    role: {
      type: String,
      enum: ['User', 'Admin'],
      default: 'User'
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    teacher: [{ type: Schema.Types.ObjectId, ref: 'Teacher'}],
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
    grade:[{ type: Schema.Types.ObjectId, ref: 'Course'}]
  },
  { versionKey: false, strictQuery: true}
);

studentSchema.methods.toJSON = function() {
  const student = this.toObject();
  delete student.password;
  delete student._id;
  delete student.role
  return student;
}
export default model("Student", studentSchema, "students")
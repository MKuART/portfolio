import { Schema, model } from "mongoose";

const teacherSchema = new Schema(
  {
    fullname: { type: String, required: true },
    age: Number,
    role: {
      type: String,
      enum: ['User', 'Admin'],
      default: 'Admin'
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    courses: [{ type: Schema.Types.ObjectId, ref: 'Course'}],
    students: [{ type: Schema.Types.ObjectId, ref: 'Student'}]
  },
  { versionKey: false, strictQuery: true}
);

teacherSchema.methods.toJSON = function() {
  const teacher = this.toObject();
  delete teacher.password;
  delete teacher._id;
  delete teacher.role
  return teacher;
}

export default model("Teacher", teacherSchema, "teachers")
import { Schema, model } from "mongoose";

const courseSchema = new Schema(
  {
    fullname: { type: String, required: true},
    teacher: [{ type: Schema.Types.ObjectId, ref: 'Teacher'}],
    grade:[{ type: Schema.Types.ObjectId, ref: 'Course'}],
    participants: [{ type: Schema.Types.ObjectId, ref: 'Student'}]
  },
  { versionKey: false, strictQuery: true}
);

export default model("Course", courseSchema, "courses")
import { Schema, model } from "mongoose";

const memberSchema = new Schema(
    {
        membername: { type: String, required: true},
        role: {
            type: String,
            enum: ['Admin', 'Member'],
            default: 'Member'
        },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true, unique: true}
    }
)

export default model('Member', memberSchema, 'members');
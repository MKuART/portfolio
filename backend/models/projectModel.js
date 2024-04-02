import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
    {
        name: { type: String },
        discription: { type: String },
        imageUrls: [String]
    },
    { strictQuery: true }
);

const ProjectModel = model('Project', projectSchema, 'projects');
export default ProjectModel;

import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        imageUrls: [ String ],
        categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
    },
    { strictQuery: true, versionKey: false }
);

const ProjectModel = model('Project', projectSchema, 'projects');
export default ProjectModel;


/**
 * [
  {
    "name": "MK-Ultra",
    "description": "blender Animation",
    "imageUrls": [
      "src/assets/mku/itteration35.png",
      "src/assets/mku/itteration018.png",
      "src/assets/mku/itteration027.png",
      "src/assets/mku/itteration.png"
    ]
  },
  {
    "name": "Retro Street Loop",
    "description": "blender Animation for Music",
    "imageUrls": [
      "src/assets/mku/itteration.png",
      "src/assets/mku/itteration018.png"
    ]
  },
  {
    "name": "Physiotherapie",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie02",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie03",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie04",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie05",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "src/assets/schachKugelBackground01.png",
      "src/assets/schachKugelBackground01.png"
    ]
  }
]
 */
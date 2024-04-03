import { Schema, model } from 'mongoose';

const projectSchema = new Schema(
    {
        name: { type: String },
        description: { type: String },
        imageUrls: [String]
    },
    { strictQuery: true }
);

const ProjectModel = model('Project', projectSchema, 'projects');
export default ProjectModel;


/**
 * [
  {
    "name": "MK-Ultra",
    "description": "blender Animation",
    "imageUrls": [
      "../assets/mku/itteration.png",
      "../assets/mku/itteration018.png"
    ]
  },
  {
    "name": "Retro Street Loop",
    "description": "blender Animation for Music",
    "imageUrls": [
      "../assets/mku/itteration.png",
      "../assets/mku/itteration018.png"
    ]
  },
  {
    "name": "Physiotherapie",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "../assets/schachKugelBackground01.png",
      "../assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie02",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "../assets/schachKugelBackground01.png",
      "../assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie03",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "../assets/schachKugelBackground01.png",
      "../assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie04",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "../assets/schachKugelBackground01.png",
      "../assets/schachKugelBackground01.png"
    ]
  },
  {
    "name": "Physiotherapie05",
    "description": "Design, Lorem ipsum quatschi la far taschi dalama",
    "imageUrls": [
      "../assets/schachKugelBackground01.png",
      "../assets/schachKugelBackground01.png"
    ]
  }
]
 */
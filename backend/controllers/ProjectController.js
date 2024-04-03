import ProjectModel from '../models/projectModel.js';

/*
import multer from 'multer';
const upload = multer({ dest: '../assets/mku/' });
const uploadImages = upload.array('images', 5);

*/ 
export const getAllProjects = async (req, res, next) => {
    res.status(200).json(await ProjectModel.find());
}

export const createProject = async (req, res, next) => {
    try {
      const newProject = await ProjectModel.create({
        name: req.body.name,
        description: req.body.description,
        imageUrls: req.body.imageUrls 
      });
      res.status(200).json({ message: "Project created!", project: newProject });
    } catch (err) {
      console.error('Error creating project:', err);
      err.status = 404;
      next(err);
    }
  };
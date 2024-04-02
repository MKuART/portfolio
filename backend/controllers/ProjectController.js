import ProjectModel from '../models/projectModel.js';
import multer from 'multer';

// Speicherort für die hochgeladenen Bilder festlegen
const upload = multer({ dest: '../assets/mku/' });

// Middleware-Funktion, um die Bilder hochzuladen
const uploadImages = upload.array('images', 5); // Hier 'images' durch das Feld ersetzen, in dem die Bilder gesendet werden


export const getAllProjects = async (req, res, next) => {
    res.status(200).json(await ProjectModel.find());
}

export const createProject = async (req, res, next) => {
    try {
      // Erstelle das Projekt mit den lokalen Bildpfaden
      const newProject = await ProjectModel.create({
        name: req.body.name,
        description: req.body.description,
        imageUrls: req.body.imageUrls // Stelle sicher, dass imageUrls die lokalen Pfade zu den Bildern enthält
      });
  
      // Sende die Antwort mit dem erstellten Projekt
      res.status(200).json({ message: "Project created!", project: newProject });
    } catch (err) {
      console.error('Error creating project:', err);
      err.status = 404;
      next(err);
    }
  };
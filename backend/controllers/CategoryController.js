import CategoryModel from "../models/categoryModel.js";
import ProjectModel from "../models/projectModel.js"; 

export const getAllCategories = async (req, res, next) => {
    try {
      const categories = await CategoryModel.find().populate('projects');
      res.status(200).json(categories);
    } catch (error) {
      next(error);
      res.status(500).json({ message: error.message });
    }
};



export const addCategoryToProject = async (req, res, next) => {
  const { projectId } = req.params;
  const { categoryId } = req.body;

  try {
    // Suchen Sie das Projekt in der Datenbank anhand seiner ID
    const project = await ProjectModel.findById(projectId);

    // Überprüfen Sie, ob das Projekt gefunden wurde
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    // Suchen Sie die Kategorie anhand ihrer ID
    const category = await CategoryModel.findById(categoryId);

    // Überprüfen Sie, ob die Kategorie gefunden wurde
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Überprüfen Sie, ob das Projekt bereits in der Kategorie vorhanden ist
    if (category.projects.includes(projectId)) {
      return res.status(400).json({ message: 'Project already exists in the category' });
    }

    // Fügen Sie das Projekt zur Liste der Projekte in der Kategorie hinzu
    category.projects.push(projectId);

    // Fügen Sie die Kategorie zum Array der Kategorien des Projekts hinzu
    project.categories.push(categoryId);

    // Speichern Sie die aktualisierte Kategorie und das aktualisierte Projekt in der Datenbank
    await Promise.all([category.save(), project.save()]);

    // Senden Sie die aktualisierten Kategorie- und Projektobjekte als Antwort
    res.status(200).json({ category, project });
  } catch (error) {
    next(error);
    res.status(500).json({ message: error.message });
  }
}

export const createCategory = async (req, res, next) => {
  try {
    const newCategory = await CategoryModel.create({
      label: req.body.label,
 
    });
    res.status(200).json({ message: "Category created!", category: newCategory });
  } catch (err) {
    console.error('Error creating project:', err);
    err.status = 404;
    next(err);
  }
};
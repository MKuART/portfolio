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
    const project = await ProjectModel.findById(projectId);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    const category = await CategoryModel.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    if (!category.projects) {
      category.projects = [];
    }

    if (category.projects.includes(projectId)) {
      return res.status(400).json({ message: 'Project already exists in the category' });
    }

    category.projects.push(projectId);
   
    project.categories.push(categoryId);
   
    await Promise.all([category.save(), project.save()]);
   
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
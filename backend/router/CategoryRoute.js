import express from 'express';
import { addCategoryToProject, createCategory, getAllCategories } from '../controllers/CategoryController.js';

const router = express.Router();

router
    .route('/')
        .get( getAllCategories )
        .post( createCategory )
router
    .route('/:projectId')
        .patch( addCategoryToProject )

export default router;
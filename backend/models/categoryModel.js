import { Schema, model } from 'mongoose';
// info comming soon:D
const categorySchema = new Schema({
        label: { type: String, required: true },
        projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }]
    },
    { strictQuery: true, versionKey: false }
    );

const CategoryModel = model('Category', categorySchema, 'categories' );
export default CategoryModel;

/**
 * 
 *
{
    "label":"3D Animation"
}
PATCH:
{
  "categoryId": "66114f4a8d41a9c346c1d65f" 
}
 */
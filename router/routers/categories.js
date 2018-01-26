import { Router } from 'express';
import CategoryController from '../../controller/category-controller';

const router = Router();
const categoryCtrl = new CategoryController();

router.get('/', categoryCtrl.getAll);
router.get('/:categoryId', categoryCtrl.getCategoryByID);
router.post('/', categoryCtrl.addCategory);
router.delete('/:categoryId', categoryCtrl.deleteCategory);
router.put('/:categoryId',categoryCtrl.updateCategory);

export default router;
import {Router} from 'express';
import CategoryController from '../../controller/category-controller';

const router = Router();
const categoryCtrl = new CategoryController();

router.get('/', categoryCtrl.getAll);
router.get('/:id', categoryCtrl.getCategoryByID);
router.post('/', categoryCtrl.addCategory);
router.delete('/', categoryCtrl.deleteCategoty);
router.put('/',categoryCtrl.updateCategoty);

export default router;
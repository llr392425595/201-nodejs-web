import {Router} from 'express';
import ItemController from '../../controller/item-controller';


const router = Router();
const itemCtrl = new ItemController();

router.get('/', itemCtrl.getAll);
router.get('/:id', itemCtrl.getItemByID);
router.post('/', itemCtrl.addItem);
router.delete('/', itemCtrl.deleteItem);
router.put('/',itemCtrl.updateItem);

export default router;
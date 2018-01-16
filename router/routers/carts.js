import {Router} from 'express';
import CartController from '../../controller/cart-controller';

const router = Router();
const cartCtrl = new CartController();

router.get('/', cartCtrl.getAll);
router.get('/:id', cartCtrl.getCartByID);
router.post('/', cartCtrl.addCart);
router.delete('/', cartCtrl.deleteCart);
// router.put('/',cartCtrl.updateCart);

export default router;
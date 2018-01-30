import {Router} from 'express'
import CartController from '../../controller/cart-controller'
const router = Router();
const cartCtrl = new CartController();

router.get('/', cartCtrl.getAll);
router.get('/:cartId', cartCtrl.getCartById);
router.delete('/:cartId', cartCtrl.deleteCart);
router.post('/', cartCtrl.addCart);
router.put('/:cartId', cartCtrl.updateCart);

export default router;
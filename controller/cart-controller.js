import Cart from '../models/cart'
import statusCode from '../constant/statusCode'
export default class CartController {
    getAll(req, res, next) {
        Cart.find(function(err, carts) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.GET).json({ data: carts,count: carts.length})
        });
    }
    getCartByID(req,res,next) {
        const cartId = req.params.id;
        Cart.findById(cartId, function(err,cart){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.statusCode(statusCode.GET).json({ data: cart})
        })
    }
    addCart(req,res,next) {
        let cart = new Cart();
        cart.save(function(err,cart) {
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.CREATE).json({uri: `carts/${cart._id}`});
        });
    }
    deleteCart(req,res,next) {
        const data = req.body;
        Cart.findOneAndRemove({_id:data._id},function (err, cart){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.DELETE).json({uri: `carts/${cart._id}`});
        });
    }
    updateCart(req,res,next) {
        const data = req.body;
        Cart.update({_id:data._id},{ $set: data },function(err,cart){
            if (err) return res.status(statusCode.INTERNALSERVERERROR).json({error: err.message});
            res.status(statusCode.PUT).json({uri: `carts/${cart._id}`});
        });
    }
}

import Cart from '../models/cart'
import statusCode from '../constant/statusCode'

export default class CartController {
    getAll(req, res, next) {
        Cart.find(function(err, carts) {
            if (err) return next(err);
            res.status(statusCode.GET).json({ data: carts,count: carts.length})
        });
    }
    getCartByID(req,res,next) {
        const cartId = req.params.id;
        Cart.findById(cartId, function(err,cart){
            if (err) return next(err);
            if(!cart) return res.status(statusCode.NO_CONTENT).json({error: "没找到数据"}); 
            res.status(statusCode.GET).json({ data: cart})
        })
    }
    addCart(req,res,next) {
        let cart = new Cart();
        cart.save(function(err) {
            if (err) return next(err);
            res.status(statusCode.CREATE).json({ uri: `carts/${cart._id}` });
        });
    }
    deleteCart(req,res,next) {
        const data = req.body;
        Cart.findOneAndRemove({_id:data._id},function (err, cart){
            if (err) return next(err);
            if(!cart) return res.status(statusCode.NOT_FOUND).json({error: '没查到数据，删除失败！'});
            return res.status(statusCode.DELETE).json({uri: `carts/${cart._id}`});
        });
    }
    
    
}

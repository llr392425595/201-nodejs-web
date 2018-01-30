import Cart from '../models/cart'
import constant from '../constant/constant'

export default class CartController {
    getAll(req, res, next) {
        Cart.find({}, (err, carts) => {
            if (err) return next(err);
            res.status(constant.httpCode.OK).json({data: carts, count: carts.length})
        });
    }

    getCartById(req, res, next) {
        const cartId = req.params.cartId;
        Cart.findById(cartId, (err, cart) => {
            if (err) return next(err);
            if (!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
            res.status(constant.httpCode.OK).send(cart)
        })
    }

    addCart(req, res, next) {
        Cart.create(req.body, (err,cart)=>{
            if(err) return next(err);
            return res.status(constant.httpCode.CREATED).send({uri: `carts/${cart._id}`});
        })
    }

    deleteCart(req, res, next) {
        const cartId = req.params.cartId;
        Cart.findOneAndRemove(cartId, (err, cart) => {
            if (err) return next(err);
            if (!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.status(constant.httpCode.NO_CONTENT).send({uri: `carts/${cart._id}`});
        });
    }

    updateCart(req,res,next){
        const cartId = req.params.cartId;
        Cart.findByIdAndUpdate(cartId, req.body,(err,cart)=>{
            if(err) return next(err);
            if(!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.sendStatus(constant.httpCode.NO_CONTENT)
        })
    }
}

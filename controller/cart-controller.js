import Cart from '../models/cart'
import constant from '../constant/constant'

const mapItemToUri = (items) => {
    return items.map(({count, item}) => {
        return {uri: `items/${item}`, count};
    });
};

export default class CartController {
    getAll(req, res, next) {
        Cart.find({}, (err, docs) => {
            if (err) return next(err);
            let carts = docs.map((doc) => {
                let cart = doc.toJSON();
                cart.items = mapItemToUri(cart.items);
                return cart;
            });
            res.status(constant.httpCode.OK).json({data: carts, count: carts.length})
        });
    }

    getCartById(req, res, next) {
        const cartId = req.params.cartId;
        Cart.findById(cartId, (err, cart) => {
            if (err) return next(err);
            if (!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
            let data = cart.toJSON();
            let items = cart.items;
            data.items = mapItemToUri(items);

            res.status(constant.httpCode.OK).send(data)
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
        Cart.findOneAndRemove({_id:cartId}, (err, cart) => {
            if (err) return next(err);
            if (!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.status(constant.httpCode.NO_CONTENT).send({uri: `carts/${cart._id}`});
        });
    }

    updateCart(req,res,next){
        const cartId = req.params.cartId;
        Cart.findByIdAndUpdate({_id:cartId}, req.body,(err,cart)=>{
            if(err) return next(err);
            if(!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
            return res.sendStatus(constant.httpCode.NO_CONTENT)
        })
    }
}

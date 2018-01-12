const Cart = require('../models/Cart');
export default class CartController {
    getAll(req, res, next) {
        Cart.find().sort({'createdAt': -1}).exec(function(err, carts) {
            if (err) return res.status(500).json({error: err.message});
            res.json({ carts: carts})
        });
    }
    getCartByID(req,res,next) {
        const cartId = req.params.id;
        Cart.findById(cartId, function(err,cart){
            if (err) return res.status(500).json({error: err.message});
            res.json({ cart: cart})
        })
    }
    addCart(req,res,next) {
        let category = new Category();
        category.save(function(err) {
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '存储成功了！'
            });
        });
    }
    deleteCart(req,res,next) {
        const data = req.body;
        Cart.findOneAndRemove({_id:data._id},function (err, item){
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '删除成功了！'
            });
        });
    }
    updateCart(req,res,next) {
        const data = req.body;
        Cart.update({_id:data._id},{ $set: data },function(err,item){
            if (err) return res.status(500).json({error: err.message});
            res.json({
                message: '更新成功了！'
            });
        });
    }
}

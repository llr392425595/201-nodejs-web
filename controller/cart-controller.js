// import Cart from '../models/cart'
// import constant from '../constant/constant'
//
// export default class CartController {
//     getAll(req, res, next) {
//         Cart.find(function(err, carts) {
//             if (err) return next(err);
//             res.status(constant.httpCode.Ok).json({ data: carts,count: carts.length})
//         });
//     }
//     getCartByID(req,res,next) {
//         const cartId = req.params.id;
//         Cart.findById(cartId, function(err,cart){
//             if (err) return next(err);
//             if(!cart) return res.sendStatus(constant.httpCode.NOT_FOUND);
//             res.status(constant.httpCode.OK).send(cart)
//         })
//     }
//     addCart(req,res,next) {
//         let cart = new Cart({
//             products:[],
//             totalQty:0,
//             totalPrice:0
//         });
//         cart.save(function(err) {
//             if (err) return next(err);
//             res.status(constant.httpCode.CREATE).json({ uri: `carts/${cart._id}` });
//         });
//     }
//     deleteCart(req,res,next) {
//         const data = req.body;
//         Cart.findOneAndRemove({_id:data._id},function (err, cart){
//             if (err) return next(err);
//             if(!cart) return res.status(constant.httpCode.NOT_FOUND).json({error: '没查到数据，删除失败！'});
//             return res.status(constant.httpCode.DELETE).json({uri: `carts/${cart._id}`});
//         });
//     }
//     addOneItem(req,res,next){
//         let {newItem,cartId} = req.body;
//         Cart.findById(cartId,function(err,cart){
//             if(err) next(err);
//             cart.addProducts(newItem);
//             cart.save(function(err) {
//                 if (err) next(err);
//                 return res.status(constant.httpCode.PUT).end();
//             });
//         })
//     }
//     reduceOneItem(req,res,next){
//         let {itemId,cartId} = req.body;
//         Cart.findById(cartId,function(err,cart){
//             if(err) next(err);
//             let isRemoved = cart.reduceByOne(itemId);
//             console.log(isRemoved)
//             if(isRemoved){
//                 cart.save(function(err) {
//                     if (err) next(err);
//                     return res.status(constant.httpCode.PUT).end();
//                 });
//             }else{return res.status(constant.httpCode.NOT_FOUND).json({error:"此购物车无该商品"})}
//         })
//     }
//
//     removeProduct(req,res,next){
//         let {itemId,cartId} = req.body;
//         Cart.findById(cartId,function(err,cart){
//             if(err) next(err);
//             let isRemoved = cart.removeProduct(itemId);
//             if(isRemoved){
//                 cart.save(function(err) {
//                     if (err) next(err);
//                     return res.status(constant.httpCode.PUT).end();
//                 });
//             }else{return res.status(constant.httpCode.NOT_FOUND).json({error:"此购物车无该商品"})}
//         })
//     }
//
// }

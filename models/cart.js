// import mongoose from 'mongoose';
// const Schema = mongoose.Schema;
//
// const CartSchema = new Schema({
//     products: [{
//         title:{ type: String},
//         _id: { type: Schema.Types.ObjectId, ref: 'Item' },
//         price: { type: Number },
//         category_id: { type: Schema.Types.ObjectId, ref: 'Category' } ,
//         qty: {type: Number},
//         subTotalPrice:{type: Number}
//     }],
//     totalQty: {type: Number},
//     totalPrice: {type: Number},
// });
//
// CartSchema.methods = {
//     addProducts(newItem){
//         let storeItem = this.products[this.getProductIndexById(newItem._id)];
//         if (!storeItem) {
//             storeItem = this.products[this.products.length] = {_id: newItem._id, price: newItem.price, category_id:newItem.category_id, qty: 0, totalPrice: 0};
//         }
//         storeItem.qty++;
//         storeItem.subTotalPrice = storeItem.qty * storeItem.price;
//         //总的数量与金额
//         this.totalQty++;
//         this.totalPrice += storeItem.price;
//     },
//     reduceByOne(itemId){
//         let reduceItem = this.products[this.getProductIndexById(itemId)];
//         if(reduceItem){
//             reduceItem.qty --;
//             reduceItem.subTotalPrice -= reduceItem.price;
//             this.totalQty --;
//             this.totalPrice -= reduceItem.price
//             if (reduceItem.qty <= 0) {this.products.splice(this.getProductIndexById(itemId), 1);}
//             return true
//         }else return false
//     },
//     removeProduct(itemId){
//         let removedItem = this.products[this.getProductIndexById(itemId)];
//         if(removedItem){
//             this.totalQty -= removedItem.qty;
//             this.totalPrice -= removedItem.subTotalPrice;
//             this.products.splice(this.getProductIndexById(itemId), 1);
//             return true
//         }else return false
//     },
//     getProductIndexById(id){
//         return this.products.findIndex((e)=>(e._id.toString() === id))
//     }
// }
//
// module.exports = mongoose.model('Cart',CartSchema);
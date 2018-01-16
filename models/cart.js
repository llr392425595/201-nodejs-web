import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productsSchema = new mongoose.Schema({
    item:{ type: Schema.Types.ObjectId, ref: 'Item' },
    quantity: {type: Number}
})

const CartSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'User' },
    products: [productsSchema]
});

module.exports = mongoose.model('Cart',CartSchema)
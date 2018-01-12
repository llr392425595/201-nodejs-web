import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const ItemsSchema = new Schema({
    title: { type: String, required: true },
    price: { type: String, required: true},
    category_id: { type: String, required: true},
    carts: [{ type: Schema.Types.ObjectId, ref: 'Cart' }]
});

module.exports = mongoose.model('Item',ItemsSchema)